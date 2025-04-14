import React from "react";

const SectionName = ({ children }) => {
  return (
    <div className="inline-flex items-center py-3 px-4 bg-white/10 border-l-[3px] border-white">
      <span className="text-base text-white font-medium">{children}</span>
    </div>
  );
};

export default SectionName;
