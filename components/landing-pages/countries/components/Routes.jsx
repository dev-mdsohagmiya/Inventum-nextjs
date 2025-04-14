"use client";
import { CheckIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const pricing = {
  frequencies: [
    { value: "monthly", label: "Monthly", priceSuffix: "/month" },
    { value: "annually", label: "Annually", priceSuffix: "/year" },
  ],
  tiers: [
    {
      name: "Lower Secondary",
      id: "tier-ms",
      href: "apply.inventumonline.com",
      price: { monthly: "R5 000", annually: "R48 000" },
      description:
        "Year 7-8-9 can be completed within 2 years - every student can complete it in 2 years with us. This will be comparative to grade 8 and 9 in the SA system.",
      features: [
        "Mathematics",
        "English/Afrikaans",
        "Geography",
        "Science",
        "French/German",
      ],
      mostPopular: false,
      ms: true,
    },
    {
      name: "Bachelor of Commerce",
      id: "tier-commerce",
      href: "apply.inventumonline.com",
      price: { monthly: "R5 000", annually: "R48 000" },
      description:
        "Designed for those pursuing a Bachelor of Commerce, this route provides a strong foundation in business subjects, preparing you for university-level commerce programmes.",
      features: [
        "Business",
        "Economics",
        "Accounting",
        "Mathematics",
        "English/Afrikaans",
        "French/German",
      ],
      mostPopular: false,
    },
    {
      name: "Bachelor of Science",
      id: "tier-science",
      href: "apply.inventumonline.com",
      price: { monthly: "R5 000", annually: "R48 000" },
      description:
        "Ideal for students aiming for a Bachelor of Science, this route provides a solid background in sciences to prepare for further studies.",
      features: [
        "Biology",
        "Chemistry",
        "Physics",
        "Mathematics",
        "English/Afrikaans",
        "French/German",
      ],
      mostPopular: true,
    },
    {
      name: "Bachelor of Arts",
      id: "tier-arts",
      href: "apply.inventumonline.com",
      price: { monthly: "R5 000", annually: "R48 000" },
      description:
        "Perfect for those interested in a Bachelor of Arts, this route covers humanities subjects to prepare for arts and social sciences.",
      features: [
        "History",
        "Geography",
        "Environmental Management",
        "English/Afrikaans",
        "French/German",
      ],
      mostPopular: false,
    },
    {
      name: "Bachelor of Medicine",
      id: "tier-medicine",
      href: "apply.inventumonline.com",
      price: { monthly: "R6 000", annually: "R55 000" },
      description:
        "Tailored for aspiring medical students, this route prepares you for a Bachelor of Medicine with essential subjects.",
      features: ["Biology", "Chemistry", "Mathematics", "English", "Afrikaans"],
      mostPopular: false,
    },
    {
      name: "Bachelor of Computer Science & IT",
      id: "tier-cs-it",
      href: "apply.inventumonline.com",
      price: { monthly: "R6 000", annually: "R55 000" },
      description:
        "Ideal for future IT professionals, this route provides an introduction to computing and technology, preparing you for a Bachelor in Computer Science & IT.",
      features: [
        "Mathematics",
        "Information Technology",
        "Computer Science",
        "English/Afrikaans",
        "French/German",
        "ICT",
      ],
      mostPopular: false,
    },
  ],
};

export default function Routes() {
  const [frequency, setFrequency] = useState(pricing.frequencies[0]);

  return (
    <div className={`bg-dl py-24 sm:py-32`}>
      <div className="mx-auto  px-6 lg:px-8">
        <h2 className="text-5xl lg:text-7xl text-center py-5 lg:py-10 font-bold bg-clip-text text-transparent bg-pg mx-auto lg:w-max">
          Subject Routes
        </h2>
        <p className="mx-auto max-w-3xl text-center text-lg text-ll">
          Learners can select an academic route suited to their needs and
          talents. The education model is highly adaptive and flexible and
          shatters traditional boundaries and restrictions. If a young person
          has a particular strength in a subject area, they can move quicker
          through the curriculum, studying at advanced levels for their age.
          Similarly, if a young person needs a little more time, this is easily
          achieved. Our team of dedicated study coaches and expert teachers
          ensure that support is always available.
        </p>
        <p className="mx-auto max-w-3xl text-center text-lg text-ll mt-4">
          Depending on when young people join Inventum, it is possible to finish
          high school at 17 and gain one year to start university earlier, or
          take a gap year to travel.
        </p>

        <div className="mt-6 flex justify-center">
          <fieldset aria-label="Payment frequency">
            <div
              value={frequency}
              onChange={setFrequency}
              className="grid grid-cols-2 gap-x-1 rounded-full bg-pg p-1 text-center text-md font-semibold leading-5 text-white"
            >
              {pricing.frequencies.map((option) => (
                <div
                  key={option.value}
                  value={option}
                  className={`cursor-pointer rounded-full px-3 py-2 relative z-20 transition-all duration-300 ${
                    frequency === option ? "bg-white/25" : "bg-b"
                  }`}
                  onClick={() => {
                    setFrequency(option);
                  }}
                >
                  {option.label}
                </div>
              ))}
            </div>
          </fieldset>
        </div>

        <div className=" mx-auto mt-10 flex flex-wrap justify-center gap-8 flex-1">
          {pricing.tiers.map((tier, index) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular
                  ? "bg-dd ring-2 ring-white"
                  : "ring-1 ring-white/10",
                "rounded-3xl p-8 xl:p-10 bg-dd flex gap-10 flex-col md:flex-row xs:min-w-[400px] sm:min-w-[600px] flex-1"
              )}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4 relative">
                  <h2
                    id={tier.id}
                    className="text-3xl font-semibold leading-8 text-transparent bg-pg bg-clip-text text-start"
                  >
                    {tier.name}
                  </h2>
                  {tier.mostPopular ? (
                    <p className="rounded-full bg-pg px-2.5 py-1 text-xs font-semibold leading-5 text-white whitespace-nowrap ">
                      Most popular
                    </p>
                  ) : null}
                </div>
                <p className="mt-4 text-lg leading-6 text-gray-300 text-start max-w-lg">
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1 ">
                  <span className="text-5xl font-bold tracking-tight text-white">
                    {tier.price[frequency.value]}
                  </span>
                  <span className="text-md font-semibold leading-6 text-gray-300">
                    {frequency.priceSuffix}
                  </span>
                </p>
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={classNames(
                    tier.mostPopular
                      ? "bg-pg text-white shadow-sm hover:brightness-125 focus-visible:outline-pg"
                      : "bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white",
                    "mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  )}
                >
                  Apply before it's too late
                </a>
              </div>
              <div className="">
                <p className="text-transparent bg-pg bg-clip-text font-bold">
                  {tier.ms
                    ? "Lower Secondary Subjects"
                    : "IGCSE & A-Levels Subjects"}
                  :
                </p>
                <ul
                  role="list"
                  className="mt-4 space-y-3 text-md leading-6 text-gray-300"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        aria-hidden="true"
                        className="h-6 w-5 flex-none"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
