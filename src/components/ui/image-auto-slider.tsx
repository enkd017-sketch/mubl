import { cn } from "@/lib/utils";

interface SliderItem {
  image: string;
  alt: string;
  title: string;
  description?: string;
  date?: string;
  location?: string;
}

interface ImageAutoSliderProps {
  items: SliderItem[];
  className?: string;
}

export function ImageAutoSlider({ items, className }: ImageAutoSliderProps) {
  const duplicatedItems = [...items, ...items];

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <style>{`
        @keyframes mubl-scroll-events {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .mubl-events-scroll {
          animation: mubl-scroll-events 22s linear infinite;
          will-change: transform;
        }

        .mubl-events-mask {
          mask-image: linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%);
          -webkit-mask-image: linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%);
        }

        .mubl-events-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/[0.04] via-transparent to-primary/10" />
      <div className="relative rounded-[2rem] border border-white/8 bg-black/20 px-5 py-6 md:px-7">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <div className="eyebrow !mb-0">Event gallery</div>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
              Lab sessions, talks, and workshops
            </h3>
          </div>
        </div>

        <div className="mubl-events-mask overflow-hidden">
          <div className="mubl-events-scroll flex w-max gap-4 py-1 md:gap-5">
            {duplicatedItems.map((item, index) => (
              <article
                key={`${item.title}-${index}`}
                className="group relative h-[250px] w-[180px] min-w-[160px] max-w-[200px] flex-shrink-0 overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950 shadow-[0_20px_44px_rgba(2,6,23,0.3)] md:h-[280px]"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
