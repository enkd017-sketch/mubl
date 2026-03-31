import { useEffect, useRef } from "react";

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

const MAIN_DENSITY = 0.000055;
const AMBIENT_DENSITY = 0.000025;
const POINTER_RADIUS = 160;
const RETURN_SPEED = 0.015;
const DAMPING = 0.94;

const randomBetween = (min: number, max: number) => Math.random() * (max - min) + min;

export default function ParticleEffectForHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mainParticlesRef = useRef<Particle[]>([]);
  const ambientParticlesRef = useRef<AmbientParticle[]>([]);
  const frameIdRef = useRef<number>();
  const pointerRef = useRef({ x: -1000, y: -1000, active: false });
  const sizeRef = useRef({ width: 0, height: 0, dpr: 1 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const rebuildParticles = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;

      sizeRef.current = { width, height, dpr };

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      const mainCount = Math.floor(width * height * MAIN_DENSITY);
      const ambientCount = Math.floor(width * height * AMBIENT_DENSITY);

      mainParticlesRef.current = Array.from({ length: mainCount }, () => {
        const x = Math.random() * width;
        const y = Math.random() * height;

        return {
          x,
          y,
          originX: x,
          originY: y,
          vx: 0,
          vy: 0,
          size: randomBetween(0.8, 2.2),
          tint: Math.random() > 0.88 ? "blue" : "white",
          drift: Math.random() * Math.PI * 2,
        };
      });

      ambientParticlesRef.current = Array.from({ length: ambientCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: randomBetween(-0.06, 0.06),
        vy: randomBetween(-0.06, 0.06),
        size: randomBetween(0.5, 1.4),
        alpha: randomBetween(0.08, 0.3),
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const render = (time: number) => {
      const context = canvas.getContext("2d");
      if (!context) return;

      const { width, height, dpr } = sizeRef.current;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      context.clearRect(0, 0, width, height);

      const coreGlow = context.createRadialGradient(
        width * 0.52,
        height * 0.2,
        0,
        width * 0.52,
        height * 0.2,
        Math.max(width, height) * 0.65,
      );
      coreGlow.addColorStop(0, "rgba(30, 110, 255, 0.18)");
      coreGlow.addColorStop(0.45, "rgba(17, 66, 170, 0.08)");
      coreGlow.addColorStop(1, "rgba(4, 8, 20, 0)");
      context.fillStyle = coreGlow;
      context.fillRect(0, 0, width, height);

      const edgeGlow = context.createRadialGradient(
        width * 0.18,
        height * 0.85,
        0,
        width * 0.18,
        height * 0.85,
        width * 0.5,
      );
      edgeGlow.addColorStop(0, "rgba(61, 140, 255, 0.08)");
      edgeGlow.addColorStop(1, "rgba(2, 8, 24, 0)");
      context.fillStyle = edgeGlow;
      context.fillRect(0, 0, width, height);

      for (const particle of ambientParticlesRef.current) {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0) particle.x = width;
        if (particle.x > width) particle.x = 0;
        if (particle.y < 0) particle.y = height;
        if (particle.y > height) particle.y = 0;

        const twinkle = Math.sin(time * 0.0014 + particle.phase) * 0.5 + 0.5;
        context.globalAlpha = particle.alpha * (0.35 + twinkle * 0.65);
        context.fillStyle = "#dbeafe";
        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fill();
      }

      context.globalAlpha = 1;

      const { x: pointerX, y: pointerY, active } = pointerRef.current;

      for (const particle of mainParticlesRef.current) {
        const subtleOscillation = Math.sin(time * 0.0008 + particle.drift) * 0.12;
        particle.vy += subtleOscillation * 0.01;

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
            ? `rgba(59, 130, 246, ${Math.min(0.5 + speed * 0.25, 0.95)})`
            : `rgba(255, 255, 255, ${Math.min(0.18 + speed * 0.16, 0.85)})`;
        context.fill();
      }

      if (!mediaQuery.matches) {
        frameIdRef.current = window.requestAnimationFrame(render);
      }
    };

    const handlePointerMove = (event: MouseEvent) => {
      pointerRef.current = { x: event.clientX, y: event.clientY, active: true };
    };

    const handlePointerLeave = () => {
      pointerRef.current.active = false;
    };

    const start = () => {
      rebuildParticles();
      cancelAnimationFrame(frameIdRef.current ?? 0);
      frameIdRef.current = window.requestAnimationFrame(render);
    };

    start();
    window.addEventListener("resize", rebuildParticles);
    window.addEventListener("mousemove", handlePointerMove);
    window.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      window.removeEventListener("resize", rebuildParticles);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("mouseleave", handlePointerLeave);
      cancelAnimationFrame(frameIdRef.current ?? 0);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.16),transparent_42%),linear-gradient(180deg,rgba(3,10,28,0.96),rgba(5,10,22,1))]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/20 to-transparent" />
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
