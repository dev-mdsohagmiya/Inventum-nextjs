import React from "react";

const TabNavigation = ({ activeTab, setActiveTab, tabs, className }) => {
  return (
    <div className={`inline-flex justify-center mt-8 mb-8 ${className}`}>
      <div className="inline-flex flex-wrap gap-6 md:flex-nowrap md:gap-0 bg-[#111827] rounded-full p-2 md:p-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`p-4 lg:p-5 border rounded-full text-xs md:text-sm font-medium transition-all ${
              activeTab === tab.id
                ? "border-[#EC4899] bg-[#111827] shadow-tab text-white"
                : "text-gray-300 border-transparent hover:text-white"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabNavigation;
