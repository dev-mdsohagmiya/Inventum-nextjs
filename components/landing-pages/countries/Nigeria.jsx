"use client";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link.js";
import { lazy, useState } from "react";
import AddOnsNoPrice from "./components/Add-ons-no-price.jsx";
import Streams from "./components/Streams.jsx";
const CallButton = lazy(() => import("@/hooks/CallButton.js"));
const NewPriceCalc = lazy(() =>
  import("@/components/pages/Pricing/NewPriceCalc.js")
);
const PT = lazy(() => import("@/components/pages/PrecissionTeaching/PT.jsx"));
const Mindset = lazy(() => import("../Google-Ads/components/Mindet.js"));
const FuTe = lazy(() => import("../Google-Ads/components/FuTe.js"));

library.add(faSpinner);

export default function Nigeria() {
  const [openTab, setOpenTab] = useState(1);
  return (
    <>
      <div className="bg-dl overflow-clip w-full">
        <div className="flex flex-col w-full items-center justify-center min-h-screen md:mt-12 pt-24 max-lg:container mx-auto">
          <h3 className="lg:text-3xl text-xl font-light text-center text-white mb-3">
            Study The Prestigious Cambridge Curriculum
          </h3>
          {
            <h1 className="text-3xl lg:text-5xl text-center text-white font-light max-w-[30ch] mx-auto">
              An
              <span className="text-transparent bg-pg font-extrabold bg-clip-text">
                {" "}
                Online Elite Cambridge School{" "}
              </span>
              to prepare you for the future
            </h1>
          }
          <div className="flex lg:flex-row flex-col items-center justify-center mt-12 gap-12">
            <img
              className="lg:w-1/2 w-3/4 max-w-3xl rounded-xl"
              width={"42rem"}
              alt="studying student"
              src={
                "https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/website%2Fstudying-girl.webp?alt=media&token=04373894-7b08-49ae-bb00-8ed2988fca24"
              }
            ></img>
            <ul className="text-xl md:text-2xl lg:text-3xl text-white list-disc gap-3 flex-col flex font-light ml-10">
              <li>Kids aged 14-18 (IGCSE & A-Levels)</li>
              <li>Learn at your own pace</li>
              <li>Accredited Curriculum</li>
              <li>Personal study coaches and teachers</li>
              <li>Fun and innovative extracurriculars</li>
              <li>Less stressful than normal school</li>
              <li>Future Technology and Mindset Modules</li>
              <li>Focus on well-being</li>
              <div className="flex mt-8 lg:mt-3 gap-2 -ml-10 justify-center flex-wrap flex-1">
                <a
                  href="tel:+234 916 000 4634"
                  className="text-center text-xl lg:text-2xl hover:scale-[1.05] transition-all ease-in-out bg-pg px-2 rounded-xl items-center py-2 justify-end w-max h-max"
                >
                  Call us
                </a>
                <a
                  className="text-center text-xl lg:text-2xl hover:scale-[1.05] transition-all ease-in-out bg-pg px-2 rounded-xl items-center py-2 justify-end w-max h-max"
                  href="mailto:blessing@inventumonline.com"
                >
                  <span className="text-ll my-auto">Email us!</span>
                </a>
                <a
                  href="https://wa.me/+2349160004634" // Replace with your WhatsApp Business number
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-green-500 text-white p-2 rounded-lg  hover:bg-green-600 text-xl lg:text-2xl "
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
                  Message us on WhatsApp
                </a>
                <Link
                  href="/newsletter-nigeria"
                  className="flex items-center justify-center bg-pg text-white p-2 rounded-lg text-xl lg:text-2xl"
                >
                  Sign up for our Newsletter
                </Link>
              </div>
            </ul>
          </div>
        </div>
        <div className="bg-dd text-white p-5 text-center space-y-4">
          <h2 className="font-bold text-3xl lg:text-5xl bg-pg text-transparent bg-clip-text">
            Sign up for our Newsletter
          </h2>
          <p>
            Sign up for our newsletter by clicking the button below and filling
            in the short form.
          </p>
          <Link
            href="/newsletter-nigeria"
            className="flex items-center mx-auto justify-center bg-pg text-white p-2 rounded-lg text-xl lg:text-2xl w-max"
          >
            Sign up for our Newsletter
          </Link>
          <div className=""></div>
        </div>
        <Streams />
        <AddOnsNoPrice />
        <div className="bg-dd py-16 text-white p-5 text-center ">
          <h2 className="font-bold text-3xl lg:text-5xl bg-pg text-transparent bg-clip-text">
            Let us assist you
          </h2>
          <p className="text-lg lg:text-2xl font-light max-w-prose mx-auto">
            Since you've shown interest in Inventum, let us assist you in your
            decision making. Call us or send an enquiry through mail. We will
            help you choose what's best for your specific requirements & address
            any questions you may have.
          </p>
          <div className="flex gap-2 justify-center items-center mt-5 flex-wrap">
            <a
              href="tel:+234 916 000 4634"
              className="text-center text-xl lg:text-2xl hover:scale-[1.05] transition-all ease-in-out bg-pg px-2 rounded-xl items-center py-2 justify-end w-max h-max"
            >
              Call us
            </a>
            <a
              className="text-center text-xl lg:text-2xl hover:scale-[1.05] transition-all ease-in-out bg-pg px-2 rounded-xl items-center py-2 justify-end w-max h-max"
              href="mailto:blessing@inventumonline.com"
            >
              <span className="text-ll my-auto">Email us!</span>
            </a>
            <Link
              href="/newsletter-nigeria"
              className="flex items-center justify-center bg-pg text-white p-2 rounded-lg text-xl lg:text-2xl"
            >
              Sign up for our Newsletter
            </Link>

            <a
              href="https://wa.me/+2349160004634" // Replace with your WhatsApp Business number
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-green-500 text-white p-2 rounded-lg  hover:bg-green-600 text-xl lg:text-2xl"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
              Message us on WhatsApp
            </a>
          </div>
        </div>
        <Mindset />
        <FuTe dark />
        <PT novideo />
        <div className="bg-dd text-white p-5 text-center ">
          <h2 className="font-bold text-3xl lg:text-5xl bg-pg text-transparent bg-clip-text">
            Let us assist you
          </h2>
          <p className="text-lg lg:text-2xl font-light max-w-prose mx-auto">
            Since you've shown interest in Inventum, let us assist you in your
            decision making. Call us or send an enquiry through mail. We will
            help you choose what's best for your specific requirements & address
            any questions you may have.
          </p>
          <div className="flex gap-2 justify-center items-center mt-5 flex-wrap">
            <a
              href="tel:+234 916 000 4634"
              className="text-center text-xl lg:text-2xl hover:scale-[1.05] transition-all ease-in-out bg-pg px-2 rounded-xl items-center py-2 justify-end w-max h-max"
            >
              Call us
            </a>
            <a
              className="text-center text-xl lg:text-2xl hover:scale-[1.05] transition-all ease-in-out bg-pg px-2 rounded-xl items-center py-2 justify-end w-max h-max"
              href="mailto:blessing@inventumonline.com"
            >
              <span className="text-ll my-auto">Email us!</span>
            </a>
            <a
              href="https://wa.me/+2349160004634" // Replace with your WhatsApp Business number
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 text-xl lg:text-2xl"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
              Message us on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
