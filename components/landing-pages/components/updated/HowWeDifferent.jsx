"use client";
import { useState } from "react";
import SectionName from "../ui/SectionName";
import SectionTitle from "../ui/SectionTitle";
const ROWS = [
  "Learning Pace",
  "Content Delivery",
  "Lesson Accessibility",
  "Teacher Support",
  "Knowledge Retention",
  "Student Engagement",
  "Exam Preparation",
];

const Campaign = [
  "Personalized, based on student progress",
  "Tailored lessons with flexible formats",
  "Recorded & live lessons for key topics",
  "Regular Study Coach check-ins",
  "Frequent quizzes to reinforce learning",
  "Active, self-directed learning",
  "Ongoing mastery ensures confidence",
];

const TRADITIONAL_MATCHMAKING_SERVICES = [
  "Fixed for the whole class",
  "One-size-fits-all approach",
  "Live classes only, missed lessons = gaps",
  "Generalized instruction",
  "Focus on covering syllabus, not retention",
  "Can be passive or disengaging",
  "Last-minute cramming",
];

const HowWeDifferent = () => {
  const [visibleItems, setVisibleItems] = useState(4);

  const loadMore = () => {
    setVisibleItems((prev) => Math.min(prev + 4, ROWS.length));
  };
  return (
    <section className="py-14 rounded-[50px] lg:py-20">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-4">
          <SectionName>A Smarter Way to Learn</SectionName>
          <SectionTitle title={"How we different"} />
        </div>

        <div className="mx-auto pt-10  relative overflow-hidden">
          {/* Desktop View */}
          <div className="hidden lg:grid grid-cols-5 gap-4 md:gap-8 w-full lg:max-w-[1300px] mx-auto">
            <div className="flex flex-col gap-5">
              <div className="p-5 h-[72px]" />
              {ROWS.map((item, index) => (
                <div
                  key={`row-${index}`}
                  className="p-5 rounded-lg  " // Set a consistent height
                >
                  <p className="text-sm lg:text-lg xl:text-xl text-white text-left">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="rounded-xl flex flex-col gap-5 px-6 col-span-2"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 100%)",
              }}
            >
              <div className="p-5 h-[72px]">
                <p className="text-center mt-4 text-xl text-[#fff] font-medium">
                  Inventum
                </p>
              </div>
              {Campaign.map((item, index) => (
                <div
                  key={`campaign-${index}`}
                  className="p-5 bg-[#fff]/10 rounded-lg  " // Consistent height
                >
                  <p className="text-sm lg:text-lg xl:text-xl text-white text-left">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-5 col-span-2">
              <div className="p-5 h-[72px]">
                <p className="text-center text-xl text-white mt-4 opacity-65 font-medium">
                  TRADITIONAL MATCHMAKING SERVICES
                </p>
              </div>
              {TRADITIONAL_MATCHMAKING_SERVICES.map((item, index) => (
                <div
                  key={`traditional-${index}`}
                  className="p-5 bg-[#fff]/10 rounded-lg  " // Consistent height
                >
                  <p className="text-sm lg:text-lg xl:text-xl text-white text-left">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile View */}
          <div className="lg:hidden flex flex-col gap-4">
            {ROWS.slice(0, visibleItems).map((row, index) => (
              <div
                key={`mobile-${index}`}
                className="space-y-2 rounded-[8px] p-4 border border-white/20 text-lg"
              >
                <h6 className="text-md font-semibold text-white ml-2 opacity-100 uppercase tracking-wider">
                  {row}
                </h6>
                <div className="space-y-4">
                  <div className="p-4 rounded-[8px] bg-[#fff]/10">
                    <span className="block text-md uppercase text-white/60 font-semibold mb-1">
                      IVY CAMPAIGN
                    </span>
                    <p className="text-sm text-white">{Campaign[index]}</p>
                  </div>
                  <div className="p-4 rounded-[8px] bg-[#fff]/[0.02]">
                    <span className="block text-md uppercase text-gray-500 font-semibold mb-1">
                      TRADITIONAL MATCHMAKING SERVICES
                    </span>
                    <p className="text-sm text-white">
                      {TRADITIONAL_MATCHMAKING_SERVICES[index]}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {visibleItems < ROWS.length && (
              <div className="flex justify-center pt-4">
                <button
                  onClick={loadMore}
                  className="rounded-full text-white underline"
                >
                  Load More
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDifferent;
