"use client";
import PaymentOptions from "@/components/learn-updated/PaymentOption";
import TabNavigation from "@/components/learn-updated/TabNavigation";
import SectionTitle from "@/components/ui/SectionTitle";
import { useInView } from "@/hooks/useInView";
import React, { useState } from "react";

import NewPriceCalculator from "@/components/learn-updated/NewPriceCalculator";
import PackageCards from "@/components/learn-updated/PackageCard";

// import PaymentOptions from "./PaymentOption";
// import TabNavigation from "./TabNavigation";
const packages = [
  {
    journey: "Journey 1",
    title: "Autonomous Learning",
    price: "€750",
    description:
      "Designed for independent learners seeking maximum flexibility and self-paced learning.",
    features: [
      "Lessons in Canvas & online books & Suite for Education",
      "Dedicated and experienced subject specialist teachers",
      "Quizzes, assignments and end-of-unit/term tests",
      "Monthly Study Coach check-in",
      "Study Plan and pace-setter for completing the lessons",
      "Personal Mindset Modules & Future Technology Courses",
      "Access to online clubs and activities",
    ],
    buttonText: "Get Started",
    buttonVariant: "outline",
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
  },
];

const NewPriceCalc = () => {
  const [openTab, setOpenTab] = useState(0);
  const [payment, setPayment] = useState(0);
  const [displayPrice, setDisplayPrice] = useState([695, 800, 1250]);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

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
    setDisplayPrice(price[openTab][payment]);
  }, [openTab, payment]);
  return (
    <div className="py-14 lg:py-20 container">
      <SectionTitle
        className={"max-w-5xl mx-auto"}
        title="Our Packages"
        subTitle="People learn differently. To meet diverse needs, Inventum International offers three learning journeys. Each provides a solid foundation, with Journey 2 adding recorded lessons and Journey 3 including live lessons."
      />

      <TabNavigation
        className="flex w-full"
        tabs={[
          { id: 0, label: "Upper Primary & Middle school" },
          { id: 1, label: "IGCSE" },
          { id: 2, label: "A-levels" },
        ]}
        activeTab={openTab}
        setActiveTab={setOpenTab}
      />

      <PaymentOptions
        options={[
          { term: 1, discount: "40% discount", id: 0 },
          { term: 3, discount: "25% discount", id: 1 },
          { term: 6, discount: "10% discount", id: 2 },
          { term: 10, discount: "", id: 3 },
        ]}
        setPayment={setPayment}
      />
      <PackageCards packages={packages} displayPrice={displayPrice} />

      {/* <FeeCalculator /> */}
      <NewPriceCalculator />
    </div>
  );
};

export default NewPriceCalc;
