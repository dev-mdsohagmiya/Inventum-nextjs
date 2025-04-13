"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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
          className="col-span-6 lg:col-span-3 lg:col-start-1 col-start-2 flex justify-center bg-dd lg:mx-24 lg:my-10 my-5 mx-10 rounded-2xl relative items-center max-w-md h-max"
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
          className={`col-span-6 lg:col-span-3 lg:col-start-5 col-start-2 flex justify-center bg-dd lg:mx-24 lg:my-10 my-5 mx-10 rounded-2xl relative h-max max-w-md ${
            props.move ? "lg:-bottom-1/3" : ""
          }`}
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

const ScrollNew = () => {
  return (
    <div className="py-20">
      <h2 className="text-5xl font-bold text-transparent bg-pg bg-clip-text pb-3 mx-auto pt-8 text-center max-w-6xl">
        At Inventum, you get a custom learning path
      </h2>

      <div className="prose px-7 pt-5 pb-3 text-ll m-5 prose-h3:bg-pg prose-h3:bg-clip-text prose-h3:text-transparent bg-dd lg:w-1/3 w-11/12 lg:mx-auto  rounded-2xl -mb-1 max-w-sm">
        <h3 className="">1. Start of the year</h3>
        <div className="-mt-5">
          <p>
            Expert teacher analysis of critical points (chapters that require
            extra time).
          </p>
        </div>
      </div>
      <ScrollComponent
        move
        firstTitle="2. Self-paced learning"
        firstDescription="<p>Students can finally learn at their own pace thanks to our Precision Teaching model.</p><ul><li>Courses on Canvas</li><li>Recorded lessons for critical points</li> <li>Or Live lessons for critical points</li><li>+ Regular Study Coach Check-Ins</li></p>"
        lastTitle="3. Progress Checks"
        lastDescription="<ul><li>Quizzes and Tests check retention</li></ul>"
      />
      <ScrollComponent
        firstTitle="4. Content Understood"
        firstDescription="<ul><li>Students can revisit content or move on</li><li>This ensures that everyone can progress at their own pace</li></ul>"
        lastTitle="5. Multimodal Skills"
        lastDescription="<p>We prepare our learners for the 5th-industrial revolution by ensuring that they have multimodal skills.</p><ul><li>The Year is divided into 6 Larger Assignments to develop future skills</li> <li>Exam skills sessions with teachers</li> <li>Personal Mindset Modules</li> <li>Future Technology Courses</li></ul>"
      />
      <div className="prose px-7 pt-5 pb-3 text-ll m-5 prose-h3:bg-pg prose-h3:bg-clip-text prose-h3:text-transparent bg-dd lg:w-1/3 w-11/12 lg:mx-auto  rounded-2xl -mb-1 max-w-sm">
        <h3 className="">6. Understood & Prepared</h3>
        <div className="-mt-5">
          <p>
            Content is now fully understood and the learner is prepared for the
            exams and for what's after.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScrollNew;
