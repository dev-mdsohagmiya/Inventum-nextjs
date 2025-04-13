"use client";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { lazy, Suspense, useState } from "react";
import CallInline from "../../hooks/CallInline.js";

const TierCustomTabs = lazy(() =>
  import("../../components/pages/Pricing/NewTierCustomTabs.js")
);
const IGCSESubjects = lazy(() =>
  import("../../components/pages/Curriculum/IGCSESubjects")
);
const ISFSubjects = lazy(() =>
  import("../../components/pages/Curriculum/ISFSubjects")
);
const ASubjects = lazy(() =>
  import("../../components/pages/Curriculum/ASubjects")
);
const CallButton = lazy(() => import("../../hooks/CallButton"));
const NewPriceCalc = lazy(() =>
  import("../../components/pages/Pricing/NewPriceCalc")
);
const PT = lazy(() =>
  import("../../components/pages/PrecissionTeaching/PT.jsx")
);
const Mindset = lazy(() => import("./components/Mindet.js"));
const FuTe = lazy(() => import("./components/FuTe.js"));

library.add(faSpinner);

export default function LandingPage5() {
  const [openTab, setOpenTab] = useState(1);

  return (
    <>
      <Suspense
        fallback={
          <div className="h-screen w-screen bg-dd pt-40 text-7xl text-center mx-auto justify-center text-white flex items-center">
            <FontAwesomeIcon icon={faSpinner} spin />
          </div>
        }
      >
        <div className="bg-dl overflow-clip w-full">
          <div className="flex flex-col w-full items-center justify-center min-h-screen md:mt-12 pt-24 max-lg:container mx-auto">
            <h3 className="lg:text-3xl text-xl font-light text-center text-white mb-3">
              {"Online Schooling Done Well"}
            </h3>

            {
              <h1 className="text-3xl lg:text-5xl text-center text-white font-light">
                An
                <span className="text-transparent bg-pg font-extrabold bg-clip-text">
                  {" "}
                  Online K-12<sup className="text-pink-500">*</sup> Cambridge
                  School{" "}
                </span>
                where you can{" "}
                <span className="lg:hidden">
                  {" "}
                  study your own way, whenever you want
                </span>
                <div className="hidden lg:flex lg:flex-col lg:justify-center lg:items-center">
                  <span className="">
                    {" "}
                    study your own way, whenever you want
                  </span>
                  <div className="w-2/3">
                    <svg
                      className="ml-auto"
                      width="80%"
                      height="57"
                      viewBox="0 0 830 57"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.23632 3.12645C74.2884 6.40318 146.244 9.52558 218.421 10.9128C354.177 13.5221 489.273 8.04631 624.593 5.67451C689.408 4.53848 754.542 1.49369 819.502 1.95801C825.963 2.00419 833.02 1.82161 822.029 2.2664C799.854 3.16379 777.87 5.85087 755.788 7.23685C657.232 13.4226 558.626 19.6258 460.266 26.566C380.954 32.1622 296.452 35.0563 219.311 47.1844C212.142 48.3115 219.504 48.9838 222.713 49.4434C238.377 51.6872 254.154 52.4087 270.137 52.8991C325.375 54.5936 380.594 55.1058 435.665 53.8217"
                        stroke="url(#paint0_linear_501_53)"
                        stroke-width="3"
                        stroke-linecap="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_501_53"
                          x1="415.406"
                          y1="-10.6764"
                          x2="413.321"
                          y2="57.2916"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#EC4899" />
                          <stop offset="1" stop-color="#A855F7" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
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
              <ul className="text-xl lg:text-2xl text-white list-disc gap-3 flex-col flex font-light ml-10">
                <li>
                  <sup>*</sup>Cambridge online education from ages 10 to 18
                </li>
                <li>Personal study coaches and tutors</li>
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
          <div className="max-w-[90vw] mx-auto my-5">
            <CallInline />
          </div>
          <h2 className="text-7xl text-center flex self-center py-10 font-bold bg-clip-text text-transparent bg-pg w-max mx-auto">
            Subjects
          </h2>
          <div class="max-w-2xl mx-auto">
            <div class={"mb-4 sm:w-max w-screen mx-auto "}>
              <ul class="flex -mb-px flex-wrap justify-center">
                <li class="mr-2">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(1);
                    }}
                    className={
                      (openTab === 1
                        ? "text-pink-500 border-pink-500 "
                        : "border-transparent  hover:border-gray-400  hover:text-gray-400 ") +
                      "inline-block rounded-t-lg py-4 px-4 text-sm font-medium text-center border-b-2 text-ll"
                    }
                  >
                    Middleschool
                  </button>
                </li>
                <li class="mr-2">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(2);
                    }}
                    className={
                      (openTab === 2
                        ? "text-pink-500 border-pink-500 "
                        : "border-transparent  hover:border-gray-400  hover:text-gray-400 ") +
                      "inline-block rounded-t-lg py-4 px-4 text-sm font-medium text-center border-b-2 text-ll"
                    }
                  >
                    IGCSE
                  </button>
                </li>
                <li class="mr-2">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(3);
                    }}
                    className={
                      (openTab === 3
                        ? "text-pink-500 border-pink-500 "
                        : "border-transparent  hover:border-gray-400  hover:text-gray-400 ") +
                      "inline-block rounded-t-lg py-4 px-4 text-sm font-medium text-center border-b-2 text-ll"
                    }
                  >
                    A-levels
                  </button>
                </li>
              </ul>
            </div>
          </div>
          {openTab === 1 ? (
            <ISFSubjects
              customurl={`learn-5/middleschool`}
              notitle={true}
              topSubjects={[
                "History",
                "Digital-Literacy",
                "Economic-Management-Sciences",
                "English",
                "French-Beginner",
              ]}
            />
          ) : openTab === 2 ? (
            <IGCSESubjects
              customurl={`learn-5/igcse`}
              notitle={true}
              topSubjects={[
                "Accounting",
                "Business-Studies",
                "Environmental-Management",
                "Sociology",
                "Global-Perspectives",
              ]}
            />
          ) : openTab === 3 ? (
            <ASubjects
              customurl={`learn-5/a-levels`}
              notitle={true}
              topSubjects={[
                "Computer-Science",
                "English-Literature",
                "French-Language",
                "Global-Perspectives-&-Research",
                "Law",
              ]}
            />
          ) : (
            <div>An error occured, reload the page.</div>
          )}
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
          <TierCustomTabs notext={true} />

          <div id="calculate" className="">
            <NewPriceCalc subtitle="To accurately calculate the annual cost for your chosen courses, we encourage you to utilise the convenient calculator provided below. Kindly be aware that the calculation does not include the one-time registration fee of EUR 250." />
          </div>
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
            <div className="lg:max-w-2xl mx-auto">
              <iframe
                src="https://tally.so/embed/wgdboD?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="100"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
                title="Enquiry Form"
              ></iframe>
            </div>
          </div>
        </div>
      </Suspense>
    </>
  );
}
