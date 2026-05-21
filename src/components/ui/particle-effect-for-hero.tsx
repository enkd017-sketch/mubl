import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  size: number;
  tint: "blue" | "white";
  drift: number;
}

interface AmbientParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  phase: number;
}

interface ParticleEffectForHeroProps {
  className?: string;
  scope?: "viewport" | "container";
  intensity?: "low" | "medium";
}

const DENSITY_PRESETS = {
  low: { main: 0.00005, ambient: 0.000024 },
  medium: { main: 0.000082, ambient: 0.00004 },
} as const;

const POINTER_RADIUS = 170;
const RETURN_SPEED = 0.016;
const DAMPING = 0.94;

const randomBetween = (min: number, max: number) => Math.random() * (max - min) + min;

export default function ParticleEffectForHero({
  className,
  scope = "container",
  intensity = "medium",
}: ParticleEffectForHeroProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== "light";
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const ambientParticlesRef = useRef<AmbientParticle[]>([]);
  const frameIdRef = useRef<number>();
  const pointerRef = useRef({ x: -1000, y: -1000, active: false });
  const sizeRef = useRef({ width: 0, height: 0, dpr: 1 });

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const density = DENSITY_PRESETS[intensity];
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const ambientColor = isDark ? "#dbeafe" : "#64748b";
    const mainBlueBase = isDark ? "37, 99, 235" : "29, 78, 216";
    const mainNeutralBase = isDark ? "255, 255, 255" : "71, 85, 105";

    const rebuildParticles = () => {
      const rect = container.getBoundingClientRect();
      const width = Math.max(rect.width, 1);
      const height = Math.max(rect.height, 1);
      const dpr = window.devicePixelRatio || 1;

      sizeRef.current = { width, height, dpr };

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      const mainCount = Math.floor(width * height * density.main);
      const ambientCount = Math.floor(width * height * density.ambient);

      particlesRef.current = Array.from({ length: mainCount }, () => {
        const x = Math.random() * width;
        const y = Math.random() * height;

        return {
          x,
          y,
          originX: x,
          originY: y,
          vx: 0,
          vy: 0,
          size: randomBetween(1.7, 3.8),
          tint: Math.random() > 0.84 ? "blue" : "white",
          drift: Math.random() * Math.PI * 2,
        };
      });

      ambientParticlesRef.current = Array.from({ length: ambientCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: randomBetween(-0.05, 0.05),
        vy: randomBetween(-0.05, 0.05),
        size: randomBetween(0.9, 2),
        alpha: randomBetween(0.08, 0.28),
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const updatePointer = (clientX: number, clientY: number) => {
      const rect = container.getBoundingClientRect();
      const inside =
        clientX >= rect.left &&
        clientX <= rect.right &&
        clientY >= rect.top &&
        clientY <= rect.bottom;

      if (!inside) {
        pointerRef.current.active = false;
        return;
      }

      pointerRef.current = {
        x: clientX - rect.left,
        y: clientY - rect.top,
        active: true,
      };
    };

    const render = (time: number) => {
      const context = canvas.getContext("2d");
      if (!context) return;

      const { width, height, dpr } = sizeRef.current;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      context.clearRect(0, 0, width, height);

      const primaryGlow = context.createRadialGradient(
        width * 0.7,
        height * 0.18,
        0,
        width * 0.7,
        height * 0.18,
        Math.max(width, height) * 0.52,
      );
      primaryGlow.addColorStop(0, "rgba(37, 99, 235, 0.22)");
      primaryGlow.addColorStop(0.45, "rgba(29, 78, 216, 0.08)");
      primaryGlow.addColorStop(1, "rgba(15, 23, 42, 0)");
      context.fillStyle = primaryGlow;
      context.fillRect(0, 0, width, height);

      const secondaryGlow = context.createRadialGradient(
        width * 0.12,
        height * 0.86,
        0,
        width * 0.12,
        height * 0.86,
        width * 0.48,
      );
      secondaryGlow.addColorStop(0, "rgba(96, 165, 250, 0.12)");
      secondaryGlow.addColorStop(1, "rgba(37, 99, 235, 0)");
      context.fillStyle = secondaryGlow;
      context.fillRect(0, 0, width, height);

      for (const particle of ambientParticlesRef.current) {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0) particle.x = width;
        if (particle.x > width) particle.x = 0;
        if (particle.y < 0) particle.y = height;
        if (particle.y > height) particle.y = 0;

        const twinkle = Math.sin(time * 0.0015 + particle.phase) * 0.5 + 0.5;
        context.globalAlpha = particle.alpha * (0.35 + twinkle * 0.65);
        context.fillStyle = ambientColor;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fill();
      }

      context.globalAlpha = 1;

      const { x: pointerX, y: pointerY, active } = pointerRef.current;

      for (const particle of particlesRef.current) {
        const oscillation = Math.sin(time * 0.0008 + particle.drift) * 0.12;
        particle.vy += oscillation * 0.01;

        if (active) {
          const dx = particle.x - pointerX;
          const dy = particle.y - pointerY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance > 0 && distance < POINTER_RADIUS) {
            const strength = (POINTER_RADIUS - distance) / POINTER_RADIUS;
            particle.vx += (dx / distance) * strength * 0.55;
            particle.vy += (dy / distance) * strength * 0.55;
          }
        }

        particle.vx += (particle.originX - particle.x) * RETURN_SPEED;
        particle.vy += (particle.originY - particle.y) * RETURN_SPEED;
        particle.vx *= DAMPING;
        particle.vy *= DAMPING;
        particle.x += particle.vx;
        particle.y += particle.vy;

        const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fillStyle =
          particle.tint === "blue"
            ? `rgba(${mainBlueBase}, ${Math.min(0.44 + speed * 0.2, 0.86)})`
            : `rgba(${mainNeutralBase}, ${Math.min(0.18 + speed * 0.14, isDark ? 0.62 : 0.72)})`;
        context.fill();
      }

      if (!mediaQuery.matches && !paused) {
        frameIdRef.current = window.requestAnimationFrame(render);
      }
    };

    let paused = false;
    let inView = true;

    const pause = () => {
      paused = true;
      cancelAnimationFrame(frameIdRef.current ?? 0);
    };

    const resume = () => {
      if (!paused || mediaQuery.matches || !inView || document.hidden) return;
      paused = false;
      frameIdRef.current = window.requestAnimationFrame(render);
    };

    const handlePointerMove = (event: MouseEvent) => {
      updatePointer(event.clientX, event.clientY);
    };

    const handlePointerLeave = () => {
      pointerRef.current.active = false;
    };

    const start = () => {
      rebuildParticles();
      cancelAnimationFrame(frameIdRef.current ?? 0);
      frameIdRef.current = window.requestAnimationFrame(render);
    };

    const resizeObserver = new ResizeObserver(() => {
      rebuildParticles();
      if (mediaQuery.matches) {
        render(performance.now());
      }
    });

    // Pause the loop while the hero is offscreen or the tab is hidden.
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        inView ? resume() : pause();
      },
      { threshold: 0 },
    );

    const handleVisibility = () => {
      document.hidden ? pause() : resume();
    };

    resizeObserver.observe(container);
    intersectionObserver.observe(container);
    document.addEventListener("visibilitychange", handleVisibility);
    start();
    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    window.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("mouseleave", handlePointerLeave);
      cancelAnimationFrame(frameIdRef.current ?? 0);
    };
  }, [intensity, isDark]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        scope === "viewport"
          ? "pointer-events-none fixed inset-0 -z-10 overflow-hidden"
          : "pointer-events-none absolute inset-0 z-0 overflow-hidden",
        className,
      )}
    >
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
