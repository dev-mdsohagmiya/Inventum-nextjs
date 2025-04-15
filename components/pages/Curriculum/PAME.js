import Image from "next/image";

export default function PAME() {
  return (
    <div className="lg:bg-none lg:bg-dl bg-cover bg-center bg-[url(https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/website%2FPersonalMindsetEducation.webp?alt=media&token=b34f052e-c197-4b96-99c8-90c6eb0dcdfc&_gl=1*8npadw*_ga*MTc0OTc0OTAxLjE2NzQyOTQxMzY.*_ga_CW55HF8NVT*MTY5ODQ4OTcyNS41NC4xLjE2OTg0OTI5NTMuNTEuMC4w)] ">
      <div className="flex lg:flex-row-reverse flex-col items-center w-full lg:pl-5  ">
        <div className="ovalcut lg:brightness-100 lg:w-1/3 lg:h-screen h-0 relative hidden lg:block object-right-center-half overflow-hidden">
          <Image
            src={
              "https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/website%2FPersonalMindsetEducation.webp?alt=media&token=b34f052e-c197-4b96-99c8-90c6eb0dcdfc&_gl=1*8npadw*_ga*MTc0OTc0OTAxLjE2NzQyOTQxMzY.*_ga_CW55HF8NVT*MTY5ODQ4OTcyNS41NC4xLjE2OTg0OTI5NTMuNTEuMC4w"
            }
            alt="Curriculum Landing"
            fill
            className="object-cover object-left-center"
            priority
          />
        </div>
        <div className="w-full h-full text-center  lg:mx-10 backdrop-brightness-50 lg:backdrop-brightness-100">
          <h1 className="pt-24 text-7xl py-10 font-bold bg-clip-text text-transparent bg-pg">
            Personal & Mindset Education
          </h1>
          <p className="p-5 text-center text-gray-200 text-2xl">
            At Inventum International Online School, we endeavour to help
            learners flourish and feel both mentally and physically well in
            order to reach their full potential. As part of our well-being and
            enrichment programme, learners develop a sense of purpose and
            community, learning how to set high standards for themselves and be
            problem-focused while being helpful and appreciative of others.
            Additionally, we offer our secondary school learners the scope to
            advance their skills in digital and mathematical literacy developing
            their capacity to navigate the internet in safety and to identify
            and understand the role that mathematics plays in the real world.
            <br></br>
            <span className="rounded-xl my-6 bg-pg p-[0.1rem]">
              <span className="flex flex-col justify-between h-full bg-transparent rounded-lg"></span>
            </span>
            Finally, Inventum International provides bespoke opportunities for
            our learners to expand and explore their personal mindsets,
            encouraging the development of the essential skills, knowledge,
            attitudes and values to make a positive impact on their world and be
            ready for the future. Learners at Inventum International will share
            a sense of belonging to a strong learning community where challenges
            are overcome through perseverance and resilience, successes are
            celebrated, and learning and personal growth are always the end
            goal.
          </p>
        </div>
      </div>
    </div>
  );
}
