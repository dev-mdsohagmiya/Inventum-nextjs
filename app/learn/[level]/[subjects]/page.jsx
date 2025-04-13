"use client";

import Asubjects from "@/components/pages/Curriculum/Asubjects.json";
import IGCSEsubjects from "@/components/pages/Curriculum/IGCSEsubjects.json";
import ISFsubjects from "@/components/pages/Curriculum/ISFsubjects.json";
import ContentOverviewCard from "@/components/pages/Curriculum/renderSubjects/SubjectsComponents/ContentOverviewCard";
import { useInView } from "@/hooks/useInView";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { Children, useEffect, useState } from "react";

function Wrapper({ children }) {
  const params = useParams();
  const level = params.level;
  const count = Children.count(children);

  return (
    <>
      {level === "middleschool" ? (
        <div className="flex flex-col w-full gap-10">{children}</div>
      ) : count === 1 ? (
        <div className="flex md:w-2/3 mx-auto max-w-5xl">{children}</div>
      ) : count === 2 ? (
        <div className="grid lg:grid-cols-2 grid-cols-1 mx-auto md:gap-10 gap-5 items-center justify-center">
          {children}
        </div>
      ) : null}
    </>
  );
}

export default function SubjectPage() {
  const params = useParams();
  const pathname = usePathname();

  // Get the dynamic parts from the URL
  const learnRoute = params.learnRoute; // e.g., "learn-8"
  const level = params.level; // e.g., "a-levels"
  const subjectName = params.subjects; // e.g., "English-Literature"

  const [JSON, setJSON] = useState(null);
  const [levelText, setLevelText] = useState(null);
  const [Subject, setSubject] = useState(null);
  const [assessment, setAssessment] = useState([]);
  const [content, setContent] = useState([]);

  useEffect(() => {
    let jsonData = null;
    let levelTextValue = null;

    switch (level) {
      case "igcse":
        jsonData = IGCSEsubjects;
        levelTextValue = level.toUpperCase();
        break;
      case "middleschool":
        jsonData = ISFsubjects;
        levelTextValue = "Middle School";
        break;
      case "a-levels":
        jsonData = Asubjects;
        levelTextValue = "A Levels"; // Fixed the text for a-levels
        break;
      default:
        jsonData = null;
    }

    setJSON(jsonData);
    setLevelText(levelTextValue);

    if (jsonData) {
      const foundSubject = jsonData.find(
        (subject) => subject.name === subjectName
      );
      setSubject(foundSubject);

      if (foundSubject) {
        setAssessment(
          foundSubject.Assessment ? Object.values(foundSubject.Assessment) : []
        );
        setContent(
          foundSubject.Content ? Object.values(foundSubject.Content) : []
        );
      }
    }
  }, [level, subjectName]);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  if (!Subject) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    );
  }

  const count = Object.keys(content).length;
  const assessmentcount = Object.keys(assessment).length;

  return (
    <div className="flex flex-col min-h-screen bg-dl">
      <div className="mt-20 mb-10 p-10 bg-dd rounded-lg text-ll flex gap-3">
        <Link href={`/${learnRoute}`}>
          <span className="text-ld hover:text-dl">Home</span>
        </Link>
        <p>{">"}</p>
        <Link href={`/${learnRoute}/${level}/${subjectName}`}>
          <span className="text-ld hover:text-dl">
            {levelText} {subjectName.replaceAll("-", " ")}
          </span>
        </Link>
      </div>
      <div
        className={
          level === "middleschool"
            ? "flex lg:flex-row flex-col gap-10"
            : count === 1
            ? "flex justify-center mx-auto flex-col lg:flex-row w-full"
            : ""
        }
      >
        <div
          className={
            level === "middleschool"
              ? "lg:w-1/2 lg:ml-10 lg:mx-auto mx-2"
              : count === 1
              ? "lg:w-1/2 justify-center "
              : "md:mx-20 mx-5 xl:mx-52 2xl:mx-56"
          }
        >
          <h1
            ref={ref}
            className="bg-clip-text bg-pg text-transparent font-bold text-4xl text-center py-10"
          >
            Content overview
          </h1>
          <Wrapper>
            {content.map((con, index) => {
              return (
                <div
                  key={index}
                  className={`text-ll w-full hover:scale-105 mx-auto transition-all duration-100 ease-in-out flex flex-col bg-dd rounded-xl p-5 h-full animatable-${index} ${
                    inView ? "left" : ""
                  }`}
                >
                  <h1
                    className={` flex font-bold dark:text-ld animate ${
                      inView ? "shown-4" : ""
                    }`}
                  >
                    {con.title}
                  </h1>
                  <ul className="mt-5">
                    {con.p.split("\n").map((line, index) => (
                      <li
                        className={` list-disc ml-4 dark:text-ld animate ${
                          inView ? `shown-${4 + index}` : ""
                        }`}
                        key={index}
                      >
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </Wrapper>
        </div>
        <div className={count === 1 ? "lg:w-1/2" : "mx-5 xl:mx-36 2xl:mx-56"}>
          <h1 className="bg-clip-text bg-pg text-transparent font-bold text-4xl text-center py-10 mx-auto">
            Assessment overview
          </h1>

          <div
            className={
              level === "middleschool"
                ? " mx-2 lg:mx-auto gap-10 flex flex-col  lg:pr-10"
                : assessmentcount === 1
                ? "w-max mx-auto"
                : "grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-5 mx-10"
            }
          >
            {assessment.map((ass, index) => {
              return (
                <ContentOverviewCard
                  title={ass.title}
                  time={ass.time}
                  p={ass.p}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
      {level === "middleschool" ? null : (
        <div className="h-max flex items-center justify-center">
          <a
            href={Subject.pdf}
            target={"_blank"}
            rel="noreferrer"
            className="bg-pg py-2 px-5 rounded-xl m-10 text-ll font-bold active:translate-y-1 hover:scale-[1.025] ease-in-out"
          >
            Learn more about this subject!
          </a>
        </div>
      )}
    </div>
  );
}
