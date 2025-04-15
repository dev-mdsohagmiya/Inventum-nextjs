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
    <section id="contact" className="container scroll-mt-32">
      <div className="bg-[#131B2C] rounded-[24px] lg:rounded-[50px] text-white p-8 md:p-16">
        <div className=" mx-auto">
          <div className="grid md:grid-cols-2 gap-12 2xl:gap-20">
            <div>
              <SectionName>Contact Us</SectionName>
              <SectionTitle
                textAlign="left"
                title="Submit an enquiry form."
                subTitle="Ideally book a call with us above, but if you prefer to submit an enquiry form, please fill in the details. We'll be in touch with you wihtin 48h."
              />
            </div>

            <div>
              <div className="lg:max-w-2xl mx-auto">
                <iframe
                  src="https://tally.so/embed/wgdboD?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                  loading="lazy"
                  width="100%"
                  height="500"
                  title="Enquiry Form"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
