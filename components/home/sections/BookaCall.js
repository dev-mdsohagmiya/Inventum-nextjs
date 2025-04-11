"use client"
import { useInView } from "@/hooks/useInView";


export default function  BookaCall() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
}); 
    return (
      <section id='bookacall' className="h-full bg-dd w-full py-10 flex xl:flex-row flex-col justify-center items-center">
        <div ref={ref}  className={`text-2xl xl:text-3xl text-ll text-center  mx-auto px-3 animatable ${inView ? 'shown' : ''}`}>
            <p className="max-w-3xl">If you would like to learn more, you can fill in our Enquiry Form or Book a Call. Our team will be glad to answer your questions and offer any support needed.</p>
        </div>
      </section>
    )
}
