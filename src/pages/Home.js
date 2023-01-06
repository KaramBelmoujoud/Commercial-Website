import React from 'react'
import Example from '../components/Nav'
import landing from '../assets/sands.jpg'
import { Link } from 'react-router-dom'
import pesca from '../assets/pes.png'
function Home() {
  return (
    <div  className='relative'>
        <Example /> 
        <div className='flex flex-col items-center justify-center h-screen w-screen bg-[url("/src/assets/sands.jpg")]'>
          <div className='text-center'>
            <h1 className='text-6xl '>Pescatitan</h1>
            <h2 className='text-2xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</h2>
          </div>
        </div>
        {window.innerWidth > 768 ? (
        <div className='top-4 left-14 absolute'>
          <img src={pesca} alt="logo" className="h-28 w-20" />
        </div>) : (null)}
    </div>


  )
}

export default Home