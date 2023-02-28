import React from 'react'
import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
import pesca from '../assets/pesca.png'
import prem from '../assets/premium.png'
import { slideInUp } from 'react-animations'
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import Entreheader from '../components/Entreheader';
import { ScrollContainer, ScrollPage} from "react-scroll-motion";
import Showprod from '../components/Showprod';
import Example from './Nav';
import ScrollToTop from "react-scroll-to-top";
 


function Products() {
     const [hidobject, sethide] = useState(false);
      const changeNavbarColor = () =>{
    if(window.scrollY >= 500){
      sethide(true);
    }
    else{
      sethide(false);
    }
 };
 window.addEventListener('scroll', changeNavbarColor);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960
    );
  }, []);
    return (
        
        <div className='relative border-b-4 '>
            <ScrollToTop smooth className='rounded-full' component={<p style={{ color: "blue" }}>UP</p>}/>
        <Example/>
            <div className='bg-cover bg-no-repeat h-96 w-screen bg-[url("/src/assets/Sable.png")]'>
                    <div className='flex flex-col items-center justify-center h-full'>
      <div className='text-center top-10'>
                        <h1 className='text-6xl text-blue-400'>We provide Premium quality fish</h1>
                        <h2 className='text-2xl text-gray-500'>We are the best in the market</h2>
      </div>
                </div>
                <div className='h-20 bg-gray-200 flex flex-col items-center justify-center'>
                          <div className='text-center'>
        <h1 className='text-4xl text-gray-500'>Products</h1>
      </div>
                </div>
        </div>
                {window.innerWidth > 768 ? (<div>
      <div className='top-10 left-16 absolute'>
        <img src={pesca} alt="logo" className="scale-75 invisible lg:visible" />
                </div> 
                <div className='top-20 right-28 absolute'>
          <img src={prem} alt="logo" className=" invisible lg:visible" />          
                </div>
            </div>) : (null)}
            <Showprod />
            
        </div>

    )
}

export default Products