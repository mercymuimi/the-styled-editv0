"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
}

export default function FadeUp({
  children,
  delay = 0,
}: FadeUpProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              y: 40,
            }
      }
      whileInView={
        shouldReduceMotion
          ? undefined
          : {
              opacity: 1,
              y: 0,
            }
      }
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={
        shouldReduceMotion
          ? undefined
          : {
              duration: 0.8,
              delay,
              ease: [0.22, 1, 0.36, 1],
            }
      }
    >
      {children}
    </motion.div>
  );
}