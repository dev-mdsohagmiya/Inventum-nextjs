"use client";

import { useState } from "react";
import { InView } from "react-intersection-observer";
// import arrowTop from "../../../arrow-top.webp";
import Asubjectsjson from "./Asubjects.json";
import SubjectCards from "./SubjectCards";

export default function ASubjects(props) {
  const [showAllSubjects, setShowAllSubjects] = useState(
    props.topSubjects === undefined ? true : false
  );

  const customSubjectsNames = props.topSubjects ?? Asubjectsjson;

  // Filter subjects based on their names
  const filteredSubjects = Asubjectsjson.filter((subject) =>
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
      {props.text ? (
        <p className="max-w-prose mx-auto text-center text-ll text-xl">
          {props.text}
        </p>
      ) : (
        <></>
      )}
      <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 min-[1700px]:grid-cols-4 justify-items-center">
        {showAllSubjects
          ? Asubjectsjson.map((subject) => {
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
                    category={props.customurl ?? "a-levels"}
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
                    category={props.customurl ?? "a-levels"}
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
              src={"/icons/arrowtop.svg"}
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
        "name": "Arabic",
        "img": "https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/website%2Fcoming-soon-inventum.webp?alt=media&token=55fe44e1-39eb-45f2-b754-6db1ca15f1a3",
        "pdf":"https://drive.google.com/file/d/1cgU2E-OoWefvWp2Y3YPBszqbWq7PVHUV/view?usp=share_link",
"Assessment": {
            "Card1": {
                "title" : "Component 2 -Reading and Writing A Level Only",
                "time": "1 hour 45 minutes", 
                "p": "Two passages in Arabic are set which deal with related themes."
            },
            "Card2": {
                "title": "Component 3 - Essay A Level Only",
                "time": "1 hour 30 minutes",
                "p": "Essay in the target language of 250–400 words"
            },
            "Card3": {
                "title":"Component 4 - Texts",
                "time": "2 hour 30 minutes", 
                "p":"Three questions on three different texts in Arabic"
            },
            "Card4": {
                "title": "Component 5 - Prose",
                "time": "45 minutes",
                "p": "Translate a short passage from English into Arabic"
            }
        },
        "Content": {
            "AS": {
                "title": "Cambridge International AS and A Levels students studying this course will  gain lifelong skills, including:",
                "p": "the ability to communicate confidently and clearly in the target language;  \n a sound understanding of the nature of language and language study, and of the skills and abilities required for further study and leisure;  \n insight into the culture and contemporary society of countries where the language is spoken;  \n better integration into communities where the language is spoken;  \n positive attitudes towards language learning, towards the speakers of other languages, and towards other cultures and societies;  \n skills which can be used in other areas of learning, such as analysis and memory skills."	            
            },
            "A": {
                "title": "Cambridge International AS and A Levels students studying this course will  gain lifelong skills, including:",
                "p": "the ability to communicate confidently and clearly in the target language;  \n a sound understanding of the nature of language and language study, and of the skills and abilities required for further study and leisure;  \n insight into the culture and contemporary society of countries where the language is spoken;  \n better integration into communities where the language is spoken;  \n positive attitudes towards language learning, towards the speakers of other languages, and towards other cultures and societies;  \n skills which can be used in other areas of learning, such as analysis and memory skills."
            }
        }
    }, */
