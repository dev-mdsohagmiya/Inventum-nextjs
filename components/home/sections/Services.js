"use client";
import { useInView } from "@/hooks/useInView";
import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section id="services" className="h-max bg-dl flex py-10 flex-col">
      <h1 className="text-5xl md:text-7xl text-center py-10 font-bold bg-clip-text text-transparent bg-pg w-max mx-auto whitespace-normal">
        What we do
      </h1>
      <div
        ref={ref}
        className="pt-10 flex flex-wrap text-ll md:mx-auto gap-20 w-screen justify-center"
      >
        <div className="flex gap-20 flex-wrap justify-center">
          <Tilt
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            className={`animate ${inView ? "shown-5" : ""}`}
            tiltEnable={isClient && window.innerWidth > 630}
          >
            <div className="card max-w-[18rem] mr-4 xs:max-w-sm my-7 mx-3 py-5 px-4 bg-dd xs:hover:h-[23rem] hover:h-[28rem] services-card-1">
              <div className="image xs:-top-[35%] -top-[30%] w-64 h-52 bg-[url(https://images.unsplash.com/photo-1605470207062-b72b5cbe2a87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)] bg-bottom bg-cover">
                <h1 className="h-52 w-full rounded-xl text-center flex items-center justify-center font-bold text-4xl backdrop-brightness-[.75] text-ll">
                  Cambridge & Pearson
                </h1>
              </div>
              <div className="content">
                <p>
                  Inventum offers a very broad, challenging and inspiring
                  international curriculum with a plethora of subjects to choose
                  from. We provide the
                  <a
                    className="group text-transparent bg-clip-text bg-pg transition-all duration-300 ease-in-out"
                    href="https://qualifications.pearson.com/en/qualifications.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="bg-left-bottom bg-gradient-to-r from-pink-500 to-purple-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                      Pearson Curriculum
                    </span>
                  </a>
                  for our Upper Primary & Lower Secondary learners from Year
                  5-9,
                  <a
                    className="group text-transparent bg-clip-text bg-pg transition-all duration-300 ease-in-out"
                    href="https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-upper-secondary/cambridge-igcse/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="bg-left-bottom bg-gradient-to-r from-pink-500 to-purple-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                      Cambridge IGCSE
                    </span>
                  </a>{" "}
                  for Upper Secondary, Year 10-11 and
                  <a
                    className="group text-transparent bg-clip-text bg-pg transition-all duration-300 ease-in-out"
                    href="https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-advanced/cambridge-international-as-and-a-levels/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="bg-left-bottom bg-gradient-to-r from-pink-500 to-purple-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                      Cambridge International Advanced Subsidiary & Advanced
                      Levels
                    </span>
                  </a>{" "}
                  for Advanced Secondary Years 12-13.
                </p>
              </div>
            </div>
          </Tilt>

          <Tilt
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            className={`animate ${inView ? "shown-8" : ""}`}
            tiltEnable={isClient && window.innerWidth > 630}
          >
            <div className="card max-w-[18rem] mr-4 xs:max-w-sm my-7 mx-3 py-5 px-4 bg-dd xs:hover:h-[18rem] hover:h-[22rem] services-card-2">
              <div
                className={`image xs:-top-[42%] -top-[30%] w-64 h-52 bg-[url(https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1039&q=80)] bg-cover`}
              >
                <h1 className="h-52 rounded-xl text-center flex items-center justify-center font-bold text-4xl backdrop-brightness-[.95] text-ll w-full">
                  Future Technologies
                </h1>
              </div>
              <div className="content">
                <p>
                  We have developed cutting-edge study modules that give our
                  learners the opportunity to engage with the very latest
                  information on emerging technologies such as: blockchain, gene
                  editing, artificial intelligence and longevity.
                </p>
              </div>
            </div>
          </Tilt>
        </div>
        <div className="flex gap-20 flex-wrap justify-center">
          <Tilt
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            className={`animate ${inView ? "shown-11" : ""}`}
            tiltEnable={isClient && window.innerWidth > 630}
          >
            <div className="card max-w-[18rem] mr-4 xs:max-w-sm my-7 mx-3 py-5 px-4 bg-dd xs:hover:h-[21rem] hover:h-[28rem] services-card-3">
              <div className="image xs:-top-[38%] -top-[30%] w-64 h-52 bg-[url(https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/website%2Fwellbeing.webp?alt=media&token=1d33060e-bba3-4b27-b397-2fdfb33e23d6&_gl=1*yer0a3*_ga*MTc0OTc0OTAxLjE2NzQyOTQxMzY.*_ga_CW55HF8NVT*MTY5ODQ4OTcyNS41NC4xLjE2OTg0OTAxNjQuNjAuMC4w)] bg-cover">
                <h1 className="h-52 w-full rounded-xl text-center flex items-center justify-center font-bold text-4xl backdrop-brightness-[.85] text-ll">
                  Well-being
                </h1>
              </div>
              <div className="content">
                <p>
                  Well-being is crucial at Inventum International. We endeavour
                  to help learners flourish and feel both mentally and
                  physically well. As part of our well-being and enrichment
                  programmes, learners develop a sense of purpose and community,
                  setting high standards for themselves while being helpful and
                  appreciative of others.
                </p>
              </div>
            </div>
          </Tilt>

          <Tilt
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            className={`animate ${inView ? "shown-14" : ""}`}
            tiltEnable={isClient && window.innerWidth > 630}
          >
            <div className="card my-7 max-w-[18rem] mr-4 xs:max-w-sm mx-3 py-5 px-4 bg-dd xs:hover:h-[21rem] hover:h-[26rem] services-card-4">
              <div className="image xs:-top-[35%] -top-[30%] w-64 h-52 bg-center bg-[url(https://images.unsplash.com/photo-1497531551184-06b252e1bee1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80)] bg-cover">
                <h1 className="h-52 w-full rounded-xl text-center flex items-center justify-center font-bold text-4xl backdrop-brightness-[.85] text-ll">
                  Personal / Mindset Education
                </h1>
              </div>
              <div className="content">
                <p>
                  As part of our online education, Inventum International also
                  provides bespoke opportunities for our learners to expand and
                  explore their personal mindsets, encouraging the development
                  of the essential skills, knowledge, attitudes and values to
                  make a positive impact on their world and be future-ready.
                </p>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
}
