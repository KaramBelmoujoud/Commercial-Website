import React from 'react'
import pesca from '../assets/pesca.png'
import prem from '../assets/premium.png'
import Footer from '../components/Footer';
import Showprod from '../components/Showprod';
import Example from './Nav';
import ScrollToTop from "react-scroll-to-top";
import { ReactComponent as MySVG } from "../logos.svg";
import { useTranslation } from 'react-i18next';
 


function Products() {
  const { t } = useTranslation();
    return (
        
        <div className='relative border-b-4 overflow-x-hidden'>
            <ScrollToTop smooth className='rounded-full flex justify-center items-center shadow-xl' component={<MySVG fill="black"/>}/>
        <Example/>
            <div className='bg-cover bg-no-repeat mt-12 lg:mt-0 h-96 w-screen bg-[url("/src/assets/Sable.png")]'>
                    <div className='flex flex-col items-center justify-center h-full'>
      <div className='text-center top-10'>
              <h1 className='text-6xl text-blue-400'>{t('We')}</h1>
                        <h2 className='text-2xl text-gray-500'>{t('Best')}</h2>
      </div>
                </div>
                <div className='h-20 bg-gray-200 flex flex-col items-center justify-center'>
                          <div className='text-center'>
              <h1 className='text-4xl text-gray-500'>{t('product')}</h1>
      </div>
                </div>
        </div>
                {window.innerWidth > 768 ? (<div>
      <div className='top-10 left-3 absolute'>
        <img src={pesca} alt="logo" className="scale-50 invisible sm:visible" />
          </div> 

                <div className='top-20 right-28 absolute'>
          <img src={prem} alt="logo" className="scale-50 invisible 2xl:visible" />          
                </div>
            </div>) : (null)}
            <Showprod />
            <Footer />
        </div>

    )
}

export default Products