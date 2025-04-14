"use client";
import { useState } from "react";
import Mindsetjson from "./Mindset.json";
import TechCards from "./TechCards";
export default function MindsetGrid(props) {
  const [showAllMindsets, setShowAllMindsets] = useState(
    props.topMindsets === undefined ? true : false
  );

  const customMindsetsNames = props.topMindsets ?? Mindsetjson;

  // Filter mindsets based on their names
  const filteredMindsets = Mindsetjson.filter((mindset) =>
    customMindsetsNames.includes(mindset.Mindset)
  );
  return (
    <div className="bg-dl">
      <div className=" grid gap-10 mx-auto flex-wrap justify-center py-10 customgrid">
        {showAllMindsets
          ? Mindsetjson &&
            Mindsetjson.map((mindset) => {
              return (
                <TechCards
                  name={mindset.Mindset}
                  img={mindset.img}
                  text={mindset.Text}
                  size={mindset.size}
                  key={mindset.Mindset}
                  position={mindset.position}
                />
              );
            })
          : Mindsetjson &&
            filteredMindsets.map((mindset) => {
              return (
                <TechCards
                  name={mindset.Mindset}
                  img={mindset.img}
                  text={mindset.Text}
                  size={mindset.size}
                  key={mindset.Mindset}
                  position={mindset.position}
                />
              );
            })}
        {props.topMindsets === undefined ? (
          <></>
        ) : showAllMindsets === false ? (
          <button
            onClick={() => setShowAllMindsets(true)}
            className={`w-72 h-40 hover:bg-pg hover:bg-clip-text hover:text-transparent arrow-hover-filter text-ll`}
          >
            <img
              draggable={false}
              alt="arrow"
              className="rotate-180 md:rotate-90 mx-auto w-20 bg-inherit "
              width={"60rem"}
              src={"/icons/arrow-top.webp"}
            ></img>
            <h5 className="mb-2 text-lg font-bold tracking-tight">
              Show All Mindsets
            </h5>
          </button>
        ) : showAllMindsets === true ? (
          <button
            onClick={() => setShowAllMindsets(false)}
            className={`w-72 h-40 hover:bg-pg hover:bg-clip-text hover:text-transparent arrow-hover-filter text-ll`}
          >
            <img
              draggable={false}
              alt="arrow"
              className="-rotate-180 md:-rotate-90 brightness-200 mx-auto w-20"
              width={"60rem"}
              src={"/icons/arrow-top.webp"}
            ></img>
            <h5 className="mb-2 text-lg font-bold tracking-tight ">
              Show Less Mindsets
            </h5>
          </button>
        ) : (
          <p>An error occured, please reload.</p>
        )}
      </div>
    </div>
  );
}
