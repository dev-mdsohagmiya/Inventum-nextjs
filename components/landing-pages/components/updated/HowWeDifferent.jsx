import CallButton from "@/hooks/CallButton";
import { useState } from "react";
import SectionName from "../ui/SectionName";
import SectionTitle from "../ui/SectionTitle";
const ROWS = [
  "Learning Pace",
  "Flexibility",
  "Education Delivery",
  "Lesson Accessibility",
  "Personal Support",
  "Future Readiness",
];

const us = [
  "Personal, based on student progress",
  "Study anytime, anywhere",
  "1:1 lessons with flexible formats",
  "Recorded & live lessons for key topics",
  "1-on-1 Success Coach check-ins",
  "Technology & Mindset Education",
];

const Competition = [
  "Fixed for the whole class",
  "Fixed Schedule, 9am-3pm, 5d/week",
  "One-size-fits-all approach",
  "Live classes only, missed lessons = gaps",
  "1 teacher for the entire class",
  "Non-existent or limited",
];

const HowWeDifferent = () => {
  const [visibleItems, setVisibleItems] = useState(4);

  const loadMore = () => {
    setVisibleItems((prev) => Math.min(prev + 4, ROWS.length));
  };
  return (
    <section id="compare" className="py-14 rounded-[50px] lg:py-20">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-4">
          <SectionName>A Smarter Way to Learn</SectionName>
          <SectionTitle
            title={"Comparing"}
            colouredTitle="Inventum"
            afterTitle="with the alternatives."
          />
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
              {us.map((item, index) => (
                <div
                  key={`us-${index}`}
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
                  Other (Online) Schools
                </p>
              </div>
              {Competition.map((item, index) => (
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
                <h6 className="text-xl font-semibold text-white ml-2 opacity-100 uppercase tracking-wider">
                  {row}
                </h6>
                <div className="space-y-4">
                  <div className="p-4 rounded-[8px] bg-[#fff]/10">
                    <span className="block text-base uppercase text-white/60 font-semibold mb-1">
                      Inventum
                    </span>
                    <p className="text-sm text-white">{us[index]}</p>
                  </div>
                  <div className="p-4 rounded-[8px] bg-[#fff]/[0.02]">
                    <span className="block text-base uppercase text-gray-500 font-semibold mb-1">
                      Other (Online) Schools
                    </span>
                    <p className="text-sm text-white">{Competition[index]}</p>
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
      <div className="flex justify-center mt-8">
        <CallButton />
      </div>
    </section>
  );
};

export default HowWeDifferent;
