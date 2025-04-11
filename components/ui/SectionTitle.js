import React from "react";

const SectionTitle = ({
  title,
  subTitle,
  className,
  textAlign = "center",
  textColor = "white",
  colouredTitle = "",
  afterTitle = "",
  subHeadline = "",
}) => {
  return (
    <div className={`space-y-3 ${className}`}>
      <h2
        className="text-[1.75rem] font-bold lg:text-[2.5rem] xl:text-[3rem]"
        style={{ textAlign: textAlign, color: textColor }}
      >
        {title} <span className="bg-pg bg-clip-text text-transparent">{" "+colouredTitle}</span> {" "+afterTitle}
      </h2>
      <h3
      className="text-[1.5rem] font-semibold lg:text-[2rem] xl:text-[2.5rem]"
      style={{ textAlign: textAlign, color: textColor }}      
      >
        {subHeadline}
      </h3>
      <p
        className="text-[1rem] text-[#C9C9C9] leading-[150%] xl:text-[1.15rem]"
        style={{ textAlign: textAlign, color: textColor }}
      >
        {subTitle}
      </p>
    </div>
  );
};

export default SectionTitle;
