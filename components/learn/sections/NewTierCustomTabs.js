"use client"
import { useState } from "react";
import NewTierCards from "./NewTierCards";
import { Modal } from '@mui/base/Modal';
import * as React from 'react';
import PropTypes from 'prop-types';
import { Box, styled } from '@mui/system';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from "@/hooks/useInView";

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
export default function NewTierCustomTabs(props) {
    const [openTab, setOpenTab] = useState(0);
    const [payment, setPayment] = useState(0);
    const [displayPrice, setDisplayPrice] = useState([695, 800, 1250]);

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    const [modal1IsOpen, setModal1IsOpen] = useState(false);

    React.useEffect(() => {
      const price = [
        [ // Upper Primary & Middle School
          [695, 800, 1250], // 1 Payment
          [730, 840, 1310], // 3 Payments
          [745, 855, 1335], // 6 Payments
          [765, 880, 1375], // 10 Payments
        ],
        [ // IGCSE
          [715, 830, 1280], // 1 Payment
          [750, 870, 1345], // 3 Payments
          [765, 890, 1370], // 6 Payments
          [785, 910, 1410], // 10 Payments
        ],
        [ // A-levels
          [750, 870, 1325], // 1 Payment
          [790, 915, 1390], // 3 Payments
          [805, 930, 1420], // 6 Payments
          [825, 960, 1460], // 10 Payments
        ],
      ]
       setDisplayPrice(price[openTab][payment]);
    } , [openTab, payment]);

    return (
        <section className={`bg-dl h-max py-28`}>
           
            <div className={`mx-auto text-center ${props.notext ? '' : 'mb-8 lg:mb-12'}`}>
                <h2 className="text-6xl text-center py-5 font-bold bg-clip-text text-transparent bg-pg flex justify-center">Our Learning Journeys</h2>
                {props.notext ? <></>:<p className="my-5 font-light sm:text-xl text-ll max-w-7xl mx-auto px-5">People are different. Nobody learns exactly the same. To meet individual needs, Inventum International offers three different learning journeys to provide for different learning styles. While all our learning journeys include a comprehensive base to enable the successful development of skills and knowledge, Journey 2 also includes recorded lessons. Journey 3 makes provision for live lessons. If you are unsure which journey to choose
                <button onClick={() => {setModal1IsOpen(true)}} className='ml-1 group text-transparent bg-clip-text bg-pg transition-all duration-300 ease-in-out'><span className="bg-left-bottom bg-gradient-to-r from-pink-500 to-purple-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-ou"> Book a Call</span></button> with our Admissions Team who can help you further!</p>}
            </div>
            <div className="max-w-2xl mx-auto">
    
                <div className={"mb-4 sm:w-max w-screen mx-auto "}>
                    <ul className="flex -mb-px flex-wrap justify-center">
                        <li className="mr-2" >
                            <button 
                            onClick={e => {e.preventDefault(); setOpenTab(0);}} 
                            className={(openTab === 0 ? 'text-pink-500 border-pink-500 ' : 'border-transparent  hover:border-gray-400  hover:text-gray-400 ') 
                            + "inline-block rounded-t-lg py-4 px-4 text-sm font-medium text-center border-b-2 text-ll"}
                            >Upper Primary & Middle school</button>
                        </li>
                        <li className="mr-2" >
                            <button 
                            onClick={e => {e.preventDefault(); setOpenTab(1);}} 
                            className={(openTab === 1 ? 'text-pink-500 border-pink-500 ' : 'border-transparent  hover:border-gray-400  hover:text-gray-400 ') 
                            + "inline-block rounded-t-lg py-4 px-4 text-sm font-medium text-center border-b-2 text-ll"}
                            >IGCSE</button>
                        </li>
                        <li className="mr-2" >
                            <button 
                            onClick={e => {e.preventDefault(); setOpenTab(2);}} 
                            className={(openTab === 2 ? 'text-pink-500 border-pink-500 ' : 'border-transparent  hover:border-gray-400  hover:text-gray-400 ') 
                            + "inline-block rounded-t-lg py-4 px-4 text-sm font-medium text-center border-b-2 text-ll"}
                            >A-levels</button>
                        </li>
                    </ul>
                </div> 
            </div>

            <div className="max-w-2xl mx-auto">
              <div className={"mb-4 sm:w-max w-screen mx-auto "}>
                <ul className="flex -mb-px flex-wrap justify-center">
                  <li className="mr-2">
                    <button 
                    onClick={e => {e.preventDefault(); setPayment(0);}} 
                    className={(payment === 0 ? 'text-pink-500 border-pink-500 ' : 'border-transparent  hover:border-gray-400  hover:text-gray-400 ') 
                    + "inline-block rounded-full py-2 px-4 text-sm font-medium text-center border-b-2 text-ll"}
                    >1 Payment</button>
                  </li>
                  <li className="mr-2">
                    <button 
                    onClick={e => {e.preventDefault(); setPayment(1);}} 
                    className={(payment === 1 ? 'text-pink-500 border-pink-500 ' : 'border-transparent  hover:border-gray-400  hover:text-gray-400 ') 
                    + "inline-block rounded-full py-2 px-4 text-sm font-medium text-center border-b-2 text-ll"}
                    >3 Payments</button>
                  </li>
                  <li className="mr-2">
                    <button 
                    onClick={e => {e.preventDefault(); setPayment(2);}} 
                    className={(payment === 2 ? 'text-pink-500 border-pink-500 ' : 'border-transparent  hover:border-gray-400  hover:text-gray-400 ') 
                    + "inline-block rounded-full py-2 px-4 text-sm font-medium text-center border-b-2 text-ll"}
                    >6 Payments</button>
                  </li>
                  <li className="mr-2">
                    <button 
                    onClick={e => {e.preventDefault(); setPayment(3);}} 
                    className={(payment === 3 ? 'text-pink-500 border-pink-500 ' : 'border-transparent  hover:border-gray-400  hover:text-gray-400 ') 
                    + "inline-block rounded-full py-2 px-4 text-sm font-medium text-center border-b-2 text-ll"}
                    >10 Payments</button>
                  </li>
                </ul>
              </div>
            </div>
            <div className={(openTab === 0 ? ' ' : 'hidden ') + ''}>
                <NewTierCards  tier1={displayPrice[0]} tier2={displayPrice[1]} tier3={displayPrice[2]} notext={props.notext ? true : null} />
            </div>
            <div className={(openTab === 1 ? ' ' : 'hidden ') + ''}>
                <NewTierCards  tier1={displayPrice[0]} tier2={displayPrice[1]} tier3={displayPrice[2]} notext={props.notext ? true : null} igcse={true} />
            </div>
            <div className={(openTab === 2 ? ' ' : 'hidden ') + ''}>
                <NewTierCards tier1={displayPrice[0]} tier2={displayPrice[1]} tier3={displayPrice[2]} notext={props.notext ? true : null} alevels={true} />
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