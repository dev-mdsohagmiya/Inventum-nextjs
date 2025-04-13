"use client";

import { useRef, useState } from "react";

const Card = ({ icon, title, subtitle, tr, tl, bl, br }) => {
  const [hover, setHover] = useState(false);
  const handleMouse = () => {
    setHover(!hover);
  };
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null); // Reference for the container

  const handleMouseMove = (event) => {
    const rect = containerRef.current.getBoundingClientRect(); // Use getBoundingClientRect on the container
    const x = event.clientX - rect.left; // x position relative to the container
    const y = event.clientY - rect.top; // y position relative to the container
    setMousePosition({ x, y });
    console.log(`Mouse X: ${x}, Mouse Y: ${y}`); //
  };
  return (
    <div
      className={`${
        tr
          ? "rounded-tr-3xl"
          : tl
          ? "rounded-tl-3xl"
          : bl
          ? "rounded-bl-3xl"
          : br
          ? "rounded-br-3xl"
          : ""
      } relative w-full aspect-square cursor-pointer bg-opacity-10 bg-white rounded-lg flex flex-col overflow-hidden`}
      style={{
        background: hover
          ? `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(236, 72, 153, 0.6), transparent 40%)`
          : "none",
        zIndex: 20,
      }}
      onMouseEnter={handleMouse}
      onMouseLeave={handleMouse}
      onMouseMove={handleMouseMove}
      ref={containerRef}
    >
      <div
        className={`${
          tr
            ? "rounded-tr-3xl"
            : tl
            ? "rounded-tl-3xl"
            : bl
            ? "rounded-bl-3xl"
            : br
            ? "rounded-br-3xl"
            : ""
        } absolute inset-1 bg-dd bg-opacity-70 z-10 p-2.5 flex flex-col`}
      >
        <div className="flex items-center justify-center h-36 overflow-hidden opacity-25"></div>
        <div
          className={`flex-grow flex items-center justify-start p-5 transition-all duration-300 ease-in-out ${
            hover ? "" : "translate-y-1/2"
          }`}
        >
          <div className="ml-2.5">
            <h3 className="text-white text-lg">{title}</h3>
            <h4
              className={`text-white text-sm mt-2  ${
                hover ? "opacity-50" : "opacity-0"
              }`}
            >
              {subtitle}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
