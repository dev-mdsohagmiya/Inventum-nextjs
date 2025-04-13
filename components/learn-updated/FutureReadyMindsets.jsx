"use client";
import Mindsetjson from "@/data/curriculum/mindset.json";
import Techjson from "@/data/curriculum/tech.json";
import { useEffect, useRef, useState } from "react";
import SectionTitle from "../ui/SectionTitle";
import TabNavigation from "./TabNavigation";

const MindsetCard = ({ title, description, image, imageOrder }) => {
  return (
    <div className="relative min-h-[200px] lg:min-h-[400px] grid grid-cols-2 gap-5 rounded-lg overflow-hidden">
      <div className="p-6 bg-white/10 px-5 py-8 rounded-[20px] flex flex-col gap-y-6 justify-between">
        <h3 className="text-white text-xl font-bold xl:text-3xl mb-4">
          {title}
        </h3>
        <p className="text-[#C9C9C9] xl:text-lg text-sm">{description}</p>
      </div>
      <div className={`${imageOrder}`}>
        <img
          src={image || "/placeholder.svg"}
          srcSet={`${image}?w=500 500w, ${image}?w=1000 1000w, ${image}?w=1500 1500w`}
          sizes="(max-width: 600px) 500px, (max-width: 1200px) 1000px, 1500px"
          alt={title}
          className="w-full h-full  rounded-[20px]  object-cover"
        />
      </div>
    </div>
  );
};

export default function FutureReadyMindsets() {
  const [activeTab, setActiveTab] = useState("mindset");
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const tabs = [
    { id: "technology", label: "Future Technology" },
    { id: "mindset", label: "Mindset Modules" },
  ];

  // Determine the visible modules based on the active tab
  const visibleModules = showAll
    ? activeTab === "mindset"
      ? Mindsetjson
      : Techjson
    : isMobile
    ? activeTab === "mindset"
      ? Mindsetjson.slice(0, 1)
      : Techjson.slice(0, 1)
    : activeTab === "mindset"
    ? Mindsetjson.slice(0, 4)
    : Techjson.slice(0, 4);

  const handleToggleShowAll = () => {
    if (showAll) {
      sectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setShowAll((prev) => !prev);
  };

  return (
    <div
      ref={sectionRef}
      className="bg-g_dark mt-16 xl:mt-24 py-12 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title={"Future-Ready Mindsets & Technologies"}
          subTitle="We empower students with essential skills, knowledge, and values while offering 30+ cutting-edge technology modules, preparing them to thrive in a rapidly evolving world."
        />

        <TabNavigation
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabs={tabs}
          className="justify-start"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {visibleModules.map((item) => (
            <MindsetCard
              key={item.id}
              title={item.Mindset || item.Course}
              description={item.Text || item.Description}
              image={item.img || item.image}
              imageOrder={item.position}
            />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={handleToggleShowAll}
            className="bg-transparent border border-gray-600 lg:text-base text-white rounded-[12px] px-6 py-3 text-sm hover:bg-gray-800 transition-colors"
          >
            {showAll ? "Show Less" : "View All Modules"}
          </button>
        </div>
      </div>
    </div>
  );
}
