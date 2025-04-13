import CallButton from "@/hooks/CallButton";
import SectionName from "../ui/SectionName";
import SectionTitle from "../ui/SectionTitle";
const EmpoweringFutureReadyLearners = () => {
  return (
    <section
      className="min-h-screen py-14 flex flex-col items-center justify-center bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `url('/images/landing/Empowering-Future-Ready-Learners.png')`,
      }}
    >
      <div className="container max-w-5xl flex flex-col items-center justify-center gap-6">
        <SectionName>Empowering Future-Ready Learners</SectionName>
        <SectionTitle title="Join our global learning community and unlock a world of opportunities." />
        <CallButton />
      </div>
    </section>
  );
};

export default EmpoweringFutureReadyLearners;
