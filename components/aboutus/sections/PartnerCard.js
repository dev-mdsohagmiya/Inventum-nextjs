"use client";

import Image from "next/image";
import Link from "next/link";

/**
 * @param {{ to?: string, img: string, text: string, height?: string }} props
 */
export default function PartnerCard(props) {
  const Wrapper = props.to ? Link : "div";

  return (
    <Wrapper
      {...(props.to ? { href: props.to } : {})}
      className="flex relative hover:scale-105 transition-transform duration-200 ease-in-out md:flex-row-reverse flex-col-reverse bg-dd rounded-xl p-5 text-center w-[95vw] md:w-full md:max-w-[80vw] mx-auto"
    >
      {props.to && (
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/icons%2Fclick.webp?alt=media&token=8ded644d-024b-4f52-91ac-f8c3993c0b5e&_gl=1*f7oxa5*_ga*MTc0OTc0OTAxLjE2NzQyOTQxMzY.*_ga_CW55HF8NVT*MTY5ODQ4OTcyNS41NC4xLjE2OTg0OTA2MzYuMTQuMC4w"
          alt="Click icon"
          width={20}
          height={20}
          className="absolute left-2 top-2 inline-flex"
        />
      )}

      <p className="md:mx-10 my-auto text-justify">{props.text}</p>

      <div
        className={`relative ${
          props.height || "h-auto"
        } md:my-auto mx-auto mb-5`}
      >
        <Image
          src={props.img}
          alt="Partner image"
          width={400}
          height={300}
          className="object-contain"
        />
      </div>
    </Wrapper>
  );
}
