"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right";
}

export default function FadeIn({ children, delay = 0, className = "", direction = "up" }: FadeInProps) {
  const initialVariants = {
    up: { opacity: 0, y: 30 },
    left: { opacity: 0, x: -50 },
    right: { opacity: 0, x: 50 },
  };

  return (
    <motion.div
      initial={initialVariants[direction]}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
