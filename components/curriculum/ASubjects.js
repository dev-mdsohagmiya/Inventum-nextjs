'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Asubjects from './Asubjects.json';

export default function ASubjects({ customurl, notitle, topSubjects }) {
    const router = useRouter();
    const [hoveredSubject, setHoveredSubject] = useState(null);

    const handleSubjectClick = (subject) => {
        router.push(`/${customurl}/${subject.name}`);
    };

    return (
        <div className="w-full">
            {!notitle && (
                <h1 className="text-3xl lg:text-5xl text-center flex self-center pt-10 pb-5 font-bold bg-clip-text text-transparent bg-pg w-max mx-auto">
                    A-Levels Subjects
                </h1>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5 max-w-7xl mx-auto">
                {Asubjects.filter(subject => topSubjects.includes(subject.name))
                    .map((subject) => (
                        <div
                            key={subject.name}
                            className="bg-dl rounded-xl p-6 cursor-pointer transform transition-all duration-300 hover:scale-105"
                            onMouseEnter={() => setHoveredSubject(subject.name)}
                            onMouseLeave={() => setHoveredSubject(null)}
                            onClick={() => handleSubjectClick(subject)}
                        >
                            <h2 className="text-2xl font-bold text-white mb-3">{subject.name}</h2>
                            <p className="text-gray-300">{subject.description}</p>
                            {hoveredSubject === subject.name && (
                                <div className="mt-4">
                                    <span className="text-pg">Click to learn more →</span>
                                </div>
                            )}
                        </div>
                    ))}
            </div>
        </div>
    );
} 