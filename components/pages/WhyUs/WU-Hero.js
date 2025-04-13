"use client";
import CallButton from "@/hooks/CallButton";
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
export default function WUHero() {
  const [modal1IsOpen, setModal1IsOpen] = useState(false);

  return (
    <div className="md:bg-none md:bg-dl bg-cover bg-right-center-half bg-[url(https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/website%2Fwhyus.webp?alt=media&token=910af7d0-5058-4401-9998-bc262fb01f00&_gl=1*rhpte3*_ga*MTc0OTc0OTAxLjE2NzQyOTQxMzY.*_ga_CW55HF8NVT*MTY5ODQ4OTcyNS41NC4xLjE2OTg0OTA4NDQuNTIuMC4w)]">
      <div className="flex md:flex-row-reverse flex-col items-center w-full md:pl-5 ">
        <img
          className="ovalcut md:brightness-100 md:w-1/3 md:h-screen h-0 object-cover object-right-center-half"
          src={
            "https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/website%2Fwhyus.webp?alt=media&token=910af7d0-5058-4401-9998-bc262fb01f00&_gl=1*rhpte3*_ga*MTc0OTc0OTAxLjE2NzQyOTQxMzY.*_ga_CW55HF8NVT*MTY5ODQ4OTcyNS41NC4xLjE2OTg0OTA4NDQuNTIuMC4w"
          }
          alt=""
        />
        <div className="w-full h-full text-center md:mx-10 overflow-y-auto overflow-x-clip backdrop-brightness-50 md:backdrop-brightness-100">
          <h1 className="pt-24 text-6xl py-10 font-bold bg-clip-text text-transparent bg-pg">
            Why Choose Inventum?
          </h1>
          <div className="p-5 text-gray-200 text-2xl">
            There are many benefits to choosing Inventum International! We
            provide a high-quality, personalised online education that is
            flexible and self-paced. We offer a safe, secure and inclusive
            learning space where learners can thrive and reach their full
            potential, both academically and personally. Our enrichment
            programme are unique, providing opportunities for learners to engage
            with future technologies and expand their personal mindsets.
            <br></br>
            <div className="rounded-xl my-6 bg-pg p-[0.1rem]">
              <div className="flex flex-col justify-between h-full bg-transparent text-transparent rounded-lg"></div>
            </div>
            Additionally, our focus on learner well-being means that we help
            students develop a sense of purpose, community and the essential
            skills and attitudes needed to make a positive impact on their
            world. Finally, we offer affordable international quality education,
            making it accessible to a wider range of families.
            <br></br>
            <p>
              Join us now, or if you want to learn more, book a call with us!
            </p>
            <div className="flex gap-4 justify-center">
              <button className="my-2 ">
                <div
                  onClick={() => {
                    setModal1IsOpen(true);
                  }}
                  className="text-ll hover:scale-[1.05] transition-all ease-in-out bg-pg w-max rounded-xl items-center py-2 mt-5 px-2"
                  target={"_blank"}
                >
                  Join Us Now!
                </div>
              </button>
              <div className="my-2">
                <CallButton utmSouce="Whyus" textSize="" className="mt-5" />
              </div>
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
              <iframe
                src="https://apply.inventumonline.com/"
                width={"100%"}
                height={"100%"}
                title="Admissions Form"
              ></iframe>
            </div>
          </Box>
        </Fade>
      </StyledModal>
    </div>
  );
}
