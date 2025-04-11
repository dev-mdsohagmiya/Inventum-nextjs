"use client"
import { useInView } from "@/hooks/useInView";
import StatNumbers from "./StatNumbers";

export default function  Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
}); 
  

    return (
      <section id='stats' className={`h-max md:px-20 px-5 py-10 bg-dl`}>
        <div ref={ref} className={`flex md:flex-row flex-col gap-10 w-max md:w-full mx-auto animatable ${inView ? 'shown' : ''}`}>
          {inView ? <StatNumbers end={130} name='Cambridge subjects'/> : null}
          {inView ? <StatNumbers end={50} name="Countries" /> : null}
          {inView ? <StatNumbers end={40} name='Technology courses'/> : null}
          {inView ? <StatNumbers end={50} name="Staff"/> : null}
          {inView ? <StatNumbers end={30} name="Mindset courses"/> : null}
        </div>
      </section>
    )
}
