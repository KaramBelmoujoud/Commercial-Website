import React from 'react'
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import Entreheader from '../components/Entreheader';
import Services from '../components/services';
import Prodslide from '../components/prodslide';
import ScrollToTop from 'react-scroll-to-top';
import { ReactComponent as MySVG } from "../logos.svg";





function Home() {
  
  return (
    <div className='overflow-x-hidden overflow-hidden bg-slate-50 scrollbar-hide'>
      <ScrollToTop smooth className='rounded-full flex justify-center items-center shadow-xl' component={<MySVG fill="black"/>}/>
     <div className='flex justify-center content-center '>
       </div>  
          <Entreheader />
          <AboutUs />
          <div className='flex flex-col justify-between items-start mb-9'>
          <span class="w-full h-2 rounded-xl bg-blue-900 ml-5 md:mt-5 sm:mt-7 lg:w-2/3 drop-shadow-2xl"/>
          </div>
          <Prodslide/>
          <div className='flex flex-col justify-between items-end '>
          <span class="w-full h-2 rounded-xl bg-blue-900 mr-5 lg:w-2/3 drop-shadow-2xl"/>
          </div>
          <Services />
          {/* <ContactUs /> */}
          <Footer />
    </div>



  )
}

export default Home