"use client"
import { useInView } from "@/hooks/useInView";
import Link from "next/link";


export default function TierCardComponent(props) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.4,
    }); 
    return (
        <Link ref={ref} href="/journeys-and-fees" className={`text-ll align-self-stretch mx-auto hover:scale-105 ease-in-out duration-150 ${inView ? `shown-${props.index}` : ``}`}> 
            <div className="w-80 h-max bg-dd rounded-lg min-h-full">
                <img className="object-cover w-full h-36 rounded-t-lg" height={'9rem'} src={props.img} alt='' />
                <h1 className="text-3xl my-2 font-bold text-center">{props.title}</h1>
                <p className="text-center mx-2 pb-2 h-max my-auto">{props.text}</p>
            </div>
        </Link>
    )
}