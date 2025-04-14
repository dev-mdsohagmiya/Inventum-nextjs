import PropTypes from "prop-types";
import React, { useState } from "react";
import SectionTitle from "../ui/SectionTitle";
import TabNavigation from "./TabNavigation";

import ASubjects from "@/components/pages/Curriculum/Asubjects.json";
import IGCSESubjects from "@/components/pages/Curriculum/IGCSEsubjects.json";
import ISFSubjects from "@/components/pages/Curriculum/ISFsubjects.json";
import CallButton from "@/hooks/CallButton";
import Link from "next/link";

const Subject = ({ up = [], igcse = [], alevels = [], url }) => {
  const [activeTab, setActiveTab] = useState("middleschool");
  const [year, setYear] = useState(ISFSubjects || []);
  const [showAllSubjects, setShowAllSubjects] = useState(false);
  const [topSubjects, setTopSubjects] = useState(up || []);

  React.useEffect(() => {
    if (activeTab === "middleschool") {
      setYear(ISFSubjects || []);
      setTopSubjects(up || []);
      setShowAllSubjects(false);
    } else if (activeTab === "igcse") {
      setYear(IGCSESubjects || []);
      setTopSubjects(igcse || []);
      setShowAllSubjects(false);
    } else if (activeTab === "a-levels") {
      setYear(ASubjects || []);
      setTopSubjects(alevels || []);
      setShowAllSubjects(false);
    }
  }, [activeTab, up, igcse, alevels]);

  // Safe filter with null checks
  const filteredSubjects = year.filter(
    (subject) => subject && subject.name && topSubjects.includes(subject.name)
  );
  return (
    <section
      id="subjects"
      className="container grid grid-cols-1 lg:grid-cols-2 sm:gap-10 lg:gap-14 xl:gap-20 bg-[#131B2C] py-14 rounded-[50px] lg:py-20"
    >
      <div>
        <SectionTitle
          title="Our Subjects"
          subTitle="Our curriculum blends academic excellence, future technologies, and personal development, ensuring students gain the knowledge, skills, and mindset needed for success."
          textAlign="left"
        />
        <div className="flex justify-start mt-4">
          <CallButton />
        </div>
        <div>
          <TabNavigation
            tabs={[
              { id: "middleschool", label: "Middleschool" },
              { id: "igcse", label: "IGCSE" },
              { id: "a-levels", label: "A-levels" },
            ]}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
      </div>
      <div className="flex flex-wrap lg:flex-col gap-y-3">
        {showAllSubjects
          ? year.map((subject) => {
              const name = subject.name.includes("-")
                ? subject.name.replaceAll("-", " ")
                : subject.name;
              return (
                <Link
                  href={`/${url}/${subject.name}`}
                  className="p-4 lg:p-8 rounded-[32px] bg-[#162033] inline-flex items-center gap-6 w-full shadow-md"
                >
                  <img
                    src={"/icons/book.svg"}
                    alt={subject.name}
                    className="w-5 lg:w-6"
                  />
                  <span className="text-base lg:text-2xl font-medium text-white">
                    {name}
                  </span>
                </Link>
              );
            })
          : filteredSubjects.map((subject,index) => {
              const name = subject.name.includes("-")
                ? subject.name.replaceAll("-", " ")
                : subject.name;
              return (
                <Link
                     key={index*545454}
                  href={`/${url}/${activeTab}/${subject.name}`}
                  className="p-4 lg:p-8 rounded-[32px] bg-[#162033] inline-flex items-center gap-6 shadow-md"
                >
                  <img
                    src={"/icons/book.svg"}
                    alt={subject.name}
                    className="w-5 lg:w-6"
                  />
                  <span className="text-base lg:text-2xl font-medium text-white">
                    {name}
                  </span>
                </Link>
              );
            })}
        <button
          onClick={() => setShowAllSubjects(!showAllSubjects)}
          className="text-white underline text-sm font-medium w-full text-center"
        >
          {!showAllSubjects ? "Load More" : "Show Less"}
        </button>
      </div>
    </section>
  );
};
Subject.propTypes = {
  up: PropTypes.arrayOf(PropTypes.string),
  igcse: PropTypes.arrayOf(PropTypes.string),
  alevels: PropTypes.arrayOf(PropTypes.string),
};

export default Subject;
