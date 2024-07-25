"use client";
import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/cn";

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isHidden, setIsHidden] = useState<boolean>(false);

  const startAnimation = useCallback(() => {
    const word = words[words.indexOf(currentWord) + 1] || words[0];
    setCurrentWord(word);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Ajusta este valor según tu diseño responsivo
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isAnimating)
      setTimeout(() => {
        startAnimation();
      }, duration);
  }, [isAnimating, duration, startAnimation]);

  useEffect(() => {
    if (isMobile && isHidden) {
      setTimeout(() => {
        setIsHidden(false);
      }, 400); // Ajusta el tiempo según la duración de tu animación
    }
  }, [isHidden, isMobile]);

  return (
    <div className={isHidden ? "invisible h-10" : "h-10"}>
      <AnimatePresence
        onExitComplete={() => {
          if (isMobile) {
            setIsHidden(true);
          }
          setIsAnimating(false);
        }}
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
          exit={{
            opacity: 0,
            scale: isMobile ? 0.5 : 2,
            filter: isMobile ? "blur(0px)" : "blur(8px)",
            y: isMobile ? 0 : -40,
            x: isMobile ? 0 : 40,
            position: "absolute",
          }}
          className={cn(
            "z-10 inline-block relative text-left px-2",
            className
          )}
          key={currentWord}
        >
          {currentWord.split(" ").map((word, index) => (
            <span key={index} className="text-yellow-500">
              {word.split("").map((letter, index) => (
                <motion.span
                  key={letter + index}
                  initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.4,
                  }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
              {index < currentWord.split(" ").length - 1 && " "}
            </span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
