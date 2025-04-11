"use client"
import TestimonialCards from "./TestimonialCards";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";

export default function Testimonials() { 
    
    const options = {
        swipeable: true,
        emulateTouch: true,
        useKeyboardArrows:true,
        infiniteLoop: true,
        showStatus: false,
        autoPlay: true,
        interval: 2800,
        centerMode: true,
        centerSlidePercentage: 45,
        showArrows: true,
        onClickItem: {
        },
        showThumbs:false
        
    }
    
    return (
        <section className='h-max bg-dl '>
            <h1 className="text-5xl md:text-7xl text-center mx-auto py-10 font-bold bg-clip-text text-transparent bg-pg w-max">Testimonials</h1>
            <div className='w-max mx-auto text-ll '>
                <Carousel {...options} className='md:w-[70vw] w-screen'>
                    <TestimonialCards className='' name='Bob Willinks' quote='al;skfd jlaskjd flkasj fdlkjaslkajs flkjadslk fjlksadjf lkjas dfjsdaf lkjasd flkjlasdk fjalsj; fklasjf lkajsfd lksjad flkjsadflkjasldkfj lasjk!' position='Student'></TestimonialCards>
                    <TestimonialCards className='' name='Bob Willinks' quote='al;skfd jlaskjd flkasj fdlkjaslkajs flkjadslk fjlksadjf lkjas dfjsdaf lkjasd flkjlasdk fjalsj; fklasjf lkajsfd lksjad flkjsadflkjasldkfj lasjk!' position='Parent'></TestimonialCards>
                    <TestimonialCards className='' name='Bob Willinks' quote='al;skfd jlaskjd flkasj fdlkjaslkajs flkjadslk fjlksadjf lkjas dfjsdaf lkjasd flkjlasdk fjalsj; fklasjf lkajsfd lksjad flkjsadflkjasldkfj lasjk!' position='Parent'></TestimonialCards>
                    <TestimonialCards className='' name='Bob Willinks' quote='al;skfd jlaskjd flkasj fdlkjaslkajs flkjadslk fjlksadjf lkjas dfjsdaf lkjasd flkjlasdk fjalsj; fklasjf lkajsfd lksjad flkjsadflkjasldkfj lasjk!' position='Parent'></TestimonialCards>
                </Carousel>
            </div>
        </section>
    )
}
