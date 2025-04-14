import CallButton from "@/hooks/CallButton";
import React, { useState } from "react";
import SectionTitle from "../ui/SectionTitle";
import FreeCalculator from "./FreeCalculator";
import PackageCards from "./PackageCard";
import TabNavigation from "./TabNavigation";

const packages = [
  {
    journey: "Journey 1",
    title: "Autonomous Learning",
    price: "€750",
    description:
      "Designed for independent learners seeking maximum flexibility and self-paced learning.",
    features: [
      "Lessons in Canvas & online books & GSuite for Education",
      "Dedicated and experienced subject specialist teachers",
      "Quizzes, assignments and end-of-unit/term tests",
    ],
    more: [
      "Monthly Study Coach check-in",
      "Study Plan and pace-setter for completing the lessons",
      "Personal Mindset Modules & Future Technology Courses",
      "Access to online clubs and activities",
    ],
    buttonText: "Get Started",
    buttonVariant: "outline",
    loadMore: true,
  },
  {
    journey: "Journey 2",
    title: "Recorded Precision Teaching",
    price: "€870",
    description:
      "Designed for independent learners who wish to benefit from the structured guidance of recorded lessons and the possibility for revision.",
    features: [
      "Everything in Journey 1",
      "Access to recorded precision teaching on critical parts of the curriculum for each subject",
    ],
    buttonText: "Get Started",
    buttonVariant: "primary",
    loadMore: false,
  },
  {
    journey: "Journey 3",
    title: "Live Precision Teaching",
    price: "€1325",
    description:
      "Designed for independent learners who wish to benefit from real-time interaction and personalised support of critical parts of the curriculum.",
    features: [
      "Everything in Journey 2",
      "Access to live lessons with precision teaching on critical points of the curriculum for each subject",
    ],
    buttonText: "Get Started",
    buttonVariant: "outline",
    loadMore: false,
  },
];

const OurPackages = ({ title }) => {
  const [payment, setPayment] = useState(0);
  const [displayPrice, setDisplayPrice] = useState([695, 800, 1250]);
  const [activeTab, setActiveTab] = useState(0);
  React.useEffect(() => {
    const price = [
      [
        // Upper Primary & Middle School
        [695, 800, 1250], // 1 Payment
        [730, 840, 1310], // 3 Payments
        [745, 855, 1335], // 6 Payments
        [765, 880, 1375], // 10 Payments
      ],
      [
        // IGCSE
        [715, 830, 1280], // 1 Payment
        [750, 870, 1345], // 3 Payments
        [765, 890, 1370], // 6 Payments
        [785, 910, 1410], // 10 Payments
      ],
      [
        // A-levels
        [750, 870, 1325], // 1 Payment
        [790, 915, 1390], // 3 Payments
        [805, 930, 1420], // 6 Payments
        [825, 960, 1460], // 10 Payments
      ],
    ];
    setDisplayPrice(price[activeTab][payment]);
  }, [activeTab, payment]);
  const options = [
    { term: "Upfront", discount: "-10%" },
    { term: 3, discount: "-5%" },
    { term: 6, discount: "-3%" },
    { term: "10 monthly", discount: "" },
  ];
  return (
    <div id="pricing" className="py-14 lg:py-20 bg-g_dark">
      <div className="sm:container">
        <SectionTitle
          className={"max-w-5xl mx-auto"}
          title={title ?? "Our Packages"}
          subTitle="People learn differently. To meet diverse needs, Inventum International offers three learning journeys. Each provides a solid foundation, with Journey 2 adding recorded lessons and Journey 3 including live lessons."
        />
        <div className="flex justify-center mt-8">
          <CallButton />
        </div>
        <TabNavigation
          className="flex w-full justify-center text-center"
          tabs={[
            { id: 0, label: "Primary & Middle school" },
            { id: 1, label: "IGCSE" },
            { id: 2, label: "A-levels" },
          ]}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <div className={`justify-center mb-8 flex w-full`}>
          <div className="inline-flex flex-wrap gap-6 md:flex-nowrap justify-center text-center md:gap-0 bg-[#111827] rounded-full">
            {options.map((option, index) => (
              <button
                onClick={() => {
                  setPayment(index);
                }}
                key={index}
                className={`p-3 border rounded-full text-[0.5rem] lg:text-sm font-medium transition-all relative ${
                  payment === index
                    ? "border-[#EC4899] bg-[#111827] shadow-tab text-white"
                    : "text-gray-300 border-transparent hover:text-white"
                }`}
              >
                <span className="font-medium text-white">
                  {option.term === "Upfront"
                    ? "Upfront"
                    : option.term + " payments"}
                </span>
                {option.discount && (
                  <span className="text-xs bg-g1 text-white px-2 py-0.5 rounded-full absolute -top-3 -right-3">
                    {option.discount}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {activeTab === 0 ? (
          <PackageCards packages={packages} price={displayPrice} />
        ) : activeTab === 1 ? (
          <PackageCards packages={packages} price={displayPrice} />
        ) : activeTab === 2 ? (
          <PackageCards packages={packages} price={displayPrice} />
        ) : null}

        <FreeCalculator />
      </div>
    </div>
  );
};

export default OurPackages;
