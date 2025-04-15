"use client";
import CallButton from "@/hooks/CallButton";
import { Modal } from "@mui/base/Modal";
import { Box, styled } from "@mui/system";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";

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

export default function Navbar() {
  const [modal1IsOpen, setModal1IsOpen] = useState(false);
  const pathname = usePathname();
  const [toggled, setToggled] = useState(false);
  const [gclid, setGclid] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Get search params after component mounts
  useEffect(() => {
    if (isClient) {
      const params = new URLSearchParams(window.location.search);
      const gclidParam = params.get("gclid");
      if (gclidParam) {
        setGclid(gclidParam);
        localStorage.setItem("gclid", gclidParam);
      }
    }
  }, [isClient]);

  function apply() {
    setModal1IsOpen(true);
  }

  function toggleDropdownCurriculum() {
    if (!isClient) return;
    const a = document.querySelector("#dropdownNavbarCurriculum");
    if (a) {
      a.classList.contains("hidden")
        ? a.classList.remove("hidden")
        : a.classList.add("hidden");
    }
  }

  function toggleDropdownAdmissions() {
    if (!isClient) return;
    const a = document.querySelector("#dropdownNavbarAdmission");
    if (a) {
      a.classList.contains("hidden")
        ? a.classList.remove("hidden")
        : a.classList.add("hidden");
    }
  }

  function toggleDropdownStudent() {
    if (!isClient) return;
    const a = document.querySelector("#dropdownNavbarStudent");
    if (a) {
      a.classList.contains("hidden")
        ? a.classList.remove("hidden")
        : a.classList.add("hidden");
    }
  }

  function toggleHamburger() {
    if (!isClient) return;
    const a = document.querySelector("#hamburger-menu");
    const b = document.querySelector("#menu03");
    if (a && b) {
      a.classList.contains("hidden")
        ? a.classList.remove("hidden")
        : a.classList.add("hidden");
      b.classList.contains("active")
        ? b.classList.remove("active")
        : b.classList.add("active");
      setToggled(!toggled);
    }
  }

  const isLandingPage = pathname?.includes("information");

  useEffect(() => {
    if (isClient && window.location.hash) {
      const targetId = window.location.hash.substring(1);
      const element = document.getElementById(targetId);

      if (element) {
        const navbar = document.querySelector("nav");
        const navbarHeight = navbar?.offsetHeight || 0;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  }, [pathname, isClient]);

  if (!isClient) {
    return (
      <nav className="py-2.5 bg-dd  fixed w-full z-[999] top-0 left-0 border-b border-gray-600">
        <div className="container flex flex-wrap justify-between mx-auto">
          <Link href="/">
            <div className="flex items-center gap-2 sm:gap-5">
              <div className="xl:w-10 w-6 bg-gray-600 animate-pulse h-10"></div>
              <div className="xl:w-60 w-48 m-0 p-0 bg-gray-600 animate-pulse h-10"></div>
            </div>
          </Link>
        </div>
      </nav>
    );
  }

  return (
    <nav className="py-2.5 bg-dd  fixed w-full z-[999] top-0 left-0 border-b border-gray-600">
      {isLandingPage ? (
        <div className="container flex flex-wrap justify-between mx-auto">
          <Link href="#home">
            <div className="flex items-center gap-2 sm:gap-5 ">
              <img
                src="/images/logo-icon.82bde376334f01e5f8c5657f7e6495bf.svg"
                className="xl:w-10 w-6"
                alt=""
              />
              <img
                id="navbar-image"
                src="data:image/png;base64,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"
                alt=""
                className="xl:w-60 w-48 m-0 p-0"
              />
            </div>
          </Link>
          <button
            id="menu03"
            onClick={toggleHamburger}
            className="menu-trigger relative w-[25px] h-[22px] bg-none border-none appearance-none cursor-pointer transition-all duration-500 box-border my-auto inline-flex items-center text-sm rounded-lg lg:hidden focus:outline-none focus:ring-2 text-gray-400 focus:ring-gray-600"
          >
            <span className="bg-ll inline-block transition-all duration-500 box-border absolute left-0 w-full h-[3px] rounded top-0"></span>
            <span className="bg-ll inline-block transition-all duration-500 box-border absolute left-0 w-full h-[3px] rounded top-[9.5px] "></span>
            <span className="bg-ll inline-block transition-all duration-500 box-border absolute left-0 w-full h-[3px] rounded bottom-0"></span>
          </button>
          <div id="hamburger-menu" className="hidden w-full lg:block lg:w-auto">
            <ul className="flex items-center flex-col py-4 px-1 mt-4 border rounded-lg lg:flex-row lg:space-x-6 lg:mt-0 lg:text-sm lg:font-bold text-lg lg:border-0 bg-gray-800 lg:bg-dd border-dl">
              <Link href="/information#home">
                <li className="block py-2 pl-3 pr-4 rounded lg:border-0 lg:p-0 bg-clip-text hover:text-transparent hover:bg-pg text-gray-200">
                  Home
                </li>
              </Link>
              <Link href="/information#whatwedo">
                <li className="block py-2 pl-3 pr-4 rounded lg:border-0 lg:p-0 bg-clip-text hover:text-transparent hover:bg-pg text-gray-200">
                  What we do
                </li>
              </Link>
              <Link href="/information#compare">
                <li className="block py-2 pl-3 pr-4 rounded lg:border-0 lg:p-0 bg-clip-text hover:text-transparent hover:bg-pg text-gray-200">
                  Why us
                </li>
              </Link>
              <Link href="/information#pricing">
                <li className="block py-2 pl-3 pr-4 rounded lg:border-0 lg:p-0 bg-clip-text hover:text-transparent hover:bg-pg text-gray-200">
                  Pricing
                </li>
              </Link>
              <Link href="/information#subjects">
                <li className="block py-2 pl-3 pr-4 rounded lg:border-0 lg:p-0 bg-clip-text hover:text-transparent hover:bg-pg text-gray-200">
                  Subjects
                </li>
              </Link>
              <Link href="/information#ftpm">
                <li className="block py-2 pl-3 pr-4 rounded lg:border-0 lg:p-0 bg-clip-text hover:text-transparent hover:bg-pg text-gray-200">
                  Technologies & Mindsets
                </li>
              </Link>
              <Link href="/information#contact">
                <li className="block py-2 pl-3 pr-4 rounded lg:border-0 lg:p-0 bg-clip-text hover:text-transparent hover:bg-pg text-gray-200">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
      ) : (
        <div className="container flex flex-wrap justify-between mx-auto">
          <Link href="/" className="flex items-center">
            <div className="flex items-center gap-2 sm:gap-5 ">
              <img
                src="/images/logo-icon.82bde376334f01e5f8c5657f7e6495bf.svg"
                className="xl:w-10 w-6"
                alt=""
              />
              <img
                id="navbar-image"
                src="data:image/png;base64,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"
                alt=""
                className="xl:w-60 w-48 m-0 p-0"
              />
            </div>
          </Link>
          <button
            id="menu03"
            onClick={toggleHamburger}
            className="menu-trigger relative w-[25px] h-[22px] bg-none border-none appearance-none cursor-pointer transition-all duration-500 box-border my-auto inline-flex items-center text-sm rounded-lg lg:hidden focus:outline-none focus:ring-2 text-gray-400 focus:ring-gray-600"
          >
            <span className="bg-ll inline-block transition-all duration-500 box-border absolute left-0 w-full h-[3px] rounded top-0"></span>
            <span className="bg-ll inline-block transition-all duration-500 box-border absolute left-0 w-full h-[3px] rounded top-[9.5px] "></span>
            <span className="bg-ll inline-block transition-all duration-500 box-border absolute left-0 w-full h-[3px] rounded bottom-0"></span>
          </button>
          <div id="hamburger-menu" className="hidden w-full lg:block lg:w-auto">
            <ul className="flex items-center flex-col py-4 px-1 mt-4 border rounded-lg lg:flex-row lg:space-x-6 lg:mt-0 lg:text-sm lg:font-bold text-lg lg:border-0 bg-gray-800 lg:bg-dd border-dl">
              <Link href="/">
                <li className="block py-2 pl-3 pr-4 rounded lg:border-0 lg:p-0 bg-clip-text hover:text-transparent hover:bg-pg text-gray-200">
                  Home
                </li>
              </Link>
              <Link href="/aboutus">
                <li className="block py-2 pl-3 pr-4 rounded lg:border-0 lg:p-0 bg-clip-text hover:text-transparent hover:bg-pg text-gray-200">
                  About Us
                </li>
              </Link>
              <Link href="/whyus">
                <li className="block py-2 pl-3 pr-4 rounded lg:border-0 lg:p-0 bg-clip-text hover:text-transparent hover:bg-pg text-gray-200">
                  Why us
                </li>
              </Link>
              <li
                className="relative cursor-pointer z-40"
                onMouseEnter={toggleDropdownCurriculum}
                onMouseLeave={toggleDropdownCurriculum}
              >
                <p
                  id="dropdownNavbarLink"
                  className="delay-1 flex items-center justify-between w-max py-2 pl-3 pr-4 rounded lg:border-0 lg:p-0 bg-clip-text hover:text-transparent hover:bg-pg text-gray-200"
                >
                  Our Curriculum
                </p>
                <div
                  id="dropdownNavbarCurriculum"
                  className="absolute hidden font-normal divide-y rounded shadow w-max bg-gray-700 divide-gray-600"
                >
                  <ul className="py-1 text-sm text-gray-400">
                    <p className="block pr-4 pl-2 font-bold pt-2 text-ll cursor-default">
                      Unique to us:
                    </p>
                    <Link href="/curriculum">
                      <li className="block px-4 py-2 hover:bg-gray-600 hover:text-ll">
                        Curriculum
                      </li>
                    </Link>
                    <Link href="/precision-teaching">
                      <li className="block px-4 py-2 hover:bg-gray-600 hover:text-ll">
                        Precision Teaching
                      </li>
                    </Link>
                    <Link href="/future-technologies">
                      <li className="block px-4 py-2 hover:bg-gray-600 hover:text-ll">
                        Future technologies
                      </li>
                    </Link>
                    <Link href="/personal-mindset-education">
                      <li className="block px-4 py-2 hover:bg-gray-600 hover:text-ll">
                        Personal & Mindset <br></br> Education
                      </li>
                    </Link>
                    <p className="block pr-4 pl-2 font-bold pt-2 text-ll cursor-default">
                      Explained:
                    </p>
                    <Link href="/ib-vs-alevels">
                      <li className="block px-4 py-2 hover:bg-gray-600 hover:text-ll">
                        IB vs A-Levels
                      </li>
                    </Link>
                    <Link href="/cambridge-and-pearson">
                      <li className="block px-4 py-2 hover:bg-gray-600 hover:text-ll">
                        Cambridge & Pearson <br /> Explained
                      </li>
                    </Link>
                    <p className="block pr-4 pl-2 font-bold pt-2 text-ll cursor-default">
                      Year groups:
                    </p>
                    <Link href="/upperprimary">
                      <li className="block px-4 py-2 hover:bg-gray-600 hover:text-ll">
                        Upper Primary
                      </li>
                    </Link>
                    <Link href="/middleschool">
                      <li className="block px-4 py-2 hover:bg-gray-600 hover:text-ll">
                        Middle School
                      </li>
                    </Link>
                    <Link href="/igcse">
                      <li className="block px-4 py-2 hover:bg-gray-600 hover:text-ll">
                        IGCSE
                      </li>
                    </Link>
                    <Link href="/a-levels">
                      <li className="block px-4 py-2 hover:bg-gray-600 hover:text-ll">
                        A-Levels
                      </li>
                    </Link>
                  </ul>
                </div>
              </li>
              <li
                className="relative cursor-pointer z-10"
                onMouseEnter={toggleDropdownAdmissions}
                onMouseLeave={toggleDropdownAdmissions}
              >
                <p
                  id="dropdownNavbarLink"
                  className="delay-1 flex items-center justify-between w-max py-2 pl-3 pr-4 rounded lg:border-0 lg:p-0 bg-clip-text hover:text-transparent hover:bg-pg text-gray-200"
                >
                  Admissions
                </p>
                <div
                  id="dropdownNavbarAdmission"
                  className="absolute hidden font-normal divide-y rounded shadow w-max bg-gray-700 divide-gray-600"
                >
                  <ul className="py-1 text-sm text-gray-400">
                    <Link href="/journeys-and-fees">
                      <li className="block px-4 py-2 hover:bg-gray-600 hover:text-ll">
                        Journeys & Fees
                      </li>
                    </Link>
                    <Link href="/admission-process">
                      <li className="block px-4 py-2 hover:bg-gray-600 hover:text-ll">
                        Admission Process
                      </li>
                    </Link>
                    <Link href="/belgian-package">
                      <li className="block px-4 py-2 hover:bg-gray-600 hover:text-ll">
                        Belgian Package
                      </li>
                    </Link>
                    <Link href="/cambridge-exams">
                      <li className="block px-4 py-2 hover:bg-gray-600 hover:text-ll">
                        Cambridge Exams
                      </li>
                    </Link>
                  </ul>
                </div>
              </li>
              <Link href="/well-being">
                <li className="block py-2 pl-3 pr-4 rounded lg:border-0 lg:p-0 bg-clip-text hover:text-transparent hover:bg-pg text-gray-200">
                  Well-being
                </li>
              </Link>
              <li
                className="relative cursor-pointer z-0"
                onMouseEnter={toggleDropdownStudent}
                onMouseLeave={toggleDropdownStudent}
              >
                <p
                  id="dropdownNavbarLink"
                  className="delay-1 flex items-center justify-between w-max py-2 pl-3 pr-4 rounded lg:border-0 lg:p-0 bg-clip-text hover:text-transparent hover:bg-pg text-gray-200"
                >
                  Student Login
                </p>
                <div
                  id="dropdownNavbarStudent"
                  className="absolute hidden font-normal divide-y rounded shadow w-max bg-gray-700 divide-gray-600"
                >
                  <ul className="py-1 text-sm text-gray-400">
                    <li className="block px-4 py-2 hover:bg-gray-600 hover:text-ll">
                      <a
                        href="https://online-learning.instructure.com/login/canvas"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Learning Platform
                      </a>
                    </li>
                    <li className="block px-4 py-2 hover:bg-gray-600 hover:text-ll">
                      <a
                        href="https://my.classoos.com/login/main"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Online Books
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <div className="my-2">
                <button
                  onClick={() => apply()}
                  className="text-ll px-6 cursor-pointer py-4 text-base rounded-[16px] hover:scale-[1.05] transition-all ease-in-out bg-pg w-24  items-center"
                  target={"_blank"}
                >
                  Apply!
                </button>
              </div>
              <CallButton utmSource="navbar" textSize="text-sm" />
            </ul>
          </div>
        </div>
      )}

      <StyledModal
        id="1"
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        open={modal1IsOpen}
        onClose={() => {
          setModal1IsOpen(false);
        }}
        className={`overflow-y-auto`}
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
    </nav>
  );
}
