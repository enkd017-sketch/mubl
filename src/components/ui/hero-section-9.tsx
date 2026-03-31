import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import React from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface StatProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

interface ActionProps {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: ButtonProps["variant"];
  className?: string;
}

interface HeroSectionProps {
  title: React.ReactNode;
  subtitle: string;
  actions: ActionProps[];
  stats: StatProps[];
  images: string[];
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 18 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function renderAction(action: ActionProps, index: number) {
  if (action.href?.startsWith("/")) {
    return (
      <Button
        key={`${action.text}-${index}`}
        variant={action.variant ?? "default"}
        size="lg"
        className={cn(
          "rounded-full px-7 py-6 text-sm md:text-base",
          action.variant === "outline" &&
            "border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white",
          action.className,
        )}
        asChild
      >
        <Link to={action.href}>{action.text}</Link>
      </Button>
    );
  }

  if (action.href) {
    return (
      <Button
        key={`${action.text}-${index}`}
        variant={action.variant ?? "default"}
        size="lg"
        className={cn(
          "rounded-full px-7 py-6 text-sm md:text-base",
          action.variant === "outline" &&
            "border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white",
          action.className,
        )}
        asChild
      >
        <a href={action.href}>{action.text}</a>
      </Button>
    );
  }

  return (
    <Button
      key={`${action.text}-${index}`}
      variant={action.variant ?? "default"}
      size="lg"
      className={cn("rounded-full px-7 py-6 text-sm md:text-base", action.className)}
      onClick={action.onClick}
    >
      {action.text}
    </Button>
  );
}

export default function HeroSection9({
  title,
  subtitle,
  actions,
  stats,
  images,
  className,
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/35 px-6 py-10 shadow-[0_40px_120px_rgba(2,6,23,0.45)] backdrop-blur-sm md:px-10 md:py-14 lg:px-14 lg:py-16",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.24),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.12),transparent_28%)]" />
      <div className="pointer-events-none absolute -left-20 top-20 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-8 top-8 h-px w-24 bg-gradient-to-r from-transparent via-blue-300/70 to-transparent" />

      <motion.div
        className="relative z-10 grid items-center gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="space-y-8">
          <motion.div variants={itemVariants} className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-blue-100/80">
              Mirzo Ulugh Beg&apos;s Legacy
            </div>
            <h1 className="max-w-3xl text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-white md:text-6xl lg:text-7xl">
              {title}
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
              {subtitle}
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
            {actions.map(renderAction)}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid gap-4 sm:grid-cols-3"
          >
            {stats.map((stat, index) => (
              <div
                key={`${stat.label}-${index}`}
                className="rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-4 backdrop-blur-sm"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                  {stat.icon}
                </div>
                <div className="text-2xl font-semibold tracking-tight text-white">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative hidden min-h-[520px] lg:block">
          <motion.div
            variants={imageVariants}
            className="absolute right-0 top-0 h-[320px] w-[72%] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/50 shadow-2xl"
          >
            <img
              src={images[0]}
              alt=""
              className="h-full w-full object-cover"
            />
          </motion.div>

          <motion.div
            variants={imageVariants}
            className="absolute bottom-0 right-[9%] h-[250px] w-[58%] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/50 shadow-2xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src={images[1]}
              alt=""
              className="h-full w-full object-cover"
            />
          </motion.div>

          <motion.div
            variants={imageVariants}
            className="absolute left-0 top-[34%] h-[280px] w-[43%] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/50 shadow-2xl"
          >
            <img
              src={images[2]}
              alt=""
              className="h-full w-full object-cover"
            />
          </motion.div>

          <div className="absolute left-10 top-8 h-20 w-20 rounded-full border border-blue-300/15 bg-blue-400/10 blur-2xl" />
          <div className="absolute bottom-10 left-8 h-px w-28 bg-gradient-to-r from-transparent via-blue-300/50 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
