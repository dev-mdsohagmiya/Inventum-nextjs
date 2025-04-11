"use client"
import { useInView } from "@/hooks/useInView";
import CountUp from "react-countup";


export default function StatNumbers(props) {
    const [ref] = useInView({
        triggerOnce: false,
        threshold: 0.4,
    }); 
    return(
    <div ref={ref} className="flex md:flex-col text-center items-center gap-5 md:gap-0 w-full md:justify-center">
        <div className="flex items-center md:justify-center justify-start font-bold text-3xl bg-clip-text text-transparent bg-pg">
            <CountUp className={`font-bold text-5xl  }`} end={props.end} />
            +
            </div>
            <h2 className="font-bold text-xl text-ll">{props.name}</h2>
    </div>
    )
}