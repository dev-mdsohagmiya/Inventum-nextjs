"use client";
import { useInView } from "@/hooks/useInView";

export default function BelgianPackageCard() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <div
      className={`h-[416px] grid grid-cols-1 animatable ${
        inView ? "shown" : ""
      }`}
      ref={ref}
    >
      <div className="cont rounded-lg max-w-sm mx-auto z-10 ">
        <div className="tier w-full rounded-lg bg-pg ">
          <div className="w-full">
            <ul class="mb-8 space-y-4 text-left">
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Mock Examination</span>
              </li>
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Practical Experiments</span>
              </li>
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Coursework</span>
              </li>
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Career Counselling</span>
              </li>
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Help with University Applications</span>
              </li>
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Cambridge IGCSE and A-level examinations</span>
              </li>
            </ul>
          </div>
          <a
            href="#belgianpackageprice"
            class="w-max mx-auto px-3 py-2 text-sm text-center bg-white font-bold rounded-full hover:brightness-[0.9] focus:ring-4 focus:outline-none"
          >
            <p className="text-transparent bg-clip-text bg-pg">
              Calculate Your Price
            </p>
          </a>
        </div>
        <div className="image rounded-lg w-full h-full bg-cover bg-[url(https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/website%2FBelgian%20Package.jpg?alt=media&token=e4bff326-0eef-49b6-a43f-33dcda1b573f)]">
          <div class="justify-center mx-auto  text-center rounded-lg shadow text-ll w-full h-full ">
            <div className="flex justify-center items-center flex-col h-full backdrop-brightness-[.6] p-0 pb-12 xs:py-3 xs:px-2  xl:py-12 xl:px-4 xl:pb-24">
              <h3 class="mb-4 text-2xl font-semibold">Belgian Package</h3>
              <p class="font-light  sm:text-lg text-gray-300 mb-4">
                Designed for independent learners who wish to have access to a
                physical school campus of ISF in Brussels for their examination
                and additional support & feedback.
              </p>
              <div class="flex justify-center items-baseline my-8">
                <span class="mr-2 text-3xl font-extrabold">
                  See price below
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bottombg bg-pg rounded-lg"></div>
      </div>
    </div>
  );
}
