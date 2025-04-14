"use client";

import CallInline from "@/hooks/CallInline.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { lazy, useState } from "react";
import Routes from "./components/Routes.jsx";
const CallButton = lazy(() => import("@/hooks/CallButton.js"));

const PT = lazy(() => import("@/components/pages/PrecissionTeaching/PT.jsx"));
const Mindset = lazy(() => import("../Google-Ads/components/Mindet.js"));
const FuTe = lazy(() => import("../Google-Ads/components/FuTe.js"));

library.add(faSpinner);

export default function SA() {
  const [openTab, setOpenTab] = useState(1);
  return (
    <>
      <title>Most Flexible Online International School</title>
      <meta
        name="description"
        content={
          "The best online international school in the world. We have 1 to 1 support from teachers and study coaches for all learners."
        }
      />
      <meta
        name="keywords"
        content={
          "online school, online international school, international online school"
        }
      />
      <div className="bg-dl overflow-clip w-full">
        <div className="flex flex-col w-full items-center justify-center min-h-screen md:mt-12 pt-24 max-lg:container mx-auto">
          <h3 className="lg:text-3xl text-xl font-light text-center text-white mb-3">
            Study The Prestigious Cambridge Curriculum
          </h3>
          {
            <h1 className="text-3xl lg:text-5xl text-center text-white font-light max-w-[30ch] mx-auto">
              An
              <span className="text-transparent bg-pg font-extrabold bg-clip-text">
                {" "}
                Online Elite Cambridge School{" "}
              </span>
              to prepare you for the future
            </h1>
          }
          <div className="flex lg:flex-row flex-col items-center justify-center mt-12 gap-12">
            <img
              className="lg:w-1/2 w-3/4 max-w-3xl rounded-xl"
              width={"42rem"}
              alt="studying student"
              src={
                "https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/website%2Fstudying-girl.webp?alt=media&token=04373894-7b08-49ae-bb00-8ed2988fca24"
              }
            ></img>
            <ul className="text-xl md:text-2xl lg:text-3xl text-white list-disc gap-3 flex-col flex font-light ml-10">
              <li>Kids aged 10-18 (from year 5 to 13)</li>
              <li>Learn at your own pace</li>
              <li>Accredited Curriculum</li>
              <li>Personal study coaches and teachers</li>
              <li>Fun and innovative extracurriculars</li>
              <li>Less stressful than normal school</li>
              <li>Future Technology and Mindset Modules</li>
              <li>Focus on well-being</li>
              <div className="flex mt-8 lg:mt-3 gap-2 -ml-10 justify-center">
                <CallButton textSize="text-xl lg:text-2xl" />
                <a
                  data-tooltip-id="enquiry"
                  data-tooltip-content="Any questions?"
                  className="text-center text-xl lg:text-2xl hover:scale-[1.05] transition-all ease-in-out bg-pg px-2 rounded-xl items-center py-2 justify-end w-max h-max"
                  href="https://tally.so#tally-open=wgdboD&tally-overlay=1&tally-emoji-text=👋&tally-emoji-animation=wave"
                >
                  <span className="text-ll my-auto">Ask us a question!</span>
                </a>
              </div>
            </ul>
          </div>
        </div>
        <Routes />
        <div className="bg-dd text-white p-5 text-center ">
          <h2 className="font-bold text-3xl lg:text-5xl bg-pg text-transparent bg-clip-text">
            Let us assist you
          </h2>
          <p className="text-lg lg:text-2xl font-light max-w-prose mx-auto">
            Since you've shown interest in Inventum, let us assist you in your
            decision making. Book a call or send an enquiry. We will help you
            choose what's best for your specific requirements & address any
            questions you may have.
          </p>
          <div className="flex gap-2 justify-center items-center mt-5">
            <CallButton textSize="text-xl lg:text-2xl" />
            <a
              className="text-center text-xl lg:text-2xl hover:scale-[1.05] transition-all ease-in-out bg-pg px-2 rounded-xl items-center py-2 justify-end w-max h-max"
              href="https://tally.so#tally-open=wgdboD&tally-overlay=1&tally-emoji-text=👋&tally-emoji-animation=wave"
            >
              <span className="text-ll my-auto">Enquiry</span>
            </a>
          </div>
        </div>
        <Mindset />
        <FuTe dark />
        <PT novideo />
        <div className="bg-dd px-1 pb-5">
          <h2 className="text-3xl lg:text-5xl font-bold text-transparent bg-pg bg-clip-text text-center pt-8 pb-2">
            Visitors who reach this stage often schedule a call with us
          </h2>
          <h3 className="text-white text-center text-xl lg:text-2xl max-w-prose mx-auto">
            They find it a valuable step towards making an informed decision.
            During the call, we will assist you in selecting the option that
            best aligns with your child's needs and provide clarity on any
            questions you may have.
          </h3>
          <div className="max-w-[90vw] mx-auto my-5">
            <CallInline />
          </div>
          <p className="text-center text-white text-md lg:text-xl my-2">
            (Alternatively, you are always welcome to submit{" "}
            <a
              className="text-transparent bg-pg bg-clip-text"
              href='href="https://tally.so#tally-open=wgdboD&tally-overlay=1&tally-emoji-text=👋&tally-emoji-animation=wave"'
            >
              an enquiry form
            </a>{" "}
            to us directly)
          </p>
        </div>
      </div>
    </>
  );
}
