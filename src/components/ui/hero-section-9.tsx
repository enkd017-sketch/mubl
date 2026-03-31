import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import React from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import ParticleEffectForHero from "@/components/ui/particle-effect-for-hero";
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
            "border border-[color:var(--surface-border)] bg-white/28 text-[color:var(--title-color)] hover:bg-white/40 hover:text-[color:var(--title-color)] dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:hover:text-white",
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
            "border border-[color:var(--surface-border)] bg-white/28 text-[color:var(--title-color)] hover:bg-white/40 hover:text-[color:var(--title-color)] dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:hover:text-white",
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
        "relative overflow-hidden rounded-[2rem] border border-[color:var(--surface-border)] bg-[#ebe9dd]/90 px-6 py-10 shadow-[0_40px_120px_rgba(15,23,42,0.18)] backdrop-blur-sm dark:border-white/10 dark:bg-slate-950/35 dark:shadow-[0_40px_120px_rgba(2,6,23,0.45)] md:px-10 md:py-14 lg:px-14 lg:py-16",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(235,233,221,0.98)_0%,rgba(235,233,221,0.96)_54%,rgba(223,229,239,0.88)_100%),radial-gradient(circle_at_top_right,rgba(37,99,235,0.16),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.32),transparent_28%),linear-gradient(90deg,rgba(71,85,105,0.16)_0%,rgba(71,85,105,0.06)_44%,transparent_72%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.24),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.12),transparent_28%)]" />
      <ParticleEffectForHero
        scope="container"
        intensity="medium"
        className="rounded-[inherit] opacity-90 dark:opacity-100"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_28%,transparent_72%,rgba(15,23,42,0.05))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_28%,transparent_72%,rgba(2,6,23,0.08))]" />
      <div className="pointer-events-none absolute -left-20 top-20 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-8 top-8 h-px w-24 bg-gradient-to-r from-transparent via-blue-400/55 to-transparent dark:via-blue-300/70" />

      <motion.div
        className="relative z-10 grid items-center gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="space-y-8">
          <motion.div variants={itemVariants} className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--eyebrow-border)] bg-[var(--eyebrow-bg)] px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-[color:var(--eyebrow-text)]">
              Mirzo Ulugh Beg&apos;s Legacy
            </div>
            <h1 className="max-w-3xl text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-[color:var(--title-color)] md:text-6xl lg:text-7xl">
              {title}
            </h1>
            <p className="max-w-2xl text-base leading-7 text-[color:var(--copy-color)] md:text-lg">
              {subtitle}
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
            {actions.map(renderAction)}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-x-8 gap-y-5 pt-2"
          >
            {stats.map((stat, index) => (
              <div
                key={`${stat.label}-${index}`}
                className="flex min-w-[180px] items-center gap-4"
              >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[color:var(--surface-border)] bg-white/30 text-blue-700 backdrop-blur-sm dark:border-white/8 dark:bg-black/20 dark:text-blue-200">
                  {stat.icon}
                </div>
                <div className="space-y-0.5">
                  <div className="text-3xl font-semibold tracking-tight text-[color:var(--title-color)] md:text-[2rem]">
                    {stat.value}
                  </div>
                  <div className="text-base text-[color:var(--copy-muted)]">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative hidden min-h-[520px] lg:block">
          <motion.div
            variants={imageVariants}
            whileHover={{ scale: 1.035, y: -6 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="group absolute right-0 top-0 h-[320px] w-[72%] cursor-pointer overflow-hidden rounded-[2rem] border border-[color:var(--surface-border)] bg-white/40 shadow-2xl transition-shadow duration-300 hover:shadow-[0_32px_90px_rgba(15,23,42,0.24)] dark:border-white/10 dark:bg-slate-950/50 dark:hover:shadow-[0_32px_90px_rgba(2,6,23,0.62)]"
          >
            <img
              src={images[0]}
              alt=""
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>

          <motion.div
            variants={imageVariants}
            whileHover={{ scale: 1.035 }}
            className="group absolute bottom-0 right-[9%] h-[250px] w-[58%] cursor-pointer overflow-hidden rounded-[2rem] border border-[color:var(--surface-border)] bg-white/40 shadow-2xl transition-shadow duration-300 hover:shadow-[0_32px_90px_rgba(15,23,42,0.24)] dark:border-white/10 dark:bg-slate-950/50 dark:hover:shadow-[0_32px_90px_rgba(2,6,23,0.62)]"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src={images[1]}
              alt=""
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>

          <motion.div
            variants={imageVariants}
            whileHover={{ scale: 1.035, y: -6 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="group absolute left-0 top-[34%] h-[280px] w-[43%] cursor-pointer overflow-hidden rounded-[2rem] border border-[color:var(--surface-border)] bg-white/40 shadow-2xl transition-shadow duration-300 hover:shadow-[0_32px_90px_rgba(15,23,42,0.24)] dark:border-white/10 dark:bg-slate-950/50 dark:hover:shadow-[0_32px_90px_rgba(2,6,23,0.62)]"
          >
            <img
              src={images[2]}
              alt=""
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>

          <div className="absolute left-10 top-8 h-20 w-20 rounded-full border border-blue-300/15 bg-blue-400/10 blur-2xl" />
          <div className="absolute bottom-10 left-8 h-px w-28 bg-gradient-to-r from-transparent via-blue-400/45 to-transparent dark:via-blue-300/50" />
        </div>
      </motion.div>
    </section>
  );
}
