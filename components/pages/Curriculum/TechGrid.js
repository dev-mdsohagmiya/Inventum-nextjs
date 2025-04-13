"use client";
import arrowTop from "@/public/icons/arrow-top.webp";
import { useState } from "react";
import Techjson from "./Tech.json";
import TechCards from "./TechCards";

export default function TechGrid(props) {
  const [showAllTechs, setShowAllTechs] = useState(
    props.topTechs === undefined ? true : false
  );

  const customTechsNames = props.topTechs ?? Techjson;

  // Filter techs based on their names
  const filteredTechs = Techjson.filter((tech) =>
    customTechsNames.includes(tech.Course)
  );

  return (
    <div className={props.className ?? "bg-dl"}>
      <div className=" grid gap-10 mx-auto flex-wrap justify-center py-10 customgrid">
        {showAllTechs
          ? Techjson &&
            Techjson.map((subject, index) => {
              return (
                <TechCards
                  bg={props.bg}
                  id={`${index}`}
                  flipindex={`${index}`}
                  key={index}
                  name={subject.Course}
                  img={subject.img}
                  text={subject.Description}
                  position={subject.position}
                />
              );
            })
          : Techjson &&
            filteredTechs.map((subject, index) => {
              return (
                <TechCards
                  bg={props.bg}
                  id={`${index}`}
                  flipindex={`${index}`}
                  key={index}
                  name={subject.Course}
                  img={subject.img}
                  text={subject.Description}
                  position={subject.position}
                />
              );
            })}
        {props.topTechs === undefined ? (
          <></>
        ) : showAllTechs === false ? (
          <button
            onClick={() => setShowAllTechs(true)}
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
              Show All Modules
            </h5>
          </button>
        ) : showAllTechs === true ? (
          <button
            onClick={() => setShowAllTechs(false)}
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
              Show Less Modules
            </h5>
          </button>
        ) : (
          <p>An error occured, please reload.</p>
        )}
      </div>
    </div>
  );
}
