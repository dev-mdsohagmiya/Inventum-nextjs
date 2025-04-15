import Image from "next/image";

export default function AUHome() {
  return (
    <section className="md:bg-none md:bg-dl bg-cover bg-center bg-[url(https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/website%2FAUHero.webp?alt=media&token=895bab08-5888-42ea-9ccf-dad9e748ae6e&_gl=1*hctib4*_ga*MTc0OTc0OTAxLjE2NzQyOTQxMzY.*_ga_CW55HF8NVT*MTY5ODQ4OTcyNS41NC4xLjE2OTg0OTA1OTMuNTcuMC4w)]">
      <div className="flex md:flex-row-reverse flex-col items-center w-full md:pl-5 ">
        <Image
          width={630}
          height={895}
          className="ovalcut md:brightness-100 md:w-1/3 md:h-screen h-0 object-cover object-right-center-half"
          src={
            "https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/website%2FAUHero.webp?alt=media&token=895bab08-5888-42ea-9ccf-dad9e748ae6e&_gl=1*hctib4*_ga*MTc0OTc0OTAxLjE2NzQyOTQxMzY.*_ga_CW55HF8NVT*MTY5ODQ4OTcyNS41NC4xLjE2OTg0OTA1OTMuNTcuMC4w"
          }
          alt="about image"
        />
        <div className="w-full h-full text-center md:mx-10 overflow-y-auto backdrop-brightness-50 md:backdrop-brightness-100">
          <h1 className="pt-24 text-5xl md:text-7xl py-10 font-bold bg-clip-text text-transparent bg-pg md:whitespace-nowrap text-center w-full">
            About Us
          </h1>
          <div className=" mx-auto p-5 text-lg xl:text-2xl md:text-xl text-center text-ll max-w-prose">
            Inventum International Online School is revolutionising education by
            being the first online school to offer a hybrid approach to
            education. We provide affordable, high-quality, globally recognised
            Cambridge qualifications, and future-focused learning modules on
            exciting emerging technologies. Our online school offers
            unparalleled flexibility and convenience to learn any time,
            anywhere, according to each learners unique situation and needs.
            <br></br>
            <div className="rounded-xl my-6 bg-pg p-[0.1rem]">
              <div className="flex flex-col justify-between h-full bg-transparent text-transparent rounded-lg"></div>
            </div>
            Inventum offers a wide spectrum of Cambridge & Pearson subjects to
            suit all learning styles and abilities. Our learners can choose from
            a range of personalised learning journeys that will offer each
            individual learner the appropriate amount of help, support and
            feedback required, alongside the opportunity to develop their
            well-being, personal mindsets and future career readiness. Our
            innovative modular course designs allow Inventum learners to work at
            their own pace, on their own schedule, while providing the
            safety-net of a dedicated study coach to ensure progress is always
            made.
          </div>
        </div>
      </div>
    </section>
  );
}
