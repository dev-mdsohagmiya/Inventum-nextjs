import CallButton from "@/hooks/CallButton";
import SectionName from "../ui/SectionName";
import SectionTitle from "../ui/SectionTitle";

const WhatWeOffer = () => {
  const DATA = [
    {
      id: 11,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={40}
          height={40}
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M31.6667 3.24835H8.33333C3.73833 3.24835 0 6.98669 0 11.5817V28.2484C0 32.8434 3.73833 36.5817 8.33333 36.5817H19.1667V33.1517C17.9517 31.78 17.1483 30.1167 16.8267 28.3334H10C9.07833 28.3334 8.33333 27.5867 8.33333 26.6667C8.33333 25.7467 9.07833 25 10 25H16.8033C16.995 23.805 17.3917 22.6817 17.9667 21.6667H9.99833C9.07667 21.6667 8.33167 20.92 8.33167 20C8.33167 19.08 9.07667 18.3334 9.99833 18.3334H21.0217C22.63 17.23 24.5717 16.5817 26.665 16.5817C32.18 16.5817 36.665 21.0667 36.665 26.5817C36.665 29.0184 35.77 31.3384 34.165 33.1517V36.155C37.5333 35.085 39.9983 31.965 39.9983 28.2467V11.5817C39.9983 6.98669 36.2617 3.24835 31.6667 3.24835ZM30 15H10C9.07833 15 8.33333 14.2534 8.33333 13.3334C8.33333 12.4134 9.07833 11.6667 10 11.6667H30C30.9217 11.6667 31.6667 12.4134 31.6667 13.3334C31.6667 14.2534 30.9217 15 30 15ZM33.3333 26.6667C33.3333 22.99 30.3433 20 26.6667 20C22.99 20 20 22.99 20 26.6667C20 28.7584 20.9883 30.605 22.5 31.8284V38.9117C22.5 39.95 23.8183 40.395 24.4483 39.57L26.6667 36.665L28.885 39.57C29.515 40.395 30.8333 39.95 30.8333 38.9117V31.8284C32.345 30.605 33.3333 28.7584 33.3333 26.6667Z"
            fill="white"
          />
        </svg>
      ),
      title: "Personalised Schooling",
      des: "Upon joining us, each learner completes a CAT4 test to assess their academic level and learning style, allowing us to create a personalised learning plan.",
    },
    {
      id: 10,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={40}
          height={40}
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M31.6667 3.24835H8.33333C3.73833 3.24835 0 6.98669 0 11.5817V28.2484C0 32.8434 3.73833 36.5817 8.33333 36.5817H19.1667V33.1517C17.9517 31.78 17.1483 30.1167 16.8267 28.3334H10C9.07833 28.3334 8.33333 27.5867 8.33333 26.6667C8.33333 25.7467 9.07833 25 10 25H16.8033C16.995 23.805 17.3917 22.6817 17.9667 21.6667H9.99833C9.07667 21.6667 8.33167 20.92 8.33167 20C8.33167 19.08 9.07667 18.3334 9.99833 18.3334H21.0217C22.63 17.23 24.5717 16.5817 26.665 16.5817C32.18 16.5817 36.665 21.0667 36.665 26.5817C36.665 29.0184 35.77 31.3384 34.165 33.1517V36.155C37.5333 35.085 39.9983 31.965 39.9983 28.2467V11.5817C39.9983 6.98669 36.2617 3.24835 31.6667 3.24835ZM30 15H10C9.07833 15 8.33333 14.2534 8.33333 13.3334C8.33333 12.4134 9.07833 11.6667 10 11.6667H30C30.9217 11.6667 31.6667 12.4134 31.6667 13.3334C31.6667 14.2534 30.9217 15 30 15ZM33.3333 26.6667C33.3333 22.99 30.3433 20 26.6667 20C22.99 20 20 22.99 20 26.6667C20 28.7584 20.9883 30.605 22.5 31.8284V38.9117C22.5 39.95 23.8183 40.395 24.4483 39.57L26.6667 36.665L28.885 39.57C29.515 40.395 30.8333 39.95 30.8333 38.9117V31.8284C32.345 30.605 33.3333 28.7584 33.3333 26.6667Z"
            fill="white"
          />
        </svg>
      ),
      title: "Cambridge & Pearson",
      des: "Inventum offers a diverse, challenging curriculum with Pearson (Years 5-9), Cambridge IGCSE (Years 10-11), and A-Levels (Years 12-13).",
    },
    {
      id: 12,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={40}
          height={40}
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M35 40H5V34.1667C5 30.0317 8.365 26.6667 12.5 26.6667H27.5C31.635 26.6667 35 30.0317 35 34.1667V40ZM30 13.3333H10C10 18.8483 14.485 23.3333 20 23.3333C25.515 23.3333 30 18.8483 30 13.3333ZM25 5L20 0L15 5L10 0V10H30V0L25 5Z"
            fill="white"
          />
        </svg>
      ),
      title: "Flexible Support",
      des: "We help you with whatever you want to achieve, maybe you need support to be able to finnish 2 years in 1, or maybe you need extra time to understand a certain key topic.",
    },
    {
      id: 13,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={40}
          height={40}
          viewBox="0 0 40 40"
          fill="none"
        >
          <g clipPath="url(#clip0_42_104)">
            <path
              d="M39.5481 20.5117C39.2135 21.4383 38.6986 22.2895 38.0333 23.0161C37.3679 23.7427 36.5652 24.3303 35.6715 24.745L3.55979 39.765C2.95907 40.0461 2.27128 40.0771 1.64773 39.8511C1.02417 39.6252 0.515919 39.1607 0.234789 38.56C-0.0463402 37.9593 -0.0773221 37.2715 0.148659 36.6479C0.374641 36.0244 0.839074 35.5161 1.43979 35.235L8.31146 32.0217V21.9883C8.30745 20.0708 9.04082 18.2252 10.3598 16.8333L15.2465 11.6667H5.83312C5.17008 11.6667 4.5342 11.4033 4.06536 10.9344C3.59651 10.4656 3.33312 9.82971 3.33312 9.16667C3.33312 8.50363 3.59651 7.86774 4.06536 7.3989C4.5342 6.93006 5.17008 6.66667 5.83312 6.66667H16.4998C18.2036 6.66286 19.8644 7.20167 21.2415 8.205L21.4981 8.41834C22.0618 8.95481 22.5124 9.59864 22.8235 10.3119C23.1345 11.0252 23.2997 11.7935 23.3094 12.5716C23.319 13.3496 23.1728 14.1218 22.8795 14.8425C22.5862 15.5633 22.1517 16.2181 21.6015 16.7683L13.3098 25.1017V29.68L33.5531 20.2117C34.1537 19.9313 34.6184 19.4239 34.845 18.801C35.0716 18.1781 35.0415 17.4907 34.7615 16.89C34.4808 16.2891 34.4503 15.6012 34.6768 14.9778C34.9032 14.3544 35.368 13.8465 35.969 13.5658C36.5699 13.2851 37.2577 13.2547 37.8811 13.4811C38.5045 13.7076 39.0124 14.1724 39.2931 14.7733C39.7133 15.6653 39.9523 16.6319 39.996 17.6169C40.0398 18.602 39.8876 19.5859 39.5481 20.5117ZM27.4781 8.33334C28.3022 8.33334 29.1078 8.08896 29.793 7.63113C30.4782 7.17329 31.0123 6.52254 31.3276 5.76118C31.643 4.99983 31.7255 4.16205 31.5647 3.35379C31.404 2.54554 31.0071 1.80311 30.4244 1.22039C29.8417 0.637672 29.0993 0.240835 28.291 0.0800632C27.4827 -0.0807086 26.645 0.00180535 25.8836 0.317171C25.1223 0.632536 24.4715 1.16659 24.0137 1.85179C23.5558 2.537 23.3115 3.34258 23.3115 4.16667C23.3115 5.27174 23.7504 6.33155 24.5318 7.11295C25.3132 7.89435 26.3731 8.33334 27.4781 8.33334Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_42_104">
              <rect width={40} height={40} fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Technology / Mindset Education",
      des: "Our cutting-edge technology modules combined with our personal mindset development prepare our students for the world of tomorrow.",
    },
  ];

  return (
    <section
      id="whatwedo"
      className="bg-[#131B2C] py-14 rounded-[50px] lg:py-20"
    >
      <div className="container">
        <div className="flex mx-auto max-w-[920px] flex-col items-center justify-center gap-4">
          <SectionName>What We Offer</SectionName>
          <SectionTitle
            title={"Personalised, Flexible & International"}
            colouredTitle="Education that puts you first."
            subTitle="Our curriculum blends academic excellence, future technologies and personal mindset development, helping students to gain the knowledge, skills, and mindset needed for success. All that while being flexible and personalised to each student's needs."
          />
        </div>
        <div className="pt-8 lg:pt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {DATA.map((item) => (
            <div
              key={item.id}
              className="p-[28px] rounded-[32px] bg-gradient-to-b shadow-md from-[#27303c] to-dl flex flex-col gap-y-6"
            >
              {item.icon}
              <div className="space-y-3">
                <h3 className="text-xl text-white font-bold leading-[130%]">
                  {item.title}
                </h3>
                <p className="text-base text-[#C9C9C9] leading-[130%]">
                  {item.des}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <CallButton />
      </div>
    </section>
  );
};

export default WhatWeOffer;
