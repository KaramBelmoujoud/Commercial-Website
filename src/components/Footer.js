import React from 'react'
import Wave from 'react-wavify'

function Footer() {
  return (
    <div>
        <Wave fill='#DCDCDC'
        paused={false}
        options={{
            height: 20,
            amplitude: 30,
            speed: 0.15,
            points: 3
            }}
        />
        <div className='flex justify-center items-center h-16 bg-gray-800 text-gray-600'>
            <h1 className='text-sm font-medium'>
                © 2021 Pescatitan. All rights reserved.
            </h1>
        </div>
        

    </div>
  )
}

export default Footer