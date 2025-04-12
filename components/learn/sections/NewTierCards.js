import { useInView } from "@/hooks/useInView";

  
export default function NewTierCards(props) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <div class={`px-4 mx-auto max-w-screen-xl lg:px-6 animatable ${inView ? 'shown' : ''}`} ref={ref}>
            <div class="z-0 space-y-8  grid grid-cols-1 gap-5 sm:gap-6 xl:gap-10 lg:space-y-0 items-center lgxl:grid-cols-3 ">
                <div  className="cont w-full h-[28rem] rounded-lg max-w-sm mx-auto">
                    <div className="tier w-full rounded-lg bg-pg ">
                        <div className="w-full">
                            <ul class="mb-8 space-y-4 text-left">
                                    <li class="flex items-center space-x-3">
                                        <svg class="flex-shrink-0 w-5 h-5 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                        <span>Lessons in Canvas & online books & GSuite for Education</span>
                                    </li>
                                    <li class="flex items-center space-x-3">
                                        <svg class="flex-shrink-0 w-5 h-5 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                        <span>Dedicated and experienced subject specialist teachers</span>
                                    </li>
                                    <li class="flex items-center space-x-3">
                                        <svg class="flex-shrink-0 w-5 h-5 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                        <span>Quizzes, assignments and end-of-unit/term tests</span>
                                    </li>
                                    <li class="flex items-center space-x-3">
                                        <svg class="flex-shrink-0 w-5 h-5 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                        <span>Monthly Study Coach check-in</span>
                                    </li>
                                    <li class="flex items-center space-x-3">
                                        <svg class="flex-shrink-0 w-5 h-5 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                        <span>Study Plan and pace-setter for completing the lessons</span>
                                    </li>
                                    <li class="flex items-center space-x-3">
                                        <svg class="flex-shrink-0 w-5 h-5 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                        <span>Personal Mindset Modules & Future Technology Courses</span>
                                    </li>
                                    <li class="flex items-center space-x-3">
                                        <svg class="flex-shrink-0 w-5 h-5 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                        <span>Access to online clubs and activities</span>
                                    </li>
                                    { props.igcse ? 
                                    <li class="flex items-center space-x-3">
                                        <svg class="flex-shrink-0 w-5 h-5 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                        <span>One Mock Examination in subjects of choice (IGCSE 2) </span>
                                    </li>
                                    : props.alevels ?
                                    <li class="flex items-center space-x-3">
                                        <svg class="flex-shrink-0 w-5 h-5 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                        <span>One Mock Examination in subjects of choice</span>
                                    </li>
                                    : <></>
                                    }
                                </ul>
                        </div>
                        <a href={props.priceurl ?? '#calculate'} class="w-max mx-auto px-3 py-2 text-sm text-center bg-white font-bold rounded-full hover:brightness-[0.9] focus:ring-4 focus:outline-none"><p className="text-transparent bg-clip-text bg-pg">Calculate Your Price</p></a>
                    </div>
                    <div className="image max-w-sm mx-auto rounded-lg w-full h-full bg-cover bg-[url(https://images.unsplash.com/photo-1471970471555-19d4b113e9ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80)]">
                    <div class="justify-center mx-auto  text-center rounded-lg shadow text-ll w-full h-full max-w-sm">
                        <div className="flex justify-center items-center flex-col h-full backdrop-brightness-[.45] py-8 px-5 rounded-lg gap-6">
                            <h3 class=" text-2xl font-semibold">Journey 1: <br></br>Autonomous Learning</h3>
                            <div class="flex justify-center items-baseline my-3 pb-3">
                                <span class="mr-2 text-6xl font-extrabold">€{props.tier1}</span>
                                <span class="text-gray-300">/subject annually</span>
                            </div>
                            <p class="font-light  sm:text-lg text-ll mb-2">Designed for independent learners seeking maximum flexibility and self-paced learning. <br></br> &nbsp;</p>
                        </div>    
                    </div>
                </div>
                    <div className="bottombg bg-pg rounded-lg"></div>
                </div>       
                <div  className="cont w-full h-[28rem] rounded-lg max-w-sm mx-auto">
                    <div className="tier w-full rounded-lg bg-pg ">
                        <div className="w-full">
                            <ul class="mb-8 space-y-4 text-left">
                                    <li class="flex items-center space-x-3">
                                        <svg class="flex-shrink-0 w-5 h-5 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                        <span>Everything in Journey 1</span>
                                    </li>
                                    <li class="flex items-center space-x-3">
                                        <svg class="flex-shrink-0 w-5 h-5 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                        <span>Access to recorded precision teaching on critical parts of the curriculum for each subject</span>
                                    </li>
                                    
                                </ul>
                        </div>
                        <a href={props.priceurl ?? '#calculate'} class="w-max mx-auto px-3 py-2 text-sm text-center bg-white font-bold rounded-full hover:brightness-[0.9] focus:ring-4 focus:outline-none"><p className="text-transparent bg-clip-text bg-pg">Calculate Your Price</p></a>
                    </div>
                    <div className="image rounded-lg w-full h-full">
                        <div class=" h-full  items-center justify-center mx-auto max-w-sm text-center rounded-lg shadow text-ll bg-center bg-[url(https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1122&q=80)] bg-cover">
                            <div className="flex justify-center items-center h-full flex-col backdrop-brightness-[.45] py-8 px-5 rounded-lg gap-6">
                                <h3 class="text-2xl font-semibold">Journey 2: <br></br>Recorded Precision Teaching</h3>
                                    <div class="flex justify-center items-baseline my-3 pb-3">
                                        <span class="mr-2 text-6xl font-extrabold">€{props.tier2}</span>
                                        <span class="text-gray-300">/subject annually</span>
                                    </div>
                                <p class="font-light sm:text-lg text-ll pb-2">Designed for independent learners who wish to benefit from the structured guidance of recorded lessons and the possibility for revision.</p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="bottombg bg-pg rounded-lg"></div>
                </div>       
                <div  className="cont w-full h-[28rem] rounded-lg max-w-sm mx-auto">
                    <div className="tier w-full rounded-lg bg-pg ">
                        <div className="w-full">
                            <ul class="mb-8 space-y-4 text-left">
                                    <li class="flex items-center space-x-3">
                                        <svg class="flex-shrink-0 w-5 h-5 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                        <span>Everything in Journey 2</span>
                                    </li>
                                    <li class="flex items-center space-x-3">
                                        <svg class="flex-shrink-0 w-5 h-5 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                        <span>Access to live lessons with precision teaching on critical points of the curriculum for each subject</span>
                                    </li>
                                    
                                </ul>
                        </div>
                        <a href={props.priceurl ?? '#calculate'} class="w-max mx-auto px-3 py-2 text-sm text-center bg-white font-bold rounded-full hover:brightness-[0.9] focus:ring-4 focus:outline-none"><p className="text-transparent bg-clip-text bg-pg">Calculate Your Price</p></a>
                    </div>
                    <div className="image max-w-sm mx-auto rounded-lg w-full h-full bg-cover bg-[url(https://images.unsplash.com/photo-1516383607781-913a19294fd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80)]">
                        <div class="justify-center mx-auto text-center rounded-lg shadow text-ll w-full h-full max-w-sm">
                            <div className="flex justify-center items-center h-full flex-col backdrop-brightness-[.45] py-8 px-5 rounded-lg gap-6">
                                <h3 class="text-2xl font-semibold">Journey 3: <br></br>Live Precision Teaching</h3>
                                <div class="flex justify-center items-baseline my-3 pb-3">
                                    <span class="mr-2 text-6xl font-extrabold">€{props.tier3}</span>
                                    <span class="text-gray-300">/subject annually</span>
                                </div>
                                <p class="font-light sm:text-lg text-ll mb-2">Designed for independent learners who wish to benefit from real-time interaction and personalised support of critical parts of the curriculum.</p>
                            </div>
                        </div>
                    </div> 
                    <div className="bottombg bg-pg rounded-lg"></div>
                </div>       
            </div>
    </div>
    )
}