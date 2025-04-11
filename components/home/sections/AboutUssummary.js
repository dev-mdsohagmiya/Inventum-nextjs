"use client"
import { useInView } from '@/hooks/useInView';
import Tilt from 'react-parallax-tilt'

export default function AboutUssummary() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.4,
    }); 
    return(
        
    <section className="h-min bg-dd">
        <h1 ref={ref} className={`text-5xl md:text-7xl text-center w-max mx-auto py-10 font-bold bg-clip-text text-transparent bg-pg animatable ${inView ? 'shown' : ''}`}>Our Story</h1>
        <div  className={`md:mx-20 py-10 mx-auto animatable ${inView ? 'right' : ''}`}>
            <p className='md:px-20 p-5 bg-dl rounded-xl text-center text-ll text-lg h-max mt-10'>
                At Inventum International, we are passionate about shaping the future of education. Our mission is to offer affordable, cutting edge, and globally recognised online learning opportunities to learners from all over the world, and from all walks of life. We are committed to preparing our learners for the rapidly evolving modern world, and the world of tomorrow, by equipping them with the knowledge, skills, values and mindsets they need to succeed.  Our comprehensive online programme not only ensures that our learners receive the grades they require for university admission, but we also cultivate critical thinking, creativity, problem-solving abilities, while developing a global outlook. We take pride in our innovative and inclusive community, and we celebrate diversity. Our career-ready programme ensures collaboration among learners from diverse backgrounds and all corners of the world, enabling them to develop modern skills for tomorrow’s world. Ready to give your child the best possible start to their future? Join us at Inventum International Online School and start your journey of self-discovery and growth, innovating together, anywhere, anytime.
                </p>
        </div>


    </section>
    )
}