"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function WBBody() {
  const tabs = [
    {
      title: "Well being App- Ei Pulse",
      description:
        "All our students have access to a well-being app called Ei Pulse.  The app sends learners a weekly check-in, building their emotional intelligence and enabling them to ask for all aspects of help and support when they need it.",
      tabIndex: 1,
    },
    {
      title: "Enrichment Activities",
      description:
        "Enrichment activities ensure that learners continue to have personal contact with other learners. This helps learners build friendships, work collaboratively whilst doing something that they are interested in, and increase their engagement and self-esteem.  Inventum International facilitates both external and internal activities, such as:",
      tabIndex: 2,
    },
    {
      title: "Personal and Mindset Modules",
      description:
        "Inventum International provides bespoke opportunities for our learners to expand and explore their personal mindsets, encouraging the development of the essential skills, knowledge, attitudes and values to make a positive impact on their world and be ready for the future.",
      tabIndex: 3,
    },
    {
      title: "Study Coach",
      description:
        "Each Inventum International learner is matched with a Study Coach. The role of the Study Coach is to support the learner to ensure that they are managing with their modules, help the learner manage their time effectively, overcome any challenges and support and motivate the learner.",
      tabIndex: 4,
    },
  ];
  const [openTab, setOpenTab] = useState(2);
  const [layout, setLayout] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 1330) {
        setLayout(1);
      } else {
        setLayout(0);
      }
    };

    // Initial call
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="">
      {layout === 0 ? (
        <div
          className={`bg-dl text-white text-md text-center text-md flex xl:gap-20 gap-5 py-10 transition-all ease-in-out duration-300 p-20 ${
            openTab === 2 ? "items-center" : ""
          }`}
        >
          <div
            className={`tabcontainer justify-center 2xl:justify-start gap-10 pl-10 border-l-4 border-gradient-vert py-5 text-xl ${
              openTab === 3 ? "pr-10" : ""
            }`}
          >
            {tabs.map((item, index) => (
              <div
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(index + 1);
                }}
                className={
                  openTab === item.tabIndex
                    ? "text-transparent bg-clip-text bg-pg w-max font-bold selected"
                    : "hover:text-transparent hover:bg-pg hover:brightness-75 hover:bg-clip-text rounded-xl w-max font-bold"
                }
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="max-w-4xl">
            {tabs.map((item, index) => (
              <div
                key={index}
                className={
                  openTab === item.tabIndex
                    ? "flex flex-col justify-center mx-20 text-xl animate shown"
                    : "hidden"
                }
              >
                <h1 className="text-transparent bg-clip-text bg-pg w-max font-bold text-5xl mx-auto pb-5">
                  {item.title}
                </h1>
                <div
                  className={
                    openTab === item.tabIndex ? "animate shown" : "hidden"
                  }
                >
                  {item.description}
                  <span
                    className={
                      openTab === 3 ? "inline-block text-xl" : "hidden"
                    }
                  >
                    <a
                      className="group text-transparent bg-clip-text bg-pg transition-all duration-300 ease-in-out"
                      href="https://inventumonline.com/personal-mindset-education"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      <span className="bg-left-bottom bg-gradient-to-r from-pink-500 to-purple-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                        &nbsp;Click here
                      </span>
                    </a>{" "}
                    to see the topics that are covered.
                  </span>
                </div>
              </div>
            ))}
            <div className={openTab === 2 ? "animate shown" : "hidden"}>
              <div
                className={
                  openTab === 2
                    ? "animate shown flex mx-20 flex-wrap gap-5 justify-center pt-10 "
                    : "hidden"
                }
              >
                <div className="bg-dd rounded-xl font-bold px-4 py-3">
                  🧑‍💻 Daigon Esports
                </div>
                <div className="bg-dd rounded-xl font-bold px-4 py-3">
                  🥇 Junior Duke Award
                </div>
                <div className="bg-dd rounded-xl font-bold px-4 py-3">
                  ♖ Learning and competing in chess competitions
                </div>
                <div className="bg-dd rounded-xl font-bold px-4 py-3">
                  📚 Book clubs
                </div>
                <div className="bg-dd rounded-xl font-bold px-4 py-3">
                  🐶 Pop-up social events such as bring your pet to school day
                </div>
                <div className="bg-dd rounded-xl font-bold px-4 py-3">
                  📸 Photography club
                </div>
                <div className="bg-dd rounded-xl font-bold px-4 py-3">
                  🧑‍🍳 Cooking club
                </div>
                <div className="bg-dd rounded-xl font-bold px-4 py-3">
                  🗣️ Debating club{" "}
                </div>{" "}
                <div className="bg-dd rounded-xl font-bold px-4 py-3">
                  🤖 Robotics club with our partner: Tech and Play
                </div>
              </div>
            </div>
            <div
              className={
                openTab === 1 ? "animate shown mx-auto w-max" : "hidden"
              }
            >
              <a
                className={
                  openTab === 1 ? "animate shown mx-auto w-max" : "hidden"
                }
                href="https://www.educatorimpact.com/pulse"
                target={"_blank"}
                rel="noreferrer"
              >
                <img
                  width={80}
                  src="https://clever-partner-images.s3.amazonaws.com/ei-pulse-dev-ei%20LOGO%20PURPLE%20RGB%20(1).png"
                  alt="ei pulse logo"
                ></img>
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-dl text-white text-sm md:text-md lg:text-xl text-center text-md py-10 w-screen overflow-x-clip">
          <div className="tabbycontainer flex gap-5 w-screen sm:justify-center overflow-x-auto whitespace-nowrap tab-container-scrollable px-2 md:px-0">
            {tabs.map((item, index) => (
              <div
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(index + 1);
                }}
                className={
                  openTab === item.tabIndex
                    ? "text-transparent bg-clip-text bg-pg selected w-max font-bold"
                    : "hover:text-transparent hover:bg-pg hover:brightness-75 hover:bg-clip-text rounded-xl w-max font-bold"
                }
              >
                {item.title}
                {openTab === item.tabIndex && (
                  <motion.div
                    className="bg-pg"
                    layoutId="underline"
                    initial={false}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="mt-5 pb-10">
            {tabs.map((item, index) => (
              <div
                key={index}
                className={
                  openTab === item.tabIndex
                    ? "flex flex-col justify-center md:mx-20 mx-2 md:text-xl text-lg animate shown"
                    : "hidden"
                }
              >
                <h1 className="text-transparent bg-clip-text bg-pg font-bold md:text-5xl text-3xl flex justify-center pb-5 whitespace-normal">
                  {item.title}
                </h1>
                <div
                  className={
                    openTab === item.tabIndex
                      ? "animate shown inline"
                      : "hidden"
                  }
                >
                  <p className="text-sm md:text-xl">{item.description}</p>
                  <span
                    className={
                      openTab === 3
                        ? "inline-block text-sm md:text-xl"
                        : "hidden"
                    }
                  >
                    <a
                      className="group text-transparent bg-clip-text bg-pg transition-all duration-300 ease-in-out"
                      href="https://inventumonline.com/personal-mindset-education"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      <span className="bg-left-bottom bg-gradient-to-r from-pink-500 to-purple-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                        &nbsp;Click here
                      </span>
                    </a>{" "}
                    to see the topics that are covered.
                  </span>
                </div>
              </div>
            ))}
            <div className={openTab === 2 ? "animate shown" : "hidden"}>
              <div
                className={
                  openTab === 2
                    ? "animate shown flex md:mx-20 mx-2 flex-wrap gap-5 justify-center pt-10 text-sm md:text-xl"
                    : "hidden"
                }
              >
                <div className="bg-dd rounded-xl font-bold px-4 py-3">
                  🧑‍💻 Daigon Esports
                </div>
                <div className="bg-dd rounded-xl font-bold px-4 py-3">
                  🥇 Junior Duke Award
                </div>
                <div className="bg-dd rounded-xl font-bold px-4 py-3">
                  ♖ Learning and competing in chess competitions
                </div>
                <div className="bg-dd rounded-xl font-bold px-4 py-3">
                  📚 Book clubs
                </div>
                <div className="bg-dd rounded-xl font-bold px-4 py-3">
                  🐶 Pop-up social events such as bring your pet to school day
                </div>
                <div className="bg-dd rounded-xl font-bold px-4 py-3">
                  📸 Photography club
                </div>
                <div className="bg-dd rounded-xl font-bold px-4 py-3">
                  🧑‍🍳 Cooking club
                </div>
                <div className="bg-dd rounded-xl font-bold px-4 py-3">
                  🗣️ Debating club{" "}
                </div>{" "}
                <div className="bg-dd rounded-xl font-bold px-4 py-3">
                  🤖 Robotics club with our partner: Tech and Play
                </div>
              </div>
            </div>
            <div
              className={
                openTab === 1
                  ? "animate shown mx-auto w-max text-sm md:text-xl"
                  : "hidden"
              }
            >
              <a
                className={
                  openTab === 1 ? "animate shown mx-auto w-max" : "hidden"
                }
                href="https://www.educatorimpact.com/pulse"
                target={"_blank"}
                rel="noreferrer"
              >
                <img
                  src="https://www.educatorimpact.com/wp-content/uploads/2023/02/ei-blue-white.png"
                  alt="ei pulse logo"
                ></img>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
