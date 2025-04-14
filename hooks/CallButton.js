"use client";

import { useEffect, useState } from "react";
import { PopupButton, useCalendlyEventListener } from "react-calendly";

export default function CallButton(props) {
  const [height, setHeight] = useState("700px");
  const [isClient, setIsClient] = useState(false);
  const [gclid, setGclid] = useState(null);

  useEffect(() => {
    // Set isClient to true when component mounts on client
    setIsClient(true);

    // Get GCLID from localStorage
    try {
      setGclid(localStorage.getItem("gclid") || null);
    } catch (error) {
      console.error("Error accessing localStorage:", error);
    }
  }, []);

  const onPageHeightResize = (e) => setHeight(e.data.payload.height);

  useCalendlyEventListener({
    onPageHeightResize,
  });

  // Prepare the className
  const buttonClassName = props.textUrl
    ? `${props.textSize ?? "text-2xl"} ${props.className}`
    : `text-ll ${props.textSize ?? "text-2xl"} ${
        props.className
      } hover:scale-[1.05] transition-all px-6 py-4 font-medium text-base !rounded-[16px] ease-in-out bg-pg w-max items-center`;

  // Only render the PopupButton on the client side
  if (!isClient) {
    // Return a placeholder button with the same styling during SSR
    return (
      <button className={buttonClassName}>
        {props.text ?? "Book a call!"}
      </button>
    );
  }

  return (
    <PopupButton
      url="https://calendly.com/inventuminternational/30min"
      rootElement={document.getElementById("__next") || document.body}
      text={props.text ?? "Book a call!"}
      utm={{ salesforce_uuid: gclid }}
      className={buttonClassName}
    />
  );
}
