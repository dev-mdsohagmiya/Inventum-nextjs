import ContactForm from "@/components/learn-updated/ContactForm";
import EmpoweringFutureReadyLearners from "@/components/learn-updated/EmpoweringFutureReadyLearners";
import FutureReadyMindsets from "@/components/learn-updated/FutureReadyMindsets";
import Hero from "@/components/learn-updated/Hero";
import HowWeDifferent from "@/components/learn-updated/HowWeDifferent";
import OurPackagesNew from "@/components/learn-updated/OurPackagesUpdate";
import Subject from "@/components/learn-updated/Subject";
import WhatWeOffer from "@/components/learn-updated/WhatWeOffer";
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
