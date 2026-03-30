import { motion } from 'framer-motion';
import { Button, type ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React from 'react';

interface StatProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

interface ActionProps {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: ButtonProps['variant'];
  className?: string;
  asChild?: boolean;
  children?: React.ReactNode;
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
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const floatingVariants = {
  animate: {
    y: [0, -8, 0],
    transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
  },
};

const HeroSection = ({ title, subtitle, actions, stats, images, className }: HeroSectionProps) => {
  return (
    <section className={cn('relative min-h-[85vh] flex items-center', className)}>
      <motion.div
        className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Column: Text Content */}
        <div className="space-y-8">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight"
            variants={itemVariants}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground max-w-xl leading-relaxed"
            variants={itemVariants}
          >
            {subtitle}
          </motion.p>
          <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
            {actions.map((action, index) => (
              <Button
                key={index}
                variant={(action.variant as ButtonProps['variant']) || 'default'}
                size="lg"
                className={cn('rounded-full px-8 py-6 text-base', action.className)}
                onClick={action.onClick}
                asChild={!!action.href}
              >
                {action.href ? (
                  <a href={action.href}>{action.text}</a>
                ) : (
                  <span>{action.text}</span>
                )}
              </Button>
            ))}
          </motion.div>
          <motion.div
            className="flex flex-wrap gap-8 pt-4"
            variants={itemVariants}
          >
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-xl font-bold text-foreground">{stat.value}</div>
                  {stat.label && (
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Image Collage */}
        <div className="relative hidden lg:block h-[500px]">
          {/* Decorative Shapes */}
          <motion.div
            className="absolute -top-4 right-20 w-24 h-24 rounded-full bg-primary/20 blur-xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 -left-4 w-16 h-16 rounded-full bg-accent/20 blur-lg"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 5, repeat: Infinity }}
          />

          {/* Images */}
          {images[0] && (
            <motion.div
              className="absolute top-0 right-0 w-[65%] aspect-[4/3] rounded-2xl overflow-hidden border border-border/50 shadow-2xl"
              variants={imageVariants}
              whileHover={{ scale: 1.02 }}
            >
              <img src={images[0]} alt="" className="w-full h-full object-cover" />
            </motion.div>
          )}
          {images[1] && (
            <motion.div
              className="absolute bottom-0 right-[10%] w-[55%] aspect-[4/3] rounded-2xl overflow-hidden border border-border/50 shadow-2xl z-10"
              variants={imageVariants}
              {...floatingVariants}
              whileHover={{ scale: 1.02 }}
            >
              <img src={images[1]} alt="" className="w-full h-full object-cover" />
            </motion.div>
          )}
          {images[2] && (
            <motion.div
              className="absolute top-[35%] left-0 w-[45%] aspect-[3/4] rounded-2xl overflow-hidden border border-border/50 shadow-2xl"
              variants={imageVariants}
              whileHover={{ scale: 1.02 }}
            >
              <img src={images[2]} alt="" className="w-full h-full object-cover" />
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
