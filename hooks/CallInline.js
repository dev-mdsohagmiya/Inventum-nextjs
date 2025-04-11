"use client"
import { useEffect, useState } from "react";
import { InlineWidget, useCalendlyEventListener,  } from "react-calendly";
import SectionTitle from "../landing-pages/components/ui/SectionTitle";
function isCalendlyEvent(e) {
  return e.data.event && e.data.event.indexOf("calendly") === 0;
}
export default function CallInline(props) {
  const [height, setHeight] = useState("700px");
  

  useEffect(() => {
    const handleMessage = (e) => {
      if (isCalendlyEvent(e)) {
        console.log("Calendly event data:", e.data);

        if (e.data.event === "calendly.page_height" && e.data.payload?.height) {
          // Ensure the height never drops below a minimum value (e.g., 700px)
          const calculatedHeight = parseInt(e.data.payload.height, 10);
          if (!isNaN(calculatedHeight) && calculatedHeight > 700) {
            setHeight(`${calculatedHeight}px`);
          } else {
            // Set a fallback height in case of unexpected collapse
            setHeight("700px");
          }
        }
      }
    };

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);



  return (
    <section className="container py-16 xl:py-20">
      {props.notitle ? <></> : 
      <SectionTitle
        className={"max-w-4xl mx-auto"}
        title={"Next Step:"}
        colouredTitle="Schedule a personal discovery call."
        subHeadline="(Free academic assessment included)."
        subTitle={
          "During this exploritory meeting, we will learn about your unique needs and create a customised plan to personalise our education to your requirements."
        }
      />}
      <InlineWidget
        url="https://calendly.com/inventuminternational/30min"
        utm={{ salesforce_uuid: localStorage.getItem("gclid") || null }}
        styles={{ height: height, marginTop: "2rem" }}
        pageSettings={{ hideEventTypeDetails: true, hideLandingPageDetails: true }}
      />
    </section>
  );
}
