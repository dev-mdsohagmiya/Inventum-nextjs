export default function BelgianPackage() {
  return (
    <div className="">
      <div className="lg:bg-none lg:bg-dl bg-cover bg-center bg-[url(https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/website%2FISF.webp?alt=media&token=f2417ed2-2933-4c11-9f45-72b5bd6ed687&_gl=1*15wtccz*_ga*MTc0OTc0OTAxLjE2NzQyOTQxMzY.*_ga_CW55HF8NVT*MTY5ODQ4OTcyNS41NC4xLjE2OTg0OTM0MzcuNS4wLjA.)] ">
        <div className="flex lg:flex-row-reverse flex-col items-center w-full lg:pl-5  ">
          <img
            className="ovalcut lg:brightness-100 lg:w-1/3 lg:h-screen h-0 object-cover object-center "
            src={
              "https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/website%2FISF.webp?alt=media&token=f2417ed2-2933-4c11-9f45-72b5bd6ed687&_gl=1*15wtccz*_ga*MTc0OTc0OTAxLjE2NzQyOTQxMzY.*_ga_CW55HF8NVT*MTY5ODQ4OTcyNS41NC4xLjE2OTg0OTM0MzcuNS4wLjA."
            }
            alt=""
          />
          <div className="w-full h-full text-center  lg:mx-10 overflow-y-auto overflow-x-clip backdrop-brightness-50 lg:backdrop-brightness-100">
            <h1 className="pt-24 text-7xl py-10 font-bold bg-clip-text text-transparent bg-pg">
              Belgian Package
            </h1>
            <p className="p-5 text-center text-gray-200 text-2xl">
              Inventum's Belgian package is designed to offer additional support
              for students who are studying independently in the proximity of
              Brussels, Belgium. We understand homeschooling can be challenging
              and have created a number of options that can help the learners in
              their journey and also allow them to engage with other learners.
              <br></br>
              <div className="rounded-xl my-6 bg-pg p-[0.1rem]">
                <div className="flex flex-col justify-between h-full bg-transparent rounded-lg"></div>
              </div>
              With our package you can take advantage of additional tests and
              receive feedback from a Study Coach, participate in practical
              experiments, receive help with the university application process
              and sit the Cambridge exams on the ISF campus in Brussels,
              Belgium. Don't miss out on this opportunity to enhance your
              home-schooling experience and reach your full potential. To learn
              more about our Belgian package, please visit
              <a
                href="https://www.isfwaterloo.org/1456/cambridge-examinations."
                className="group text-transparent bg-clip-text bg-pg transition-all duration-300 ease-in-out"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <span className="bg-left-bottom bg-gradient-to-r from-pink-500 to-purple-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  {" "}
                  ISF's website.
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
      <div class="bg-dl scroll-m-24 pt-24" id="belgianpackageprice">
        <div class=" w-full text-center grid grid-cols-2 p-4 border-t border-b md:gap-x-16 justify-between bg-gray-800 border-gray-700 text-ll font-bold sm:text-[1rem] text-xs">
          <div class="flex items-center justify-center">Belgian package</div>
          <div>Price (euro)</div>
        </div>
        <div class="grid grid-cols-2 px-4 py-5 text-sm text-ll border-b  md:gap-x-16 justify-between border-gray-600 ">
          <div class="text-ll w-full font-bold sm:text-[1rem] text-xs">
            Mock Examinations
          </div>
          <div className="flex justify-center items-center font-bold text-ll text-xl">
            <p>500</p>
          </div>
        </div>
        <div class="grid grid-cols-2 px-4 py-5 text-sm text-ll border-b  md:gap-x-16 justify-between border-gray-600">
          <div class="text-ll w-full font-bold sm:text-[1rem] text-xs">
            Practical Experiments
          </div>
          <div className="flex justify-center items-center font-bold text-ll text-xl">
            <p>500</p>
          </div>
        </div>
        <div class="grid grid-cols-2 px-4 py-5 text-sm text-ll border-b  md:gap-x-16 justify-between border-gray-600">
          <div class="text-ll w-full font-bold sm:text-[1rem] text-xs">
            Coursework
          </div>
          <div className="flex justify-center items-center font-bold text-ll text-xl">
            <p>750</p>
          </div>
        </div>
        <div class="grid grid-cols-2 px-4 py-5 text-sm text-ll border-b  md:gap-x-16 justify-between border-gray-600">
          <div class="text-ll w-full font-bold sm:text-[1rem] text-xs">
            Career Counselling
          </div>
          <div className="flex justify-center items-center font-bold text-ll text-xl">
            <p>350</p>
          </div>
        </div>
        <div class="grid grid-cols-2 px-4 py-5 text-sm text-ll border-b  md:gap-x-16 justify-between border-gray-600">
          <div class="text-ll w-full font-bold sm:text-[1rem] text-xs">
            Help with University Applications
          </div>
          <div className="flex justify-center items-center font-bold text-ll text-xl">
            <p>250</p>
          </div>
        </div>
        <div class="grid grid-cols-2 px-4 py-5 text-sm text-ll border-b  md:gap-x-16 justify-between border-gray-600">
          <div class="text-ll w-full font-bold sm:text-[1rem] text-xs">
            Cambridge Exams
          </div>
          <div className="flex justify-center items-center font-bold text-ll text-xl">
            <p>Depending</p>
          </div>
        </div>
      </div>
    </div>
  );
}
