import Image from "next/image";

export default function WbEp() {
  return (
    <div className="lg:bg-none lg:bg-dl bg-cover bg-center bg-[url(https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/website%2FEnrichmentProgramCover.webp?alt=media&token=b5376d8d-fc7a-4af3-a8b9-6204aaba8f16&_gl=1*phnfze*_ga*MTc0OTc0OTAxLjE2NzQyOTQxMzY.*_ga_CW55HF8NVT*MTY5ODQ4OTcyNS41NC4xLjE2OTg0OTIzNzYuMjQuMC4w)] ">
      <div className="flex lg:flex-row-reverse flex-col items-center w-full lg:pl-5  ">
        <div className="ovalcut lg:brightness-100 lg:w-1/3 lg:h-screen h-0 relative hidden lg:block object-right-center-half overflow-hidden">
          <Image
            src={
              "https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/website%2FEnrichmentProgramCover.webp?alt=media&token=b5376d8d-fc7a-4af3-a8b9-6204aaba8f16&_gl=1*phnfze*_ga*MTc0OTc0OTAxLjE2NzQyOTQxMzY.*_ga_CW55HF8NVT*MTY5ODQ4OTcyNS41NC4xLjE2OTg0OTIzNzYuMjQuMC4w"
            }
            alt="Curriculum Landing"
            fill
            className="object-cover object-left-center"
            priority
          />
        </div>
        <div className="w-full h-full text-center  lg:mx-10 backdrop-brightness-50 lg:backdrop-brightness-100">
          <h1 className="pt-24 text-5xl md:text-7xl py-10 font-bold bg-clip-text text-transparent bg-pg">
            Future Technologies
          </h1>
          <p className="p-5 text-center text-gray-200 text-2xl">
            Inventum International Online School is the only online school that
            offers Future Technology Modules. Ambitious high school students who
            are looking to expand their horizons and pursue topics they are
            really interested in, will benefit from Inventum's Future
            Technologies modules.
            <br></br>
            <span className="rounded-xl my-6 bg-pg p-[0.1rem]">
              <span className="flex flex-col justify-between h-full bg-transparent rounded-lg"></span>
            </span>
            With access to over 30 cutting-edge technology modules covering
            topics like blockchain, gene editing, artificial intelligence, and
            longevity, our students are equipped with the knowledge and skills
            to thrive in the rapidly-evolving technological landscape. Inventum
            learners have the freedom to tailor their education to their
            specific interests and career goals by choosing the modules that
            interest them personally. Join us today and unlock your potential to
            change the world!
          </p>
        </div>
      </div>
    </div>
  );
}
