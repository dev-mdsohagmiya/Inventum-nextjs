"use client";
import CallButton from "@/hooks/CallButton";
import Link from "next/link";
import CountUp from "react-countup";

const Hero = () => {
  const STATICS = [
    {
      id: "1",
      value: 130,
      title: "Cambridge subjects",
    },
    {
      id: "2",
      value: 50,
      title: "Countries",
    },
    {
      id: "3",
      value: 40,
      title: "Technology courses",
    },
    {
      id: "4",
      value: 50,
      title: "Staff",
    },
    {
      id: "5",
      value: 50,
      title: "Mindset course",
    },
  ];

  return (
    <section id="home" className="bg-[#162033]">
      <div className="container  pt-[10rem] pb-16">
        <div className="flex relative w-full flex-col lg:flex-row items-center">
          <div className="basis-full lg:basis-1/2 2xl:basis-[45%] space-y-6">
            <div className="inline-flex items-center py-3 px-4 bg-white/10 border-l-[3px] border-white">
              <span className="text-base text-white font-medium">
                Online Cambridge/Pearson School
              </span>
            </div>
            <h3 className="text-lg lg:text-2xl xl:text-3xl text-[#C9C9C9] font-bold "></h3>
            <h2 className="text-3xl text-white lg:text-4xl xl:text-6xl font-bold capitalize">
              A school that adapts to your schedule & lifestyle.
            </h2>
            <Link href="#whatwedo">
              <p className="text-[#C9C9C9] text-base xl:text-lg font-normal mt-4">
                <span className="font-bold text-white">
                  Everyone is different, so why is their education the same?
                </span>{" "}
                <br></br>Whether you want to learn faster, or just need a little
                bit more support, you'll receive a personalised education at
                Inventum International Online School.
              </p>
            </Link>
            <CallButton />
            <ul className="flex py-6 flex-col gap-y-2">
              {[
                "Personalised Education adapted to your needs",
                "IGCSE, A-Levels & Pearson Curriculum (Year 5–9)",
                "1:1 Support from Success Coaches",
                "Kids aged 10-18 (from year 5 to 13)",
                "Self-learning, Recorded or Live Lessons",
              ].map((item, index) => (
                <li key={index * 65454} className="flex  items-center gap-3">
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
            {STATICS.map((item, index) => (
              <div key={index * 545454} className="space-y-1 text-center">
                <h3 className="text-3xl font-bold text-white">
                  <CountUp duration={3} end={item.value} />+
                </h3>
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
