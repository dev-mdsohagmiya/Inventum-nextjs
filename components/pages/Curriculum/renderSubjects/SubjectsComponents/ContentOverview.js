"use client";

import { useInView } from "@/hooks/useInView";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Children, useEffect, useState } from "react";

import Asubjects from "../../Asubjects.json";
import IGCSEsubjects from "../../IGCSEsubjects.json";
import ISFsubjects from "../../ISFsubjects.json";
import ContentOverviewCard from "./ContentOverviewCard";
function Wrapper({ children }) {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const level = segments[segments.length - 2];
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

export default function ContentOverview() {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const subjectSlug = segments[segments.length - 1];
  const levelSlug = segments[segments.length - 2];

  const [Subject, setSubject] = useState(null);
  const [content, setContent] = useState([]);
  const [assessment, setAssessment] = useState([]);
  const [levelText, setLevelText] = useState("");
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 });

  useEffect(() => {
    let subjectsJson = null;
    let readableLevel = "";

    switch (levelSlug) {
      case "igcse":
        subjectsJson = IGCSEsubjects;
        readableLevel = "IGCSE";
        break;
      case "middleschool":
        subjectsJson = ISFsubjects;
        readableLevel = "Middle School";
        break;
      case "a-levels":
        subjectsJson = Asubjects;
        readableLevel = levelSlug.charAt(0).toUpperCase() + levelSlug.slice(1);
        break;
      default:
        subjectsJson = null;
    }

    if (subjectsJson) {
      const found = subjectsJson.find((s) => s.name === subjectSlug);
      if (found) {
        setSubject(found);
        setContent(Object.values(found.Content || {}));
        setAssessment(Object.values(found.Assessment || {}));
        setLevelText(readableLevel);
      }
    }
  }, [pathname]);

  if (!Subject) return null;

  return (
    <div className="flex flex-col min-h-screen">
      <div className="mt-20 mb-10 p-10 bg-dd rounded-lg text-ll flex gap-3">
        <Link href="/">
          <span className="text-ld hover:text-dl">Home</span>
        </Link>
        <p>{">"}</p>
        <Link href="/curriculum">
          <span className="text-ld hover:text-dl">Curriculum</span>
        </Link>
        <p>{">"}</p>
        <Link href={`/${levelSlug}`}>
          <span className="text-ld hover:text-dl">{levelText}</span>
        </Link>
        <p>{">"}</p>
        <Link href={`/${levelSlug}/${subjectSlug}`}>
          <span className="text-ld hover:text-dl">
            {subjectSlug.replaceAll("-", " ")}
          </span>
        </Link>
      </div>

      <div
        className={
          levelSlug === "middleschool"
            ? "flex lg:flex-row flex-col gap-10"
            : content.length === 1
            ? "flex justify-center mx-auto flex-col lg:flex-row w-full"
            : ""
        }
      >
        <div
          className={
            levelSlug === "middleschool"
              ? "lg:w-1/2 lg:ml-10 lg:mx-auto mx-2"
              : content.length === 1
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
            {content.map((con, index) => (
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
                      key={index}
                      className={` list-disc ml-4 dark:text-ld animate ${
                        inView ? `shown-${4 + index}` : ""
                      }`}
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Wrapper>
        </div>

        <div
          className={
            content.length === 1 ? "lg:w-1/2" : "mx-5 xl:mx-36 2xl:mx-56"
          }
        >
          <h1 className="bg-clip-text bg-pg text-transparent font-bold text-4xl text-center py-10 mx-auto">
            Assessment overview
          </h1>
          <div
            className={
              levelSlug === "middleschool"
                ? " mx-2 lg:mx-auto gap-10 flex flex-col  lg:pr-10"
                : assessment.length === 1
                ? "w-max mx-auto"
                : "grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-5 mx-10"
            }
          >
            {assessment.map((ass, index) => (
              <ContentOverviewCard
                key={index}
                title={ass.title}
                time={ass.time}
                p={ass.p}
              />
            ))}
          </div>
        </div>
      </div>

      {levelSlug !== "middleschool" && Subject?.pdf && (
        <div className="h-max flex items-center justify-center">
          <a
            href={Subject.pdf}
            target="_blank"
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
