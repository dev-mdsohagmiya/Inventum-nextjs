import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const titleStyle = {
  fontSize: "3rem",
  fontWeight: 600,
};

const AnimatedTitle = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 0.5,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
    exit: {
      opacity: 0,
      y: `-0.25em`,
      transition: {
        duration: 0.5,
        ease: [0.9, 0.3, 0.65, 0.2],
      },
    },
  };
  const texts = [
    "Acceptance",
    "Respect",
    "Support",
    "Integrity",
    "Perseverance",
    "Curiosity",
    "Creativeness",
    "Career-ready",
    "Future-focused",
  ];

  useEffect(() => {
    const wordDuration = texts[currentWordIndex].length * 200;
    const timeoutId = setTimeout(() => {
      setCurrentWordIndex((currentWordIndex + 1) % texts.length);
    }, wordDuration + 500); // Added 1 second buffer to ensure animations complete

    return () => clearTimeout(timeoutId);
  }, [currentWordIndex]);


  return (
    <h2 className="font-bold text-purple-500 text-5xl md:text-7xl text-center py-10 whitespace-normal">
      <AnimatePresence
        initial={false}
        mode="wait"
        onExitComplete={() => null}
      >

      <motion.div
        key={currentWordIndex}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={wordAnimation}
        transition={{
          staggerChildren: 0.05,
        }}
        style={{
          display: "inline-block",
          marginRight: "0.25em",
          whiteSpace: "nowrap",
        }}
      >
        {texts[currentWordIndex].split("").map((character, index) => {
          return (
            <motion.span
              aria-hidden="true"
              key={index}
              custom={{ charIndex: index }}
              variants={characterAnimation}
              style={{
                display: "inline-block",
                marginRight: "-0.05em",
                
              }}
            >
              {character}
            </motion.span>
          );
        })}
      </motion.div>
      </AnimatePresence>

    </h2>
  );
};

export default AnimatedTitle;
