import ContactForm from "@/components/landing-pages/components/updated/ContactForm";
import EmpoweringFutureReadyLearners from "@/components/landing-pages/components/updated/EmpoweringFutureReadyLearners";
import FutureReadyMindsets from "@/components/landing-pages/components/updated/FutureReadyMindsets";
import Hero from "@/components/landing-pages/components/updated/Hero";
import HowWeDifferent from "@/components/landing-pages/components/updated/HowWeDifferent";
import Subject from "@/components/landing-pages/components/updated/Subject";
import WhatWeOffer from "@/components/landing-pages/components/updated/WhatWeOffer";
import OurPackagesNew from "@/components/learn-updated/OurPackagesUpdate";
import CallInline from "@/hooks/CallInline";

export default function Learn() {
  return (
    <>
      <>
        <div className="bg-[#0D1526] overflow-clip w-full">
          <Hero />
          <div className="max-w-[90vw] mx-auto my-5">
            <CallInline />
          </div>
          <WhatWeOffer />
          <HowWeDifferent />
          <EmpoweringFutureReadyLearners />
          <OurPackagesNew />
          <Subject />
          <FutureReadyMindsets />
          <CallInline />
          <ContactForm />
        </div>
      </>
    </>
  );
}
