"use client"
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Countdown from 'react-countdown';

function DiscountPopup() {
  const [isPopupVisible, setIsPopupVisible] = useState(true);

  function handlePopupDismiss() {
    setIsPopupVisible(false);
  }
  function handlePopupShow() {
    setIsPopupVisible(true);
  }
  const Completionist = () => <span>Sale Over!</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <div className="flex gap-4">
        <p className="flex flex-col justify-center"><span className="mx-auto">{days}</span><span className="text-gray-500 text-xl font-normal mx-auto">days</span></p>
        <p className="flex flex-col justify-center"><span className="mx-auto">{hours}</span><span className="text-gray-500 text-xl font-normal mx-auto">hours</span></p>
        <p className="flex flex-col justify-center"><span className="mx-auto">{minutes}</span><span className="text-gray-500 text-xl font-normal mx-auto">minutes</span></p>
        <p className="flex flex-col justify-center"><span className="mx-auto">{seconds}</span><span className="text-gray-500 text-xl font-normal mx-auto">seconds</span></p>
      </div>
    );
  }
};

  return (
    <div className="fixed bottom-0 left-0 px-4 pb-2 sm:pb-4 pt-5 z-[9999] text-center transition-all ease-in duration-300 ">
      {isPopupVisible ? (
        <div
          className="bg-promotion-yellow p-4 mb-10 rounded-lg shadow-md cursor-pointer transition-all ease-in duration-300 sm:max-w-lg"
          onClick={handlePopupDismiss}
        >
          <FontAwesomeIcon icon={faClose} className='absolute right-7 top-7 text-gray-500'/>
          <h2 className="text-xl font-semibold mb-2">
            Enrolments for 2023-24 are now open. 
          </h2>
          
          <h2 className="text-lg mb-2">
          Discover the future of learning with Inventum's limited time introductory offer! 
No Registration Fee if you Sign-up Now!
          </h2>
          <div className="text-3xl  text-transparent bg-pg bg-clip-text font-bold mb-1 mx-auto w-max">
          <Countdown date={Date.UTC(2023,4,31,0,0,0)} renderer={renderer} />
          </div>
        </div>
      ) : (
        <div className="bg-promotion-yellow p-2  md:mb-0 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-all ease-in duration-150" onClick={handlePopupShow}>
          <h2 className="text-lg font-semibold px-2">
            Free registration!
          </h2>
        </div>
      )}
    </div>
  );
}

export default DiscountPopup;
