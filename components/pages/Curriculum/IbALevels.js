import arrows from "@/public/icons/arrows.png";
import book from "@/public/icons/book.png";
import books from "@/public/icons/books.png";
import exam from "@/public/icons/exam.png";
import international from "@/public/icons/international.png";
import practice from "@/public/icons/practice.png";
import { motion } from "framer-motion";
import GridCard from "../WhyUs/GridCard";

export default function IbALevels() {
  return (
    <div className="bg-dl">
      <header className=" text-white text-center py-6">
        <div className={`lg:bg-none h-full bg-dl`}>
          <div className="flex lg:flex-row-reverse flex-col items-center w-full lg:pl-5 h-full ">
            <img
              className="pt-20 overflow-clip ovalcut lg:brightness-100 lg:w-1/3 lg:h-screen h-0 object-cover object-right"
              src={
                "https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/website%2Fcam-vs-ib.webp?alt=media&token=8c9203db-d949-4b52-96f1-dc908ff81a40"
              }
              alt=""
            />
            <div className="w-full text-center h-full lg:mx-10 overflow-x-clip">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-5xl md:text-7xl text-center pt-10 pb-5 font-bold bg-clip-text text-transparent bg-pg "
              >
                Comparing A-Levels and IB Diploma
              </motion.h1>
              <div className="p-5 text-center text-gray-200 text-lg">
                <br></br>
                <div className="rounded-xl my-6 bg-pg p-[0.1rem]">
                  <div className="flex flex-col justify-between h-full bg-transparent text-transparent rounded-lg"></div>
                </div>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-prose text-center mx-auto text-xl"
              >
                The Cambridge A-Levels and the International Baccalaureate (IB)
                Diploma Programme are both globally recognised pre-university
                qualifications, but they have different structures and focuses
                that might make one more beneficial over the other depending on
                a student's circumstances and goals.
              </motion.p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto  px-4">
        <section className="p-6 mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-5xl text-center pt-10 pb-5 font-bold bg-clip-text text-transparent bg-pg"
          >
            Why choose A-Levels instead of IB
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-prose text-center mx-auto text-xl text-white"
          >
            Overall, Cambridge Assessment International Education provides
            international education programmes and qualifications to over 10,000
            schools in more than 160 countries
          </motion.p>
          <div className="flex flex-wrap bg-dl pt-16 gap-10 justify-center pb-10">
            <GridCard
              titleSize={"text-3xl"}
              imgwidth="w-16 h-16"
              img={book}
              title={"Specialization"}
              text={
                "A-Levels allow students to focus on a few subjects (usually 3 or 4) that they are particularly interested in or that align with their intended university course, offering depth in those areas."
              }
            />
            <GridCard
              titleSize={"text-3xl"}
              imgwidth="w-16 h-16"
              img={arrows}
              title={"Flexibility"}
              text={
                "A-Levels provide the flexibility to choose combinations of subjects without the constraints of a fixed set of core subjects as in the IB."
              }
            />
            <GridCard
              titleSize={"text-3xl"}
              imgwidth="w-16 h-16"
              img={exam}
              title={"Assessment"}
              text={
                " A-Levels are assessed mainly through final exams, which might be preferred by students who are strong in exam-based evaluations rather than coursework."
              }
            />
            <GridCard
              titleSize={"text-3xl"}
              imgwidth="w-16 h-16"
              img={international}
              title={"Global Recognition"}
              text={
                "A-Levels are widely recognised by universities, especially in the UK, which can make the application process more straightforward for students aiming to study there."
              }
            />
            <GridCard
              titleSize={"text-3xl"}
              imgwidth="w-16 h-16"
              img={books}
              title={"Curriculum Control"}
              text={
                "Schools may have more control over how they deliver A-Level courses, as there is no requirement to be authorized by Cambridge to teach them, unlike IB schools."
              }
            />
            <GridCard
              titleSize={"text-3xl"}
              imgwidth="w-16 h-16"
              img={practice}
              title={"Practicality"}
              text={
                "For students who have a clear vision of their career path or academic field, A-Levels may be more practical as they can focus intensively on the subjects that are most relevant to their future studies."
              }
            />
          </div>
        </section>

        <section className="px-6 pb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl pt-10 pb-5 font-bold bg-clip-text text-transparent bg-pg text-center"
          >
            Some Key Differences Between A-Levels and IB Diploma
          </motion.h2>
          <table className="w-full border-collapse border border-dd text-white rounded-xl">
            <thead className="bg-dd">
              <tr className="border-t border-dd">
                <th className="p-2">Aspect</th>
                <th className="p-2">A-Levels</th>
                <th className="p-2 ">IB Diploma</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-dd">
                <td className="p-2 bg-dd font-bold">Focus</td>
                <td className="p-2">Specialization in 3-4 subjects</td>
                <td className="p-2">
                  Broad curriculum covering 6 subject groups
                </td>
              </tr>
              <tr className="border-t border-dd">
                <td className="p-2 bg-dd font-bold">Core Components</td>
                <td className="p-2">None</td>
                <td className="p-2">TOK, CAS, and the Extended Essay</td>
              </tr>
              <tr className="border-t border-dd">
                <td className="p-2 bg-dd font-bold">Assessment</td>
                <td className="p-2">Mainly final exams</td>
                <td className="p-2">
                  Mix of internal assessments and final exams
                </td>
              </tr>
              <tr className="border-t border-dd">
                <td className="p-2 bg-dd font-bold">Curriculum Flexibility</td>
                <td className="p-2">
                  High (choice of specific subjects without constraints)
                </td>
                <td className="p-2">
                  Moderate (students must choose from all six groups)
                </td>
              </tr>
              <tr className="border-t border-dd">
                <td className="p-2 bg-dd font-bold">Depth vs. Breadth</td>
                <td className="p-2">Depth in chosen subjects</td>
                <td className="p-2">Breadth across diverse disciplines</td>
              </tr>
              <tr className="border-t border-dd">
                <td className="p-2 bg-dd font-bold">Recognition</td>
                <td className="p-2">Gives you college credit in the US</td>
                <td className="p-2">
                  Does not give you college credit in the US
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}
