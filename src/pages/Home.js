import React from 'react'
import { keyframes } from "styled-components";
import  product  from '../assets/data/products'
import pesca from '../assets/pes.png'
import { slideInUp } from 'react-animations'
import AboutUs from '../components/AboutUs';

import Footer from '../components/Footer';
import Entreheader from '../components/Entreheader';
import Services from '../components/services';
import Prodslide from '../components/prodslide';




function Home() {
  
  return (
    <div className='overflow-x-hidden overflow-hidden bg-slate-50 scrollbar-hide'>
     <div className='flex justify-center content-center '>
    <h1 className='text-6xl absolute text-center ml-8  mt-72'>Pescatitan</h1>
       </div>  
          <Entreheader />
          <AboutUs />
          <div className='flex flex-col justify-between items-start  mb-9'>
          <span class="w-full h-2 rounded-xl bg-blue-900 ml-5 lg:w-2/3 "/>
          </div>
          <Prodslide/>
          <div className='flex flex-col justify-between items-end '>
          <span class="w-full h-2 rounded-xl bg-blue-900 mr-5 lg:w-2/3 "/>
          </div>
          <Services />
          {/* <ContactUs /> */}
          <Footer />
      </div>



  )
}

export default Home