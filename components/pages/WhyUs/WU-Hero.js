"use client";

import CallButton from "@/hooks/CallButton";
import { Modal } from "@mui/base/Modal";
import { Box, styled } from "@mui/system";
import { animated, useSpring } from "@react-spring/web";
import Image from "next/image";
import { forwardRef, useState } from "react";

// Fade animation for modal
const Fade = forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => open && onEnter?.(null, true),
    onRest: () => !open && onExited?.(null, true),
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

const BackdropUnstyled = forwardRef((props, ref) => {
  const { open, ...other } = props;
  return <Fade ref={ref} in={open} {...other} />;
});

const StyledModal = styled(Modal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled(BackdropUnstyled)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

export default function WUHero() {
  const [modal1IsOpen, setModal1IsOpen] = useState(false);

  return (
    <div className="md:bg-none md:bg-dl bg-cover bg-right-center-half bg-[url(https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/website%2Fwhyus.webp?alt=media&token=910af7d0-5058-4401-9998-bc262fb01f00&_gl=1*rhpte3*_ga*MTc0OTc0OTAxLjE2NzQyOTQxMzY.*_ga_CW55HF8NVT*MTY5ODQ4OTcyNS41NC4xLjE2OTg0OTA4NDQuNTIuMC4w)]">
      <div className="flex md:flex-row-reverse flex-col items-center w-full md:pl-5">
        <div className="relative md:w-1/3 md:h-screen h-0 hidden md:block">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/website%2Fwhyus.webp?alt=media&token=910af7d0-5058-4401-9998-bc262fb01f00"
            alt="Why us"
            fill
            className="ovalcut object-cover object-right-center-half brightness-100"
            priority
          />
        </div>

        <div className="w-full h-full text-center md:mx-10 overflow-y-auto overflow-x-clip backdrop-brightness-50 md:backdrop-brightness-100">
          <h1 className="pt-24 text-6xl py-10 font-bold bg-clip-text text-transparent bg-pg">
            Why Choose Inventum?
          </h1>
          <div className="p-5 text-gray-200 text-2xl">
            <p>
              There are many benefits to choosing Inventum International! We
              provide a high-quality, personalised online education that is
              flexible and self-paced. We offer a safe, secure and inclusive
              learning space where learners can thrive and reach their full
              potential, both academically and personally.
            </p>
            <p className="mt-4">
              Our enrichment programme is unique, providing opportunities to
              engage with future technologies and expand mindsets.
            </p>
            <div className="rounded-xl my-6 bg-pg p-[0.1rem]">
              <div className="flex flex-col justify-between h-full bg-transparent text-transparent rounded-lg"></div>
            </div>
            <p>
              We also focus on well-being, helping students develop purpose,
              community, and the skills to make a positive impact.
            </p>
            <p className="mt-4">
              Finally, we offer affordable international quality education,
              making it accessible to more families.
            </p>
            <p className="mt-4">Join us now, or book a call to learn more!</p>

            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setModal1IsOpen(true)}
                className="text-ll hover:scale-105 transition-all bg-pg rounded-xl py-2 mt-5 px-4"
              >
                Join Us Now!
              </button>
              <CallButton utmSouce="Whyus" className="mt-5" />
            </div>
          </div>
        </div>
      </div>

      <StyledModal
        id="1"
        open={modal1IsOpen}
        onClose={() => setModal1IsOpen(false)}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        className="overflow-y-auto"
      >
        <Fade in={modal1IsOpen}>
          <Box className="flex justify-center items-center">
            <div className="h-[80vh] md:h-[100vh] md:w-[70vw] w-[99vw]">
              <iframe
                src="https://apply.inventumonline.com/"
                width="100%"
                height="100%"
                title="Admissions Form"
              />
            </div>
          </Box>
        </Fade>
      </StyledModal>
    </div>
  );
}
