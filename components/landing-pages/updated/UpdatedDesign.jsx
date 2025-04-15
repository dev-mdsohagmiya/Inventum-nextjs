"use client";

import { lazy } from "react";
import Hero from "../components/updated/Hero.jsx";

const ContactForm = lazy(() => import("../components/updated/ContactForm.jsx"));
const FutureReadyMindsets = lazy(() =>
  import("../components/updated/FutureReadyMindsets.jsx")
);
const CallInline = lazy(() => import("@/hooks/CallInline.js"));
const HowWeDifferent = lazy(() =>
  import("../components/updated/HowWeDifferent.jsx")
);
const OurPackages = lazy(() => import("../components/updated/OurPackages.jsx"));
const Subject = lazy(() => import("../components/updated/Subject.jsx"));
const WhatWeOffer = lazy(() => import("../components/updated/WhatWeOffer.jsx"));
const LoadingSpinner = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
  </div>
);

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
