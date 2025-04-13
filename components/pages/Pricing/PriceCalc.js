"use client";
import { Modal } from "@mui/base/Modal";
import { Box, styled } from "@mui/system";
import { animated, useSpring } from "@react-spring/web";
import PropTypes from "prop-types";
import * as React from "react";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import Asubjects from "../Curriculum/Asubjects.json";
import IGCSEsubjects from "../Curriculum/IGCSEsubjects.json";
import ISFsubjects from "../Curriculum/ISFsubjects.json";

const animatedComponents = makeAnimated();
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

export default function PriceCalc(props) {
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedTier, setSelectedTier] = useState(0);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [selectedBelgian, setSelectedBelgian] = useState([]);
  const [selectedTutorSessions, setSelectedTutorSessions] = useState([]);
  const [Price, setPrice] = useState(0);
  const [modal1IsOpen, setModal1IsOpen] = useState(false);

  function apply() {
    setModal1IsOpen(true);
    window.dataLayer.push({ event: "apply" });
  }

  var JSON = null;
  switch (selectedLevel) {
    case "IGCSE":
      JSON = IGCSEsubjects;
      break;
    case "Middleschool":
      JSON = ISFsubjects;
      break;
    case "A-levels":
      JSON = Asubjects;
      break;
    default:
      JSON = null;
  }
  var subjects = [];
  const addonlist = [
    { value: "Tutor", label: "Additional Tutoring" },
    { value: "Applications", label: "Help with university applications" },
    { value: "Personal", label: "Personalised learning experience" },
    {
      value: "University",
      label: "Help with university selection and tertiary study path",
    },
    { value: "Exams", label: "Assistance with examination arrangements" },
  ];
  const addonlisttierthree = [
    { value: "Tutor", label: "Additional Tutoring" },
    { value: "Applications", label: "Help with university applications" },
    {
      value: "University",
      label: "Help with university selection and tertiary study path",
    },
    { value: "Exams", label: "Assistance with examination arrangements" },
  ];
  const Belgianlist = [
    { value: "MockExam", label: "Mock Examinations" },
    { value: "PractExp", label: "Practical Experiments" },
    { value: "Coursework", label: "Coursework" },
    { value: "Career", label: "Career Counselling" },
    { value: "University", label: "Help with University Applications" },
  ];
  const tiers = [
    { value: 1, label: "Tier 1" },
    { value: 2, label: "Tier 2" },
    { value: 3, label: "Tier 3" },
  ];
  const levels = [
    { value: "Middleschool", label: "Middleschool" },
    { value: "IGCSE", label: "IGCSE" },
    { value: "A-levels", label: "A-levels" },
    { value: "Belgian-Package", label: "Belgian Package" },
  ];

  JSON &&
    JSON.forEach((subject) => {
      if (
        subject.name === "Digital-Literacy" ||
        subject.name === "PSHE" ||
        subject.name === "Economic-Management-Sciences" ||
        subject.name === "Computing"
      ) {
        return;
      }
      const name = subject.name.includes("-")
        ? subject.name.replaceAll("-", " ")
        : subject.name;
      subjects.push({ value: name, label: name });
    });

  const handleLevelSelect = (selectedOption) => {
    setSelectedLevel(selectedOption.value);
    setSelectedSubjects([]);
    setSelectedBelgian([]);
    setSelectedAddons([]);
    setSelectedTutorSessions([]);
  };
  const handleTierSelect = (selectedOption) => {
    if (selectedOption) {
      setSelectedTier(selectedOption.value);
      setSelectedAddons([]);
      setSelectedTutorSessions([]);
    }
  };

  const handleSubjectSelect = (selectedOptions) => {
    setSelectedSubjects(selectedOptions);
  };
  const handleTutorSelect = (selectedOptions) => {
    setSelectedTutorSessions(selectedOptions);
  };

  const handleAddonsSelect = (selectedOptions) => {
    if (selectedOptions) {
      setSelectedAddons(selectedOptions);
    }
  };
  const handleBelgianSelect = (selectedOptions) => {
    if (selectedOptions) {
      setSelectedBelgian(selectedOptions);
    }
  };

  function containsAddonTutor(array) {
    for (const obj of array) {
      if (obj.value === "Tutor") {
        return true;
      }
    }
    return false;
  }
  const TutorSessions = [
    { value: "0", label: "1 session" },
    { value: "1", label: "10 sessions" },
    { value: "2", label: "20 sessions" },
    { value: "3", label: "30 sessions" },
  ];

  useEffect(() => {
    const TutorSessionsPrice = [20, 180, 320, 460];

    const LevelPrices = {
      Middleschool: [550, 690, 990],
      IGCSE: [570, 720, 1020],
      "A-levels": [590, 750, 1050],
      "Belgian-Package": [0],
      "": [0],
    };

    const AddonsPrices = [
      { Tutor: 0.01 },
      { Applications: 100 },
      { Personal: 100 },
      { University: 250 },
      { Exams: 100 },
      { "": 0 },
    ];
    const BelgianPrices = [
      { MockExam: 500 },
      { PractExp: 500 },
      { Coursework: 750 },
      { Career: 350 },
      { University: 250 },
      { "": 0 },
    ];

    let levelPrice = 0;
    if (selectedLevel === "Belgian-Package") {
      levelPrice = LevelPrices[selectedLevel ? selectedLevel : ""][0];
      setSelectedTier(null); // reset selectedTier value
    } else {
      levelPrice =
        LevelPrices[selectedLevel ? selectedLevel : ""][
          selectedTier ? selectedTier - 1 : null
        ];
    }

    let totalAddons = 0;
    if (selectedAddons) {
      selectedAddons.forEach((addon) => {
        addon.value !== "Tutor"
          ? (totalAddons =
              totalAddons +
              AddonsPrices.find((a) => a[addon.value])[addon.value])
          : (totalAddons =
              totalAddons + TutorSessionsPrice[selectedTutorSessions.value]);
      });
    }
    let totalBelgians = 0;
    if (selectedBelgian) {
      selectedBelgian.forEach((belgian) => {
        totalBelgians =
          totalBelgians +
          BelgianPrices.find((a) => a[belgian.value])[belgian.value];
      });
    }
    for (const obj of selectedSubjects) {
      if (obj.value === "Computer Science") {
        return setPrice(
          levelPrice * selectedSubjects.length +
            totalAddons +
            totalBelgians +
            150
        );
      }
    }
    return setPrice(
      levelPrice * selectedSubjects.length + totalAddons + totalBelgians
    );
  }, [
    selectedLevel,
    selectedTier,
    selectedSubjects,
    selectedAddons,
    selectedBelgian,
    selectedTutorSessions,
  ]);

  return (
    <div className="h-max text-ll bg-dl lg:mx-50 py-10" id="calculate">
      <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
        <h2 class="text-5xl w-full text-center py-5 font-bold bg-clip-text text-transparent bg-pg">
          Fee Calculator
        </h2>
        <p class="mb-5 font-light sm:text-xl text-ll">
          {props.subtitle ??
            "To find out the total annual cost of the courses you would like your child to study, please use our handy calculator below! Please note that a one-off registration fee of EUR 250 is not included in the calculation."}
        </p>
      </div>
      <div className="flex md:flex-row-reverse flex-col-reverse gap-10 md:gap-0 mb-10">
        <div className="md:w-1/2 w-3/4 p-7 mx-auto justify-center md:mx-24   bg-dd shadow-xl rounded-xl flex flex-col items-center py-10">
          <h1 className="text-xl font-bold text-ll">Total Payment is</h1>
          <p className="text-7xl text-transparent bg-pg bg-clip-text font-bold mb-10 mt-2">
            {containsAddonTutor(selectedAddons) &&
            selectedTutorSessions.length === 0 ? (
              <span className="text-xl">Please select Tutoring sessions</span>
            ) : (
              <span>
                €<CountUp duration={1} end={Price ? Price : 0} />
              </span>
            )}
          </p>
          <button className="my-2 my-button">
            <div
              onClick={() => apply()}
              className="text-ll hover:scale-[1.05] transition-all ease-in-out bg-pg w-24 rounded-xl items-center py-2 text-sm"
              target={"_blank"}
            >
              Apply now!
            </div>
          </button>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 md:w-1/2 md:ml-24 mx-auto">
          <div className="flex flex-col text-ll lg:items-end ">
            <label className="">Level</label>
            <Select
              closeMenuOnSelect
              components={animatedComponents}
              options={levels}
              onChange={handleLevelSelect}
              isSearchable={false}
              className="w-60 2xl:w-80 text-dl"
            />
          </div>
          {selectedLevel === "Belgian-Package" ? (
            <div className="flex flex-col text-ll">
              <label>Belgian Package items</label>
              <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                options={Belgianlist}
                value={selectedBelgian}
                captureMenuScroll
                isSearchable={false}
                onChange={handleBelgianSelect}
                className="w-60 2xl:w-80 text-dl"
              />
            </div>
          ) : (
            <>
              <div className="flex flex-col text-ll ">
                <label>Tier</label>
                <Select
                  closeMenuOnSelect
                  components={animatedComponents}
                  options={tiers}
                  onChange={handleTierSelect}
                  isSearchable={false}
                  className="w-60 2xl:w-80 text-dl"
                />
              </div>
              <div className="flex flex-col text-ll lg:items-end ">
                <label className=" justify-start">Subjects</label>
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  isMulti
                  options={subjects}
                  value={selectedSubjects}
                  captureMenuScroll
                  isSearchable={false}
                  onChange={handleSubjectSelect}
                  className="w-60 2xl:w-80 text-dl"
                />
              </div>
              <div className="flex flex-col text-ll">
                {containsAddonTutor(selectedAddons) ? (
                  <div className="mb-2">
                    <label>Tutoring sessions</label>
                    <Select
                      closeMenuOnSelect={false}
                      components={animatedComponents}
                      options={TutorSessions}
                      value={selectedTutorSessions}
                      captureMenuScroll
                      isSearchable={false}
                      onChange={handleTutorSelect}
                      className="w-60 2xl:w-80 text-dl"
                    />
                  </div>
                ) : (
                  <></>
                )}
                <label>Extra add-ons</label>
                {selectedTier === 3 ? (
                  <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    isMulti
                    options={addonlisttierthree}
                    value={selectedAddons}
                    captureMenuScroll
                    isSearchable={false}
                    onChange={handleAddonsSelect}
                    className="w-60 2xl:w-80 text-dl"
                  />
                ) : (
                  <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    isMulti
                    options={addonlist}
                    value={selectedAddons}
                    captureMenuScroll
                    isSearchable={false}
                    onChange={handleAddonsSelect}
                    className="w-60 2xl:w-80 text-dl"
                  />
                )}
              </div>
            </>
          )}
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
                className=""
                src="https://tally.so/embed/mZoMlB?hideTitle=1&dynamicHeight=1"
                width={"100%"}
                title="Admissions Form"
              ></iframe>
            </div>
          </Box>
        </Fade>
      </StyledModal>
    </div>
  );
}
