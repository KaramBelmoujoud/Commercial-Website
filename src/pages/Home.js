import React, { useEffect, useState } from 'react'
import { keyframes } from "styled-components";
import  product  from '../assets/data/products'
import pesca from '../assets/pes.png'
import { slideInUp } from 'react-animations'
import AboutUs from '../components/AboutUs';
import Carousel from 'react-material-ui-carousel'
import Footer from '../components/Footer';
import Entreheader from '../components/Entreheader';
import Services from '../components/services';


function Home() {
  const slides = [
    {
      image: require("../assets/image4.jpeg"),
      title: "Denté",
      description: "Denton",
      clickEvent: "sliderClick"
    },
    {
      image: require("../assets/image5.jpeg"),
      title: "Sabre",
      description: "Samta | Sif",
      clickEvent: "sliderClick"
    },
    {
      image: require("../assets/image6.jpeg"),
      title: "Saint pierre",
      description: "Moussa",
      clickEvent: "sliderClick"
    },
    {
      image: require("../assets/image9.jpeg"),
      title: "Denté",
      description: "Denton",
      clickEvent: "sliderClick"
    },
    {
      image: require("../assets/image8.jpeg"),
      title: "Sabre",
      description: "Samta | Sif",
      clickEvent: "sliderClick"
    },
    {
      image: require("../assets/image7.png"),
      title: "Saint pierre",
      description: "Moussa",
      clickEvent: "sliderClick"
    }
  ]
  
  return (
    <div className='overflow-hidden'>
      
     <div className='flex justify-center content-center '>
   <img src={pesca} alt="logo" className="h-64 w-52 absolute  mt-9 " />
    <h1 className='text-6xl absolute text-center ml-8  mt-72'>Pescatitan</h1>
       </div>  
          <Entreheader />
          <AboutUs />
          <Services />
          <div className='left-96 right-96'>
          <Carousel navButtonsAlwaysVisible='true'>
          {
          slides.map((prod) => 
          
        
             
              <div class="max-w-sm rounded overflow-hidden h-auto shadow-lg m-auto">
              <img class="w-full" src={prod.image} alt="Sunset in the mountains"/>
              <div class="px-6 py-4">
                <div class="font-bold text-2xl mb-2">{prod.title}</div>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{prod.description}</span>
              </div>
            </div>
            
            
          
         )
        }         
          </Carousel>

          </div>
          {/* <ContactUs /> */}
          <Footer />
      </div>



  )
}

export default Home