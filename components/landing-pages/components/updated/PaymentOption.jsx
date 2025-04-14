const PaymentOptions = ({ options, setPayment, activeTab }) => {
  return (
    <div className="flex justify-center gap-8 flex-wrap mb-8">
      {options.map((option) => (
        <button
          onClick={() => setPayment(option.id)}
          key={option.term}
          className={`inline-flex px-4 py-0.5 items-center border rounded-full text-xs transition-all ${
            activeTab === option.id
              ? "border-[#EC4899] bg-[#111827] shadow-tab text-white"
              : "text-gray-300 border-transparent hover:text-white"
          }`}
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
