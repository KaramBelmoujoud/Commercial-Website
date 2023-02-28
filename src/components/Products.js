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
import Example from './Nav';

function Products(){
    return (
        <div className='relative  border-blue-500 border-b-4 '>
        <Example/>
        <div className='bg-cover bg-no-repeat h-96 w-screen bg-[url("/src/assets/Sable.png")]'></div>
                {window.innerWidth > 768 ? (
      <div className='top-4 left-14 absolute'>
        <img src={pesca} alt="logo" className="h-28 w-20 md:fixed invisible lg:visible" />
                </div>) : (null)}
        </div>

    )
}

export default Products