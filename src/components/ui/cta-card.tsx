import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface CtaCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc: string;
  imageAlt: string;
  title?: string;
  subtitle: React.ReactNode;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
}

const CtaCard = React.forwardRef<HTMLDivElement, CtaCardProps>(
  (
    {
      className,
      imageSrc,
      imageAlt,
      title,
      subtitle,
      description,
      buttonText,
      onButtonClick,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "overflow-hidden rounded-[1.75rem] border border-white/8 bg-black/55 text-white shadow-[0_24px_60px_rgba(2,6,23,0.24)] backdrop-blur-md",
          "flex flex-col md:flex-row",
          className,
        )}
        {...props}
      >
        <div className="w-full md:w-[38%]">
          <img
            src={imageSrc}
            alt={imageAlt}
            loading="lazy"
            className="h-56 w-full object-cover object-center md:h-full"
          />
        </div>

        <div className="flex w-full flex-col justify-center p-6 md:w-[62%] md:p-7 lg:p-8">
          <div>
            {title ? (
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-blue-200">
                {title}
              </p>
            ) : null}
            <h2 className={cn(
              "text-2xl font-bold tracking-tight text-white md:text-3xl",
              title ? "mt-2" : "mt-0",
            )}>
              {subtitle}
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300 md:text-base">
              {description}
            </p>
            <div className="mt-6">
              <Button
                size="default"
                onClick={onButtonClick}
                className="rounded-full bg-white px-7 text-slate-950 hover:bg-white/90"
              >
                {buttonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

CtaCard.displayName = "CtaCard";

export { CtaCard };
