"use client";
import { useState } from "react";
import SectionName from "../ui/SectionName";
import SectionTitle from "../ui/SectionTitle";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    email: "",
    phoneNumber: "",
    hearAbout: "",
    message: "",
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
  };

  const loyaltyOptions = [
    "Social Media",
    "Friend or Family",
    "Search Engine",
    "Advertisement",
    "Other",
  ];

  return (
    <section className="container">
      <div className="bg-[#131B2C] rounded-[24px] lg:rounded-[50px] text-white p-8 md:p-16">
        <div className=" mx-auto">
          <div className="grid md:grid-cols-2 gap-12 2xl:gap-20">
            <div>
              <SectionName>Contact Us</SectionName>
              <SectionTitle
                textAlign="left"
                title="submit an enquiry form."
                subTitle="Our curriculum blends academic excellence, future technologies, and personal development, ensuring students gain the knowledge, skills, and mindset needed for success."
              />
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block mb-2 text-sm lg:text-base font-medium"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Loyalty Item"
                      className="w-full bg-white/10 bg-opacity-100 rounded p-3 text-white placeholder-gray-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="surname"
                      className="block mb-2 text-sm lg:text-base font-medium"
                    >
                      Surname
                    </label>
                    <input
                      type="text"
                      id="surname"
                      name="surname"
                      value={formData.surname}
                      onChange={handleChange}
                      placeholder="Loyalty Item"
                      className="w-full bg-white/10 bg-opacity-100 rounded p-3 text-white placeholder-gray-500"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm lg:text-base font-medium"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Type email here"
                      className="w-full bg-white/10 bg-opacity-100 rounded p-3 text-white placeholder-gray-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="block mb-2 text-sm lg:text-base font-medium"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="Type phone number"
                      className="w-full bg-white/10 bg-opacity-100 rounded p-3 text-white placeholder-gray-500"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="hearAbout"
                    className="block mb-2 text-sm lg:text-base font-medium"
                  >
                    How did you hear about Inventum International?
                  </label>
                  <div className="relative">
                    <div
                      className="w-full bg-white/10 bg-opacity-100 rounded p-3 text-white flex justify-between items-center cursor-pointer"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                      <span
                        className={
                          formData.hearAbout ? "text-white" : "text-gray-500"
                        }
                      >
                        {formData.hearAbout || "Select Loyalty Item"}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_42_508)">
                          <path
                            d="M1.25838 5.5652C1.42253 5.56498 1.5851 5.59727 1.73671 5.6602C1.88832 5.72314 2.02597 5.81547 2.14171 5.93187L8.53588 12.3252C8.72934 12.5187 8.95903 12.6722 9.21183 12.777C9.46463 12.8817 9.73558 12.9356 10.0092 12.9356C10.2828 12.9356 10.5538 12.8817 10.8066 12.777C11.0594 12.6722 11.2891 12.5187 11.4825 12.3252L17.8667 5.9402C17.982 5.82082 18.12 5.72559 18.2725 5.66008C18.425 5.59457 18.589 5.56008 18.755 5.55864C18.9209 5.5572 19.0855 5.58883 19.2392 5.65168C19.3928 5.71453 19.5323 5.80734 19.6497 5.92471C19.7671 6.04208 19.8599 6.18164 19.9227 6.33526C19.9856 6.48888 20.0172 6.65348 20.0158 6.81946C20.0143 6.98543 19.9799 7.14945 19.9143 7.30196C19.8488 7.45446 19.7536 7.5924 19.6342 7.7077L13.25 14.0927C12.39 14.9512 11.2244 15.4333 10.0092 15.4333C8.79401 15.4333 7.62846 14.9512 6.76838 14.0927L0.374213 7.69937C0.199283 7.52455 0.0801409 7.30177 0.0318625 7.05922C-0.016416 6.81667 0.00833916 6.56525 0.102995 6.33677C0.197652 6.1083 0.357955 5.91303 0.56362 5.77569C0.769286 5.63834 1.01107 5.56509 1.25838 5.5652Z"
                            fill="#737373"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_42_508">
                            <rect
                              width="20"
                              height="20"
                              fill="white"
                              transform="translate(0 0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>

                    {dropdownOpen && (
                      <div className="absolute z-10 w-full mt-1 bg-white/10 rounded sha100w-lg">
                        {loyaltyOptions.map((option) => (
                          <div
                            key={option}
                            className="p-3 hover:bg-[#3D4A5F] cursor-pointer"
                            onClick={() => {
                              setFormData({ ...formData, hearAbout: option });
                              setDropdownOpen(false);
                            }}
                          >
                            {option}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm lg:text-base font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please Type your question here"
                    rows={5}
                    className="w-full bg-white/10 bg-opacity-100 rounded p-3 text-white placeholder-gray-500"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="px-8 py-3 rounded bg-g1 text-white font-medium"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
