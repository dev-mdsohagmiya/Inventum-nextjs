"use client";
import { useState } from "react";
import { InView } from "react-intersection-observer";
import IGCSEsubjectsjson from "./IGCSEsubjects.json";
import SubjectCards from "./SubjectCards";

export default function IGCSESubjects(props) {
  const [showAllSubjects, setShowAllSubjects] = useState(
    props.topSubjects === undefined ? true : false
  );

  const customSubjectsNames = props.topSubjects ?? IGCSEsubjectsjson;

  // Filter subjects based on their names
  const filteredSubjects = IGCSEsubjectsjson.filter((subject) =>
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
          ? IGCSEsubjectsjson.map((subject) => {
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
                    category={props.notitle ? "/learn/igcse" : "igcse"}
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
                    category={props.notitle ? "/learn/igcse" : "igcse"}
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
              src={"/images/learn/arrow-top.webp"}
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
        "name": "Arabic-Foreign-Language",
        "img": "https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/website%2Fcoming-soon-inventum.webp?alt=media&token=55fe44e1-39eb-45f2-b754-6db1ca15f1a3",
        "pdf": "https://drive.google.com/file/d/1E5x3rzfdWS8_XtKc7A0oZ5Kp5zSWLqhE/view?usp=share_link",
        "Assessment": {
            "Card1": {
                "title": "Paper 1 - Listening",
                "time": "1 hour 15 minutes",
                "p": "Candidates listen to a number of recordings and answer multiple-choice and matching questions."
            },
            "Card2": {
                "title": "Paper 2 - Reading",
                "time": "1 hour",
                "p": "Candidates read a number of texts and answer multiple-choice and matching questions as well as questions requiring short answers."
            },
            "Card3": {
                "title": "Paper 3 - Speaking",
                "time": "15 minutes",
                "p": "Candidates complete one role play and conversations on two topics. Internally assessed and externally moderated."
            },
            "Card4": {
                "title": "Paper 4 - Writing",
                "time": "1 hour",
                "p": "Candidates complete one form-filling task, one directed writing task and one task in the format of an email/letter or an article/blog. Externally assessed."
            }
        },
        "Content": {
            "Wrapper": {
                "title": "The subject content is organised in five broad topic areas. The syllabus gives students opportunities to develop and apply a wide range of foreign language skills.",
                "p": "Everyday activities \n Personal and social life \n The world around us \n The world of work \n The international world"
            }
        }
    }, */
