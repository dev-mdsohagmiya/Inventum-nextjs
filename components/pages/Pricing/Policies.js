"use client";
import { Modal } from "@mui/base/Modal";
import { Box, styled } from "@mui/system";
import { animated, useSpring } from "@react-spring/web";
import PropTypes from "prop-types";
import * as React from "react";

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

export default function Policies() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  return (
    <>
      <div className="bg-dl">
        <h1 className="mx-auto text-5xl md:text-7xl text-center w-max font-bold bg-clip-text text-transparent bg-pg">
          Policies
        </h1>
        <p className="mx-auto text-center text-ll py-5 text-xl max-w-7xl px-5">
          Inventum International Online School, is committed to providing a
          safe, supportive, and inclusive learning environment for all of our
          learners. We believe that clear policies and procedures are essential
          to achieving this goal, and we have established a set of policies that
          guide our interactions and behaviour as members of our school
          community. This policies page is designed to provide students and
          parents with important information on various school policies. We
          encourage you to take the time to review these policies carefully, as
          they are intended to help ensure a positive and productive learning
          experience for everyone. Please note that our policies are subject to
          change from time to time as our school evolves and adapts to new
          challenges and opportunities.
        </p>
        <ol className="lg:mx-auto mx-10 flex flex-1  lg:gap-10 relative text-ll pt-10 flex-wrap justify-center">
          <li className=" hover:scale-105 transition-all duration-100 ease-in-out mb-20 ml-12 rounded-lg p-4 bg-dd shadow-lg md:max-w-xs md:w-max w-full">
            <div onClick={handleOpen} className="cursor-pointer">
              <span className=" flex items-center justify-center w-10 h-10 bg-dd rounded-full -mt-6 -ml-6">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
              <h3 className="font-bold text-transparent bg-clip-text text bg-pg w-max">
                General Terms & Conditions
              </h3>
            </div>
          </li>
          <li className=" hover:scale-105 transition-all duration-100 ease-in-out mb-20 ml-12 rounded-lg p-4 bg-dd shadow-lg md:max-w-xs md:w-max w-full">
            <a
              href="https://drive.google.com/file/d/1e_8JP9h5mpQSRrITmRDmPbK9XLN3sEuS/view?usp=share_link"
              target={"_blank"}
              rel="noreferrer"
            >
              <span className=" flex items-center justify-center w-10 h-10 bg-dd rounded-full -mt-6 -ml-6">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
              <h3 className="font-bold text-transparent bg-clip-text text bg-pg w-max">
                Admissions Policy
              </h3>
            </a>
          </li>
          <li className=" hover:scale-105 transition-all duration-100 ease-in-out mb-20 ml-12 rounded-lg p-4 bg-dd shadow-lg md:max-w-xs md:w-max w-full">
            <a
              href="https://drive.google.com/file/d/1LdiIM4KdjDKbmP5ilkD3FodR_rT20MeI/view?usp=sharing"
              target={"_blank"}
              rel="noreferrer"
            >
              <span className=" flex items-center justify-center w-10 h-10 bg-dd rounded-full -mt-6 -ml-6">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
              <h3 className="font-bold text-transparent bg-clip-text text bg-pg w-max">
                Safeguarding Policy
              </h3>
            </a>
          </li>
          <li
            href="https://drive.google.com/file/d/1q2IzFHYP-FAO2FtI-VKs0L-eiMkX9Q8e/view?usp=sharing"
            className=" hover:scale-105 transition-all duration-100 ease-in-out mb-20 ml-12 rounded-lg p-4 bg-dd shadow-lg md:max-w-xs md:w-max w-full"
          >
            <a
              href="https://drive.google.com/file/d/1q2IzFHYP-FAO2FtI-VKs0L-eiMkX9Q8e/view?usp=sharing"
              target={"_blank"}
              rel="noreferrer"
            >
              <span className=" flex items-center justify-center w-10 h-10 bg-dd rounded-full -mt-6 -ml-6">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
              <h3 className="font-bold text-transparent bg-clip-text text bg-pg w-max">
                GDPR Policy
              </h3>
            </a>
          </li>
          <li className=" hover:scale-105 transition-all duration-100 ease-in-out mb-20 ml-12 rounded-lg p-4 bg-dd shadow-lg md:max-w-xs md:w-max w-full">
            <a
              href="https://drive.google.com/file/d/1c5v59OK_QCyO01NoQoTc_VVAUo2VTVL3/view?usp=sharing"
              target={"_blank"}
              rel="noreferrer"
            >
              <span className=" flex items-center justify-center w-10 h-10 bg-dd rounded-full -mt-6 -ml-6">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
              <h3 className="font-bold text-transparent bg-clip-text text bg-pg w-max">
                Safer Recruitment Policy
              </h3>
            </a>
          </li>
          <li className=" hover:scale-105 transition-all duration-100 ease-in-out mb-20 ml-12 rounded-lg p-4 bg-dd shadow-lg md:max-w-xs md:w-max w-full">
            <div onClick={handleOpen2} className="hover:cursor-pointer">
              <span className=" flex items-center justify-center w-10 h-10 bg-dd rounded-full -mt-6 -ml-6">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
              <h3 className="font-bold text-transparent bg-clip-text text bg-pg w-max">
                Teaching and Learning Handbook
              </h3>
            </div>
          </li>
        </ol>
      </div>

      <StyledModal
        onClose={handleClose}
        open={open}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        className=""
      >
        <Fade in={open}>
          <Box className="w-[90vw] h-[85vh] flex justify-center items-center">
            <div
              style={{
                position: "relative",
                paddingTop: "max(60%,326px)",
                height: 0,
                width: "100%",
              }}
            >
              <iframe
                title="General Terms & Conditions"
                allow="clipboard-write allow-top-navigation allow-top-navigation-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups allow-modals allow-popups-to-escape-sandbox allow-forms"
                allowFullScreen={true}
                style={{
                  position: "absolute",
                  border: "none",
                  width: "100%",
                  height: "100%",
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                }}
                src="https://e.issuu.com/embed.html?d=inventum_international_general_conditions_2023-24&u=cobussteyn"
              />
            </div>
          </Box>
        </Fade>
      </StyledModal>
      <StyledModal
        open={open2}
        onClose={handleClose2}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        className=""
      >
        <Fade in={open2}>
          <Box className="w-[90vw] h-[85vh] flex justify-center items-center">
            <div
              style={{
                position: "relative",
                paddingTop: "max(60%, 326px)",
                height: 0,
                width: "100%",
              }}
            >
              <iframe
                title="Teachers and Student Handbook"
                allow="clipboard-write"
                sandbox="allow-top-navigation allow-top-navigation-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups allow-modals allow-popups-to-escape-sandbox allow-forms"
                allowFullScreen={true}
                style={{
                  position: "absolute",
                  border: "none",
                  width: "100%",
                  height: "100%",
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                }}
                src="https://e.issuu.com/embed.html?d=teaching_and_learning_handbook&hideIssuuLogo=true&hideShareButton=true&showOtherPublicationsAsSuggestions=true&u=cobussteyn"
              />
            </div>
          </Box>
        </Fade>
      </StyledModal>
    </>
  );
}
