"use client";
import { PopupButton } from "react-calendly";
import { useEffect, useState } from "react";

export default function CallButton(props) {
  const [isMounted, setIsMounted] = useState(false);
  const [salesforceUuid, setSalesforceUuid] = useState(null);

  useEffect(() => {
    setIsMounted(true);
    setSalesforceUuid(localStorage.getItem("gclid") || null);
  }, []);

  if (!isMounted) return null;

  return (
    <PopupButton
      url="https://calendly.com/inventuminternational/30min"
      rootElement={document.body}
      text={props.text ?? "Schedule a discovery call"}
      utm={{
        salesforce_uuid: salesforceUuid,
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
