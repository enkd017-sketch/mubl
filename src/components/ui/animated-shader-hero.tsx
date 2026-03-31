import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface HeroProps {
  trustBadge?: {
    text: string;
    icons?: string[];
  };
  headline?: {
    line1: string;
    line2: string;
  };
  subtitle?: string;
  buttons?: {
    primary?: {
      text: string;
      onClick?: () => void;
    };
    secondary?: {
      text: string;
      onClick?: () => void;
    };
  };
  className?: string;
}

interface BackgroundProps {
  className?: string;
}

class ShaderRenderer {
  private canvas: HTMLCanvasElement;
  private gl: WebGL2RenderingContext;
  private program: WebGLProgram | null = null;
  private vertexShader: WebGLShader | null = null;
  private fragmentShader: WebGLShader | null = null;
  private buffer: WebGLBuffer | null = null;
  private scale: number;
  private shaderSource: string;
  private mouseMove = [0, 0];
  private mouseCoords = [0, 0];
  private pointerCoords = [0, 0];
  private pointerCount = 0;

  private vertexSource = `#version 300 es
precision highp float;
in vec4 position;
void main() {
  gl_Position = position;
}`;

  private vertices = [-1, 1, -1, -1, 1, 1, 1, -1];

  constructor(canvas: HTMLCanvasElement, scale: number) {
    this.canvas = canvas;
    this.scale = scale;
    const gl = canvas.getContext("webgl2", {
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });

    if (!gl) {
      throw new Error("WebGL2 is not supported in this browser.");
    }

    this.gl = gl;
    this.shaderSource = defaultShaderSource;
    this.gl.viewport(0, 0, canvas.width * scale, canvas.height * scale);
  }

  updateShader(source: string) {
    this.reset();
    this.shaderSource = source;
    this.setup();
    this.init();
  }

  updateMove(deltas: number[]) {
    this.mouseMove = deltas;
  }

  updateMouse(coords: number[]) {
    this.mouseCoords = coords;
  }

  updatePointerCoords(coords: number[]) {
    this.pointerCoords = coords;
  }

  updatePointerCount(count: number) {
    this.pointerCount = count;
  }

  updateScale(scale: number) {
    this.scale = scale;
    this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
  }

  private compile(shader: WebGLShader, source: string) {
    this.gl.shaderSource(shader, source);
    this.gl.compileShader(shader);

    if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
      const error = this.gl.getShaderInfoLog(shader);
      console.error("Shader compilation error:", error);
    }
  }

  test(source: string) {
    const shader = this.gl.createShader(this.gl.FRAGMENT_SHADER);
    if (!shader) return "Unable to create fragment shader";

    this.gl.shaderSource(shader, source);
    this.gl.compileShader(shader);

    let result: string | null = null;
    if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
      result = this.gl.getShaderInfoLog(shader);
    }

    this.gl.deleteShader(shader);
    return result;
  }

  reset() {
    if (this.program && !this.gl.getProgramParameter(this.program, this.gl.DELETE_STATUS)) {
      if (this.vertexShader) {
        this.gl.detachShader(this.program, this.vertexShader);
        this.gl.deleteShader(this.vertexShader);
      }

      if (this.fragmentShader) {
        this.gl.detachShader(this.program, this.fragmentShader);
        this.gl.deleteShader(this.fragmentShader);
      }

      this.gl.deleteProgram(this.program);
    }
  }

  setup() {
    const vertexShader = this.gl.createShader(this.gl.VERTEX_SHADER);
    const fragmentShader = this.gl.createShader(this.gl.FRAGMENT_SHADER);
    const program = this.gl.createProgram();

    if (!vertexShader || !fragmentShader || !program) {
      throw new Error("Unable to create WebGL shader program.");
    }

    this.vertexShader = vertexShader;
    this.fragmentShader = fragmentShader;
    this.program = program;

    this.compile(vertexShader, this.vertexSource);
    this.compile(fragmentShader, this.shaderSource);

    this.gl.attachShader(program, vertexShader);
    this.gl.attachShader(program, fragmentShader);
    this.gl.linkProgram(program);

    if (!this.gl.getProgramParameter(program, this.gl.LINK_STATUS)) {
      console.error(this.gl.getProgramInfoLog(program));
    }
  }

  init() {
    if (!this.program) return;

    this.buffer = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffer);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(this.vertices), this.gl.STATIC_DRAW);

    const position = this.gl.getAttribLocation(this.program, "position");
    this.gl.enableVertexAttribArray(position);
    this.gl.vertexAttribPointer(position, 2, this.gl.FLOAT, false, 0, 0);

    (this.program as WebGLProgram & Record<string, WebGLUniformLocation | null>).resolution =
      this.gl.getUniformLocation(this.program, "resolution");
    (this.program as WebGLProgram & Record<string, WebGLUniformLocation | null>).time =
      this.gl.getUniformLocation(this.program, "time");
    (this.program as WebGLProgram & Record<string, WebGLUniformLocation | null>).move =
      this.gl.getUniformLocation(this.program, "move");
    (this.program as WebGLProgram & Record<string, WebGLUniformLocation | null>).touch =
      this.gl.getUniformLocation(this.program, "touch");
    (this.program as WebGLProgram & Record<string, WebGLUniformLocation | null>).pointerCount =
      this.gl.getUniformLocation(this.program, "pointerCount");
    (this.program as WebGLProgram & Record<string, WebGLUniformLocation | null>).pointers =
      this.gl.getUniformLocation(this.program, "pointers");
  }

  render(now = 0) {
    if (!this.program || this.gl.getProgramParameter(this.program, this.gl.DELETE_STATUS)) return;

    const program = this.program as WebGLProgram & Record<string, WebGLUniformLocation | null>;

    this.gl.clearColor(0, 0, 0, 0);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    this.gl.useProgram(program);
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffer);
    this.gl.uniform2f(program.resolution, this.canvas.width, this.canvas.height);
    this.gl.uniform1f(program.time, now * 1e-3);
    this.gl.uniform2f(program.move, this.mouseMove[0], this.mouseMove[1]);
    this.gl.uniform2f(program.touch, this.mouseCoords[0], this.mouseCoords[1]);
    this.gl.uniform1i(program.pointerCount, this.pointerCount);
    this.gl.uniform2fv(program.pointers, this.pointerCoords);
    this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4);
  }
}

class PointerTracker {
  private scale: number;
  private active = false;
  private pointers = new Map<number, number[]>();
  private lastCoords = [0, 0];
  private moves = [0, 0];

  constructor(element: HTMLCanvasElement, scale: number) {
    this.scale = scale;

    const map = (x: number, y: number) => [x * this.scale, element.height - y * this.scale];

    element.addEventListener("pointerdown", (event) => {
      this.active = true;
      this.pointers.set(event.pointerId, map(event.offsetX, event.offsetY));
    });

    const removePointer = (event: PointerEvent) => {
      if (this.count === 1) {
        this.lastCoords = this.first;
      }
      this.pointers.delete(event.pointerId);
      this.active = this.pointers.size > 0;
    };

    element.addEventListener("pointerup", removePointer);
    element.addEventListener("pointerleave", removePointer);

    element.addEventListener("pointermove", (event) => {
      if (!this.active) return;
      this.lastCoords = [event.offsetX, event.offsetY];
      this.pointers.set(event.pointerId, map(event.offsetX, event.offsetY));
      this.moves = [this.moves[0] + event.movementX, this.moves[1] + event.movementY];
    });
  }

  updateScale(scale: number) {
    this.scale = scale;
  }

  get count() {
    return this.pointers.size;
  }

  get move() {
    return this.moves;
  }

  get coords() {
    return this.pointers.size > 0 ? Array.from(this.pointers.values()).flat() : [0, 0];
  }

  get first() {
    return this.pointers.values().next().value || this.lastCoords;
  }
}

const defaultShaderSource = `#version 300 es
precision highp float;
out vec4 O;
uniform vec2 resolution;
uniform float time;
#define FC gl_FragCoord.xy
#define T time
#define R resolution
#define MN min(R.x,R.y)
float rnd(vec2 p) {
  p = fract(p * vec2(12.9898, 78.233));
  p += dot(p, p + 34.56);
  return fract(p.x * p.y);
}
float noise(in vec2 p) {
  vec2 i = floor(p), f = fract(p), u = f * f * (3. - 2. * f);
  float
    a = rnd(i),
    b = rnd(i + vec2(1, 0)),
    c = rnd(i + vec2(0, 1)),
    d = rnd(i + 1.);
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}
float fbm(vec2 p) {
  float t = .0, a = 1.;
  mat2 m = mat2(1., -.5, .2, 1.2);
  for (int i = 0; i < 5; i++) {
    t += a * noise(p);
    p *= 2. * m;
    a *= .5;
  }
  return t;
}
float clouds(vec2 p) {
  float d = 1., t = .0;
  for (float i = .0; i < 3.; i++) {
    float a = d * fbm(i * 10. + p.x * .2 + .2 * (1. + i) * p.y + d + i * i + p);
    t = mix(t, d, a);
    d = a;
    p *= 2. / (i + 1.);
  }
  return t;
}
void main(void) {
  vec2 uv = (FC - .5 * R) / MN, st = uv * vec2(2, 1);
  vec3 col = vec3(0);
  float bg = clouds(vec2(st.x + T * .5, -st.y));
  uv *= 1. - .3 * (sin(T * .2) * .5 + .5);
  for (float i = 1.; i < 12.; i++) {
    uv += .1 * cos(i * vec2(.1 + .01 * i, .8) + i * i + T * .5 + .1 * uv.x);
    vec2 p = uv;
    float d = length(p);
    col += .00125 / d * (cos(sin(i) * vec3(1, 2, 3)) + 1.);
    float b = noise(i + p + bg * 1.731);
    col += .002 * b / length(max(p, vec2(b * p.x * .02, p.y)));
    col = mix(col, vec3(bg * .25, bg * .137, bg * .05), d);
  }
  O = vec4(col, 1);
}`;

function useShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const rendererRef = useRef<ShaderRenderer | null>(null);
  const pointersRef = useRef<PointerTracker | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      const rect = parent?.getBoundingClientRect();
      const width = rect?.width ?? window.innerWidth;
      const height = rect?.height ?? window.innerHeight;
      const dpr = Math.max(1, 0.5 * window.devicePixelRatio);

      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      rendererRef.current?.updateScale(dpr);
      pointersRef.current?.updateScale(dpr);
    };

    const loop = (now: number) => {
      if (!rendererRef.current || !pointersRef.current) return;

      rendererRef.current.updateMouse(pointersRef.current.first);
      rendererRef.current.updatePointerCount(pointersRef.current.count);
      rendererRef.current.updatePointerCoords(pointersRef.current.coords);
      rendererRef.current.updateMove(pointersRef.current.move);
      rendererRef.current.render(now);
      animationFrameRef.current = requestAnimationFrame(loop);
    };

    try {
      const dpr = Math.max(1, 0.5 * window.devicePixelRatio);
      rendererRef.current = new ShaderRenderer(canvas, dpr);
      pointersRef.current = new PointerTracker(canvas, dpr);
      rendererRef.current.setup();
      rendererRef.current.init();
      resizeCanvas();

      if (rendererRef.current.test(defaultShaderSource) === null) {
        rendererRef.current.updateShader(defaultShaderSource);
      }

      loop(0);

      const resizeObserver = new ResizeObserver(() => resizeCanvas());
      if (canvas.parentElement) {
        resizeObserver.observe(canvas.parentElement);
      }

      window.addEventListener("resize", resizeCanvas);

      return () => {
        resizeObserver.disconnect();
        window.removeEventListener("resize", resizeCanvas);
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        rendererRef.current?.reset();
      };
    } catch (error) {
      console.error(error);
    }
  }, []);

  return canvasRef;
}

export function AnimatedShaderHeroBackground({ className }: BackgroundProps) {
  const canvasRef = useShaderBackground();

  return (
    <div aria-hidden="true" className={cn("absolute inset-0 overflow-hidden", className)}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full touch-none"
        style={{ background: "transparent" }}
      />
    </div>
  );
}

export default function AnimatedShaderHero({
  trustBadge,
  headline,
  subtitle,
  buttons,
  className = "",
}: HeroProps) {
  const canvasRef = useShaderBackground();

  return (
    <div className={cn("relative h-screen w-full overflow-hidden bg-black", className)}>
      <style>{`
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-800 { animation-delay: 0.8s; }

        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
      `}</style>

      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full touch-none object-contain"
        style={{ background: "black" }}
      />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white">
        {trustBadge && (
          <div className="animate-fade-in-down mb-8">
            <div className="flex items-center gap-2 rounded-full border border-orange-300/30 bg-orange-500/10 px-6 py-3 text-sm backdrop-blur-md">
              {trustBadge.icons && (
                <div className="flex">
                  {trustBadge.icons.map((icon, index) => (
                    <span key={`${icon}-${index}`} className="text-yellow-300">
                      {icon}
                    </span>
                  ))}
                </div>
              )}
              <span className="text-orange-100">{trustBadge.text}</span>
            </div>
          </div>
        )}

        <div className="mx-auto max-w-5xl space-y-6 px-4 text-center">
          {headline && (
            <div className="space-y-2">
              <h1 className="animate-fade-in-up animation-delay-200 bg-gradient-to-r from-orange-300 via-yellow-400 to-amber-300 bg-clip-text text-5xl font-bold text-transparent md:text-7xl lg:text-8xl">
                {headline.line1}
              </h1>
              <h1 className="animate-fade-in-up animation-delay-400 bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text text-5xl font-bold text-transparent md:text-7xl lg:text-8xl">
                {headline.line2}
              </h1>
            </div>
          )}

          {subtitle && (
            <div className="animate-fade-in-up animation-delay-600 mx-auto max-w-3xl">
              <p className="text-lg font-light leading-relaxed text-orange-100/90 md:text-xl lg:text-2xl">
                {subtitle}
              </p>
            </div>
          )}

          {buttons && (
            <div className="animate-fade-in-up animation-delay-800 mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              {buttons.primary && (
                <button
                  onClick={buttons.primary.onClick}
                  className="rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 px-8 py-4 text-lg font-semibold text-black transition-all duration-300 hover:scale-105 hover:from-orange-600 hover:to-yellow-600 hover:shadow-xl hover:shadow-orange-500/25"
                >
                  {buttons.primary.text}
                </button>
              )}
              {buttons.secondary && (
                <button
                  onClick={buttons.secondary.onClick}
                  className="rounded-full border border-orange-300/30 bg-orange-500/10 px-8 py-4 text-lg font-semibold text-orange-100 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-orange-300/50 hover:bg-orange-500/20"
                >
                  {buttons.secondary.text}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
