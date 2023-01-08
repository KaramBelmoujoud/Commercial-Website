import React from 'react'
import Example from '../components/Nav'
import landing from '../assets/sands.jpg'
import { Link } from 'react-router-dom'
import styled, { keyframes } from "styled-components";
import pesca from '../assets/pes.png'
import { slideInUp } from 'react-animations'
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
const slideInUpAnimation = keyframes`${slideInUp}`
  const Slidediv = styled.div`
  animation:1.5s ${slideInUpAnimation};
  `;

function Home() {
  
  return (
    <div className='overflow-hidden '>
    <div className='flex justify-center content-center  '>
    <img src={pesca} alt="logo" className="h-64 w-52 absolute  mt-3" />
    <h1 className='text-6xl absolute text-center ml-8  mt-72'>Pescatitan</h1>
    </div>
    <Slidediv>
        <div className='relative  border-blue-500 border-b-4 '>
          <Example />
          <div className='flex flex-col items-center   justify-center h-screen w-screen bg-[url("/src/assets/sands.jpg")]'>
            <div className='text-center'>
              <h1 className='text-6xl '>Pescatitan</h1>
              <h2 className='text-2xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</h2>
              <Link to='#contact'>
                <button className= ' w-2/4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl mt-4'>
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
          {window.innerWidth > 768 ? (
            <div className='top-4 left-14 absolute'>
              <img src={pesca} alt="logo" className="h-28 w-20" />
            </div>) : (null)}
        </div>
      </Slidediv>
      <AboutUs />
      <ContactUs id="contact" />
   <Footer/>
      </div>



  )
}

export default Home