"use client";
import SectionTitle from "@/components/ui/SectionTitle";
import { useEffect, useState } from "react";
import { InlineWidget } from "react-calendly";

function isCalendlyEvent(e) {
  return e.data.event && e.data.event.indexOf("calendly") === 0;
}

export default function CallInline(props) {
  const [height, setHeight] = useState("700px");
  const [salesforceUuid, setSalesforceUuid] = useState(null);
  const [isClient, setIsClient] = useState(false); // check client-side render

  useEffect(() => {
    // Only run this on client
    setIsClient(true);

    const gclid = localStorage.getItem("gclid");
    setSalesforceUuid(gclid);

    const handleMessage = (e) => {
      if (isCalendlyEvent(e)) {
        if (e.data.event === "calendly.page_height" && e.data.payload?.height) {
          const calculatedHeight = parseInt(e.data.payload.height, 10);
          setHeight(calculatedHeight > 700 ? `${calculatedHeight}px` : "700px");
        }
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <section className="container py-16 xl:py-20">
      {!props.notitle && (
        <SectionTitle
          className={"max-w-4xl  mx-auto"}
          title={"Next Step:"}
          colouredTitle="Schedule a personal discovery call."
          subHeadline="(Free academic assessment included)."
          subTitle={
            "During this exploritory meeting, we will learn about your unique needs and create a customised plan to personalise our education to your requirements."
          }
        />
      )}

      {/* Only render InlineWidget when we're on client-side */}
      {isClient && (
        <InlineWidget
          url="https://calendly.com/inventuminternational/30min"
          utm={{ salesforce_uuid: salesforceUuid }}
          styles={{ height: height, marginTop: "2rem" }}
          pageSettings={{
            hideEventTypeDetails: true,
            hideLandingPageDetails: true,
          }}
        />
      )}
    </section>
  );
}
