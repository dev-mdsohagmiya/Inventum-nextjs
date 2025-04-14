"use client";
import { AnimatePresence, motion } from "framer-motion";

import { useState } from "react";
import SectionTitle from "../ui/SectionTitle";

export default function FAQSection() {
  const [openItem, setOpenItem] = useState(1);

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  const faq = [
    {
      title: "Are the exams online?",
      text: "All the tests and exams in the Upper Primary (Year 5 & Year 6) and Lower Secondary (Year 7-Year 9) are internal Inventum exams taken online. For the second year of the IGCSE program (Year 11), AS (Year 12), and A-Levels (Year 13), the exams have to be taken in a physical Cambridge exam centre. You can find the list of exam centres worldwide here.",
    },
    {
      title: "Do I get a certificate?",
      text: "For the Upper Primary (Year 5 & Year 6) and Lower Secondary (Year 7-Year 9), you will receive a certificate from Inventum when you complete a year level. Cambridge will issue your certificate directly for IGCSE, AS, and A-Levels.",
    },
    {
      title: "Is the certificate recognised?",
      text: "Successful completion of A-Levels will give you access to universities around the world. This is the most recognised secondary school certificate globally by universities and employers.",
    },
    {
      title:
        "Can I study two years in one year, i.e., fast track, and if yes, do I pay for one or two years?",
      text: "In principle, this is possible, but it will require your time and dedication. You will still pay the fees for two years, as you will have access to 121 teaching, live lessons, etc., for both years.",
    },
    {
      title: "What is the study schedule?",
      text: "You decide on the study schedule based on your preferences and timetable. Your dedicated study coach can help you make a schedule that suits your circumstances. When choosing Journey 3, you also commit to the live lessons schedule.",
    },
    {
      title: "How many live lessons are there a week?",
      text: "We use precision teaching, meaning the live lessons cover only the critical and most difficult parts of the curriculum. On average, there are two live lessons a week per subject.",
    },
    {
      title: "How much time do I typically have to spend on studying per day?",
      text: "This will depend on yourself, the number of chosen subjects and the year level, but on average, a full-time Learner spends approximately four hours a day studying.",
    },
    {
      title: "Are there mandatory subjects?",
      text: "The Upper Primary (Year 5 & Year 6) and Lower Secondary (Year 7- Year 9) have five mandatory subjects: English, Maths, Science, History and Geography. There are no mandatory subjects for IGCSE (Years 10&11) and A-Level programs (Years 12&13), but you choose them based on your interests and future plans.",
    },
    {
      title: "How many subjects do I have to take?",
      text: "For the Upper Primary (Year 5 & Year 6), Lower Secondary (Year 7-Year 9), and IGCSEs (Years 10&11), you will be required, as a full-time student, to take a minimum of five subjects and for the A-Level program (Years 12&13) a minimum of three subjects.",
    },
    {
      title: "How do I register?",
      text: "You can complete the application form on our website by clicking the “Apply” button.",
    },
    {
      title: "I have sent the application form, what next?",
      text: "Once we receive your application, we will contact you within 48 hours to arrange an onboarding call. During this call, you will be introduced to all our platforms, handbooks, and practices and assigned a dedicated study coach. After this, you are ready to start!",
    },
    {
      title: "What are the requirements to be accepted to Inventum?",
      text: "We are a non-selective school and will therefore not require a certain grade average, but we will assess every case individually. Learners need, however, to be fluent in English as this is the language of instruction.",
    },
    {
      title: "At what grade will my child be placed at?",
      text: "We look at the Learner’s age and previous schooling history to determine the best starting point for them at Inventum. If there are any doubts, we recommend the Learner take a CAT4 test.",
    },
    {
      title: "How is Inventum different from other online schools?",
      text: "Our high flexibility learning model, combined with the level of support Learners can choose from, is a unique feature among online schools. Together with the Learner, we build the learning journey that caters to their individual needs. By following our mindset modules, we ensure they are ready for the future by educating them on emerging technologies and ensuring they grow as individuals.",
    },
    {
      title: "Is Inventum recognised as a school in all the countries?",
      text: "Cambridge certificate is recognised globally by universities. We do not, however, have agreements with local educational authorities, so it is the parent’s responsibility to check the rules and possible restrictions for homeschooling or online schooling in their home country.",
    },
    {
      title: "What is the difference between IB & A-Levels?",
      text: "https://inventumonline.com/ib-vs-alevels",
    },
  ];

  return (
    <div className="container py-14 xl:py-24">
      <div className="pb-10">
        <SectionTitle title={"Frequently Asked Questions."} />
      </div>
      <div className="max-w-3xl mx-auto">
        {faq.map((item, index) => (
          <div
            key={index}
            className="mb-4 bg-[#1a2235] overflow-hidden rounded-lg"
          >
            <motion.button
              onClick={() => toggleItem(index)}
              className="w-full flex justify-between items-center px-5 py-4  text-white text-left rounded-lg"
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-lg font-medium">{item.title}</span>
              <motion.div
                animate={{ rotate: openItem === index ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M8.54649 12H23.4532C23.7169 12.0011 23.9743 12.0804 24.193 12.2278C24.4116 12.3752 24.5816 12.5842 24.6815 12.8282C24.7814 13.0722 24.8067 13.3404 24.7542 13.5988C24.7017 13.8573 24.5737 14.0943 24.3865 14.28L16.9465 21.72C16.8225 21.845 16.6751 21.9442 16.5126 22.0119C16.3501 22.0795 16.1758 22.1144 15.9998 22.1144C15.8238 22.1144 15.6495 22.0795 15.4871 22.0119C15.3246 21.9442 15.1771 21.845 15.0532 21.72L7.61316 14.28C7.42593 14.0943 7.29797 13.8573 7.24546 13.5988C7.19294 13.3404 7.21824 13.0722 7.31814 12.8282C7.41804 12.5842 7.58806 12.3752 7.8067 12.2278C8.02535 12.0804 8.2828 12.0011 8.54649 12Z"
                    fill="white"
                  />
                </svg>
              </motion.div>
            </motion.button>

            <AnimatePresence>
              {openItem === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                    transition: {
                      height: { duration: 0.3 },
                      opacity: { duration: 0.3, delay: 0.1 },
                    },
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: { duration: 0.3 },
                      opacity: { duration: 0.2 },
                    },
                  }}
                  className=""
                >
                  <motion.div
                    initial={{ y: -10 }}
                    animate={{ y: 0 }}
                    exit={{ y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="px-5 pb-5 text-gray-300"
                  >
                    <p>{item.text}</p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
