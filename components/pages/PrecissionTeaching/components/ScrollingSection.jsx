"use client";
import { useState } from "react";
import { useInView } from "../../../../hooks/useInView";
const bulletPoints = [
  {
    id: 1,
    text: "First Point",
    imageUrl: "https://source.unsplash.com/random/500x500",
  },
  {
    id: 2,
    text: "Second Point",
    imageUrl: "https://source.unsplash.com/random",
  },
  {
    id: 3,
    text: "Third Point",
    imageUrl: "https://source.unsplash.com/random",
  },
];

const ScrollingSection = ({ title }) => {
  const [activeId, setActiveId] = useState(null);

  // Using react-intersection-observer to determine when bullet points are in view
  const { ref1, inView1 } = useInView({
    threshold: 0.5,
  });
  const { ref2, inView2 } = useInView({
    threshold: 0.5,
  });
  const { ref3, inView3 } = useInView({
    threshold: 0.5,
  });

  return (
    <div className="flex flex-col items-center my-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="flex flex-row">
        <ul className="space-y-4">
          <li
            ref={ref1}
            id={`bullet-1`}
            className={`transition-all duration-500 ${
              inView1 ? "opacity-100" : "opacity-0"
            }`}
          >
            gfdfdgdfg
          </li>
          <li
            ref={ref2}
            id={`bullet-2`}
            className={`transition-all duration-500 ${
              inView2 ? "opacity-100" : "opacity-0"
            }`}
          >
            gfdfdgdfg
          </li>
          <li
            ref={ref3}
            id={`bullet-3`}
            className={`transition-all duration-500 ${
              inView3 ? "opacity-100" : "opacity-0"
            }`}
          >
            gfdfdgdfg
          </li>
        </ul>
        <div className="flex-grow">
          {inView1 ? (
            <img
              src={"https://source.unsplash.com/random/1000x500"}
              alt=""
              className="w-full h-auto transition-opacity duration-500 opacity-100"
            />
          ) : inView2 ? (
            <img
              src={"https://source.unsplash.com/random/500x500"}
              alt=""
              className="w-full h-auto transition-opacity duration-500 opacity-100"
            />
          ) : inView3 ? (
            <img
              src={"https://source.unsplash.com/random/500x500"}
              alt=""
              className="w-full h-auto transition-opacity duration-500 opacity-100"
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScrollingSection;
