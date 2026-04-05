"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const personas = [
  {
    role: "Developers",
    message: "Debug faster with AI and collaborate seamlessly without bloated software."
  },
  {
    role: "Designers",
    message: "Share pixel-perfect screens securely with zero compression artifacts."
  },
  {
    role: "Tutors",
    message: "Guide students remotely with low-latency and interactive tools."
  },
  {
    role: "Support Teams",
    message: "Troubleshoot issues in real-time with instant, secure access."
  },

  {
    role: "Remote Workers",
    message: "Access your powerful workstation securely from a lightweight laptop."
  },
  {
    role: "AI Power Users",
    message: "Leverage cloud AI models locally with high-performance desktop access."
  }
];

export function DynamicHero() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % personas.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const currentPersona = personas[index];

  return (
    <div 
      className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight min-h-[140px] md:min-h-[160px] flex flex-col items-center justify-center pointer-events-auto">
        <span>Remote Desktop</span>
        <motion.span layout className="flex items-center justify-center gap-3 md:gap-4 mt-2">
          <span className="text-foreground/50 whitespace-nowrap">Built for</span>
          <span className="relative inline-block overflow-visible">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={currentPersona.role}
                initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -20, opacity: 0, filter: "blur(4px)" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-primary via-rose-400 to-rose-500 bg-[length:200%_auto] animate-gradient-x font-extrabold pb-1 px-1 inline-block"
              >
                {currentPersona.role}.
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.span>
      </h1>

      <div className="relative min-h-[80px] w-full max-w-2xl mx-auto flex items-start justify-center overflow-hidden mb-10">
        <AnimatePresence mode="wait">
          <motion.p
            key={currentPersona.message}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute text-lg md:text-xl text-foreground/70 w-full text-center"
          >
            {currentPersona.message}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}
