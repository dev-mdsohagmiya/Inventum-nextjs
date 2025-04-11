"use client"
import { useInView } from "@/hooks/useInView";


export default function  Mission() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
}); 
    return (
      <section id='mission' className="h-min bg-dd  py-10 flex md:flex-row flex-col justify-center items-center">
        <h1 ref={ref}  className={`pb-10 md:pb-0 md:pr-20 w-max mx-auto lg:whitespace-nowrap md:pl-10 text-5xl md:text-7xl flex items-center text-center font-bold bg-clip-text text-transparent bg-pg animatable ${inView ? 'left' : ''}`} >Our Mission</h1>
        <div ref={ref}  className={`text-2xl md:text-4xl text-ll text-center max-w-prose mx-auto animatable ${inView ? 'shown' : ''}`}>
        Our <a className='group text-transparent bg-clip-text bg-pg transition-all duration-300 ease-in-out' href='/future-technologies'> <span className="bg-left-bottom bg-gradient-to-r from-pink-500 to-purple-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">future-focused</span></a>, technology-driven <a className='group text-transparent bg-clip-text bg-pg transition-all duration-300 ease-in-out' href='/curriculum'> <span className="bg-left-bottom bg-gradient-to-r from-pink-500 to-purple-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">study programme</span></a> allows learners to access innovative learning anywhere, anytime, helping them to progress at their own pace while becoming global citizens.
        </div>
      </section>
    )
}
