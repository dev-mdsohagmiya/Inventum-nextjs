"use client";
import { useState } from "react";
import { PopupButton, useCalendlyEventListener } from "react-calendly";

export default function CallButton(props) {
  const [height, setHeight] = useState("700px");
  const onPageHeightResize = (e) => setHeight(e.data.payload.height);

  useCalendlyEventListener({
    onPageHeightResize,
  });

  return (
    <PopupButton
      url="https://calendly.com/inventuminternational/30min"
      /*
       * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
       * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
       */

      rootElement={document.getElementById("root")}
      text={props.text ?? "Book a call!"}
      utm={{ salesforce_uuid: localStorage.getItem("gclid") || null }}
      className={
        props.textUrl
          ? `${props.textSize ?? "text-2xl"} ${props.className}`
          : `text-ll ${props.textSize ?? "text-2xl"} ${
              props.className
            } hover:scale-[1.05] cursor-pointer transition-all px-6 py-4 font-medium text-base !rounded-[16px] ease-in-out bg-pg w-max  items-center`
      }
    />
  );
}
