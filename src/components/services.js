import React from 'react'
import  floka  from '../assets/s1.png'
import  houtat  from '../assets/s2.png'
import  camion  from '../assets/s4.png'
import ididat  from '../assets/s5.png'
import { useTranslation } from 'react-i18next';


function Services() {
    const { t } = useTranslation();
  return (
    <div className='mt-10'>
      <h1 className="text-4xl font-serif text-center"  >{t('sv')}</h1>
    <div className='bg-cover lg:bg-no-repeat h-auto lg:h-screen shadow-2xl bg-[url("/src/assets/Untitled.png")] m-2 lg:m-28 mt-10 p-2 lg:p-24'>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-5 lg:gap-10 lg:h-full '>
        <div className='group flex flex-col bg-white shadow-lg rounded-lg h-40 lg:h-auto lg:p-8 hover:shadow-lg hover:shadow-blue-700/50 transition ease-linear delay-200'>
            <img src={floka}  className='lg:h-16 lg:w-16  m-auto group-hover:hidden lg:group-hover:block'/>
            <div className='m-auto lg:p-14 font-serif text-xs lg:text-base text-center lg:block hidden group-hover:block'>
        <p> {t('flouka')}</p>
        </div>

        </div>
        <div className='group flex flex-col bg-white shadow-lg rounded-lg h-40 lg:h-auto lg:p-8 hover:shadow-lg hover:shadow-blue-700/50 transition ease-linear delay-200'>
        <img src={houtat}  className='lg:h-16 lg:w-16 m-auto group-hover:hidden lg:group-hover:block'/>
        <div className='m-auto lg:p-14 font-serif text-xs lg:text-base text-center lg:block hidden group-hover:block'>
        <p>{t('houtat')}</p>
        </div>
        </div>
        <div className='group flex flex-col bg-white shadow-lg rounded-lg h-40 lg:h-auto lg:p-8 hover:shadow-lg hover:shadow-blue-700/50 transition ease-linear delay-200'>
        <img src={camion}  className='scale-150 lg:h-16 lg:w-16 m-auto group-hover:hidden lg:group-hover:block'/>
       <div className='m-auto lg:p-14 font-serif text-xs lg:text-base text-center lg:block hidden group-hover:block'>
        <p> {t('camion')}</p>
        </div>
        </div>
        <div className='group flex flex-col bg-white shadow-lg rounded-lg h-40 lg:h-auto lg:p-8 hover:shadow-lg hover:shadow-blue-700/50 transition ease-linear delay-200'>
        <img src={ididat}  className='lg:h-16 lg:w-16 m-auto group-hover:hidden lg:group-hover:block'/>
        <div className='m-auto lg:p-14 font-serif text-xs lg:text-base text-center lg:block hidden group-hover:block'>
        <p>{t('ididat')}</p>
        </div>

        </div>
      </div>  
    </div>
    </div>
    
  )
}

export default Services