"use client";

import { useInView } from "@/hooks/useInView";
import { Modal } from "@mui/base/Modal";
import { Box, styled } from "@mui/system";
import { animated, useSpring } from "@react-spring/web";
import PropTypes from "prop-types";
import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import TierCards from "./TierCards";

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
export default function TierCustomTabs(props) {
  const [openTab, setOpenTab] = useState(1);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [modal1IsOpen, setModal1IsOpen] = useState(false);

  return (
    <section className={`bg-dl h-max py-28`}>
      <div
        className={`mx-auto text-center ${props.notext ? "" : "mb-8 lg:mb-12"}`}
      >
        <h2 className="text-7xl text-center py-5 font-bold bg-clip-text text-transparent bg-pg w-max mx-auto">
          Tiers
        </h2>
        <Link
          className="bg-pg text-white rounded-xl px-3 py-2"
          to={"/journeys-and-fees"}
        >
          Learning Journeys
        </Link>
        {props.notext ? (
          <></>
        ) : (
          <p className="my-5 font-light sm:text-xl text-ll max-w-7xl mx-auto px-5">
            In order to cater for the individual needs and learning styles of
            all students, Inventum International offers packages in three
            different tiers. While all our tier levels include a comprehensive
            base to make the study experience a great success for Inventum
            learners, Tier 2 and 3 offer more dedicated study coach support,
            wider access to our exciting future technology and mindset modules
            and access to Mock exams. In addition, Tier 3 will help the students
            with their future study direction and careers by introducing career
            readiness assignments and CAT4 tests (see details below). If you are
            unsure which Tier to choose, try out our{" "}
            <a
              href="/middleschool#pickmypackage"
              className="group text-transparent bg-clip-text bg-pg transition-all duration-300 ease-in-out"
            >
              <span className="bg-left-bottom bg-gradient-to-r from-pink-500 to-purple-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Pick my Package
              </span>
            </a>{" "}
            quiz or
            <button
              onClick={() => {
                setModal1IsOpen(true);
              }}
              className="ml-1 group text-transparent bg-clip-text bg-pg transition-all duration-300 ease-in-out"
            >
              <span className="bg-left-bottom bg-gradient-to-r from-pink-500 to-purple-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-ou">
                {" "}
                Book a Call
              </span>
            </button>{" "}
            with our Admissions Team who can help you further!
          </p>
        )}
      </div>
      <div className="max-w-2xl mx-auto">
        <div className={"mb-4 sm:w-max w-screen mx-auto "}>
          <ul className="flex -mb-px flex-wrap justify-center">
            <li className="mr-2">
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
            <li className="mr-2">
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
            <li className="mr-2">
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
      <div className={(openTab === 1 ? " " : "hidden ") + ""}>
        <TierCards
          tier1="€550"
          tier2="€690"
          tier3="€990"
          notext={props.notext ? true : null}
        />
      </div>
      <div className={(openTab === 2 ? " " : "hidden ") + ""}>
        <TierCards
          tier1="€570"
          tier2="€720"
          tier3="€1020"
          notext={props.notext ? true : null}
        />
      </div>
      <div className={(openTab === 3 ? " " : "hidden ") + ""}>
        <TierCards
          tier1="€590"
          tier2="€750"
          tier3="€1050"
          notext={props.notext ? true : null}
        />
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
            <div className="h-[80vh] lg:h-[100vh] lg:w-[70vw] w-[99vw]">
              <iframe
                className=""
                src="https://calendly.com/inventuminternational/30min"
                width={"100%"}
                height={"100%"}
                title="Admissions Form"
              ></iframe>
            </div>
          </Box>
        </Fade>
      </StyledModal>
    </section>
  );
}
