"use client";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
    "Local schools",
    "International schools",
    "Most online schools",
  ];

  useEffect(() => {
    const wordDuration = texts[currentWordIndex].length * 200;
    const timeoutId = setTimeout(() => {
      setCurrentWordIndex((currentWordIndex + 1) % texts.length);
    }, wordDuration + 500); // Added 1 second buffer to ensure animations complete

    return () => clearTimeout(timeoutId);
  }, [currentWordIndex]);

  return (
    <span className="text-purple-500">
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
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
                  marginRight: character === " " ? "0.25em" : "-0.05em",
                }}
              >
                {character}
              </motion.span>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </span>
  );
};

const ScrollComponent = (props) => {
  const ref = useRef(null);

  // Using useScroll to link the scroll progress to the ref of the component
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.5", "end 0.5"], // Calculate progress from top to bottom of the component
  });

  // Compute the opacity based on the scroll progress. The circle is only visible when the scrollYProgress is 1 (fully visible bar)
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div ref={ref} className=" text-ll">
      <motion.div
        className="bg-dd w-4 h-4 rounded-full p-4 lg:mx-auto -my-4 ml-1/2 relative z-20"
        style={{ opacity }}
      ></motion.div>

      <div className="grid grid-cols-7 h-full relative">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="col-span-6 lg:col-span-3 lg:col-start-1 col-start-2 flex justify-center bg-dd lg:mx-24 lg:my-10 my-5 mx-10 rounded-2xl relative items-center max-w-md"
        >
          <div className="prose m-5 text-ll prose-h3:bg-pg prose-h3:bg-clip-text prose-h3:text-transparent ">
            <h3>{props.firstTitle}</h3>
            <div
              dangerouslySetInnerHTML={{ __html: props.firstDescription }}
            ></div>
          </div>
        </motion.div>
        <motion.div
          className="w-4 bg-pg right-0 ml-2 lg:mx-auto ease-linear col-start-1 lg:col-start-4 row-start-1 row-span-2"
          style={{ scaleY: scrollYProgress, originY: 0 }} // Scale based on modified scroll progress
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="col-span-6 lg:col-span-3 lg:col-start-5 col-start-2 flex justify-center bg-dd lg:mx-24 lg:my-10 my-5 mx-10 rounded-2xl relative lg:-bottom-1/2 h-max max-w-md"
        >
          <div className="prose text-ll m-5 prose-h3:bg-pg prose-h3:bg-clip-text prose-h3:text-transparent">
            <h3>{props.lastTitle}</h3>
            <div
              dangerouslySetInnerHTML={{ __html: props.lastDescription }}
            ></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const NOld = () => {
  return (
    <div className="py-20">
      <h2 className="text-5xl font-bold text-transparent bg-pg bg-clip-text pb-3 mx-auto max-w-6xl pt-8 text-center">
        <AnimatedTitle /> cause knowledge gaps
      </h2>

      <div className="prose px-7 pt-5 pb-3 text-ll m-5 prose-h3:bg-pg prose-h3:bg-clip-text prose-h3:text-transparent bg-dd lg:w-1/3 w-11/12 lg:mx-auto  rounded-2xl -mb-1 max-w-sm">
        <h3 className="">1. Start of the year</h3>
        <div className="-mt-5">
          <p>
            Start of the academic year with clear plans on how and when to teach
            all of the content.
          </p>
        </div>
      </div>
      <ScrollComponent
        firstTitle="2. Students Can't Conform 100%"
        firstDescription="<p>Students will miss certain lessons</p><ul><li> due to an appointment</li><li> get bored because it's too easy</li> <li>miss key information due to a lack of concentration</li><li> ...</li></p>"
        lastTitle="3. A Predefined Pace For All"
        lastDescription="<ul><li>Students work at the pace of the middle of the class</li><li>Teacher tries very hard to differentiate and meet all learning needs</li><li>Students become bored or left behind</li></ul>"
      />
      <ScrollComponent
        firstTitle="4. Content Seen > Understood"
        firstDescription="<ul><li> Strong focus on completing content</li><li>Less focus on individual student knowledge retention</li></ul>"
        lastTitle="5. Knowledge Gaps"
        lastDescription="<p>End of academic year Either content not completed or rushed Students have knowledge gaps.</p>"
      />
    </div>
  );
};

export default NOld;
