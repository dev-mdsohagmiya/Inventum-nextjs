"use client";
import arrowTop from "@/public/icons/arrow-top.webp";
import { useState } from "react";
import { InView } from "react-intersection-observer";
import ISFsubjects from "./ISFsubjects.json";
import SubjectCards from "./SubjectCards";
export default function ISFSubjects(props) {
  const [showAllSubjects, setShowAllSubjects] = useState(
    props.topSubjects === undefined ? true : false
  );

  const customSubjectsNames = props.topSubjects ?? ISFsubjects;

  // Filter subjects based on their names
  const filteredSubjects = ISFsubjects.filter((subject) =>
    customSubjectsNames.includes(subject.name)
  );

  return (
    <div
      className={`items-center flex flex-col w-full bg-dl ${
        InView ? "animate shown" : "animate"
      }`}
    >
      {props.notitle ? (
        <></>
      ) : (
        <h1 className="text-7xl text-center flex self-center py-10 font-bold bg-clip-text text-transparent bg-pg w-max">
          Subjects
        </h1>
      )}
      <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 min-[1700px]:grid-cols-4 justify-items-center">
        {showAllSubjects
          ? ISFsubjects.map((subject) => {
              const name = subject.name.includes("-")
                ? subject.name.replaceAll("-", " ")
                : subject.name;
              return (
                <div key={subject.name}>
                  <SubjectCards
                    name={name}
                    pathname={subject.name}
                    img={subject.img}
                    text={subject.text}
                    category={
                      props.notitle ? "learn/middleschool" : "middleschool"
                    }
                  />
                </div>
              );
            })
          : filteredSubjects.map((subject) => {
              const name = subject.name.includes("-")
                ? subject.name.replaceAll("-", " ")
                : subject.name;
              return (
                <div key={subject.name}>
                  <SubjectCards
                    name={name}
                    pathname={subject.name}
                    img={subject.img}
                    text={subject.text}
                    category={
                      props.notitle ? "learn/middleschool" : "middleschool"
                    }
                  />
                </div>
              );
            })}
        {props.topSubjects === undefined ? (
          <></>
        ) : showAllSubjects === false ? (
          <button
            onClick={() => setShowAllSubjects(true)}
            className={`w-72 h-40 hover:bg-pg hover:bg-clip-text hover:text-transparent arrow-hover-filter text-ll`}
          >
            <img
              draggable={false}
              alt="arrow"
              className="rotate-180 md:rotate-90 mx-auto w-20 bg-inherit "
              width={"60rem"}
              src={arrowTop}
            ></img>
            <h5 className="mb-2 text-lg font-bold tracking-tight">
              Show All Subjects
            </h5>
          </button>
        ) : showAllSubjects === true ? (
          <button
            onClick={() => setShowAllSubjects(false)}
            className={`w-72 h-40 hover:bg-pg hover:bg-clip-text hover:text-transparent arrow-hover-filter text-ll`}
          >
            <img
              draggable={false}
              alt="arrow"
              className="-rotate-180 md:-rotate-90 brightness-200 mx-auto w-20"
              width={"60rem"}
              src={arrowTop}
            ></img>
            <h5 className="mb-2 text-lg font-bold tracking-tight ">
              Show Less Subjects
            </h5>
          </button>
        ) : (
          <p>An error occured, please reload.</p>
        )}
      </div>
    </div>
  );
}

/* {
        "name": "Arabic-Beginner",
        "img": "https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/website%2Fcoming-soon-inventum.webp?alt=media&token=55fe44e1-39eb-45f2-b754-6db1ca15f1a3",
        "Assessment": {
            "Card1": {
                "title" : "All assessments are formative",
                "p": "There are no Cambridge Lower Secondary Progression Tests or Checkpoints for this subject."
            }
        },
        "Content": {
            "Learn": {
                "title": "In Arabic for beginners, learners:",
                "p": "understand and respond to spoken and written language from a variety of authentic sources \n speak with increasing confidence, fluency and spontaneity, finding ways of \n communicating what they want to say, including through discussion and asking \n questions, and continually improving the accuracy of their pronunciation and intonation \n write at varying length, for different purposes and audiences, using the variety of \n grammatical structures that they have learntdiscover and develop an appreciation of a range of writing in the language studied"  
            }
        }
    },
    {
        "name": "Arabic-Second-Language",
        "img": "https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/website%2Fcoming-soon-inventum.webp?alt=media&token=55fe44e1-39eb-45f2-b754-6db1ca15f1a3",
        "Assessment": {
            "Card1": {
                "title" : "All assessments are formative",
                "p": "There are no Cambridge Lower Secondary Progression Tests or Checkpoints for this subject."
            }
        },
         "Content": {
            "Learn": {
                "title": "In Arabic as a Second Language, learners:",
                "p": "Can understand sentences and frequently used expressions related to areas of most immediate relevance (e.g. very basic personal and family information, shopping, local geography, employment). \n Can communicate in simple and routine tasks requiring a simple and direct exchange of information on familiar and routine matters. \n Can describe in simple terms aspects of their background, immediate environment and matters in areas of immediate need. \n Can understand the main points of clear standard input on familiar matters regularly encountered in work, school, leisure, etc. \n Can deal with most situations likely to arise while travelling in an area where the language is spoken. \n Can produce simple connected text on topics that are familiar or of personal interest. \n Can describe experiences and events, dreams, hopes and ambitions and briefly give reasons and explanations for opinions and plans."
            }
        }
    }, */
