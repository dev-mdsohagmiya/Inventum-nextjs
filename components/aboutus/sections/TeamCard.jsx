"use client";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "@mui/base/Modal";
import { Box, styled } from "@mui/system";
import { animated, useSpring } from "@react-spring/web";
import Image from "next/image";
import * as React from "react";
import { useState } from "react";

// Initialize FontAwesome library
library.add(fab, faEnvelope);

// Modal components
const BackdropUnstyled = React.forwardRef((props, ref) => {
  const { open, ...other } = props;
  return <Fade ref={ref} in={open} {...other} />;
});

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

export function TeamCard({ member, priority = false }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="bg-dd rounded-xl p-4 shadow-xl transition-all hover:scale-105 ease-in-out w-[16rem]">
        <div onClick={handleOpenModal} className="cursor-pointer">
          <div className="relative">
            <Image
              width={20}
              height={20}
              className="-mt-3 -ml-3 absolute inline-flex"
              alt=""
              src="https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/icons%2Fclick.webp?alt=media&token=8ded644d-024b-4f52-91ac-f8c3993c0b5e&_gl=1*f7oxa5*_ga*MTc0OTc0OTAxLjE2NzQyOTQxMzY.*_ga_CW55HF8NVT*MTY5ODQ4OTcyNS41NC4xLjE2OTg0OTA2MzYuMTQuMC4w"
            />
          </div>
          {!member.image ? (
            <div className="w-56 h-52 rounded-xl flex justify-center items-center mb-3 mx-auto select-none bg-pg">
              <p className="text-xl text-white">Image coming soon</p>
            </div>
          ) : (
            <div className="relative w-56 h-52 mb-3 mx-auto">
              <Image
                src={member.image || "/placeholder.svg"}
                alt={`${member.name} - ${member.position}`}
                className={`rounded-xl object-cover ${
                  member.imageAdjustment || "object-center"
                } select-none`}
                fill
                sizes="(max-width: 768px) 100vw, 224px"
                priority={priority}
              />
            </div>
          )}

          <h3 className="text-center font-bold text-2xl text-zinc-100">
            {member.name}
          </h3>
          <p className="text-center font-bold text-zinc-400">
            {member.position}
          </p>
        </div>

        <div className="flex justify-center gap-2 pt-4 text-ld pb-2">
          {member.linkedin && (
            <a
              className="hover:scale-105"
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`LinkedIn profile for ${member.name}`}
            >
              <FontAwesomeIcon icon={["fab", "linkedin"]} size="xl" />
            </a>
          )}
          {member.twitter && (
            <a
              className="hover:scale-105"
              href={member.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Twitter profile for ${member.name}`}
            >
              <FontAwesomeIcon icon={["fab", "twitter"]} size="xl" />
            </a>
          )}
          {member.github && (
            <a
              className="hover:scale-105"
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub profile for ${member.name}`}
            >
              <FontAwesomeIcon icon={["fab", "github"]} size="xl" />
            </a>
          )}
          {member.email && (
            <a
              className="hover:scale-105"
              href={`mailto:${member.email}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Email ${member.name}`}
            >
              <FontAwesomeIcon icon={faEnvelope} size="xl" />
            </a>
          )}
        </div>
      </div>

      {/* Modal for member details */}
      <StyledModal
        open={isModalOpen}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        onClose={handleCloseModal}
        className="max-w-3xl mx-auto"
      >
        <Fade in={isModalOpen}>
          <Box className="flex justify-center items-center border-none">
            <div className="h-max max-w-[80vw] max-h-[80vh] bg-dd rounded-lg overflow-y-auto">
              <h1 className="text-ll font-bold text-4xl p-4 border-b-2 border-dl">
                {member.name}
              </h1>
              <div className="bg-dd h-full w-full p-5">
                <div
                  className="space-y-6 text-ll text-justify"
                  dangerouslySetInnerHTML={{ __html: member.bio }}
                />
              </div>
            </div>
          </Box>
        </Fade>
      </StyledModal>
    </>
  );
}
