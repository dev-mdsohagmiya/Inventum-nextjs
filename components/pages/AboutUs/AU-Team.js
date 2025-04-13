"use client";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "@mui/base/Modal";
import { Box, styled } from "@mui/system";
import { animated, useSpring } from "@react-spring/web";
import PropTypes from "prop-types";
import * as React from "react";
import { useState } from "react";

library.add(fab, faEnvelope);

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

export default function AUTeam(props) {
  const [modal1IsOpen, setModal1IsOpen] = useState(false);
  const [modal2IsOpen, setModal2IsOpen] = useState(false);
  const [modal3IsOpen, setModal3IsOpen] = useState(false);
  const [modal4IsOpen, setModal4IsOpen] = useState(false);
  const [modal5IsOpen, setModal5IsOpen] = useState(false);
  const [modal6IsOpen, setModal6IsOpen] = useState(false);
  const [modal7IsOpen, setModal7IsOpen] = useState(false);
  const [modal8IsOpen, setModal8IsOpen] = useState(false);
  const [activeStaff, setActivestaff] = useState(0);
  function Staffcard({ staffMember, index }) {
    return (
      <div className="bg-dd rounded-xl  p-4 shadow-xl transition-all hover:scale-105 ease-in-out w-[16rem] ">
        <div
          onClick={() => {
            openModal(index);
          }}
          className="cursor-pointer"
        >
          <img
            className="-mt-3 -ml-3 h-5 w-5 absolute inline-flex"
            alt=""
            src="https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/icons%2Fclick.webp?alt=media&token=8ded644d-024b-4f52-91ac-f8c3993c0b5e&_gl=1*f7oxa5*_ga*MTc0OTc0OTAxLjE2NzQyOTQxMzY.*_ga_CW55HF8NVT*MTY5ODQ4OTcyNS41NC4xLjE2OTg0OTA2MzYuMTQuMC4w"
          />
          {!staffMember.img ? (
            <div
              className={`w-56 h-52 rounded-xl flex justify-center items-center mb-3 mx-auto select-none bg-pg`}
            >
              <p className="text-xl text-white">Image coming soon</p>
            </div>
          ) : (
            <img
              src={staffMember.img}
              alt=""
              className={`w-56 h-52 rounded-xl mb-3 object-cover ${staffMember.adjustment} mx-auto select-none`}
            />
          )}

          <h3
            className={`text-center font-bold text-2xl text-zinc-100 ${staffMember.nameAdjustment}`}
          >
            {staffMember.name}
          </h3>
          <p className="text-center font-bold text-zinc-400">
            {staffMember.position}
          </p>
        </div>
        <div className="flex justify-center gap-2 pt-4 text-ld pb-2">
          <a
            className="hover:scale-105"
            href={`mailto:${staffMember.email}`}
            target="__blank"
          >
            {" "}
            <FontAwesomeIcon icon={faEnvelope} size="xl" />
          </a>
        </div>
      </div>
    );
  }
  function openModal(index) {
    setActivestaff(index);
    setModal5IsOpen(true);
  }
  const staff = [
    {
      name: "Tallie Faul",
      position: "Teacher",
      email: "tallie@inventumonline.com",
      paragraph:
        "My name is Tallie Faul, this is my seventh year as an educator. I specialise in Mathematics and Physics and have taught both subjects in multiple languages. I come from an engineering background and I aspire to be a leading specialist in the field of educational technology. I love tinkering with robotics, coding and innovative technologies in my free time and I have created multiple websites, apps and helpful digital resources over the years.",
      img: "https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/staff%2Fenhanced%2FCleanShot%202024-09-11%20at%2007.36.42%402x.webp?alt=media&token=0cab5eb2-9263-410a-b7ac-796d7189c10e",
      adjustment: "object-center",
    },
    {
      name: "Omair Shah",
      position: "Teacher",
      email: "willem@inventumonline.com",
      paragraph: "",
      img: "https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/staff%2Fenhanced%2FCleanShot%202024-09-11%20at%2007.36.50%402x.webp?alt=media&token=dc68c546-efa3-4854-9b7c-8db155fecb4a",
      adjustment: "object-center",
    },
    {
      name: "Chanel Stolz",
      position: "Teacher",
      email: "chanel@inventumonline.com",
      paragraph:
        "My name is Chanel, and I have 5 years of experience working as a teacher. I am a Primary Teacher and my subjects to teach are Mathematics, Science, English, History and Geography. My hobbies include photography, sewing and exercising. Nature is my friend.",
      img: "https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/staff%2Fenhanced%2FCleanShot%202024-09-11%20at%2007.35.16%402x.webp?alt=media&token=2ad04fb1-687d-4c88-88d0-d27ad3656bbe",
      adjustment: "object-center",
    },
    {
      name: "Lana Sartorius",
      position: "Teacher",
      email: "lana@inventumonline.com",
      paragraph:
        "My name is Lana Sartorius, and I have been teaching for over 12 years. My teaching speciality is Psychology, Sociology, Travel and Tourism and Global Perspectives. I have a degree in Psychology and a Post Graduate Certificate in Education. I am registered with the South African Council for educators and have gained QTS in the UK. I have a great love for the outdoors and love bird watching. I have walked in the longest mosaic tunnel in the Southern Hemisphere and travelled extensively internationally.",
      img: "https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/staff%2Fenhanced%2FCleanShot%202024-09-11%20at%2007.36.10%402x.webp?alt=media&token=ec8635a0-4ff6-4d63-afc9-bd3ff6592b5e",
      adjustment: "object-center",
    },
    {
      name: "Natasha Lee",
      position: "Teacher",
      email: "natasha@inventumonline.com",
      paragraph:
        "My name is Natasha Lee, and I have been teaching for eight years. I have a strong passion for English and am also an outdoor enthusiast. I love hiking, fishing, camping, and spending time by the ocean. A fun fact about me is that I once completed a half marathon without any training, though I would not exactly recommend trying that!",
      img: "https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/staff%2Fenhanced%2FCleanShot%202024-09-11%20at%2007.36.27%402x.webp?alt=media&token=9aa07542-6d8a-4f4a-8b60-da239daac2b1",
      adjustment: "object-center",
    },
    {
      name: "Danielle Roodt",
      position: "Teacher",
      email: "danielle@inventumonline.com",
      paragraph:
        "Hi all, my name is Danielle Roodt. I am so excited to be teaching Environmental Management, Economic and Management Science and Geography. I graduated with a BCom HR Management Degree as well as a Post Graduate Certificate in Education. I have been teaching for 10 years. I live in South Africa. I enjoy the outdoors, hiking and fishing and my favourite place to visit is the Kruger National Park.",
      img: "https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/staff%2Fenhanced%2FCleanShot%202024-09-11%20at%2007.35.32%402x.webp?alt=media&token=970065e3-74f5-4495-a0b5-3ed538a62ddf",
      adjustment: "object-center",
    },
    {
      name: "Luiza Dos Santos",
      position: "Teacher",
      email: "luiza@inventumonline.com",
      paragraph:
        "My name is Luiza Dos Santos. I have been teaching for 38 years. Being a polyglot, you will guess that my teaching passions are languages: English, Afrikaans, Portuguese, French, German and Spanish. I have a great love for travelling and am also a ‘papyrophiliac’ (I guess you will look this up), a scribbler, a wordsmith and an avid journaler and diarist. Reading and research are vital for my well-being too.",
      img: "https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/staff%2Fenhanced%2FCleanShot%202024-09-11%20at%2007.36.18%402x.webp?alt=media&token=71608a86-1972-4728-b25f-7eedd167213b",
      adjustment: "object-center",
    },
    {
      name: "Sahir Masroor",
      position: "Teacher",
      email: "sahir@inventumonline.com",
      paragraph:
        "My name is Sahir Masroor, and I have over thirty years of teaching experience. I am very passionate about Computer Science and Information Technology and work as a Cambridge Assessment Specialist and Practical Examiner for Computer Science. I am proud that my students have received world—and country-level distinctions. Outside the classroom, I find solace in mountain hiking, and, in earlier years, I relished playing squash and cricket at the provincial level. In addition to my other interests, I am skilled in playing the flute.",
      img: "",
      adjustment: "object-center",
    },
    {
      name: "Hamood ur Rahman Mufti",
      position: "Teacher",
      email: "hamood@inventumonline.com",
      paragraph:
        "Hamood here, I live in Islamabad (Capital of Pakistan) and have been serving as an educationist for the last 30 years. The areas of interest are O and A Levels Economics and Business. I have also served as SAP (ERP software) consultant. I love doing animated lectures on computers. Our family is involved in micro finance loans that we give to those who intend to start as entrepreneurs and prepare the feasibility regarding the project and repayment of loan themselves. My hobbies include travelling and exploring nature, and playing keyboard",
      img: "https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/staff%2Fhamood.webp?alt=media&token=d859e59d-30e7-4cb3-ac78-1a3cef7be278",
      adjustment: "object-center",
    },
    {
      name: "Fra Betancourt",
      position: "Teacher",
      email: "fra@inventumonline.com",
      paragraph:
        "My name is Juan Francisco Betancourt, and I have been teaching for the past 11 years. I am deeply passionate about both education and psychology, as I believe the combination of these two fields is essential for living a conscious and fulfilling life. Outside of school, I’m an avid nature enthusiast who seeks out activities that blend adrenaline with the beauty of the outdoors. Whether it’s surfing, cycling, climbing, or scuba diving, I’m always eager to be part of it. I’m also passionate about Muay Thai, a practice that keeps me physically active and mentally balanced.",
      img: "https://ca.slack-edge.com/T06KA4AM14Z-U06LJ7ZTLFK-6c94bb1d8cda-512",
      adjustment: "object-center",
    },
    {
      name: "Klaudia Gorzynska",
      position: "Admin",
      email: "klaudia@inventumonline.com",
      paragraph:
        "My name is Klaudia, and I enjoy reading books and learning new languages, which is why I studied Applied Linguistics. I also love spending time with my dog and enjoy traveling, exploring new places and cultures. Visiting every country in the world is a dream of mine.",
      img: "https://ca.slack-edge.com/T06KA4AM14Z-U06T7PVKHK9-74cbd091d78c-512",
      adjustment: "object-center",
    },
    {
      name: "Hadia Ahmad",
      position: "Teacher",
      email: "hadia@inventumonline.com",
      paragraph:
        "I am Hadia Ahmad and have 13 years of teaching/work experience revolving around History, Politics and other social sciences in esteemed institutions of Pakistan and online abroad. I carry extensive knowledge of various educational systems like Cambridge and International Baccalaureate. For the past five years, my students have been getting distinctions in Pakistan and Nigeria (British Intl School). Being a theatre coach and an actress, my teaching philosophy has been evolving and I always update my skills with new EDTech related innovations. I believe in neurodiverse pedagogy and always customise my teaching style according to the needs of my students.",
      img: "",
      adjustment: "object-center",
    },
    {
      name: "Danera Scrooby",
      position: "Success Coach",
      email: "danera@inventumonline.com",
      paragraph:
        "Hello, I’m Danera. I have a Degree in Education as well as additional qualifications and training in special needs education. My approach to teaching is centered around fostering critical thinking and creativity in my students. I strive to create an interactive and inclusive classroom where each student feels valued and motivated to learn. Outside of teaching, I enjoy spending time with my family and going for walks.",
      img: "https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/staff%2Fdanera.webp?alt=media&token=d1f6090f-6311-411c-858c-1d30d99163c3",
      adjustment: "object-center",
    },
    {
      name: "Bernadine Gerntholtz",
      position: "Success Coach",
      email: "bernadine@inventumonline.com",
      paragraph:
        "My name is Bernadine and I have been in the Education industry for over 7 years. I have a deep passion for working with students with different backgrounds and educational needs. I focus on each student's individual learning journey, and I believe in maintaining positive relationships with students. I love being outdoors and visiting local Coffee shops. Organization is one of my best skills and I thrive on ticking off to-do lists.",
      img: "",
      adjustment: "object-center",
    },
    {
      name: "Omair Shah",
      position: "Teacher",
      email: "omair@inventumonline.com",
      paragraph: "",
      img: "",
      adjustment: "object-center",
    },
    {
      name: "Johlene van Schalkwyk",
      position: "Teacher",
      email: "johlene@inventumonline.com",
      paragraph: "",
      img: "https://ca.slack-edge.com/T06KA4AM14Z-U088YBPFDTR-bccc5484f1b1-512",
      adjustment: "object-center",
    },
  ];
  return (
    <section className="bg-dl">
      <h2 className="text-5xl md:text-7xl text-center py-10 font-bold bg-clip-text text-transparent bg-pg w-max mx-auto">
        Meet Our Team
      </h2>
      <p className="mx-auto text-center text-ll pb-5 text-2xl max-w-7xl px-5">
        Inventum International Online School was founded by a team of visionary
        education leaders who shared a common goal: to reimagine the face of
        learning while creating a positive environment focused on innovation,
        where learners can develop the knowledge, understanding, and
        future-ready skills to ensure success in an ever-changing world. Led by
        Co-Founders and Management Board members Cobus Steyn and Kaisa Sorjonen,
        Inventum International is committed to providing students with a
        student-centred transformative learning experience that develops
        creativity, critical thinking, and global citizenship.
      </p>
      <h3 className="text-3xl md:text-5xl text-center py-10 font-bold bg-clip-text text-transparent bg-pg w-max mx-auto">
        Directors
      </h3>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 w-max mx-auto">
        <div className="bg-dd rounded-xl  p-4 shadow-xl transition-all hover:scale-105 ease-in-out w-[16rem] ">
          <div
            onClick={() => {
              setModal2IsOpen(true);
            }}
            className="cursor-pointer"
          >
            <img
              className="-mt-3 -ml-3 h-5 w-5 absolute inline-flex"
              alt=""
              src="https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/icons%2Fclick.webp?alt=media&token=8ded644d-024b-4f52-91ac-f8c3993c0b5e&_gl=1*f7oxa5*_ga*MTc0OTc0OTAxLjE2NzQyOTQxMzY.*_ga_CW55HF8NVT*MTY5ODQ4OTcyNS41NC4xLjE2OTg0OTA2MzYuMTQuMC4w"
            />
            <div className="overflow-clip rounded-xl">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/staff%2Fenhanced%2FCleanShot%202024-09-11%20at%2007.35.24%402x.webp?alt=media&token=df68fd88-7314-483c-ad5e-bc2b87c58a91"
                alt=""
                className="w-56 h-52 rounded-xl mb-3 object-cover mx-auto select-none object-top"
              />
            </div>
            <h3 className="text-center font-bold text-2xl text-zinc-100 ">
              Cobus Steyn
            </h3>
            <p className="text-center font-bold text-zinc-400">
              Founding Director
            </p>
          </div>
          <div className="flex justify-center gap-2 pt-4 text-ld pb-2">
            <a
              className="hover:scale-105"
              href="www.linkedin.com/in/cobus-steyn-education"
              target="__blank"
            >
              {" "}
              <FontAwesomeIcon icon={["fab", "linkedin"]} size="xl" />
            </a>
            <a
              className="hover:scale-105"
              href="mailto:cobus@inventumonline.com"
              target="__blank"
            >
              {" "}
              <FontAwesomeIcon icon={faEnvelope} size="xl" />
            </a>
          </div>
        </div>
        <div className="bg-dd rounded-xl  p-4 shadow-xl transition-all hover:scale-105 ease-in-out w-[16rem] ">
          <div
            onClick={() => {
              setModal3IsOpen(true);
            }}
            className="cursor-pointer "
          >
            <img
              className="-mt-3 -ml-3 h-5 w-5 absolute inline-flex"
              alt=""
              src="https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/icons%2Fclick.webp?alt=media&token=8ded644d-024b-4f52-91ac-f8c3993c0b5e&_gl=1*f7oxa5*_ga*MTc0OTc0OTAxLjE2NzQyOTQxMzY.*_ga_CW55HF8NVT*MTY5ODQ4OTcyNS41NC4xLjE2OTg0OTA2MzYuMTQuMC4w"
            />
            <div
              className="overflow-clip rounded-xl "
              style={{ objectPosition: "80% 50%" }}
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/staff%2Fenhanced%2FCleanShot%202024-09-11%20at%2007.36.01%402x.webp?alt=media&token=b73f8497-f44d-403f-8722-3f9cc0b6210e"
                alt=""
                className="w-56 h-52 rounded-xl mb-3 mx-auto select-none object-cover object-top"
              />
            </div>
            <h3 className="text-center font-bold text-2xl text-zinc-100">
              Kaisa Sorjonen
            </h3>
            <p className="text-center font-bold text-zinc-400">
              Founding Director
            </p>
          </div>
          <div className="flex justify-center gap-2 pt-4 text-ld pb-2">
            <a
              className="hover:scale-105"
              href="https://www.linkedin.com/in/kaisa-sorjonen-1483b12/"
              target="__blank"
            >
              {" "}
              <FontAwesomeIcon icon={["fab", "linkedin"]} size="xl" />
            </a>
            <a
              className="hover:scale-105"
              href="mailto:kaisa@inventumonline.com"
              target="__blank"
            >
              {" "}
              <FontAwesomeIcon icon={faEnvelope} size="xl" />
            </a>
          </div>
        </div>
        {props.nigeria ? (
          <div className="bg-dd rounded-xl  p-4 shadow-xl transition-all hover:scale-105 ease-in-out w-[16rem] ">
            <div
              onClick={() => {
                setModal4IsOpen(true);
              }}
              className="cursor-pointer"
            >
              <img
                className="-mt-3 -ml-3 h-5 w-5 absolute inline-flex"
                alt=""
                src="https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/icons%2Fclick.webp?alt=media&token=8ded644d-024b-4f52-91ac-f8c3993c0b5e&_gl=1*f7oxa5*_ga*MTc0OTc0OTAxLjE2NzQyOTQxMzY.*_ga_CW55HF8NVT*MTY5ODQ4OTcyNS41NC4xLjE2OTg0OTA2MzYuMTQuMC4w"
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/1-pastor-mike_543x590.webp?alt=media&token=863a0ab9-2b32-4321-90c9-170535623515"
                alt=""
                className="w-56 h-52 rounded-xl mb-3 object-cover mx-auto select-none object-top"
              />
              <h3 className="text-center font-bold text-2xl text-zinc-100">
                Mike Nwanegbo
              </h3>
              <p className="text-center font-bold text-zinc-400">
                Board Member
              </p>
            </div>
            <div className="flex justify-center gap-2 pt-4 text-ld pb-2">
              <a
                className="hover:scale-105"
                href="https://www.linkedin.com/in/mike-nwanegbo-09aa2ab9/"
                target="__blank"
              >
                {" "}
                <FontAwesomeIcon icon={["fab", "linkedin"]} size="xl" />
              </a>
              <a
                className="hover:scale-105"
                href="mailto:mikenwanegbo@gmail.com"
                target="__blank"
              >
                {" "}
                <FontAwesomeIcon icon={faEnvelope} size="xl" />
              </a>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div>
        <h3 className="text-3xl md:text-5xl text-center py-10 font-bold bg-clip-text text-transparent bg-pg w-max mx-auto">
          Leadership
        </h3>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 flex-wrap max-w-screen">
          <div className="bg-dd rounded-xl  p-4 shadow-xl transition-all hover:scale-105 ease-in-out w-[16rem] ">
            <div
              onClick={() => {
                setModal6IsOpen(true);
              }}
              className="cursor-pointer "
            >
              <img
                className="-mt-3 -ml-3 h-5 w-5 absolute inline-flex"
                alt=""
                src="https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/icons%2Fclick.webp?alt=media&token=8ded644d-024b-4f52-91ac-f8c3993c0b5e&_gl=1*f7oxa5*_ga*MTc0OTc0OTAxLjE2NzQyOTQxMzY.*_ga_CW55HF8NVT*MTY5ODQ4OTcyNS41NC4xLjE2OTg0OTA2MzYuMTQuMC4w"
              />
              <div className="overflow-clip rounded-xl">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/staff%2Fenhanced%2FCleanShot%202024-09-11%20at%2007.35.41%402x.webp?alt=media&token=b97f31a4-5693-4766-8f96-6a493a2e697e"
                  alt=""
                  className="w-56 h-52 rounded-xl mb-3 object-cover mx-auto select-none object-top"
                />
              </div>
              <h3 className="text-center font-bold text-2xl text-zinc-100 ">
                Edwin Thijs
              </h3>
              <p className="text-center font-bold text-zinc-400">
                Head of Academics
              </p>
            </div>
            <div className="flex justify-center gap-2 pt-4 text-ld pb-2">
              <a
                className="hover:scale-105"
                href="https://www.linkedin.com/in/edwin-thijs-a0094624b"
                target="__blank"
              >
                {" "}
                <FontAwesomeIcon icon={["fab", "linkedin"]} size="xl" />
              </a>
              <a
                className="hover:scale-105"
                href="mailto:edwin@inventumonline.com"
                target="__blank"
              >
                {" "}
                <FontAwesomeIcon icon={faEnvelope} size="xl" />
              </a>
            </div>
          </div>
          <div className="bg-dd rounded-xl  p-4 shadow-xl transition-all hover:scale-105 ease-in-out w-[16rem] ">
            <div
              onClick={() => {
                setModal7IsOpen(true);
              }}
              className="cursor-pointer"
            >
              <img
                className="-mt-3 -ml-3 h-5 w-5 absolute inline-flex"
                alt=""
                src="https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/icons%2Fclick.webp?alt=media&token=8ded644d-024b-4f52-91ac-f8c3993c0b5e&_gl=1*f7oxa5*_ga*MTc0OTc0OTAxLjE2NzQyOTQxMzY.*_ga_CW55HF8NVT*MTY5ODQ4OTcyNS41NC4xLjE2OTg0OTA2MzYuMTQuMC4w"
              />
              <div className="overflow-clip rounded-xl">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/staff%2Fenhanced%2FCleanShot%202024-09-11%20at%2007.36.35%402x.webp?alt=media&token=c0ea57a2-a5ab-48cd-9f48-4a3391647f1f"
                  alt=""
                  className="w-56 h-52 rounded-xl mb-3 object-cover mx-auto select-none object-top"
                />
              </div>

              <h3 className="text-center font-bold text-2xl text-zinc-100">
                Nikita Thijs
              </h3>
              <p className="text-center font-bold text-zinc-400">
                Head of Learner Success
              </p>
            </div>
            <div className="flex justify-center gap-2 pt-4 text-ld pb-2">
              <a
                className="hover:scale-105"
                href="https://www.linkedin.com/in/nikita-thijs-162421306"
                target="__blank"
              >
                {" "}
                <FontAwesomeIcon icon={["fab", "linkedin"]} size="xl" />
              </a>
              <a
                className="hover:scale-105"
                href="mailto:nikita@inventumonline.com"
                target="__blank"
              >
                {" "}
                <FontAwesomeIcon icon={faEnvelope} size="xl" />
              </a>
            </div>
          </div>
          <div className="bg-dd rounded-xl  p-4 shadow-xl transition-all hover:scale-105 ease-in-out w-[16rem]">
            <div
              onClick={() => {
                setModal8IsOpen(true);
              }}
              className="cursor-pointer"
            >
              <img
                className="-mt-3 -ml-3 h-5 w-5 absolute inline-flex"
                alt=""
                src="https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/icons%2Fclick.webp?alt=media&token=8ded644d-024b-4f52-91ac-f8c3993c0b5e&_gl=1*f7oxa5*_ga*MTc0OTc0OTAxLjE2NzQyOTQxMzY.*_ga_CW55HF8NVT*MTY5ODQ4OTcyNS41NC4xLjE2OTg0OTA2MzYuMTQuMC4w"
              />
              <div className="overflow-clip rounded-xl">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/staff%2Fenhanced%2FCleanShot%202024-09-11%20at%2007.35.50%402x.webp?alt=media&token=1dfe4c87-a650-4c9d-b149-b79bf8bf1a51"
                  alt=""
                  className="w-56 h-52 rounded-xl mb-3 object-cover mx-auto select-none object-top"
                />
              </div>

              <h3 className="text-center font-bold text-2xl text-zinc-100">
                Felix Tikkanen
              </h3>
              <p className="text-center font-bold text-zinc-400">
                Head of Admissions
              </p>
            </div>
            <div className="flex justify-center gap-2 pt-4 text-ld pb-2">
              <a
                className="hover:scale-105"
                href="https://www.linkedin.com/in/felix-tikkanen-286b74220"
                target="__blank"
              >
                {" "}
                <FontAwesomeIcon icon={["fab", "linkedin"]} size="xl" />
              </a>
              <a
                className="hover:scale-105"
                href="mailto:felix@inventumonline.com"
                target="__blank"
              >
                {" "}
                <FontAwesomeIcon icon={faEnvelope} size="xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-3xl md:text-5xl text-center py-10 font-bold bg-clip-text text-transparent bg-pg w-max mx-auto">
          Our staff
        </h3>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 flex-wrap max-w-7xl mx-auto">
          {staff.map((staffMember, index) => {
            return <Staffcard staffMember={staffMember} index={index} />;
          })}
        </div>
      </div>

      <StyledModal
        id="2"
        open={modal2IsOpen}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        onClose={() => {
          setModal2IsOpen(false);
        }}
        className={`border-none `}
      >
        <Fade in={modal2IsOpen}>
          <Box className="flex justify-center items-center border-none">
            <div className="h-max max-w-[80vw] max-h-[80vh] bg-dd rounded-lg overflow-y-auto ">
              <h1 className="text-ll font-bold text-4xl p-4 border-b-2 border-dl">
                Cobus Steyn
              </h1>
              <div className="bg-dd h-full w-full p-5">
                <div className="space-y-6 text-ll text-justify">
                  As an experienced educator with over 18 years of teaching
                  experience, I have been leading international schools for 13
                  years. My expertise in curriculum and pedagogy, as well as my
                  advanced degrees in Education and History, have enabled me to
                  deliver outstanding educational outcomes for students. In
                  addition, I am a consultant for strategic and governance
                  planning and have a strong passion for the gamification of
                  education, project-based learning and future technologies.
                  <br></br>
                  <br></br>
                  My commitment to excellence in education is evident in my work
                  as a dynamic and forward-thinking leader. I believe that by
                  harnessing the power of games and cutting-edge digital tools,
                  we can create more engaging, interactive, and effective
                  learning environments that better meet the needs of today's
                  learners.
                </div>
              </div>
            </div>
          </Box>
        </Fade>
      </StyledModal>
      <StyledModal
        id="6"
        open={modal6IsOpen}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        onClose={() => {
          setModal6IsOpen(false);
        }}
        className={`border-none `}
      >
        <Fade in={modal6IsOpen}>
          <Box className="flex justify-center items-center border-none">
            <div className="h-max max-w-[80vw] max-h-[80vh] bg-dd rounded-lg overflow-y-auto ">
              <h1 className="text-ll font-bold text-4xl p-4 border-b-2 border-dl">
                Edwin Thijs
              </h1>
              <div className="bg-dd h-full w-full p-5">
                <div className="space-y-6 text-ll text-justify">
                  My name is Edwin Thijs, and I have over 15 years of teaching
                  experience across various syllabi and examination boards. I
                  come from a family of educators—my wife is also an educational
                  leader, and together we share a passion for preparing our
                  future leaders. I enjoy maintaining a fit and healthy
                  lifestyle, have a great sense of humour, and love working for
                  Inventum Online School in our pursuit of future-focused
                  learning. They say teaching runs in the family, but don't
                  worry, we only discuss work over dinner occasionally!{" "}
                </div>
              </div>
            </div>
          </Box>
        </Fade>
      </StyledModal>
      <StyledModal
        id="7"
        open={modal7IsOpen}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        onClose={() => {
          setModal7IsOpen(false);
        }}
        className={`border-none `}
      >
        <Fade in={modal7IsOpen}>
          <Box className="flex justify-center items-center border-none">
            <div className="h-max max-w-[80vw] max-h-[80vh] bg-dd rounded-lg overflow-y-auto ">
              <h1 className="text-ll font-bold text-4xl p-4 border-b-2 border-dl">
                Nikita Thijs
              </h1>
              <div className="bg-dd h-full w-full p-5">
                <div className="space-y-6 text-ll text-justify">
                  I am Nikita Thijs, the Head of Student Success, I have over
                  nine years of experience in the educational industry. I am
                  dedicated to enhancing student well-being and creating a
                  supportive academic environment. Outside of work, I am
                  passionate about staying active through CrossFit and find joy
                  in baking. My personal motto,¨Persist and conquer: every
                  challenge paves the way.¨
                </div>
              </div>
            </div>
          </Box>
        </Fade>
      </StyledModal>
      <StyledModal
        id="8"
        open={modal8IsOpen}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        onClose={() => {
          setModal8IsOpen(false);
        }}
        className={`border-none `}
      >
        <Fade in={modal8IsOpen}>
          <Box className="flex justify-center items-center border-none">
            <div className="h-max max-w-[80vw] max-h-[80vh] bg-dd rounded-lg overflow-y-auto ">
              <h1 className="text-ll font-bold text-4xl p-4 border-b-2 border-dl">
                Felix Tikkanen
              </h1>
              <div className="bg-dd h-full w-full p-5">
                <div className="space-y-6 text-ll text-justify">
                  I'm Felix, Head of Admissions. I run and own a Digital
                  Marketing Agency managing well over 6 figures a year in
                  advertising budget. I spend my free time learning through
                  podcasts, books, courses and by talking to experts. I also
                  love working out and staying healthy.
                  <br></br>
                  <br></br>
                  PS: If you love chess and think you can beat me, send me an
                  email :)
                </div>
              </div>
            </div>
          </Box>
        </Fade>
      </StyledModal>
      <StyledModal
        id="3"
        open={modal3IsOpen}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        onClose={() => {
          setModal3IsOpen(false);
        }}
        className={`overflow-y-auto`}
      >
        <Fade in={modal3IsOpen}>
          <Box className="flex justify-center items-center">
            <div className="h-max max-w-[80vw] max-h-[80vh] bg-dd rounded-lg overflow-y-auto">
              <h1 className="text-ll font-bold text-4xl p-4 border-b-2 border-dl">
                Kaisa Sorjonen
              </h1>
              <div className="bg-dd h-full w-full p-5">
                <div className="space-y-6 text-ll text-justify">
                  With over two decades of leadership roles in the financial
                  corporate world, I transitioned into the educational sector
                  ten years ago and have since been involved in school
                  leadership and governance for international schools. My
                  background and expertise includes extensive experience in
                  start-ups and takeovers, providing me with the financial
                  knowledge, creativity and experience to successfully help lead
                  a new and exciting organisation such as Inventum
                  International.
                  <br></br>
                  <br></br>
                  As a life-long learner who is energised by new challenges and
                  meeting new people, I recently expanded my education by
                  obtaining an advanced degree in HR. I am excited to bring my
                  skills and expertise to the multicultural and global community
                  at Inventum International and look forward to work with my
                  colleagues to build a dynamic and supportive learning
                  environment where innovation is always evolving.
                </div>
              </div>
            </div>
          </Box>
        </Fade>
      </StyledModal>
      <StyledModal
        id="4"
        open={modal4IsOpen}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        onClose={() => {
          setModal4IsOpen(false);
        }}
        className={`overflow-y-auto`}
      >
        <Fade in={modal4IsOpen}>
          <Box className="flex justify-center items-center">
            <div className="h-max max-w-[80vw] max-h-[80vh] bg-dd rounded-lg overflow-y-auto">
              <h1 className="text-ll font-bold text-4xl p-4 border-b-2 border-dl">
                Mike Nwanegbo
              </h1>

              <div className=" h-full w-full p-5">
                <div className="space-y-6 text-ll text-justify">
                  Mike is a pastor, author, motivational speaker, and recording
                  artist. As a young man, Mike was a powerful and skillful
                  footballer and played semi-professionally in Belgium between
                  1992-95.
                  <br></br>
                  <br></br>
                  In 2002, Mike was sent from England to lead the RCCG New Life
                  Assembly church in Antwerp. New Life Assembly is a family and
                  international parish with over 19 nationalities and is now one
                  of the biggest churches in Belgium.
                  <br />
                  <br />A graduate of the University of Port Harcourt, Nigeria,
                  and also of the Continental Theological Seminary in Brussels,
                  Mike is married to Pastor Boma Nwanegbo, and they are blessed
                  with three lovely girls who have all attended ISF. He is,
                  therefore, also the Parent Representative on the board.
                </div>
              </div>
            </div>
          </Box>
        </Fade>
      </StyledModal>
      <StyledModal
        id="5"
        open={modal5IsOpen}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        onClose={() => {
          setModal5IsOpen(false);
        }}
        className={`max-w-3xl mx-auto`}
      >
        <Fade in={modal5IsOpen}>
          <Box className="flex justify-center items-center border-none">
            <div className="h-max max-w-[80vw] max-h-[80vh] bg-dd rounded-lg overflow-y-auto ">
              <h1 className="text-ll font-bold text-4xl p-4 border-b-2 border-dl">
                {staff[activeStaff].name}
              </h1>
              <div className="bg-dd h-full w-full p-5">
                <div
                  className="space-y-6 text-ll text-justify"
                  dangerouslySetInnerHTML={{
                    __html: staff[activeStaff].paragraph,
                  }}
                ></div>
              </div>
            </div>
          </Box>
        </Fade>
      </StyledModal>
    </section>
  );
}
