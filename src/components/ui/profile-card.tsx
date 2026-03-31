"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check, UserCheck, Users } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProfileStat {
  icon?: React.ReactNode;
  value: string;
  label: string;
}

interface ProfileCardProps {
  name?: string;
  description?: string;
  image?: string;
  isVerified?: boolean;
  followers?: number;
  following?: number;
  enableAnimations?: boolean;
  className?: string;
  onFollow?: () => void;
  isFollowing?: boolean;
  stats?: ProfileStat[];
  actionText?: string;
  actionHref?: string;
  hideAction?: boolean;
}

export function ProfileCard({
  name = "Sophie Bennett",
  description = "Product Designer who focuses on simplicity & usability.",
  image = "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=800&h=800&fit=crop&auto=format&q=80",
  isVerified = true,
  followers = 312,
  following = 48,
  enableAnimations = true,
  className,
  onFollow = () => {},
  isFollowing = false,
  stats,
  actionText,
  actionHref,
  hideAction = false,
}: ProfileCardProps) {
  const [hovered, setHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const shouldAnimate = enableAnimations && !shouldReduceMotion;

  const derivedStats: ProfileStat[] =
    stats && stats.length > 0
      ? stats
      : [
          {
            icon: <Users className="h-4 w-4" />,
            value: `${followers}`,
            label: "followers",
          },
          {
            icon: <UserCheck className="h-4 w-4" />,
            value: `${following}`,
            label: "following",
          },
        ];

  const containerVariants = {
    rest: {
      scale: 1,
      y: 0,
      filter: "blur(0px)",
    },
    hover: shouldAnimate
      ? {
          scale: 1.02,
          y: -4,
          filter: "blur(0px)",
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 28,
            mass: 0.6,
          },
        }
      : {},
  };

  const imageVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 28,
        mass: 0.6,
        staggerChildren: 0.08,
        delayChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 15,
      scale: 0.95,
      filter: "blur(2px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
        mass: 0.5,
      },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 8,
        stiffness: 200,
        mass: 0.8,
      },
    },
  };

  const buttonLabel = actionText ?? (isFollowing ? "Following" : "Follow +");

  const ActionElement =
    actionHref && !hideAction ? (
      <motion.a
        variants={itemVariants}
        href={actionHref}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{
          scale: 1.02,
          transition: { type: "spring", stiffness: 400, damping: 25 },
        }}
        whileTap={{ scale: 0.98 }}
        className="w-full cursor-pointer rounded-2xl border border-border/20 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-950 shadow-sm transition-all duration-200 hover:bg-white/90"
      >
        {buttonLabel}
      </motion.a>
    ) : !hideAction ? (
      <motion.button
        variants={itemVariants}
        onClick={onFollow}
        whileHover={{
          scale: 1.02,
          transition: { type: "spring", stiffness: 400, damping: 25 },
        }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "w-full cursor-pointer rounded-2xl border border-border/20 px-4 py-3 text-sm font-semibold transition-all duration-200",
          isFollowing
            ? "bg-muted text-muted-foreground hover:bg-muted/80"
            : "bg-white text-slate-950 hover:bg-white/90",
        )}
      >
        {buttonLabel}
      </motion.button>
    ) : null;

  return (
    <motion.div
      data-slot="profile-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial="rest"
      whileHover="hover"
      variants={containerVariants}
      className={cn(
        "group relative h-96 w-80 cursor-pointer overflow-hidden rounded-3xl border border-border/20 text-card-foreground shadow-xl shadow-black/5 backdrop-blur-sm dark:shadow-black/20",
        className,
      )}
    >
      <motion.img
        src={image}
        alt={name}
        className="absolute inset-0 h-full w-full object-cover"
        variants={imageVariants}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 via-background/20 via-background/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background/90 via-background/60 via-background/30 via-background/15 via-background/8 to-transparent backdrop-blur-[1px]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/85 via-background/40 to-transparent backdrop-blur-sm" />

      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        className="absolute bottom-0 left-0 right-0 space-y-4 p-6"
      >
        <motion.div variants={itemVariants} className="flex items-center gap-2">
          <motion.h2
            className="text-2xl font-bold text-foreground"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.02,
                },
              },
            }}
          >
            {name.split("").map((letter, index) => (
              <motion.span
                key={`${letter}-${index}`}
                variants={letterVariants}
                className="inline-block"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h2>
          {isVerified ? (
            <motion.div
              variants={itemVariants}
              className="flex h-4 w-4 items-center justify-center rounded-full bg-green-500 text-white"
              whileHover={{
                scale: 1.1,
                rotate: 5,
                transition: { type: "spring", stiffness: 400, damping: 20 },
              }}
            >
              <Check className="h-2.5 w-2.5" />
            </motion.div>
          ) : null}
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-sm leading-relaxed text-muted-foreground"
        >
          {description}
        </motion.p>

        {derivedStats.length > 0 ? (
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-5 pt-2">
            {derivedStats.map((stat) => (
              <div
                key={`${stat.value}-${stat.label}`}
                className="flex items-center gap-2 text-muted-foreground"
              >
                {stat.icon ?? <Users className="h-4 w-4" />}
                <span className="font-semibold text-foreground">{stat.value}</span>
                <span className="text-sm">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        ) : null}

        {ActionElement}
      </motion.div>
    </motion.div>
  );
}
