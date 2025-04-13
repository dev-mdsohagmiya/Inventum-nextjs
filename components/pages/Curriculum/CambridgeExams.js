export default function CambridgeExams() {
  return (
    <div className="lg:bg-none lg:bg-dl bg-cover bg-right-center-half bg-[url(https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/website%2Fcambridgeexams.webp?alt=media&token=3cd7d742-c722-418d-aa8c-60f585e7f0b2&_gl=1*1iogp6z*_ga*MTc0OTc0OTAxLjE2NzQyOTQxMzY.*_ga_CW55HF8NVT*MTY5ODQ4OTcyNS41NC4xLjE2OTg0OTM0NjIuNjAuMC4w)] ">
      <div className="flex lg:flex-row-reverse flex-col items-center w-full lg:pl-5 ">
        <img
          className="ovalcut lg:brightness-100 lg:w-1/3 lg:h-screen h-0 object-cover object-right-center-half "
          src={
            "https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/website%2Fcambridgeexams.webp?alt=media&token=3cd7d742-c722-418d-aa8c-60f585e7f0b2&_gl=1*1iogp6z*_ga*MTc0OTc0OTAxLjE2NzQyOTQxMzY.*_ga_CW55HF8NVT*MTY5ODQ4OTcyNS41NC4xLjE2OTg0OTM0NjIuNjAuMC4w"
          }
          alt=""
        />
        <div className="w-full h-full text-center  lg:mx-10 backdrop-brightness-50 lg:backdrop-brightness-100">
          <h1 className="pt-24 text-7xl py-10 font-bold bg-clip-text text-transparent bg-pg">
            Cambridge Exams
          </h1>
          <div className="p-5 text-center text-gray-200 text-lg">
            Inventum International is a registered online school with Cambridge
            International. We offer a range of Cambridge International IGCSE and
            AS/A-Level subjects, which lead to high-quality qualifications
            recognised by universities and employers all over the world.
            <br></br>
            <div className="rounded-xl my-6 bg-pg p-[0.1rem]">
              <div className="flex flex-col justify-between h-full bg-transparent rounded-lg"></div>
            </div>
            Inventum learners will, of course, be required to sit Cambridge
            Exams and the end of their subject courses in order to achieve the
            IGCSE and A-Level qualifications necessary for university, further
            study, training, or work. As Cambridge does not currently offer
            online exams, learners will need to register as private candidates
            at a registered Cambridge International Exam Centre of their choice.
            <br></br>
            <div className="rounded-xl my-6 bg-pg p-[0.1rem]">
              <div className="flex flex-col justify-between h-full bg-transparent rounded-lg"></div>
            </div>
            Our partner school, the{" "}
            <a
              href="https://www.isfwaterloo.org/"
              className="group text-transparent bg-clip-text bg-pg transition-all duration-300 ease-in-out"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <span className="bg-left-bottom bg-gradient-to-r from-pink-500 to-purple-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                International School of Flanders
              </span>
            </a>
            , in Belgium, is a registered exam centre and can accommodate
            learners living in the Benelux area. For learners living and
            studying around the world, Inventum International also offers
            support to find an appropriate exam centre, depending on the package
            selected.
          </div>
          <div className="lg:grid lg:grid-cols-3 flex-col gap-5 lg:mx-0 justify-between lg:text-start text-ll py-10">
            <div className="mb-5 lg:mb-0 w-[80%] max-w-xl flex flex-col justify-center items-center mx-auto gap-3 bg-dd shadow-lg rounded-lg text-center p-4">
              <span className="mx-5">
                How to register as a private candidate at our partner school
              </span>
              <a
                href="https://www.isfwaterloo.org/1456/cambridge-examinations/"
                className="p-2 bg-pg font-bold rounded-lg hover:scale-105"
                target="_blank"
                rel="noreferrer"
              >
                Click here
              </a>
            </div>
            <div className="mb-5 lg:mb-0 w-[80%] max-w-xl flex flex-col justify-center items-center mx-auto gap-3 text-center bg-dd shadow-lg rounded-lg p-4 ">
              <span className="mx-5">
                How to register as a private candidate
              </span>
              <a
                href="https://www.cambridgeinternational.org/exam-administration/private-candidates/register-as-a-private-candidate"
                className="p-2 bg-pg font-bold rounded-lg hover:scale-105"
                target="_blank"
                rel="noreferrer"
              >
                Click here
              </a>
            </div>
            <div className="w-[80%] max-w-xl flex flex-col justify-center items-center mx-auto gap-3 text-center bg-dd shadow-lg rounded-lg p-4 ">
              <span className="mx-5">Find a Registered Exam Centre</span>
              <a
                href="https://www.cambridgeinternational.org/why-choose-us/find-a-cambridge-school/"
                className="p-2 bg-pg font-bold rounded-lg hover:scale-105"
                target="_blank"
                rel="noreferrer"
              >
                Click here
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
