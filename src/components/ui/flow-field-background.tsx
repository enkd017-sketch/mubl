import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface NeuralBackgroundProps {
  className?: string;
  color?: string;
  trailOpacity?: number;
  particleCount?: number;
  speed?: number;
}

export default function NeuralBackground({
  className,
  color = "#6366f1",
  trailOpacity = 0.15,
  particleCount = 600,
  speed = 1,
}: NeuralBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip animation entirely if user prefers reduced motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Reduce particles on mobile for better perf
    const isMobile = window.innerWidth < 768;
    particleCount = isMobile ? Math.min(particleCount, 200) : particleCount;

    let width = container.clientWidth;
    let height = container.clientHeight;
    let particles: Particle[] = [];
    let animationFrameId = 0;
    let mouse = { x: -1000, y: -1000 };
    let dpr = window.devicePixelRatio || 1;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      age: number;
      life: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = 0;
        this.vy = 0;
        this.age = 0;
        this.life = Math.random() * 200 + 100;
      }

      update() {
        const angle = (Math.cos(this.x * 0.005) + Math.sin(this.y * 0.005)) * Math.PI;

        this.vx += Math.cos(angle) * 0.2 * speed;
        this.vy += Math.sin(angle) * 0.2 * speed;

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const interactionRadius = 150;

        if (distance < interactionRadius) {
          const force = (interactionRadius - distance) / interactionRadius;
          this.vx -= dx * force * 0.05;
          this.vy -= dy * force * 0.05;
        }

        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.95;
        this.vy *= 0.95;

        this.age += 1;
        if (this.age > this.life) {
          this.reset();
        }

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = 0;
        this.vy = 0;
        this.age = 0;
        this.life = Math.random() * 200 + 100;
      }

      draw(context: CanvasRenderingContext2D) {
        const alpha = 1 - Math.abs(this.age / this.life - 0.5) * 2;
        context.globalAlpha = alpha;
        context.fillStyle = color;
        context.fillRect(this.x, this.y, 1.5, 1.5);
      }
    }

    const init = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      dpr = window.devicePixelRatio || 1;

      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      particles = [];
      for (let i = 0; i < particleCount; i += 1) {
        particles.push(new Particle());
      }
    };

    let running = false;
    let inView = true;

    const animate = () => {
      ctx.globalAlpha = 1;
      ctx.fillStyle = `rgba(0, 0, 0, ${trailOpacity})`;
      ctx.fillRect(0, 0, width, height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw(ctx);
      });

      ctx.globalAlpha = 1;
      animationFrameId = window.requestAnimationFrame(animate);
    };

    const start = () => {
      if (running || !inView || document.hidden) return;
      running = true;
      animationFrameId = window.requestAnimationFrame(animate);
    };

    const stop = () => {
      running = false;
      window.cancelAnimationFrame(animationFrameId);
    };

    // Only animate while the canvas is on screen and the tab is visible.
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        inView ? start() : stop();
      },
      { threshold: 0 },
    );
    intersectionObserver.observe(container);

    const handleVisibility = () => {
      document.hidden ? stop() : start();
    };
    document.addEventListener("visibilitychange", handleVisibility);

    const handleResize = () => {
      init();
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const observer = new ResizeObserver(() => handleResize());
    observer.observe(container);

    init();
    start();

    window.addEventListener("resize", handleResize);
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      observer.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [color, particleCount, speed, trailOpacity]);

  return (
    <div
      ref={containerRef}
      className={cn("relative h-full w-full overflow-hidden bg-black", className)}
    >
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}
