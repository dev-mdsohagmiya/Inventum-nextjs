export default function WBHero() {
  return (
    <div className="lg:bg-none lg:bg-dl bg-cover bg-left bg-[url(https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/website%2Fwellbeing.webp?alt=media&token=1d33060e-bba3-4b27-b397-2fdfb33e23d6&_gl=1*1xbxmpt*_ga*MTc0OTc0OTAxLjE2NzQyOTQxMzY.*_ga_CW55HF8NVT*MTY5ODQ4OTcyNS41NC4xLjE2OTg0OTExMDYuNTQuMC4w)] ">
      <div className="flex lg:flex-row-reverse flex-col items-center w-full lg:pl-5  ">
        <img
          className="ovalcut lg:brightness-100 lg:w-1/3 lg:h-screen h-0 object-cover object-left-center-half "
          src={
            "https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/website%2Fwellbeing.webp?alt=media&token=1d33060e-bba3-4b27-b397-2fdfb33e23d6&_gl=1*1xbxmpt*_ga*MTc0OTc0OTAxLjE2NzQyOTQxMzY.*_ga_CW55HF8NVT*MTY5ODQ4OTcyNS41NC4xLjE2OTg0OTExMDYuNTQuMC4w"
          }
          alt=""
        />
        <div className="w-full h-full text-center  lg:mx-10 overflow-y-auto overflow-x-clip backdrop-brightness-50 lg:backdrop-brightness-100">
          <h1 className="pt-24 text-6xl py-10 font-bold bg-clip-text text-transparent bg-pg">
            Well-being
          </h1>
          <div className="p-5 text-center text-gray-200 text-lg xl:text-xl">
            Well-being is crucial at Inventum International. We endeavour to
            help learners flourish and feel both mentally and physically well.
            This is crucial as our learners are often working alone and not in a
            physical classroom environment.
            <br></br>
            <div className="rounded-xl my-6 bg-pg p-[0.1rem]">
              <div className="flex flex-col justify-between h-full bg-transparent text-transparent rounded-lg"></div>
            </div>
            Good well-being has a positive impact on learning and self esteem.
            Learners at Inventum International will share a sense of belonging
            to a strong learning community where challenges are overcome through
            perseverance and resilience, successes are celebrated, and learning
            and personal growth are always the end goal.
            <br></br>
            <div className="rounded-xl my-6 bg-pg p-[0.1rem]">
              <div className="flex flex-col justify-between h-full bg-transparent text-transparent rounded-lg"></div>
            </div>
            Inventum International has comprehensive school policies, including
            a specific{" "}
            <a
              className="group text-transparent bg-clip-text bg-pg transition-all duration-300 ease-in-out"
              href="https://drive.google.com/file/d/1LdiIM4KdjDKbmP5ilkD3FodR_rT20MeI/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <span className="bg-left-bottom bg-gradient-to-r from-pink-500 to-purple-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                safeguarding policy
              </span>
            </a>{" "}
            ensuring that staff and learners know what is expected of them. Our
            community is taken through these policies on Canvas by the study
            coaches when they start at Inventum International. A trained and
            experienced Designated Safeguarding Lead can be contacted if there
            are any issues or concerns.
          </div>
        </div>
      </div>
    </div>
  );
}
