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
      <h1 className="text-4xl font-bold  text-center"  >{t('sv')}</h1>
    <div className='bg-cover bg-no-repeat h-screen shadow-2xl bg-[url("/src/assets/Untitled.png")] m-28 mt-10 p-24'>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 h-full '>
        <div className='bg-white shadow-lg rounded-lg h-auto p-8 hover:shadow-lg hover:shadow-blue-700/50 transition ease-linear delay-200'>
            <img src={floka}  className='h-16 w-16 m-auto'/>
            <div className='p-14 font-semibold text-base text-center'>
        <p> {t('flouka')}</p>
        </div>

        </div>
        <div className='bg-white shadow-lg rounded-lg  h-auto p-8 hover:shadow-lg hover:shadow-blue-700/50 transition ease-linear delay-200'>
        <img src={houtat}  className='h-16 w-16 m-auto'/>
        <div className='p-14 font-semibold text-base text-center'>
        <p>{t('houtat')}</p>
        </div>
        </div>
        <div className='bg-white shadow-lg rounded-lg  h-auto p-8 hover:shadow-lg hover:shadow-blue-700/50 transition ease-linear delay-200'>
        <img src={camion}  className='h-16 w-16 m-auto'/>
       <div className='p-14 font-semibold text-base text-center'>
        <p> {t('camion')}</p>
        </div>
        </div>
        <div className='bg-white shadow-lg rounded-lg  h-auto p-8 hover:shadow-lg hover:shadow-blue-700/50 transition ease-linear delay-200'>
        <img src={ididat}  className='h-16 w-16 m-auto'/>
        <div className='p-14 font-semibold text-base text-center'>
        <p>{t('ididat')}</p>
        </div>

        </div>
      </div>  
    </div>
    </div>
    
  )
}

export default Services