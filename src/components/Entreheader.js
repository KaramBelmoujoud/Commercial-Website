import React from 'react'
import Example from '../components/Nav'
import pes from '../assets/pesca.png'
import pesca from '../assets/pes.png'
import { useTranslation } from 'react-i18next';
import KeyboardDoubleArrowDownOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowDownOutlined';

function Entreheader() {
  const { t } = useTranslation();
  return (
    <div className='relative  border-blue-500 border-b-4 '>
      <Example />
<div className='bg-cover bg-no-repeat h-screen w-screen bg-[url("/src/assets/Sable.png")]'>
    <div className='flex flex-col items-center justify-center h-full'>
      <div className='text-center'>
        <img src={pes} alt="logo" className=" invisible lg:visible" />

        <a href="#Contact">
          <button  className= ' w-3/4 bg-blue-900 hover:bg-gray-700 text-white font-bold text-xl py-2 px-4 rounded-md mt-4'>
          <span>{t('Contactus')}</span>
          </button>
          </a>
      </div>
      <div className='flex items-stretch mt-56'>
        <p className='items-end font-serif text-lg font-bold'> EXPLORE </p>
      </div>
        <KeyboardDoubleArrowDownOutlinedIcon className='text-blue-900' sx={{ fontSize: 40 }} />
        </div>
      </div>
    {window.innerWidth > 768 ? (
      <div className='top-14 left-14 absolute'>
        <img src={pesca} alt="logo" className="h-28 w-20  invisible lg:visible" />
      </div>) : (null)}
  </div>
  )
}

export default Entreheader