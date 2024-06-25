"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate, useAnimation } from "framer-motion";
import { cn } from "../lib/cn";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  const controls = useAnimation();
  const wordsArray = words.split(" ");

  useEffect(() => {
    const sequence = async () => {
      while (true) {
        await controls.start((i) => ({
          opacity: 1,
          transition: { duration: 2, delay: i * 0.2 },
        }));
        await controls.start((i) => ({
          opacity: 0,
          transition: { duration: 2, delay: i * 0.2 },
        }));
      }
    };
    sequence();
  }, [controls]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-black opacity-0"
              custom={idx}
              animate={controls}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="text-white desktop:text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
