import React from 'react'
import Example from '../components/Nav'
import landing from '../assets/sands.jpg'
import { Link } from 'react-router-dom'
import pesca from '../assets/pes.png'
function Entreheader() {
  return (
    <div className='relative  border-blue-500 border-b-4 '>
    <Example />
    <div className='flex flex-col items-center   justify-center bg-fixed bg-no-repeat h-screen w-screen  bg-[url("/src/assets/sands.jpg")]'>
      <div className='text-center'>
        <h1 className='text-6xl '>Pescatitan</h1>
        <h2 className='text-2xl '>Your trusted source for seafood</h2>
        <a href="#Contact">
          <button  className= ' w-2/4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl mt-4'>
          <span>Contact Us</span>
          </button>
          </a>
        
      </div>
    </div>
    {window.innerWidth > 768 ? (
      <div className='top-4 left-14 absolute'>
        <img src={pesca} alt="logo" className="h-28 w-20 md:fixed" />
      </div>) : (null)}
  </div>
  )
}

export default Entreheader