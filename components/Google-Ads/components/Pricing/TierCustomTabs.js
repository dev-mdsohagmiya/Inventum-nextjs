import { useState } from "react";
import { useInView } from "../../../../hooks/useInView";
import TierCards from "./TierCards";
import { Modal } from '@mui/base/Modal';
import * as React from 'react';
import PropTypes from 'prop-types';
import { Box, styled } from '@mui/system';
import { useSpring, animated } from '@react-spring/web';

const BackdropUnstyled = React.forwardRef((props, ref) => {
    const { open, ...other } = props;
    return <Fade ref={ref} in={open} {...other} />;
  });
  
  BackdropUnstyled.propTypes = {
    open: PropTypes.bool.isRequired,
  };
  
  const StyledModal = styled(Modal)`
    position: fixed;
    z-index: 1300;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  
  const Backdrop = styled(BackdropUnstyled)`
    z-index: -1;
    position: fixed;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-tap-highlight-color: transparent;
  `;
  
  const Fade = React.forwardRef(function Fade(props, ref) {
      const { in: open, children = <div />, onEnter, onExited, ...other } = props;
      const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
          if (open && onEnter) {
            onEnter(null, true);
          }
        },
        onRest: () => {
          if (!open && onExited) {
            onExited(null, true);
          }
        },
      });
    
      return (
        <animated.div ref={ref} style={style} {...other}>
          {children}
        </animated.div>
      );
    });
    
  
  Fade.propTypes = {
    children: PropTypes.element.isRequired,
    in: PropTypes.bool,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
  };
export default function TierCustomTabs(props) {
    const [openTab, setOpenTab] = useState(1);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    const [modal1IsOpen, setModal1IsOpen] = useState(false);

    return (
        <section className={`bg-dl h-max py-28`}>
           
            <div className={`mx-auto text-center ${props.notext ? '' : 'mb-8 lg:mb-12'}`}>
                <h2 className="text-7xl text-center py-5 font-bold bg-clip-text text-transparent bg-pg w-max mx-auto">Journeys</h2>
                {props.notext ? <></>:<p className="mb-5 font-light sm:text-xl text-ll max-w-7xl mx-auto px-5">People are different. Nobody learns exactly the same. To meet individual needs, Inventum International offers three different learning journeys to provide for different learning styles. While all our learning journeys include a comprehensive base to enable the successful development of skills and knowledge, Journey 2 also includes recorded lessons. Journey 3 makes provision for live lessons. If you are unsure which journey to choose, try out our <a href='/middleschool#pickmypackage' className="group text-transparent bg-clip-text bg-pg transition-all duration-300 ease-in-out"><span className="bg-left-bottom bg-gradient-to-r from-pink-500 to-purple-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">Pick my Package</span></a> quiz or 
                <button onClick={() => {setModal1IsOpen(true)}} className='ml-1 group text-transparent bg-clip-text bg-pg transition-all duration-300 ease-in-out'><span className="bg-left-bottom bg-gradient-to-r from-pink-500 to-purple-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-ou"> Book a Call</span></button> with our Admissions Team, who can help you further!</p>}
            </div>
            <div className="max-w-2xl mx-auto">
    
                <div className={"mb-4 sm:w-max w-screen mx-auto "}>
                    <ul className="flex -mb-px flex-wrap justify-center">
                        <li className="mr-2" >
                            <button 
                            onClick={e => {e.preventDefault(); setOpenTab(1);}} 
                            className={(openTab === 1 ? 'text-pink-500 border-pink-500 ' : 'border-transparent  hover:border-gray-400  hover:text-gray-400 ') 
                            + "inline-block rounded-t-lg py-4 px-4 text-sm font-medium text-center border-b-2 text-ll"}
                            >Middleschool</button>
                        </li>
                        <li className="mr-2" >
                            <button 
                            onClick={e => {e.preventDefault(); setOpenTab(2);}} 
                            className={(openTab === 2 ? 'text-pink-500 border-pink-500 ' : 'border-transparent  hover:border-gray-400  hover:text-gray-400 ') 
                            + "inline-block rounded-t-lg py-4 px-4 text-sm font-medium text-center border-b-2 text-ll"}
                            >IGCSE</button>
                        </li>
                        <li className="mr-2" >
                            <button 
                            onClick={e => {e.preventDefault(); setOpenTab(3);}} 
                            className={(openTab === 3 ? 'text-pink-500 border-pink-500 ' : 'border-transparent  hover:border-gray-400  hover:text-gray-400 ') 
                            + "inline-block rounded-t-lg py-4 px-4 text-sm font-medium text-center border-b-2 text-ll"}
                            >A-levels</button>
                        </li>
                    </ul>
                </div> 
            </div>
            <div className={(openTab === 1 ? ' ' : 'hidden ') + ''}>
                <TierCards notext={props.notext ? true : null} middleschool={true} tier1='€630' tier2='€760' tier3='€1,190' />
            </div>
            <div className={(openTab === 2 ? ' ' : 'hidden ') + ''}>
                <TierCards notext={props.notext ? true : null} tier1='€650' tier2='€790' tier3='€1,220' />
            </div>
            <div className={(openTab === 3 ? ' ' : 'hidden ') + ''}>
                <TierCards notext={props.notext ? true : null} tier1='€680' tier2='€830' tier3='€1,260' />
            </div>
            <StyledModal id='1' closeAfterTransition slots={{ backdrop: Backdrop }} open={modal1IsOpen} onClose={()=> {setModal1IsOpen(false); }} className={` overflow-y-auto`}>
                <Fade in={modal1IsOpen}>
                    <Box className='flex justify-center items-center'>
                    <div className='h-[80vh] lg:h-[100vh] lg:w-[70vw] w-[99vw]'>
                        <iframe className='' src="https://calendly.com/inventuminternational/30min" width={'100%'} height={'100%'} title="Admissions Form"></iframe>
                    </div>    
                    </Box>
                </Fade>
            </StyledModal>
        </section>
    )
}