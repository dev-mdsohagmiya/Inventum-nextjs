"use client";
import { PopupButton } from "react-calendly";
import { useEffect, useState } from "react";

export default function CallButton(props) {
  const [rootElement, setRootElement] = useState(null);

  useEffect(() => {
    // This ensures document is available only on client side
    setRootElement(document.getElementById("root"));
  }, []);

  return (
    <PopupButton
      url="https://calendly.com/inventuminternational/30min"
      /*
       * react-calendly uses React's Portal feature to render the popup modal.
       * In Next.js, we need to handle the case where document might not be available during SSR.
       */
      rootElement={rootElement}
      text={props.text ?? "Schedule a discovery call"}
      utm={{ 
        salesforce_uuid: typeof window !== 'undefined' ? localStorage.getItem("gclid") || null : null 
      }}
      className={
        props.className ??
        (props.textUrl
          ? `${props.textSize || "text-2xl"} ${props.className}`
          : `text-ll ${props.textSize || "text-2xl"} ${
              props.className
            } hover:scale-[1.05] transition-all cursor-pointer px-4 py-2 font-medium rounded-xl ease-in-out bg-pg w-max items-center`)
      }
    />
  );
}