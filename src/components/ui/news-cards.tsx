"use client";

import { motion, AnimatePresence, useReducedMotion, LayoutGroup } from "framer-motion";
import { useState, useEffect } from "react";
import { BookmarkIcon, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface NewsCard {
  id: string;
  title: string;
  category: string;
  subcategory: string;
  timeAgo: string;
  location: string;
  image: string;
  gradientColors?: string[];
  content?: string[];
}

interface StatusBar {
  id: string;
  category: string;
  subcategory: string;
  length: number; // 1-3 for different lengths
  opacity: number; // 0.3-1 for different opacities
}

interface NewsCardsProps {
  title?: string;
  subtitle?: string;
  statusBars?: StatusBar[];
  newsCards?: NewsCard[];
  enableAnimations?: boolean;
  className?: string;
}

const defaultNewsCards: NewsCard[] = [];

export function NewsCards({
  title,
  subtitle,
  statusBars = [],
  newsCards = defaultNewsCards,
  enableAnimations = true,
  className,
}: NewsCardsProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCard, setSelectedCard] = useState<NewsCard | null>(null);
  const [bookmarkedCards, setBookmarkedCards] = useState<Set<string>>(new Set());
  const shouldReduceMotion = useReducedMotion();
  const shouldAnimate = enableAnimations && !shouldReduceMotion;

  const hasHeader = Boolean(title || subtitle);
  const hasStatusBars = statusBars.length > 0;

  const toggleBookmark = (cardId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarkedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(cardId)) {
        newSet.delete(cardId);
      } else {
        newSet.add(cardId);
      }
      return newSet;
    });
  };

  const openCard = (card: NewsCard) => {
    setSelectedCard(card);
  };

  const closeCard = () => {
    setSelectedCard(null);
  };

  useEffect(() => {
    if (shouldAnimate) {
      const timer = setTimeout(() => setIsLoaded(true), 100);
      return () => clearTimeout(timer);
    } else {
      setIsLoaded(true);
    }
  }, [shouldAnimate]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const headerVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 28,
        mass: 0.6,
      },
    },
  };

  const statusBarContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const statusBarVariants = {
    hidden: {
      opacity: 0,
      scaleX: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      scaleX: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        scaleX: { type: "spring", stiffness: 400, damping: 30 },
      },
    },
  };

  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: hasHeader ? 0.8 : 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
      filter: "blur(6px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 28,
        mass: 0.8,
      },
    },
  };

  return (
    <motion.div
      className={cn("w-full max-w-6xl mx-auto p-6 bg-background text-foreground", className)}
      initial={shouldAnimate ? "hidden" : "visible"}
      animate={isLoaded ? "visible" : "hidden"}
      variants={shouldAnimate ? containerVariants : {}}
    >
      {/* Header */}
      {hasHeader && (
        <motion.div className="mb-8" variants={shouldAnimate ? headerVariants : {}}>
          {title && <h1 className="text-4xl font-bold mb-2">{title}</h1>}
          {subtitle && <p className="text-muted-foreground text-lg">{subtitle}</p>}

          {/* Simple Border Lines */}
          {hasStatusBars && (
            <motion.div
              className="mt-6 space-y-1"
              variants={shouldAnimate ? statusBarContainerVariants : {}}
            >
              {statusBars.map((bar, index) => (
                <motion.div
                  key={bar.id}
                  className={cn(
                    "h-0.5 bg-foreground rounded-full",
                    bar.id === "1"
                      ? "bg-foreground/80"
                      : bar.id === "2"
                        ? "bg-foreground/60"
                        : "bg-foreground/40",
                  )}
                  style={{
                    opacity: bar.opacity,
                    width: `${(bar.length / 3) * 100}%`,
                  }}
                  variants={shouldAnimate ? statusBarVariants : {}}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    delay: 0.3 + index * 0.1,
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              ))}
            </motion.div>
          )}
        </motion.div>
      )}

      {/* News Cards with Shared Layout */}
      <LayoutGroup>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
          variants={shouldAnimate ? cardContainerVariants : {}}
        >
          {newsCards.map((card) => {
            if (selectedCard?.id === card.id) {
              return null; // Don't render the compact card when expanded
            }

            return (
              <motion.article
                key={card.id}
                layoutId={`card-${card.id}`}
                className="bg-card border border-border/50 rounded-lg overflow-hidden transition-all duration-300 cursor-pointer group"
                variants={shouldAnimate ? cardVariants : {}}
                whileHover={
                  shouldAnimate
                    ? {
                        y: -4,
                        scale: 1.01,
                        transition: { type: "spring", stiffness: 400, damping: 25 },
                      }
                    : {}
                }
                onClick={() => openCard(card)}
              >
                {/* Image with gradient overlay */}
                <motion.div
                  layoutId={`card-image-${card.id}`}
                  className="relative h-56 overflow-hidden bg-muted"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transform-gpu group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/5 bg-gradient-to-t from-background/80 to-transparent"></div>
                  {card.gradientColors && (
                    <div
                      className={`absolute inset-x-0 bottom-0 h-1/5 bg-gradient-to-t ${card.gradientColors[0]} ${card.gradientColors[1]} to-transparent`}
                    ></div>
                  )}

                  {/* Bookmark icon */}
                  <motion.div
                    className="absolute top-3 right-3"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, type: "spring", stiffness: 400, damping: 25 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => toggleBookmark(card.id, e)}
                  >
                    <BookmarkIcon
                      className={`w-5 h-5 transition-colors cursor-pointer ${
                        bookmarkedCards.has(card.id)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-white/80 hover:text-white"
                      }`}
                    />
                  </motion.div>

                  {/* Category and time info */}
                  <motion.div
                    className="absolute bottom-3 left-3 text-white"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <div className="text-xs mb-1 opacity-90">
                      {card.category}, {card.subcategory}
                    </div>
                    <div className="text-xs opacity-75">
                      {card.timeAgo}, {card.location}
                    </div>
                  </motion.div>
                </motion.div>

                {/* Content */}
                <motion.div layoutId={`card-content-${card.id}`} className="p-6">
                  <motion.h3
                    layoutId={`card-title-${card.id}`}
                    className="font-semibold text-lg leading-tight line-clamp-3 group-hover:text-primary transition-colors"
                  >
                    {card.title}
                  </motion.h3>
                </motion.div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Expanded Card Modal */}
        <AnimatePresence>
          {selectedCard && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeCard}
              />

              {/* Expanded Card */}
              <motion.div
                layoutId={`card-${selectedCard.id}`}
                className="fixed inset-4 md:inset-8 lg:inset-16 bg-card border border-border rounded-xl overflow-hidden z-50"
              >
                {/* Close Button */}
                <motion.button
                  className="absolute top-4 right-4 w-8 h-8 bg-background/80 hover:bg-background rounded-full flex items-center justify-center z-10"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeCard}
                >
                  <X className="w-4 h-4" />
                </motion.button>

                <div className="h-full overflow-y-auto">
                  {/* Header Image */}
                  <motion.div layoutId={`card-image-${selectedCard.id}`} className="relative h-64 md:h-80">
                    <img
                      src={selectedCard.image}
                      alt={selectedCard.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/90 to-transparent"></div>
                    {selectedCard.gradientColors && (
                      <div
                        className={`absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t ${selectedCard.gradientColors[0]} ${selectedCard.gradientColors[1]} to-transparent`}
                      ></div>
                    )}

                    {/* Image overlay info */}
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-sm mb-1 opacity-90">
                        {selectedCard.category}, {selectedCard.subcategory}
                      </div>
                      <div className="text-sm opacity-75">
                        {selectedCard.timeAgo}, {selectedCard.location}
                      </div>
                    </div>
                  </motion.div>

                  {/* Content */}
                  <motion.div layoutId={`card-content-${selectedCard.id}`} className="p-6 md:p-8">
                    <motion.h1
                      layoutId={`card-title-${selectedCard.id}`}
                      className="text-2xl md:text-3xl font-bold mb-6"
                    >
                      {selectedCard.title}
                    </motion.h1>

                    <motion.div
                      className="prose prose-lg max-w-none text-muted-foreground"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      {selectedCard.content?.map((paragraph, index) => (
                        <p key={index} className="mb-4">
                          {paragraph}
                        </p>
                      ))}
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </motion.div>
  );
}

export default NewsCards;
