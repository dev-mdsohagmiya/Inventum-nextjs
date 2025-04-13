
export default function PricingHero() {
    return (
        <div className='md:bg-none md:bg-dl bg-cover bg-right-center-half bg-[url(https://source.unsplash.com/random/1800x2400)] '>
        <div className="flex md:flex-row-reverse flex-col items-center w-full md:pl-5 ">
          <img className="ovalcut md:brightness-100 md:w-1/3 md:h-screen h-0 object-cover object-right-center-half" src={'https://source.unsplash.com/random/1800x2400'} alt=''/>
          <div className='w-full h-full text-center  md:mx-10 overflow-y-auto overflow-x-clip backdrop-brightness-50 md:backdrop-brightness-100'>
                    <h1 className="pt-24 text-6xl py-10 font-bold bg-clip-text text-transparent bg-pg">Admissions</h1>
                    <div className="p-5 text-gray-200 text-lg">Admission to Inventum International ensures that your child receives an innovative, high-quality, globally recognised education that suits their learning style and personal situation. Inventum International also provides an added unique focus on future technologies, well-being and mindset development ensuring that our learners are academically strong, open-minded, confident and future-ready. To join our Inventum community, reserve your place now!

                    </div>
                </div>
            </div>
        </div>
        )
}