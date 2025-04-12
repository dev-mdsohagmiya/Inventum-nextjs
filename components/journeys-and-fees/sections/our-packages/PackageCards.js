"use client"
import CallButton from "@/hooks/CallButton";
import { useState } from "react";


const PackageCards = ({ packages, price }) => {
  const [loadmore, setLoadmore] = useState({});
  return (
    <>
      <div className="flex flex-col lg:flex-row items-start gap-4 pb-14">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-[#111827] basis-full lg:basis-1/3 rounded-2xl lg:rounded-3xl p-2 flex flex-col"
          >
            <div className="mb-4">
              <div className="flex items-center justify-between px-5 pb-3 w-full">
                <div className="text-white text-sm lg:text-base font-light">
                  {pkg.journey}
                </div>
                <div className="font-medium text-base text-white">
                  {pkg.title}
                </div>
              </div>
              <div className="bg-[#162033] p-5 rounded-2xl">
                <div className=" mb-1">
                  <span className="text-white text-3xl font-bold">
                    € {price[index]} / 
                  </span>
                  <span className="text-sm font-normal text-white ml-2">
                    subject annually
                  </span>
                </div>
                <p className="text-[#C9C9C9] text-base lg:text-lg mt-3 mb-4">
                  {pkg.description}
                </p>
                <CallButton
                textSize="text-base"
                className={`w-full py-3 rounded-md font-medium ${
                  pkg.buttonVariant === "primary"
                    ? "bg-g1 text-white"
                    : "bg-transparent border border-[#2D364A] text-white hover:bg-gray-700"
                }`}
                text={pkg.buttonText}
                />
              </div>
            </div>
            <div className="mt-auto bg-[#162033] p-5 rounded-2xl transition-all duration-300 ease-in-out h-max">
              {pkg.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 mb-3">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    className="mt-1"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="-0.00488281"
                      width={24}
                      height={24}
                      rx={12}
                      fill="white"
                    />
                    <path
                      d="M17.5437 8.6405L11.8395 16.3813C11.7035 16.5618 11.5006 16.6801 11.2765 16.7095C11.0524 16.739 10.8259 16.6772 10.6478 16.538L6.57449 13.2813C6.21505 12.9937 6.15685 12.4691 6.44449 12.1097C6.73214 11.7502 7.25671 11.692 7.61616 11.9797L11.0128 14.6972L16.202 7.65467C16.3722 7.39933 16.6689 7.25815 16.9743 7.2872C17.2798 7.31625 17.5446 7.51081 17.6636 7.79365C17.7826 8.07648 17.7365 8.40182 17.5437 8.6405Z"
                      fill="black"
                    />
                  </svg>

                  <span className=" flex-1 text-base lg:text-lg text-[#C9C9C9]">
                    {feature}
                  </span>
                </div>
              ))}
               {pkg.loadMore && (
                <button onClick={() => setLoadmore((prev) => ({ ...prev, [index]: true }))} className={`text-[#fff] underline text-sm font-medium mt-2 transition-all duration-300 ease-in-out ${!loadmore[index] ? 'block' : 'hidden'}`}>
                  Load more
                </button>
              )}
              <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                !loadmore[index] ? 'max-h-0' : 'max-h-screen'
              } relative`}
              >
              {pkg.loadMore && pkg.more.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 mb-3">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    className="mt-1"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="-0.00488281"
                      width={24}
                      height={24}
                      rx={12}
                      fill="white"
                    />
                    <path
                      d="M17.5437 8.6405L11.8395 16.3813C11.7035 16.5618 11.5006 16.6801 11.2765 16.7095C11.0524 16.739 10.8259 16.6772 10.6478 16.538L6.57449 13.2813C6.21505 12.9937 6.15685 12.4691 6.44449 12.1097C6.73214 11.7502 7.25671 11.692 7.61616 11.9797L11.0128 14.6972L16.202 7.65467C16.3722 7.39933 16.6689 7.25815 16.9743 7.2872C17.2798 7.31625 17.5446 7.51081 17.6636 7.79365C17.7826 8.07648 17.7365 8.40182 17.5437 8.6405Z"
                      fill="black"
                    />
                  </svg>

                  <span className=" flex-1 text-base lg:text-lg text-[#C9C9C9]">
                    {feature}
                  </span>
                </div>
              ))}
               {pkg.loadMore && (
                <button onClick={() => setLoadmore((prev) => ({ ...prev, [index]: false }))} className={`text-[#fff] underline text-sm font-medium mt-2 transition-all duration-300 ease-in-out ${loadmore[index] ? 'block' : 'hidden'}`}>
                  Load less
                </button>
              )}
              </div>

            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PackageCards;
