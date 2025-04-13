"use client";
import CheckSVG from "@/CheckBOLD.svg";
import { useInView } from "@/hooks/useInView";
import { Modal } from "@mui/base/Modal";
import { Box, styled } from "@mui/system";
import { animated, useSpring } from "@react-spring/web";
import PropTypes from "prop-types";
import * as React from "react";
import { useState } from "react";

const BackdropUnstyled = React.forwardRef((props, ref) => {
  const { open, ...other } = props;
  return <Fade ref={ref} in={open} {...other} />;
});

BackdropUnstyled.propTypes = {
  open: PropTypes.bool.isRequired,
};

const StyledModal = styled(Modal)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled(BackdropUnstyled)`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children = <div />, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element.isRequired,
  in: PropTypes.bool,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

export default function TierCards(props) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [modal1IsOpen, setModal1IsOpen] = useState(false);

  return (
    <div
      class={`px-4 mx-auto max-w-screen-xl lg:px-6 animatable ${
        inView ? "shown" : ""
      }`}
      ref={ref}
    >
      <div class="z-0 space-y-8  grid grid-cols-1 gap-5 sm:gap-6 xl:gap-10 lg:space-y-0 items-center lgxl:grid-cols-3 lgxl:h-[416px] h-[1248px]">
        <div className="cont w-full h-full rounded-lg max-w-sm mx-auto">
          <div className="tier w-full rounded-lg bg-pg ">
            <div className="w-full">
              <ul class="mb-8 space-y-4 text-left">
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Lessons in Canvas & online books</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Access to subject Tutor</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Quizzes and end of unit tests</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Monthly study coach check-in</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Limited number of Future Technologies and Mindset modules
                  </span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Study Plan and pace-setter for completing lessons</span>
                </li>
              </ul>
            </div>
            <a
              href={
                props.notext ? "/learn#calculate" : "/tiers-and-fees#calculate"
              }
              class="w-max mx-auto px-3 py-2 text-sm text-center bg-white font-bold rounded-full hover:brightness-[0.9] focus:ring-4 focus:outline-none"
            >
              <p className="text-transparent bg-clip-text bg-pg">
                Calculate Your Price
              </p>
            </a>
          </div>
          <div className="image rounded-lg w-full h-full bg-cover bg-[url(https://images.unsplash.com/photo-1471970471555-19d4b113e9ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80)]">
            <div class="justify-center mx-auto  text-center rounded-lg shadow text-ll w-full h-full ">
              <div className="flex justify-center items-center flex-col h-full backdrop-brightness-[.6] p-0 pb-12 xs:py-3 xs:px-2  xl:py-12 xl:px-4 xl:pb-24">
                <h3 class="mb-4 text-2xl font-semibold">Tier 1</h3>
                <p class="font-light  sm:text-lg text-gray-300 mb-4">
                  Designed for independent learners who require minimum amount
                  of support and feedback.
                </p>
                <div class="flex justify-center items-baseline my-8">
                  <span class="mr-2 text-5xl font-extrabold">
                    {props.tier1}
                  </span>
                  <span class="text-gray-300">/subject annually</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bottombg bg-pg rounded-lg"></div>
        </div>

        <div className="cont w-full h-full rounded-lg max-w-sm mx-auto">
          <div className="tier w-full h-full rounded-lg bg-pg">
            <ul class="mb-8 space-y-4 text-left">
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>All of Tier 1</span>
              </li>
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Additional study coach check ins</span>
              </li>
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Additional Future Technologies and Mindset modules</span>
              </li>
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Mock exams for IGCSE and A-level subjects</span>
              </li>
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  End of "term" test series marked by a tutor with diagnostic
                </span>
              </li>
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Access to online-clubs and activities</span>
              </li>
            </ul>
            <a
              href={
                props.notext ? "/learn#calculate" : "/tiers-and-fees#calculate"
              }
              class="w-max mx-auto px-3 py-2 text-sm text-center bg-white font-bold rounded-full hover:brightness-[0.9] focus:ring-4 focus:outline-none"
            >
              <p className="text-transparent bg-clip-text bg-pg">
                Calculate Your Price
              </p>
            </a>
          </div>
          <div className="image rounded-lg w-full h-full">
            <div class=" h-full  items-center justify-center mx-auto max-w-sm text-center rounded-lg shadow text-ll bg-center bg-[url(https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1122&q=80)] bg-cover">
              <div className="flex justify-center items-center h-full flex-col backdrop-brightness-[.6] p-0 pb-12 xs:py-3 xs:px-2 xl:pb-24 xl:py-11 xl:px-4">
                <h3 class="mb-4 text-2xl font-semibold">Tier 2</h3>
                <p class="font-light sm:text-lg text-gray-300 mb-4">
                  Designed for independent learners who prefer some support,
                  regular feedback and wish to attend social activities online.
                </p>
                <div class="flex justify-center items-baseline my-8">
                  <span class="mr-2 text-5xl font-extrabold">
                    {props.tier2}
                  </span>
                  <span class="text-gray-300">/subject annually</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bottombg bg-pg rounded-lg"></div>
        </div>
        <div className="cont w-full h-full rounded-lg max-w-sm mx-auto">
          <div className="tier w-full h-full rounded-lg bg-pg">
            <ul class="mb-8 space-y-4 text-left">
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>All of Tier 1 & 2</span>
              </li>
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Additional study coach check ins</span>
              </li>
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Additional Future Technologies and Mindset modules</span>
              </li>
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  Additional mock exams for IGCSE and A-level subjects
                </span>
              </li>
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Career readiness assignments</span>
              </li>
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>CAT4 Test</span>
              </li>
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Advice on subject selection and career counselling</span>
              </li>
            </ul>
            <a
              href={
                props.notext ? "/learn#calculate" : "/tiers-and-fees#calculate"
              }
              class="w-max -mt-4 mx-auto px-3 py-2 text-sm text-center bg-white font-bold rounded-full hover:brightness-[0.9] focus:ring-4 focus:outline-none"
            >
              <p className="text-transparent bg-clip-text bg-pg">
                Calculate Your Price
              </p>
            </a>
          </div>
          <div className="image rounded-lg w-full h-full bg-cover bg-[url(https://images.unsplash.com/photo-1516383607781-913a19294fd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80)]">
            <div class="justify-center mx-auto text-center rounded-lg shadow text-ll w-full h-full ">
              <div className="flex justify-center items-center h-full flex-col backdrop-brightness-[.6] p-0 pb-12 xs:py-3 xs:px-2 xl:py-11 xl:px-4 xl:pb-24">
                <h3 class="mb-4 text-2xl font-semibold">Tier 3</h3>
                <p class="font-light sm:text-lg text-gray-300 mb-4">
                  Designed for independent learners who wish help with subject
                  selection, regular support & feedback and career counselling.
                </p>
                <div class="flex justify-center items-baseline my-8">
                  <span class="mr-2 text-5xl font-extrabold">
                    {props.tier3}
                  </span>
                  <span class="text-gray-300">/subject annually</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bottombg bg-pg rounded-lg"></div>
        </div>
      </div>
      <div className="w-max mx-auto">
        <button
          className="text-white font-bold bg-pg rounded-xl py-2 px-5 text-xl my-10 hover:scale-105 transition-all duration-300 ease-in-out"
          onClick={() => {
            setModal1IsOpen(true);
          }}
        >
          Compare Tiers in detail
        </button>
      </div>
      <StyledModal
        id="1"
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        open={modal1IsOpen}
        onClose={() => {
          setModal1IsOpen(false);
        }}
        className={` overflow-y-auto`}
      >
        <Fade in={modal1IsOpen}>
          <Box className="flex justify-center items-center">
            <div className="h-[80vh] md:h-[100vh] md:w-[70vw] w-[99vw]">
              <div class="bg-dl justify-center">
                <div class="w-full text-center grid grid-cols-4 p-4 text-xs md:text-sm border-t border-b  md:gap-x-16 justify-between bg-gray-800 border-gray-700 text-ll font-bold sm:text-[1rem]">
                  <div class="flex items-center justify-center w-full">
                    Packages
                  </div>
                  <div className="w-full">Tier 1</div>
                  <div>Tier 2</div>
                  <div>Tier 3</div>
                </div>
                <div class="grid grid-cols-4 px-4 py-5 text-sm border-b md:gap-x-16 justify-between border-gray-600">
                  <div class="text-ll w-full font-bold sm:text-[1rem] text-xs">
                    Lessons in Canvas
                  </div>
                  <div className="flex justify-center items-center font-extrabold">
                    <img src={CheckSVG} alt="" />
                  </div>
                  <div className="flex justify-center items-center bg-pg bg-clip-text">
                    <img src={CheckSVG} alt="" />
                  </div>
                  <div className="flex justify-center items-center">
                    <img src={CheckSVG} alt="" />
                  </div>
                </div>
                <div class="grid grid-cols-4 px-4 py-5 text-sm border-b md:gap-x-16 justify-between border-gray-600">
                  <div class="text-ll w-full font-bold sm:text-[1rem] text-xs">
                    Online books
                  </div>
                  <div className="flex justify-center items-center">
                    <img src={CheckSVG} alt="" />
                  </div>
                  <div className="flex justify-center items-center">
                    <img src={CheckSVG} alt="" />
                  </div>
                  <div className="flex justify-center items-center">
                    <img src={CheckSVG} alt="" />
                  </div>
                </div>
                <div class="grid grid-cols-4 px-4 py-5 text-sm border-b md:gap-x-16 justify-between border-gray-600">
                  <div class="text-ll w-full font-bold sm:text-[1rem] text-xs">
                    Tutor Contact (10 per subject, per year)
                  </div>
                  <div className="flex justify-center items-center">
                    <img src={CheckSVG} alt="" />
                  </div>
                  <div className="flex justify-center items-center">
                    <img src={CheckSVG} alt="" />
                  </div>
                  <div className="flex justify-center items-center">
                    <img src={CheckSVG} alt="" />
                  </div>
                </div>
                <div class="grid grid-cols-4 px-4 py-5 text-sm border-b md:gap-x-16 justify-between border-gray-600">
                  <div class="text-ll w-full font-bold sm:text-[1rem] text-xs">
                    Quizzes
                  </div>
                  <div className="flex justify-center items-center">
                    <img src={CheckSVG} alt="" />
                  </div>
                  <div className="flex justify-center items-center">
                    <img src={CheckSVG} alt="" />
                  </div>
                  <div className="flex justify-center items-center">
                    <img src={CheckSVG} alt="" />
                  </div>
                </div>
                <div class="grid grid-cols-4 px-4 py-5 text-sm border-b md:gap-x-16 justify-between border-gray-600">
                  <div class="text-ll w-full font-bold sm:text-[1rem] text-xs">
                    End of unit tests
                  </div>
                  <div className="flex justify-center items-center">
                    <img src={CheckSVG} alt="" />
                  </div>
                  <div className="flex justify-center items-center">
                    <img src={CheckSVG} alt="" />
                  </div>
                  <div className="flex justify-center items-center">
                    <img src={CheckSVG} alt="" />
                  </div>
                </div>
                <div class="grid grid-cols-4 px-4 py-5 text-sm text-ll border-b  md:gap-x-16 justify-between border-gray-600 ">
                  <div class="text-ll w-full font-bold sm:text-[1rem] text-xs">
                    Dedicated study coach check ins
                  </div>
                  <div className="flex justify-center items-center font-bold bg-clip-text bg-pg text-transparent text-2xl">
                    <p>9</p>
                  </div>

                  <div className="flex justify-center items-center font-bold bg-clip-text bg-pg text-transparent text-2xl">
                    <p>18</p>
                  </div>
                  <div className="flex justify-center items-center font-bold bg-clip-text bg-pg text-transparent text-2xl">
                    <p>36</p>
                  </div>
                </div>
                <div class="grid grid-cols-4 px-4 py-5 text-sm text-ll border-b  md:gap-x-16 justify-between border-gray-600">
                  <div class="text-ll w-full font-bold sm:text-[1rem] text-xs">
                    Future technology modules
                  </div>
                  <div className="flex justify-center items-center font-bold bg-clip-text bg-pg text-transparent text-2xl">
                    <p>2</p>
                  </div>
                  <div className="flex justify-center items-center font-bold bg-clip-text bg-pg text-transparent text-2xl">
                    <p>4</p>
                  </div>
                  <div className="flex justify-center items-center font-bold bg-clip-text bg-pg text-transparent text-2xl">
                    <p>6</p>
                  </div>
                </div>
                <div class="grid grid-cols-4 px-4 py-5 text-sm text-ll border-b  md:gap-x-16 justify-between border-gray-600">
                  <div class="text-ll w-full font-bold sm:text-[1rem] text-xs">
                    Personal and Mindset Growth Modules
                  </div>
                  <div className="flex justify-center items-center font-bold bg-clip-text bg-pg text-transparent text-2xl">
                    <p>4</p>
                  </div>
                  <div className="flex justify-center items-center font-bold bg-clip-text bg-pg text-transparent text-2xl">
                    <p>6</p>
                  </div>
                  <div className="flex justify-center items-center font-bold bg-clip-text bg-pg text-transparent text-2xl">
                    <p>8</p>
                  </div>
                </div>
                <div class="grid grid-cols-4 px-4 py-5 text-sm text-ll border-b  md:gap-x-16 justify-between border-gray-600">
                  <div class="text-ll w-full font-bold sm:text-[1rem] text-xs">
                    Mock exams
                  </div>
                  <div className="flex justify-center items-center">
                    <p></p>
                  </div>

                  <div className="flex justify-center items-center font-bold bg-clip-text bg-pg text-transparent text-2xl">
                    <p>1</p>
                  </div>
                  <div className="flex justify-center items-center font-bold bg-clip-text bg-pg text-transparent text-2xl">
                    <p>2</p>
                  </div>
                </div>
                <div class="grid grid-cols-4 px-4 py-5 text-sm border-b md:gap-x-16 justify-between border-gray-600">
                  <div class="text-ll w-full font-bold sm:text-[1rem] text-xs">
                    Career readiness assignments
                  </div>
                  <div className="flex justify-center items-center">
                    <p></p>
                  </div>

                  <div className="flex justify-center items-center">
                    <p></p>
                  </div>
                  <div className="flex justify-center items-center">
                    <img src={CheckSVG} alt="" />
                  </div>
                </div>
                <div class="grid grid-cols-4 px-4 py-5 text-sm border-b md:gap-x-16 justify-between border-gray-600">
                  <div class="text-ll w-full font-bold sm:text-[1rem] text-xs">
                    CAT4 Test
                  </div>
                  <div className="flex justify-center items-center">
                    <p></p>
                  </div>

                  <div className="flex justify-center items-center">
                    <p></p>
                  </div>
                  <div className="flex justify-center items-center">
                    <img src={CheckSVG} alt="" />
                  </div>
                </div>
                <div class="grid grid-cols-4 px-4 py-5 text-sm border-b md:gap-x-16 justify-between border-gray-600">
                  <div class="text-ll w-full  font-bold sm:text-[1rem] text-xs">
                    Global Citizenship Development
                  </div>
                  <div className="flex justify-center items-center">
                    <p></p>
                  </div>

                  <div className="flex justify-center items-center">
                    <p></p>
                  </div>
                  <div className="flex justify-center items-center">
                    <img src={CheckSVG} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Fade>
      </StyledModal>
    </div>
  );
}
