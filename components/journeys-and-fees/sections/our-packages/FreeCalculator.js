import { useEffect, useState } from "react";
import { ChevronDown, Search } from "./icons";
import * as React from "react";
import CountUp from "react-countup";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import Asubjects from "./json/Asubjects.json";
import IGCSEsubjects from "./json/IGCSEsubjects.json";
import ISFsubjects from "./json/ISFsubjects.json";

const animatedComponents = makeAnimated();

const FreeCalculator = () => {
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedJourney, setSelectedJourney] = useState(0);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [selectedBelgian, setSelectedBelgian] = useState([]);
  const [selectedTutorSessions, setSelectedTutorSessions] = useState([]);
  const [selectedStudyChecks, setSelectedStudyChecks] = useState([]);
  const [showFees, setShowFees] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState({
    value: 1,
    label: "Pay in full",
  });
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
    { value: "StudyCoach", label: "Study Coach check-ins" },
  ];
  const addonlistjourneythree = [
    { value: "Tutor", label: "Additional Tutoring" },
    { value: "Applications", label: "Help with university applications" },
    {
      value: "University",
      label: "Help with university selection and tertiary study path",
    },
    { value: "Exams", label: "Assistance with examination arrangements" },
    { value: "StudyCoach", label: "Study Coach check-ins" },
  ];
  const Belgianlist = [
    { value: "MockExam", label: "Mock Examinations" },
    { value: "PractExp", label: "Practical Experiments" },
    { value: "Coursework", label: "Coursework" },
    { value: "Career", label: "Career Counselling" },
    { value: "University", label: "Help with University Applications" },
  ];
  const journeys = [
    { value: 1, label: "Journey 1" },
    { value: 2, label: "Journey 2" },
    { value: 3, label: "Journey 3" },
  ];
  const levels = [
    { value: "Middleschool", label: "Middle School & Upper Primary" },
    { value: "IGCSE", label: "IGCSE" },
    { value: "A-levels", label: "A-levels" },
    { value: "Belgian-Package", label: "Belgian Package" },
  ];
  const payments = [
    { value: 1, label: "Pay in full", installments: 1 },
    { value: 2, label: "3 payments", installments: 3 },
    { value: 3, label: "6 payments", installments: 6 },
    { value: 4, label: "10 payments (monthly)", installments: 10 },
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
    setSelectedStudyChecks([]);
  };
  const handleJourneySelect = (selectedOption) => {
    if (selectedOption) {
      setSelectedJourney(selectedOption.value);
      setSelectedAddons([]);
      setSelectedTutorSessions([]);
      setSelectedStudyChecks([]);
    }
  };

  const handleSubjectSelect = (selectedOptions) => {
    setSelectedSubjects(selectedOptions);
  };
  const handleTutorSelect = (selectedOptions) => {
    setSelectedTutorSessions(selectedOptions);
  };
  const handleStudySelect = (selectedOptions) => {
    setSelectedStudyChecks(selectedOptions);
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
  const handlePaymentSelect = (selectedOptions) => {
    if (selectedOptions) {
      setSelectedPayment(selectedOptions);
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
  function containsAddonStudy(array) {
    for (const obj of array) {
      if (obj.value === "StudyCoach") {
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
  const StudyChecks = [
    { value: "0", label: "Study Coach check-ins twice a month (annually)" },
    { value: "1", label: "Study Coach check-ins once a week (annually)" },
  ];

  useEffect(() => {
    const TutorSessionsPrice = [20, 180, 320, 460];
    const StudyChecksPrice = [300, 550];

    const LevelPrices = {
      Middleschool: [
        // Upper Primary & Middle School
        [695, 800, 1250], // 1 Payment
        [730, 840, 1310], // 3 Payments
        [745, 855, 1335], // 6 Payments
        [765, 880, 1375], // 10 Payments
      ],
      IGCSE: [
        // IGCSE
        [715, 830, 1280], // 1 Payment
        [750, 870, 1345], // 3 Payments
        [765, 890, 1370], // 6 Payments
        [785, 910, 1410], // 10 Payments
      ],
      "A-levels": [
        // A-levels
        [750, 870, 1325], // 1 Payment
        [790, 915, 1390], // 3 Payments
        [805, 930, 1420], // 6 Payments
        [825, 960, 1460], // 10 Payments
      ],
      "Belgian-Package": [0],
      "": [0],
    };

    const AddonsPrices = [
      { Tutor: 0.01 },
      { Applications: 100 },
      { Personal: 100 },
      { University: 250 },
      { Exams: 100 },
      { StudyCoach: 0.01 },
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
      levelPrice = LevelPrices[selectedLevel || ""][0];
      setSelectedJourney(null);
    } else {
      const level = LevelPrices[selectedLevel || ""];

      // Get payment value safely
      const paymentValue =
        typeof selectedPayment === "object"
          ? selectedPayment?.value || 1
          : parseInt(selectedPayment) || 1;

      // Ensure journey is valid
      const journeyValue = selectedJourney || 1;

      console.log("Selected Level:", selectedLevel);
      console.log("Payment Value:", paymentValue);
      console.log("Journey Value:", journeyValue);

      if (!level) {
        levelPrice = 0;
      } else {
        const paymentIndex = paymentValue - 1;
        const journeyIndex = journeyValue - 1;

        console.log("Payment Index:", paymentIndex);
        console.log("Journey Index:", journeyIndex);

        const paymentArray = level[paymentIndex];
        if (!paymentArray) {
          levelPrice = 0;
        } else {
          levelPrice = paymentArray[journeyIndex] || 0;
          console.log("Level Price:", levelPrice);
        }
      }
    }

    let totalAddons = 0;
    if (selectedAddons) {
      console.log("selected Addons:", selectedAddons);
      console.log("Tutor Sessions:", selectedTutorSessions.value);
      console.log("Study Checks:", selectedStudyChecks.value);
      selectedAddons.forEach((addon) => {
        addon.value !== "Tutor"
          ? addon.value !== "StudyCoach"
            ? (totalAddons =
                totalAddons +
                AddonsPrices.find((a) => a[addon.value])[addon.value])
            : (totalAddons =
                totalAddons + StudyChecksPrice[selectedStudyChecks.value])
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
    return setPrice(
      levelPrice * selectedSubjects.length + totalAddons + totalBelgians
    );
  }, [
    selectedLevel,
    selectedJourney,
    selectedSubjects,
    selectedAddons,
    selectedBelgian,
    selectedTutorSessions,
    selectedStudyChecks,
    selectedPayment,
  ]);
  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: "100%",
      height: "100%",
      backgroundColor: "#0f172a", // Dark blue background matching the screenshot
      color: "white",
      border: "1px solid #1e293b",
      borderRadius: "8px",
      boxShadow: "none",
      "&:hover": {
        border: "1px solid #334155",
      },
      padding: "8px",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "white",
      fontSize: "16px",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#334155" : "#0f172a",
      color: "white",
      "&:hover": {
        backgroundColor: "#1e293b",
      },
      padding: "12px 16px",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#0f172a",
      border: "1px solid #1e293b",
      borderRadius: "8px",
      marginTop: "4px",
    }),
    menuList: (provided) => ({
      ...provided,
      padding: "4px",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: "0 16px",
    }),
  };
  return (
    <div className="bg-[#1a2235] rounded-lg p-8">
      <div onClick={()=>{setShowFees(!showFees)}}  className="flex sm:flex-row flex-col items-center">
        <div className="cursor-pointer">
          <h2 className="text-xl text-white font-bold mb-2">Fee Calculator</h2>
          <p className="text-[#C9C9C9] text-sm mb-6">
            To accurately calculate the annual cost for your chosen courses, we
            encourage you to utilise the convenient calculator provided below.
            Kindly be aware that the calculation does not include the one-time
            registration fee of EUR 250.
          </p>
        </div>
        <div className="flex flex-row items-center gap-5 ">
          <p className="text-[#C9C9C9] sm:hidden">Calculate your tuition fee</p>
          <button className="" >
            <ChevronDown width={"40"} height={"40"} className={` text-ll md:w-40 transition-all ease-in-out duration-300 ${showFees ? "" : "-rotate-90"}`} />
          </button>
        </div>
      </div>

      <div className={`gap-8 ${showFees ? "grid grid-cols-2" : "hidden"}`}>
        <div>
              <label className="block text-sm font-medium mb-2 text-white">Levels</label>
              <Select
                closeMenuOnSelect
                components={animatedComponents}
                options={levels}
                onChange={handleLevelSelect}
                isSearchable={false}
                className="w-full rounded-md appearance-none text-white"
                styles={customStyles}
              />
            </div>
            {selectedLevel === "Belgian-Package" ? (
              <div className="text-ll w-full">
                <label className="block text-sm font-medium mb-2 text-white">Belgian Package items</label>
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  isMulti
                  options={Belgianlist}
                  value={selectedBelgian}
                  captureMenuScroll
                  isSearchable={false}
                  onChange={handleBelgianSelect}
                  className="w-full rounded-md appearance-none text-white"
                  styles={customStyles}
                />
              </div>
            ) : (
              <>
                <div className="flex flex-col text-ll my-2">
                  <label className="block text-sm font-medium mb-2 text-white">Journeys</label>
                  <Select
                    closeMenuOnSelect
                    components={animatedComponents}
                    options={journeys}
                    onChange={handleJourneySelect}
                    isSearchable={false}
                    className="w-full rounded-md appearance-none text-white"
                    styles={customStyles}
                  />
                </div>
                <div className="flex flex-col text-ll my-2">
                  <label className="block text-sm font-medium mb-2 text-white">Subjects</label>
                  <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    isMulti
                    options={subjects}
                    value={selectedSubjects}
                    captureMenuScroll
                    isSearchable={false}
                    onChange={handleSubjectSelect}
                    className="w-full rounded-md appearance-none text-white"
                    styles={customStyles}
                  />
                </div>
                <div className="flex flex-col text-ll my-2">
                  <label className="block text-sm font-medium mb-2 text-white">Payment Term</label>
                  <Select
                    defaultValue={payments[0]}
                    closeMenuOnSelect
                    components={animatedComponents}
                    options={payments}
                    isSearchable={false}
                    onChange={handlePaymentSelect}
                    className="w-full rounded-md appearance-none text-white"
                    styles={customStyles}
                  />
                </div>
                <div className="flex flex-col text-ll my-2">
                  <label className="block text-sm font-medium mb-2 text-white">Extra add-ons</label>
                  {selectedJourney === 3 ? (
                    <Select
                      closeMenuOnSelect={false}
                      components={animatedComponents}
                      isMulti
                      options={addonlistjourneythree}
                      value={selectedAddons}
                      captureMenuScroll
                      isSearchable={false}
                      onChange={handleAddonsSelect}
                      className="w-full rounded-md appearance-none text-white"
                      styles={customStyles}
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
                      className="w-full rounded-md appearance-none text-white"
                      styles={customStyles}
                    />
                  )}
                </div>
                <div>
                  {containsAddonTutor(selectedAddons) ? (
                    <div className="mb-2">
                      <label className="block text-sm font-medium mb-2 text-white">Tutoring sessions</label>
                      <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        options={TutorSessions}
                        value={selectedTutorSessions}
                        captureMenuScroll
                        isSearchable={false}
                        onChange={handleTutorSelect}
                        className="w-full rounded-md appearance-none text-white"
                        styles={customStyles}
                      />
                    </div>
                  ) : (
                    <></>
                  )}
                  {containsAddonStudy(selectedAddons) ? (
                    <div className="mb-2">
                      <label className="block text-sm font-medium mb-2 text-white">Study Coach Check-Ins</label>
                      <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        options={StudyChecks}
                        value={selectedStudyChecks}
                        captureMenuScroll
                        isSearchable={false}
                        onChange={handleStudySelect}
                        className="w-full rounded-md appearance-none text-white"
                        styles={customStyles}
                      />
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </>
            )}
      </div>

      <div className={`flex flex-col md:flex-row gap-6 w-full bg-[#111827] justify-between md:items-center mt-8 py-4 rounded-[18px] px-4 ${showFees ? "" : "hidden"}`}>
        <div >
          <span className="text-[#B1B1B1] text-xl lg:text-2xl">
            Total Payment Is:
          </span>
          <span className="text-3xl text-white font-bold ml-3">
          {(containsAddonTutor(selectedAddons) &&
              selectedTutorSessions.length === 0) ||
            (containsAddonStudy(selectedAddons) &&
              selectedStudyChecks.length === 0) ? (
              <span className="text-xl">Please specify options</span>
            ) : selectedPayment.value === 1 ? (
              <span>
                €<CountUp duration={1} end={Price ?? 0} />
              </span>
            ) : (
              <span>
                €<CountUp duration={1} end={Price ?? 0} />
              </span>
            )}
          </span>
        </div>
        <button className="bg-g1 text-white px-6 py-3 rounded-md font-medium">
          Apply Now
        </button>
      </div>
    </div>
  )
};

export default FreeCalculator;
