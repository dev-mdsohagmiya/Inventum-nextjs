"use client";

import { useState } from "react";
import Mindset from "./Mindset.json";

export default function MindsetGrid({ topMindsets }) {
  const [hoveredMindset, setHoveredMindset] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5 max-w-7xl mx-auto">
      {Mindset.filter((mindset) => topMindsets.includes(mindset.name)).map(
        (mindset) => (
          <div
            key={mindset.name}
            className="bg-dl rounded-xl p-6 transform transition-all duration-300 hover:scale-105"
            onMouseEnter={() => setHoveredMindset(mindset.name)}
            onMouseLeave={() => setHoveredMindset(null)}
          >
            <h2 className="text-2xl font-bold text-white mb-3">
              {mindset.name}
            </h2>
            <p className="text-gray-300">{mindset.description}</p>
            {hoveredMindset === mindset.name && (
              <div className="mt-4">
                <span className="text-pg">Learn more about this mindset →</span>
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
}
