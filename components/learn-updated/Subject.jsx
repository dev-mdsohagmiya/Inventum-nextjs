"use client";
import { useState } from "react";
import SectionTitle from "../ui/SectionTitle";
import TabNavigation from "./TabNavigation";

const subjectsData = {
  middleschool: [
    { icon: "/icons/book.svg", title: "Digital Literacy", id: "30" },
    {
      icon: "/icons/economy.svg",
      title: "Economic Management Sciences",
      id: "31",
    },
    { icon: "/icons/ENG.svg", title: "English", id: "32" },
    { icon: "/icons/Fr.svg", title: "French Beginner", id: "33" },
    { icon: "/icons/Fr.svg", title: "French Second Language", id: "34" },
    { icon: "/icons/Globe.svg", title: "Geography", id: "35" },
    { icon: "/icons/De.svg", title: "German Beginner", id: "36" },
  ],
  igcse: [
    { icon: "/icons/book.svg", title: "Accounting", id: "40" },
    { icon: "/icons/economy.svg", title: "Business Studies", id: "41" },
    { icon: "/icons/ENG.svg", title: "Environmental Management", id: "42" },
    { icon: "/icons/Fr.svg", title: "Sociology", id: "43" },
    { icon: "/icons/Fr.svg", title: "Global Perspectives", id: "44" },
  ],
  alevels: [
    { icon: "/icons/book.svg", title: "Computer Science", id: "50" },
    { icon: "/icons/economy.svg", title: "English Literature", id: "51" },
    { icon: "/icons/ENG.svg", title: "French Language", id: "52" },
    {
      icon: "/icons/Fr.svg",
      title: "Global Perspectives & Research",
      id: "53",
    },
    { icon: "/icons/Fr.svg", title: "Law", id: "54" },
  ],
};

const INITIAL_VISIBLE_COUNT = 5;

const Subject = () => {
  const [activeTab, setActiveTab] = useState("middleschool");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  const subjects = subjectsData[activeTab] || [];

  return (
    <section className="container grid grid-cols-1 lg:grid-cols-2 sm:gap-10 lg:gap-14 xl:gap-20">
      <div>
        <SectionTitle
          title="Subject"
          subTitle="Our curriculum blends academic excellence, future technologies, and personal development, ensuring students gain the knowledge, skills, and mindset needed for success."
          textAlign="left"
        />

        <TabNavigation
          tabs={[
            { id: "middleschool", label: "Middleschool" },
            { id: "igcse", label: "IGCSE" },
            { id: "alevels", label: "A-levels" },
          ]}
          activeTab={activeTab}
          setActiveTab={(tab) => {
            setActiveTab(tab);
            setVisibleCount(INITIAL_VISIBLE_COUNT); // Reset count on tab change
          }}
        />
      </div>

      <div className="flex flex-wrap lg:flex-col gap-y-3">
        {subjects.slice(0, visibleCount).map((item) => (
          <div
            key={item.id}
            className="p-4 lg:p-8 rounded-[32px] bg-[#162033] inline-flex items-center gap-6"
          >
            <img src={item.icon} alt={item.title} className="w-5 lg:w-6" />
            <span className="text-base lg:text-2xl font-medium text-white">
              {item.title}
            </span>
          </div>
        ))}

        <div className="mt-4 flex flex-col gap-2">
          {visibleCount < subjects.length ? (
            <button
              onClick={() => setVisibleCount(subjects.length)}
              className="text-white underline text-sm font-medium"
            >
              Load More
            </button>
          ) : (
            <button
              onClick={() => setVisibleCount(INITIAL_VISIBLE_COUNT)}
              className="text-white underline text-sm font-medium"
            >
              Show Less
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Subject;
