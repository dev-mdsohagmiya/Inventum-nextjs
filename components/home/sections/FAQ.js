"use client"
import Link from "next/link";
import { createContext, useContext, useEffect, useRef, useState } from "react"
import { ChevronDown } from "react-feather";


const AccordianContext = createContext()

function Accordian({ children, value, onChange, ...props }) {
    const [selected, setSelected] = useState(value);

    useEffect(() => {
        onChange?.(selected)
    }, [selected])

    return (
        <ul {...props}>
            <AccordianContext.Provider value={{ selected, setSelected }}>
                {children}
            </AccordianContext.Provider>
        </ul>
    )
}


function AccordianItem({ children, value, index, trigger,selectedData, ...props }) {
    const { selected, setSelected } = useContext(AccordianContext);

    const open = selected === value;
    const ref = useRef(null)    

    return (
        <li className="" {...props}>
            <div 
            className="flex justify-between items-center py-2.5"
            role="button"
            onClick={() => setSelected(open ? null : value)}
            >
                <div className="flex items-center space-x-3">
                    <p className="text-xl md:text-2xl font-bold">{trigger}</p>
                </div>
                <ChevronDown size={16} className={`transition-transform ${open ? "rotate-180" : ""}`} />
            </div>
            <div className="overflow-y-hidden transition-all duration-300 ease-in-out"
                style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
            >
                <div className="pt-2 p-4" ref={ref}>
                    {children}
                </div>
            </div>
        </li>
    )
}
const faq = [
    {
        title: "Are the exams online?",
        text: "All the tests and exams in the Upper Primary (Year 5 & Year 6) and Lower Secondary (Year 7-Year 9) are internal Inventum exams taken online. For the second year of the IGCSE program (Year 11), AS (Year 12), and A-Levels (Year 13), the exams have to be taken in a physical Cambridge exam centre. You can find the list of exam centres worldwide here."
    },
    {
        title: "Do I get a certificate?",
        text: "For the Upper Primary (Year 5 & Year 6) and Lower Secondary (Year 7-Year 9), you will receive a certificate from Inventum when you complete a year level. Cambridge will issue your certificate directly for IGCSE, AS, and A-Levels."
    },
    {
        title: "Is the certificate recognised?",
        text: "Successful completion of A-Levels will give you access to universities around the world. This is the most recognised secondary school certificate globally by universities and employers."
    },
    {
        title: "Can I study two years in one year, i.e., fast track, and if yes, do I pay for one or two years?",
        text: "In principle, this is possible, but it will require your time and dedication. You will still pay the fees for two years, as you will have access to 121 teaching, live lessons, etc., for both years."
    },
    {
        title: "What is the study schedule?",
        text: "You decide on the study schedule based on your preferences and timetable. Your dedicated study coach can help you make a schedule that suits your circumstances. When choosing Journey 3, you also commit to the live lessons schedule."
    },
    {
        title: "How many live lessons are there a week?",
        text: "We use precision teaching, meaning the live lessons cover only the critical and most difficult parts of the curriculum. On average, there are two live lessons a week per subject."
    },
    {
        title: "How much time do I typically have to spend on studying per day?",
        text: "This will depend on yourself, the number of chosen subjects and the year level, but on average, a full-time Learner spends approximately four hours a day studying."
    },
    {
        title: "Are there mandatory subjects?",
        text: "The Upper Primary (Year 5 & Year 6) and Lower Secondary (Year 7- Year 9) have five mandatory subjects: English, Maths, Science, History and Geography. There are no mandatory subjects for IGCSE (Years 10&11) and A-Level programs (Years 12&13), but you choose them based on your interests and future plans."
    },
    {
        title: "How many subjects do I have to take?",
        text: "For the Upper Primary (Year 5 & Year 6), Lower Secondary (Year 7-Year 9), and IGCSEs (Years 10&11), you will be required, as a full-time student, to take a minimum of five subjects and for the A-Level program (Years 12&13) a minimum of three subjects."
    },
    {
        title: "How do I register?",
        text: "You can complete the application form on our website by clicking the “Apply” button."
    },
    {
        title: "I have sent the application form, what next?",
        text: "Once we receive your application, we will contact you within 48 hours to arrange an onboarding call. During this call, you will be introduced to all our platforms, handbooks, and practices and assigned a dedicated study coach. After this, you are ready to start!"
    },
    {
        title: "What are the requirements to be accepted to Inventum?",
        text: "We are a non-selective school and will therefore not require a certain grade average, but we will assess every case individually. Learners need, however, to be fluent in English as this is the language of instruction."
    },
    {
        title: "At what grade will my child be placed at?",
        text: "We look at the Learner’s age and previous schooling history to determine the best starting point for them at Inventum. If there are any doubts, we recommend the Learner take a CAT4 test."
    },
    {
        title: "How is Inventum different from other online schools?",
        text: "Our high flexibility learning model, combined with the level of support Learners can choose from, is a unique feature among online schools. Together with the Learner, we build the learning journey that caters to their individual needs. By following our mindset modules, we ensure they are ready for the future by educating them on emerging technologies and ensuring they grow as individuals."
    },
    {
        title: "Is Inventum recognised as a school in all the countries?",
        text: "Cambridge certificate is recognised globally by universities. We do not, however, have agreements with local educational authorities, so it is the parent’s responsibility to check the rules and possible restrictions for homeschooling or online schooling in their home country."
    },
    {
        title: "What is the difference between IB & A-Levels?",
        text: "https://inventumonline.com/ib-vs-alevels"
    }
];




export default function FAQ() {
    function formatTextWithLink(text) {
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        
        // Check if the text contains a URL
        if (urlRegex.test(text)) {
            const parts = text.split(urlRegex);
    
            // Map through the parts and format URLs, returning the rest as plain text
            return parts.map((part, index) => {
                if (urlRegex.test(part)) {
                    return (
                        <Link  href={part} key={index} rel="noopener noreferrer" className='group text-transparent bg-clip-text bg-pg transition-all duration-300 ease-in-out'>
                            <span className="bg-left-bottom bg-gradient-to-r from-pink-500 to-purple-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">Go to this page for more information</span>     
                        </Link>
                    );
                }
                return part;
            });
        }
        
        // If no URL is found, return the original text
        return text;
    }
    

    return (
        <div className="bg-dl text-white py-20">
        <div className="max-w-5xl mx-auto  mt-16 ">
            <div className="px-10">
                <h2 className="text-3xl md:text-5xl text-transparent bg-pg bg-clip-text font-bold">Frequently Asked Questions.</h2>
                <div className='flex flex-col justify-center py-20'>
                    <Accordian className="space-y-3">
                        {faq.map((item, index) => (
                            <AccordianItem trigger={item.title} index={index+1} className="border-b pb-4" value={`${index+1}`}>
                                {formatTextWithLink(item.text)}
                            </AccordianItem>
                        ))}
                    </Accordian>
                </div>
            </div>
        </div>
        </div>

    )
}