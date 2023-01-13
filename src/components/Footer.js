import { IconButton } from '@material-tailwind/react'
import React from 'react'
import Wave from 'react-wavify'

function Footer() {
  return (
    <div id='footer'>
        <Wave fill='#DCDCDC'
        paused={false}
        options={{
            height: 20,
            amplitude: 30,
            speed: 0.15,
            points: 3
            }}
        
        />
        <div className='flex  -mt-2 justify-center items-center h-44 bg-gray-800 text-gray-600'>
           
            <h1 className='text-sm font-medium'>
                © 2021 Pescatitan. All rights reserved.
            </h1>
            {/* <IconButton color='gray' ripple='dark' size='2xl' className='bg-gray-800'>
                <i className='material-icons'>instagram</i>
            </IconButton> */}
        </div>
        

    </div>
  )
}

export default Footer