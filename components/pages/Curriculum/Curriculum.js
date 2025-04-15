"use client";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

library.add(faUpRightFromSquare);
export default function Curriculum() {
  return (
    <div className="bg-dl">
      <div className="lg:bg-none lg:bg-dl bg-cover bg-left bg-[url(https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/website%2FCurriculumlanding.webp?alt=media&token=830c590a-4070-435d-a258-8f1f27087b10&_gl=1*33woxv*_ga*MTc0OTc0OTAxLjE2NzQyOTQxMzY.*_ga_CW55HF8NVT*MTY5ODQ4OTcyNS41NC4xLjE2OTg0OTExNDcuMTMuMC4w)] ">
        <div className="flex lg:flex-row-reverse flex-col items-center w-full lg:pl-5  ">
          <div className="ovalcut lg:brightness-100 lg:w-1/3 lg:h-screen h-0 relative hidden lg:block object-right-center-half overflow-hidden">
            <Image
              src={
                "https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/website%2FCurriculumlanding.webp?alt=media&token=830c590a-4070-435d-a258-8f1f27087b10&_gl=1*33woxv*_ga*MTc0OTc0OTAxLjE2NzQyOTQxMzY.*_ga_CW55HF8NVT*MTY5ODQ4OTcyNS41NC4xLjE2OTg0OTExNDcuMTMuMC4w"
              }
              alt="Curriculum Landing"
              fill
              className="object-cover object-left-center"
              priority
            />
          </div>
          <div className="w-full text-center lg:mx-10 backdrop-brightness-50 lg:backdrop-brightness-100">
            <h1 className="pt-24 text-5xl md:text-7xl py-10 font-bold bg-clip-text text-transparent bg-pg">
              Our Curriculum
            </h1>
            <div className="pt-5 px-5 text-center text-gray-200 text-lg">
              As an innovative online school offering secondary education, we
              have carefully selected our curriculum to offer only the very best
              to our Inventum learners. Irrespective of the Key Stage, Inventum
              learners have a range of Cambridge & Pearson subjects to choose
              from to ensure that they develop knowledge in areas which interest
              them, and our bespoke personal/mindset education ensures that they
              develop the skills and values to succeed today, and tomorrow. Each
              Journey also includes access to our exciting future technologies
              modules - Inventum is the only online school to offer this. All
              Inventum learners can learn more about the technologies of
              tomorrow, thus ensuring they are future ready.
              <br></br>
              <div className="rounded-xl my-6 bg-pg p-[0.1rem]">
                <div className="flex flex-col justify-between h-full bg-transparent rounded-lg"></div>
              </div>
              All journeys include our personal/mindset modules. All learners
              have access to our Digital Safety Modules, irrespective of their
              age. They must complete this module to ensure that they are
              equipped to stay safe online. Online safety is our top priority.
              <br></br>
              <div className="rounded-xl my-6 bg-pg p-[0.1rem]">
                <div className="flex flex-col justify-between h-full bg-transparent rounded-lg"></div>
              </div>
              All Inventum learners registering for Cambridge Advanced Levels
              also receive complimentary access to our Mathematics Literacy
              course. This South African course is designed to ensure all
              learners are financially and mathematically literate to start
              their journey after school. Mathematical concepts are taught in
              real-life contexts with real-world applications.
              <br></br>
              <div className="rounded-xl my-6 bg-pg p-[0.1rem]">
                <div className="flex flex-col justify-between h-full bg-transparent rounded-lg"></div>
              </div>
              Inventum International is also experienced in helping mature
              students reach their educational goals. Some adults require an
              additional Cambridge A-Level qualification to pursue a new course
              of study, or need to complete a part of their secondary education.
              At Inventum we realise the challenges mature students have, and
              work in partnership to find a best sollution. To discuss how we
              can help you reach your goals, please contact us.
            </div>
          </div>
        </div>
      </div>
      <ol className="md:flex-row flex-col mx-10 flex gap-10 relative text-ll pt-10 flex-wrap justify-center pb-20">
        <li className=" ml-12 rounded-lg p-4 bg-dd shadow-lg flex-1 basis-1/5 ">
          <a href="/middleschool" className=" delay-1000 duration-100 ">
            <div className="flex items-center justify-center w-10 h-10 bg-dd rounded-full -mt-6 -ml-6">
              <FontAwesomeIcon
                icon={faUpRightFromSquare}
                bounce
                style={{ duration: "1s", delay: "1s" }}
              />
            </div>
            <h3 className="font-bold text-transparent bg-clip-text text bg-pg w-max">
              Precision Teaching
            </h3>
          </a>
        </li>
        <li className=" ml-12 rounded-lg p-4 bg-dd shadow-lg flex-1 basis-1/5">
          <a href="/middleschool" className=" delay-1000 duration-100 ">
            <div className="flex items-center justify-center w-10 h-10 bg-dd rounded-full -mt-6 -ml-6">
              <FontAwesomeIcon
                icon={faUpRightFromSquare}
                bounce
                style={{ duration: "1s", delay: "1s" }}
              />
            </div>
            <h3 className="font-bold text-transparent bg-clip-text text bg-pg w-max">
              IB vs A-Levels
            </h3>
          </a>
        </li>
        <li className=" ml-12 rounded-lg p-4 bg-dd shadow-lg flex-1 basis-1/5">
          <a href="future-technologies" className=" ">
            <div className="flex items-center justify-center w-10 h-10 bg-dd rounded-full -mt-6 -ml-6">
              <FontAwesomeIcon
                icon={faUpRightFromSquare}
                bounce
                style={{ duration: "1s", delay: "1s" }}
              />
            </div>
            <h3 className="font-bold text-transparent bg-clip-text text bg-pg w-max">
              Future Technologies
            </h3>
          </a>
        </li>
        <li className=" ml-12 rounded-lg p-4 bg-dd shadow-lg flex-1 basis-1/5">
          <a href="personal-mindset-education" className=" ">
            <div className="flex items-center justify-center w-10 h-10 bg-dd rounded-full -mt-6 -ml-6">
              <FontAwesomeIcon
                icon={faUpRightFromSquare}
                bounce
                style={{ duration: "1s", delay: "1s" }}
              />
            </div>
            <h3 className="font-bold text-transparent bg-clip-text text bg-pg w-max">
              Personal/Mindset Education
            </h3>
          </a>
        </li>
        <li className=" ml-12 rounded-lg p-4 bg-dd shadow-lg flex-1 basis-1/5">
          <a href="/middleschool" className=" delay-1000 duration-100 ">
            <div className="flex items-center justify-center w-10 h-10 bg-dd rounded-full -mt-6 -ml-6">
              <FontAwesomeIcon
                icon={faUpRightFromSquare}
                bounce
                style={{ duration: "1s", delay: "1s" }}
              />
            </div>
            <h3 className="font-bold text-transparent bg-clip-text text bg-pg w-max">
              Upper Primary
            </h3>
          </a>
        </li>
        <li className=" ml-12 rounded-lg p-4 bg-dd shadow-lg flex-1 basis-1/5">
          <a href="/middleschool" className=" delay-1000 duration-100 ">
            <div className="flex items-center justify-center w-10 h-10 bg-dd rounded-full -mt-6 -ml-6">
              <FontAwesomeIcon
                icon={faUpRightFromSquare}
                bounce
                style={{ duration: "1s", delay: "1s" }}
              />
            </div>
            <h3 className="font-bold text-transparent bg-clip-text text bg-pg w-max">
              Middle School
            </h3>
          </a>
        </li>
        <li className=" ml-12 rounded-lg p-4 bg-dd shadow-lg flex-1 basis-1/5">
          <a href="/igcse" className=" ">
            <div className="flex items-center justify-center w-10 h-10 bg-dd rounded-full -mt-6 -ml-6">
              <FontAwesomeIcon
                icon={faUpRightFromSquare}
                bounce
                style={{ duration: "1s", delay: "1s" }}
              />
            </div>
            <h3 className="font-bold text-transparent bg-clip-text text bg-pg w-max">
              IGCSE
            </h3>
          </a>
        </li>
        <li className=" ml-12 rounded-lg p-4 bg-dd shadow-lg flex-1 basis-1/5">
          <a href="/a-levels" className=" ">
            <div className="flex items-center justify-center w-10 h-10 bg-dd rounded-full -mt-6 -ml-6">
              <FontAwesomeIcon
                icon={faUpRightFromSquare}
                bounce
                style={{ duration: "1s", delay: "1s" }}
              />
            </div>
            <h3 className="font-bold text-transparent bg-clip-text text bg-pg w-max">
              A-Levels
            </h3>
          </a>
        </li>
      </ol>
    </div>
  );
}
