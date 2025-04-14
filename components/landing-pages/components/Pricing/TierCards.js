import { useInView } from "@/hooks/useInView";
import CheckSVG from "@/public/CheckBOLD.svg";
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
      <div class="z-0 space-y-8  grid grid-cols-1 gap-5 sm:gap-6 xl:gap-10 lg:space-y-0 items-center lgxl:grid-cols-3 ">
        <div className="image max-w-sm mx-auto rounded-lg w-full h-full bg-cover bg-[url(https://images.unsplash.com/photo-1471970471555-19d4b113e9ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80)]">
          <div class="justify-center mx-auto  text-center rounded-lg shadow text-ll w-full h-full max-w-sm">
            <div className="flex justify-center items-center flex-col h-full backdrop-brightness-[.45] py-8 px-5 rounded-lg">
              <h3 class=" text-2xl font-semibold">
                Journey 1: <br></br>Autonomous Learning
              </h3>
              <div class="flex justify-center items-baseline my-3 pb-3">
                <span class="mr-2 text-5xl font-extrabold">{props.tier1}</span>
                <span class="text-gray-300">/month</span>
              </div>
              <p class="font-light  sm:text-lg text-ll mb-2">
                Designed for independent learners seeking maximum flexibility
                and self-paced learning.<br></br>&nbsp;
              </p>
            </div>
          </div>
        </div>
        <div className="image rounded-lg w-full h-full">
          <div class=" h-full  items-center justify-center mx-auto max-w-sm text-center rounded-lg shadow text-ll bg-center bg-[url(https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1122&q=80)] bg-cover">
            <div className="flex justify-center items-center h-full flex-col backdrop-brightness-[.45] py-8 px-5 rounded-lg">
              <h3 class="text-2xl font-semibold">
                Journey 2: <br></br>Recorded Precision Teaching
              </h3>
              <div class="flex justify-center items-baseline my-3 pb-3">
                <span class="mr-2 text-5xl font-extrabold">{props.tier2}</span>
                <span class="text-gray-300">/month</span>
              </div>
              <p class="font-light sm:text-lg text-ll pb-2">
                Designed for independent learners who wish to benefit from the
                structured guidance of recorded lessons and the possibility for
                revision.
              </p>
            </div>
          </div>
        </div>

        <div className="image max-w-sm mx-auto rounded-lg w-full h-full bg-cover bg-[url(https://images.unsplash.com/photo-1516383607781-913a19294fd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80)]">
          <div class="justify-center mx-auto text-center rounded-lg shadow text-ll w-full h-full max-w-sm">
            <div className="flex justify-center items-center h-full flex-col backdrop-brightness-[.45] py-8 px-5 rounded-lg">
              <h3 class="text-2xl font-semibold">
                Journey 3: <br></br>Live Precision Teaching
              </h3>
              <div class="flex justify-center items-baseline my-3 pb-3">
                <span class="mr-2 text-5xl font-extrabold">{props.tier3}</span>
                <span class="text-gray-300">/month</span>
              </div>
              <p class="font-light sm:text-lg text-ll mb-2">
                Designed for independent learners who wish to benefit from
                real-time interaction and personalised support of critical parts
                of the curriculum.
              </p>
            </div>
          </div>
        </div>
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
                  <div className="w-full">
                    Journey 1: Autonomous Learning Experience
                  </div>
                  <div>Journey 2: Recorded Precision Teaching</div>
                  <div>Journey 3: Live Precision Teaching</div>
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
