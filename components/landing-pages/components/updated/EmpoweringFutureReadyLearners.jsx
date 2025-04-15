import CallButton from "@/hooks/CallButton";
import SectionName from "../ui/SectionName";
import SectionTitle from "../ui/SectionTitle";
const EmpoweringFutureReadyLearners = () => {
  return (
    <section
      className="min-h-screen mt-14 flex flex-col items-center justify-center bg-no-repeat bg-center bg-cover relative"
      style={{
        backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/ihubss.appspot.com/o/student-photo-2.webp?alt=media&token=60bd3381-2964-4f35-9899-713b38f2599c)`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="container max-w-5xl flex flex-col items-center justify-center gap-6 relative">
        <SectionName>Start with us</SectionName>
        <SectionTitle
          title="Take the first step towards the life you want"
          colouredTitle="by choosing a school that puts you first."
          afterTitle="Book a call with us below:"
        />
        <CallButton />
      </div>
    </section>
  );
};

export default EmpoweringFutureReadyLearners;
