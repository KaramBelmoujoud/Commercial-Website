import React from 'react'
import styled, { keyframes } from "styled-components";
import pesca from '../assets/pes.png'
import { slideInUp } from 'react-animations'
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import Entreheader from '../components/Entreheader';
import { ScrollContainer, ScrollPage} from "react-scroll-motion";
import Showprod from '../components/Showprod';
const slideInUpAnimation = keyframes`${slideInUp}`

  const Slidediv = styled.div`
  animation:1.5s ${slideInUpAnimation};
  `;

function Home() {
  
  return (
    <div className='overflow-hidden'>
     <div className='flex justify-center content-center '>
   <img src={pesca} alt="logo" className="h-64 w-52 absolute  mt-9 " />
    <h1 className='text-6xl absolute text-center ml-8  mt-72'>Pescatitan</h1>
       </div>  
          <Entreheader />
          <AboutUs />
          
          {/* <ContactUs /> */}
          <Footer />
      </div>



  )
}

export default Home