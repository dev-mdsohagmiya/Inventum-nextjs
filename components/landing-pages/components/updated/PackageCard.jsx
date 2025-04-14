"use client";
import { useInView } from "@/hooks/useInView";
import { useState } from "react";

const PackageCards = ({ packages, displayPrice }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div
      ref={ref}
      className={`flex flex-col lg:flex-row items-start gap-4 pb-14 ${
        inView ? "shown" : ""
      }`}
    >
      {packages.map((pkg, index) => {
        const showAllFeatures = expanded[index];
        return (
          <div
            key={index}
            className="bg-[#111827] basis-full lg:basis-1/3 rounded-2xl lg:rounded-3xl p-2 flex flex-col"
          >
            <div className="mb-4">
              <div className="flex items-center justify-between px-5 pb-3 w-full">
                <div className="text-white text-sm lg:text-base font-light">
                  {pkg.journey}
                </div>
                <div className="font-medium text-base text-white">
                  {pkg.title}
                </div>
              </div>
              <div className="bg-[#162033] p-5 rounded-2xl">
                <div className="mb-1">
                  <span className="text-white text-3xl font-bold">
                    €{displayPrice[index]}/
                  </span>
                  <span className="text-sm font-normal text-white">
                    subject annually
                  </span>
                </div>
                <p className="text-[#C9C9C9] text-base lg:text-lg mt-3 mb-4">
                  {pkg.description}
                </p>
                <button
                  className={`w-full py-3 rounded-md font-medium ${
                    pkg.buttonVariant === "primary"
                      ? "bg-g1 text-white"
                      : "bg-transparent border border-[#2D364A] text-white hover:bg-gray-700"
                  }`}
                >
                  {pkg.buttonText}
                </button>
              </div>
            </div>
            <div className="mt-auto bg-[#162033] p-5 rounded-2xl">
              {pkg.features
                .slice(0, showAllFeatures ? pkg.features.length : 3)
                .map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 mb-3">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      className="mt-1"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="-0.00488281"
                        width={24}
                        height={24}
                        rx={12}
                        fill="white"
                      />
                      <path
                        d="M17.5437 8.6405L11.8395 16.3813C11.7035 16.5618 11.5006 16.6801 11.2765 16.7095C11.0524 16.739 10.8259 16.6772 10.6478 16.538L6.57449 13.2813C6.21505 12.9937 6.15685 12.4691 6.44449 12.1097C6.73214 11.7502 7.25671 11.692 7.61616 11.9797L11.0128 14.6972L16.202 7.65467C16.3722 7.39933 16.6689 7.25815 16.9743 7.2872C17.2798 7.31625 17.5446 7.51081 17.6636 7.79365C17.7826 8.07648 17.7365 8.40182 17.5437 8.6405Z"
                        fill="black"
                      />
                    </svg>
                    <span className="flex-1 text-base lg:text-lg text-[#C9C9C9]">
                      {feature}
                    </span>
                  </div>
                ))}
              {pkg.features.length > 3 && (
                <button
                  className="text-[#fff] underline text-sm font-medium mt-2"
                  onClick={() => toggleExpand(index)}
                >
                  {showAllFeatures ? "Show Less" : "Load More"}
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PackageCards;
