"use client"
import { Modal } from "@mui/base/Modal";
import { Box, styled } from "@mui/system";
import * as React from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import CallButton from "@/hooks/CallButton";
import { useState, useEffect } from "react";
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

  // Get search params after component mounts
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const gclidParam = params.get("gclid");
      if (gclidParam) {
        setGclid(gclidParam);
        localStorage.setItem("gclid", gclidParam);
      }
    }
  }, []);

  function apply() {
    setModal1IsOpen(true);
  }

  function toggleDropdownCurriculum() {
    const a = document.querySelector("#dropdownNavbarCurriculum");
    a.classList.contains("hidden")
      ? a.classList.remove("hidden")
      : a.classList.add("hidden");
  }

  function toggleDropdownAdmissions() {
    const a = document.querySelector("#dropdownNavbarAdmission");
    a.classList.contains("hidden")
      ? a.classList.remove("hidden")
      : a.classList.add("hidden");
  }

  function toggleDropdownStudent() {
    const a = document.querySelector("#dropdownNavbarStudent");
    a.classList.contains("hidden")
      ? a.classList.remove("hidden")
      : a.classList.add("hidden");
  }

  function toggleHamburger() {
    const a = document.querySelector("#hamburger-menu");
    const b = document.querySelector("#menu03");
    a.classList.contains("hidden")
      ? a.classList.remove("hidden")
      : a.classList.add("hidden");
    b.classList.contains("active")
      ? b.classList.remove("active")
      : b.classList.add("active");
    setToggled(!toggled);
  }

  const isLandingPage = pathname.includes("information");

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const targetId = window.location.hash.substring(1);
      const element = document.getElementById(targetId);
      
      if (element) {
        const navbar = document.querySelector('nav');
        const navbarHeight = navbar.offsetHeight;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  }, [pathname]);


  return (
    <nav className="py-2.5 bg-dd fixed w-full z-[999] top-0 left-0 border-b border-gray-600">
      {isLandingPage ? (
        <div className="container flex flex-wrap justify-between mx-auto">
          <Link href="#home">
            <div className="flex items-center gap-2 sm:gap-5">
              <img src={"/images/ui/logo-icon.svg"} className="xl:w-10 w-6" alt="" />
              <img
                id="navbar-image"
                src={"/images/ui/logowhitetransparentcropped.png"}
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
          <Link href="/">
            <div className="flex items-center gap-2 sm:gap-5">
              <img src={"/images/ui/logo-icon.svg"} className="xl:w-10 w-6" alt="" />
              <img
                id="navbar-image"
                src={"/images/ui/logowhitetransparentcropped.png"}
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
              <button className="my-2">
                <div
                  onClick={() => apply()}
                  className="text-ll px-4 py-2 text-base rounded-xl hover:scale-[1.05] transition-all ease-in-out bg-pg items-center"
                  target={"_blank"}
                >
                  Apply!
                </div>
              </button>
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