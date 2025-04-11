import CallButton from '@/hooks/CallButton';
import logoicon from './logo-icon.svg';

export default function  Hero() {

    return (
      <section id='home' className='lg:min-h-screen bg-top bg-cover bg-[url(https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/website%2Fhero.webp?alt=media&token=92a27224-9af3-4755-b0f9-a83eb1faab8e&_gl=1*1lizvi8*_ga*MTc0OTc0OTAxLjE2NzQyOTQxMzY.*_ga_CW55HF8NVT*MTY5ODQ4OTcyNS41NC4xLjE2OTg0OTAwMDAuNTUuMC4w)]'> 
        <div className='backdrop-brightness-[.6] h-full w-full lg:min-h-screen  py-24 lg:py-0'>
          <div className=''>
            <div className='flex-col flex items-center lg:pl-[2%] 2xl:pl-[5%] gap-0 lg:w-max w-full justify-center lg:min-h-screen'>
                <div className='flex flex-col lg:flex-row items-center justify-center w-full gap-5'>
                  <img src={logoicon} alt="" className='h-52'/>
                <h1 className="font-bold text-center lg:text-start text-5xl lg:text-7xl  bg-clip-text text-transparent bg-pg whitespace-normal w-full ">
                  Innovative learning <br className='hidden lg:block'></br> <span className='font-bold text-5xl lg:text-7xl text-ll'>anywhere, anytime</span>
                </h1>
                </div>
                <p className='text-white text-lg lg:text-xl max-w-3xl text-center my-2 mx-1'>At Inventum, you can study an accredited Cambridge Curriculum for IGCSE's and A-Levels & Pearson Curriculum from Year 5 to Year 9 through our digital learning platform. With the support from our Subject Teachers and Study Coaches, you will be able to learn from any location at your own pace with maximum flexibility.</p>
               <CallButton />
            </div>
          </div>
        </div>
      </section>
    )
}
