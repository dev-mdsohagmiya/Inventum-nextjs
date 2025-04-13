import CallButton from "@/hooks/CallButton";

const Hero = () => {
  const STATICS = [
    {
      id: "1",
      value: "130+",
      title: "Cambridge subjects",
    },
    {
      id: "2",
      value: "50+",
      title: "Countries",
    },
    {
      id: "3",
      value: "40+",
      title: "Technology courses",
    },
    {
      id: "4",
      value: "50+",
      title: "Staff",
    },
    {
      id: "5",
      value: "50+",
      title: "Mindset course",
    },
  ];

  return (
    <section className="bg-[#162033]">
      <div className="container  pt-[10rem] pb-16">
        <div className="flex relative w-full flex-col lg:flex-row items-center">
          <div className="basis-full lg:basis-1/2 2xl:basis-[45%] space-y-6">
            <div className="inline-flex items-center py-3 px-4 bg-white/10 border-l-[3px] border-white">
              <span className="text-base text-white font-medium">
                Online Cambridge School
              </span>
            </div>
            <h2 className="text-3xl text-white lg:text-4xl xl:text-6xl font-bold capitalize">
              Innovative learning <br />
              anywhere, anytime
            </h2>
            <p className="text-[#C9C9C9] text-base xl:text-lg font-normal leading-[150%]">
              Study IGCSEs, A-Levels & Pearson Curriculum (Year 5–9) online with
              Inventum. Learn flexibly with expert support.
            </p>
            <CallButton />
            <ul className="flex pt-6 flex-col gap-y-2">
              {[
                "Kids aged 10-18 (from year 5 to 13)",
                "Learn at your own pace",
                "Accredited Curriculum",
                "Personal study coaches and teachers",
              ].map((item, index) => (
                <li key={index} className="flex  items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-white grid place-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={10}
                      viewBox="0 0 14 10"
                      fill="none"
                    >
                      <path
                        d="M13 1L5 9L1 5"
                        stroke="black"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-lg text-white font-medium leading-[150%]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="basis-full 2xl:flex-1 flex justify-center lg:justify-end  lg:basis-1/2 2xl:basis-[55%]">
            <img
              src="/images/landing/hero.png"
              alt="hero landing"
              className="w-full max-w-xl relative z-0 2xl:max-w-2xl block  object-cover"
            />
          </div>

          <div
            style={{
              background:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%), linear-gradient(100deg, rgba(67, 41, 122, 0.24) 39.3%, rgba(215, 0, 127, 0.24) 100.91%)",
            }}
            className="hidden lg:inline-flex backdrop-blur-[24px] overflow-hidden py-5 px-8 rounded-[24px] items-center absolute bottom-0 right-0 z-10 gap-7"
          >
            {STATICS.map((item) => (
              <div className="space-y-1 text-center">
                <h3 className="text-3xl font-bold text-white">{item.value}</h3>
                <p className="text-lg text-[#C9C9C9] font-normal">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
