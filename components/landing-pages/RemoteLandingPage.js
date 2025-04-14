"use client";

import ASubjects from "@/components/pages/Curriculum/ASubjects";
import MindsetGrid from "@/components/pages/Curriculum/MindsetGrid";
import TechGrid from "@/components/pages/Curriculum/TechGrid";
import CallButton from "@/hooks/CallButton";
import CallInline from "@/hooks/CallInline.js";
import { useState } from "react";
import TierCards from "./components/Pricing/TierCards";
export default function RemoteLandingPage() {
  const [openTab, setOpenTab] = useState(1);
  return (
    <div className="bg-dl overflow-clip w-full">
      <div className="flex flex-col w-full items-center justify-center min-h-screen md:mt-12 pt-24 max-lg:container mx-auto pb-5">
        <h3 className="lg:text-3xl text-xl font-light text-center text-white mb-3">
          Flexible Work Meets Flexible Education
        </h3>
        <div className="">
          <h1 className="text-3xl mb-10 lg:mb-0 lg:text-5xl text-center max-w-[50ch] text-transparent bg-pg font-extrabold bg-clip-text">
            Educational allowance to your employees
          </h1>
        </div>
        <div className="flex lg:flex-row flex-col items-center justify-center gap-12">
          <img
            className="lg:w-1/2 w-3/4 max-w-3xl rounded-xl"
            width={"42rem"}
            alt="studying student"
            src={
              "https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/website%2Fstudying-girl.webp?alt=media&token=04373894-7b08-49ae-bb00-8ed2988fca24"
            }
          ></img>
          <ul className="md:text-xl text-lg lg:text-2xl text-white max-w-xl list-disc gap-5 flex-col flex font-light ml-10 lg:mt-12">
            <li>Cambridge online education from ages 10 to 18</li>
            <li>Built to support your employees’ children</li>
            <li>Enhance employee satisfaction and loyalty </li>
            <li>Attract top talent</li>
            <li>Improve work-life balance</li>
            <li>Make your staff more mobile and adaptable</li>
            <li>Improve inclusion by offering equal learning opportunities</li>
            <li>Build positive company culture</li>
            <div className="flex mt-8 lg:mt-3 gap-10 -ml-10 justify-center">
              <CallButton textSize="text-xl lg:text-2xl" />
              <a
                data-tooltip-id="enquiry"
                data-tooltip-content="Any questions?"
                className="text-center text-xl lg:text-2xl hover:scale-[1.05] transition-all ease-in-out bg-pg px-2 rounded-xl items-center py-2 justify-end w-max h-max"
                href="https://tally.so#tally-open=wgdboD&tally-overlay=1&tally-emoji-text=👋&tally-emoji-animation=wave"
              >
                <span className="text-ll my-auto">Ask us a question</span>
              </a>
            </div>
          </ul>
        </div>
      </div>
      <div className="bg-dd py-10">
        <div className="text-xl text-ll flex max-w-[90rem] mx-auto justify-center gap-3 lg:flex-row flex-col items-center px-5">
          <h3 className="font-bold bg-pg text-3xl lg:text-5xl text-start bg-clip-text text-transparent whitespace-nowrap">
            What we do
          </h3>
          <p className="mx-5 text-center lg:max-w-[80ch] lg:text-start lg:mx-auto text-xl">
            Inventum International Online School offers a{" "}
            <span className="text-transparent bg-pg bg-clip-text">
              unique and invaluable educational solution for remote companies
              and Digital Nomad families.
            </span>{" "}
            Our online school provides a stable, consistent, innovative and
            high-quality educational experience for the children of your
            employees, mirroring the flexibility and global reach of remote
            work.
          </p>
        </div>
      </div>
      <h1 className="text-3xl lg:text-5xl text-center flex self-center pt-10 pb-5 font-bold bg-clip-text text-transparent bg-pg w-max mx-auto">
        Subjects
      </h1>
      <p className="max-w-prose mx-auto text-center text-ll text-xl pb-10 px-5">
        Our students follow the world-renowned and universally accepted
        Cambridge curriculum. In addition to the classical subjects, we also
        offer some unique Cambridge subjects:
      </p>
      <ASubjects
        customurl={"remotework/a-levels"}
        notitle={true}
        topSubjects={[
          "Global-Perspectives-&-Research",
          "Environmental-Management",
          "Sociology",
          "Accounting",
          "French-Language",
        ]}
      />
      <div className="bg-dd">
        <h1 className="text-3xl lg:text-5xl text-center flex self-center pt-10 pb-5 font-bold bg-clip-text text-transparent bg-pg w-max mx-auto">
          Future Technologies
        </h1>
        <p className="max-w-prose mx-auto text-center text-ll text-xl pb-10 px-5">
          We are the only school to offer over 30 cutting-edge technology
          modules ensuring our students are equipped with the knowledge and
          skills to thrive in the rapidly evolving technological landscape.
        </p>
        <TechGrid
          bg="bg-dl"
          className="bg-dd"
          topTechs={[
            "Artificial Intelligence",
            "Blockchain",
            "Gene Editing",
            "Longevity",
            "Bionics",
          ]}
        />
      </div>

      <h1 className="text-3xl lg:text-5xl text-center flex self-center pt-10 pb-5 font-bold bg-clip-text text-transparent bg-pg w-max mx-auto">
        Personal Mindsets
      </h1>
      <p className="max-w-prose mx-auto text-center text-ll text-xl px-5 pb-10">
        We also provide bespoke opportunities for our learners to expand and
        explore their personal mindsets, encouraging the development of the
        essential skills, knowledge, attitudes and values to make a positive
        impact on their world and be ready for the future.{" "}
      </p>
      <MindsetGrid
        topMindsets={[
          "Appreciation",
          "Antifragility",
          "Stoicism",
          "Think like a CEO",
          "Embrace failure",
        ]}
      />
      <div className="bg-dd text-white p-5 text-center ">
        <h2 className="font-bold text-3xl lg:text-5xl bg-pg text-transparent bg-clip-text">
          Let's talk
        </h2>
        <p className="text-lg lg:text-xl font-light max-w-prose mx-auto">
          To learn more about the difference Inventum Online can make for your
          remote teams and their families, book a call or send us an enquiry. We
          will help you choose what's
          <span className="bg-pg bg-clip-text text-transparent">
            {" "}
            best for your company’s requirements
          </span>{" "}
          & address any questions you may have.
        </p>
        <div className="flex gap-5 justify-center items-center mt-5">
          <CallButton textSize="text-xl lg:text-2xl" />
          <a
            className="text-center text-xl lg:text-2xl hover:scale-[1.05] transition-all ease-in-out bg-pg px-2 rounded-xl items-center py-2 justify-end w-max h-max"
            href="https://tally.so#tally-open=wgdboD&tally-overlay=1&tally-emoji-text=👋&tally-emoji-animation=wave"
          >
            <span className="text-ll my-auto">Ask us a question</span>
          </a>
        </div>
      </div>
      <div className="pb-10">
        <h1 className="text-3xl lg:text-5xl text-center flex self-center pt-10 pb-5 font-bold bg-clip-text text-transparent bg-pg w-max mx-auto">
          What you get
        </h1>
        <p className="max-w-prose mx-auto text-center text-ll text-xl pb-10 px-5">
          Depending on the age of the child and the required learning journey
          our{" "}
          <span className="text-transparent bg-pg bg-clip-text">
            prices vary from EUR 170 to EUR 500 a month.
          </span>{" "}
          Inventum provides{" "}
          <span className=" bg-pg bg-clip-text text-transparent">
            a flexible learning environment
          </span>{" "}
          that adapts to varied schedules. Our asynchronous classes, coupled
          with recorded and optional live sessions, ensure that children can
          learn at their own pace and according to their personal preferences
          and abilities while accommodating the dynamic lifestyles of their
          choice.
        </p>
        <TierCards tier1="€170" tier2="€207" tier3="€315" />
      </div>

      <div className="bg-dd px-1 pb-5">
        <h2 className="text-3xl lg:text-5xl font-bold text-transparent bg-pg bg-clip-text text-center pt-8">
          Schedule a call with us
        </h2>
        <h3 className="text-white text-center text-xl lg:text-2xl max-w-prose mx-auto px-5">
          To learn more about the difference Inventum Online can make for your
          remote teams and their families, book a call or send us an enquiry.{" "}
          <span className="bg-pg bg-clip-text text-transparent">
            We personalise our offering to the needs, size and strategy of your
            company.
          </span>{" "}
          In essence, this means you have a partner who is invested in your
          success!
        </h3>
        <div className="max-w-[90vw] mx-auto my-5">
          <CallInline />
        </div>
      </div>
    </div>
  );
}
