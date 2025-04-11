"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import 'react-tooltip/dist/react-tooltip.css'
import CallButton from '@/hooks/CallButton'
import { useInView } from '@/hooks/useInView'

library.add(fab, faXTwitter)

export default function ContactUs() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.4,
    }); 

    return(
        <div className='w-full bg-[#111827]'>
            <div ref={ref} className={`max-lg:grid max-lg:grid-cols-4 md:grid-rows-1 max-lg:grid-rows-2 lg:flex lg:justify-center py-5 gap-4 text-lg font-bold animate ${inView ? 'shown-2' : ''}`}>
                <a
                    data-tooltip-id="enquiry" 
                    data-tooltip-content="Any questions?"
                    className='my-button text-end md:col-span-1 col-span-2 hover:scale-[1.05] transition-all ease-in-out bg-pg px-2 rounded-xl items-center py-2 justify-end w-max ml-auto lg:ml-0' 
                    href="https://tally.so#tally-open=wgdboD&tally-overlay=1&tally-emoji-text=👋&tally-emoji-animation=wave"
                    >
                    <span className="text-ll my-auto">Ask us a question!</span>
                </a>
                <div className='text-ll md:text-3xl text-lg gap-10 flex justify-center max-lg:w-full md:col-span-2 md:row-auto row-start-2 col-span-4'>
                    <a className='h-max hover:scale-105' href='https://www.facebook.com/profile.php?id=100090229178312' target={'_blank'} rel='noreferrer'><FontAwesomeIcon icon={['fab', 'facebook']} size='xl' /></a>
                    <a className='h-max hover:scale-105' href='https://twitter.com/InventumOnline' target={'_blank'} rel='noreferrer'><FontAwesomeIcon icon={faXTwitter} size='xl' /></a>
                    <a className='h-max hover:scale-105' href='https://www.instagram.com/inventum_international/?next=%2' target={'_blank'} rel='noreferrer'><FontAwesomeIcon icon={['fab', 'instagram']} size='xl' /></a>
                    <a className='h-max hover:scale-105' href='https://www.linkedin.com/company/inventum-international-online-school/posts/?feedView=all&viewAsMember=true' target={'_blank'} rel='noreferrer'><FontAwesomeIcon icon={['fab', 'linkedin']} size='xl' /></a>
                    <a className='h-max hover:scale-105' href='https://www.tiktok.com/@inventuminternational' target={'_blank'} rel='noreferrer'><FontAwesomeIcon icon={['fab', 'tiktok']} size='xl' /></a>
                </div>
                <CallButton utmSource="Homecontact" />            
          </div>
        </div>
        
    )
}