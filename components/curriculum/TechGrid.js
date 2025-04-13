'use client';

import { useState } from 'react';
import Tech from './Tech.json';

export default function TechGrid({ bg, className, topTechs }) {
    const [hoveredTech, setHoveredTech] = useState(null);

    return (
        <div className={`${bg} ${className}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5 max-w-7xl mx-auto">
                {Tech.filter(tech => topTechs.includes(tech.name))
                    .map((tech) => (
                        <div
                            key={tech.name}
                            className="bg-dl rounded-xl p-6 transform transition-all duration-300 hover:scale-105"
                            onMouseEnter={() => setHoveredTech(tech.name)}
                            onMouseLeave={() => setHoveredTech(null)}
                        >
                            <h2 className="text-2xl font-bold text-white mb-3">{tech.name}</h2>
                            <p className="text-gray-300">{tech.description}</p>
                            {hoveredTech === tech.name && (
                                <div className="mt-4">
                                    <span className="text-pg">Learn more about this technology →</span>
                                </div>
                            )}
                        </div>
                    ))}
            </div>
        </div>
    );
} 