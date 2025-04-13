import React from "react";

const PaymentOptions = ({ options, setPayment }) => {
  return (
    <div className="flex justify-center gap-8 flex-wrap mb-8">
      {options.map((option) => (
        <button
          onClick={() => setPayment(option.id)}
          key={option.term}
          className="flex items-center gap-2"
        >
          <span className="font-medium text-white text-lg xl:text-xl">
            {option.term} Payment
          </span>
          {option.discount && (
            <span className="text-xs bg-g1 text-white px-2 py-0.5 rounded-full">
              {option.discount}
            </span>
          )}
        </button>
      ))}
    </div>
  );
};

export default PaymentOptions;
