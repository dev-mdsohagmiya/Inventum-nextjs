"use client";

import CallInline from "@/hooks/CallInline";
import ContactForm from "../components/updated/ContactForm";
import FutureReadyMindsets from "../components/updated/FutureReadyMindsets";
import Hero from "../components/updated/Hero";
import HowWeDifferent from "../components/updated/HowWeDifferent";
import Subject from "../components/updated/Subject";
import WhatWeOffer from "../components/updated/WhatWeOffer";

// const OurPackages = dynamic(() => import("../components/updated/OurPackages"), {
//   ssr: false,
// });

import OurPackages from "../components/updated/OurPackages";

export default function UpdatedDesign() {
  return (
    <div>
      <div className="bg-[#0D1526] scroll-mt-20 overflow-clip w-full">
        <Hero />

        <div className="lg:max-w-[90vw] mx-auto mt-5">
          <CallInline />
        </div>

        <WhatWeOffer />
        <HowWeDifferent />
        <OurPackages />

        <Subject
          up={[
            "History",
            "Digital-Literacy",
            "Economic-Management-Sciences",
            "English",
            "French-Beginner",
          ]}
          igcse={[
            "Accounting",
            "Business-Studies",
            "Environmental-Management",
            "Sociology",
            "Global-Perspectives",
          ]}
          alevels={[
            "Computer-Science",
            "English-Literature",
            "French-Language",
            "Global-Perspectives-&-Research",
            "Law",
          ]}
          url="information"
        />

        <FutureReadyMindsets />
        <CallInline />
        <ContactForm />
      </div>
    </div>
  );
}
