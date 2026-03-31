import { useEffect, useState } from "react";
import VaporizeTextCycle, { Tag } from "@/components/ui/vapour-text-effect";
import { cn } from "@/lib/utils";

interface SiteLoaderProps {
  onComplete: () => void;
}

export function SiteLoader({ onComplete }: SiteLoaderProps) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const exitTimer = window.setTimeout(() => {
      setIsExiting(true);
    }, 2400);

    return () => window.clearTimeout(exitTimer);
  }, []);

  useEffect(() => {
    if (!isExiting) return;

    const completeTimer = window.setTimeout(() => {
      onComplete();
    }, 420);

    return () => window.clearTimeout(completeTimer);
  }, [isExiting, onComplete]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[140] flex items-center justify-center bg-black transition-opacity duration-500",
        isExiting ? "pointer-events-none opacity-0" : "opacity-100",
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.12),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_30%,transparent_70%,rgba(37,99,235,0.06))]" />
      <div className="relative h-[220px] w-full max-w-5xl px-8">
        <VaporizeTextCycle
          texts={["MUBL"]}
          font={{
            fontFamily: "Inter, sans-serif",
            fontSize: "120px",
            fontWeight: 700,
          }}
          color="rgb(255, 255, 255)"
          spread={5}
          density={7}
          animation={{
            vaporizeDuration: 1.4,
            fadeInDuration: 0.7,
            waitDuration: 0.3,
          }}
          direction="left-to-right"
          alignment="center"
          tag={Tag.H1}
        />
      </div>
    </div>
  );
}
