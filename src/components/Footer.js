import { IconButton } from '@material-tailwind/react'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import Wave from 'react-wavify'
import pescal from '../assets/pescalong.png'
import { phone } from '../phone.svg'
import { useTranslation } from 'react-i18next';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Button } from '@mui/material';

function Footer() {
    const { t } = useTranslation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [item, setItem] = useState('');
    const form = useRef();

  function handleSubmit(event) {
      event.preventDefault();
      emailjs.sendForm('service_i2zgrvg', 'template_sannr9g', form.current, 'ylRhxG10u7hKpO6KH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    // Send form data to server or API here
    console.log(name, email, message);

    // Clear form fields
    setName('');
    setEmail('');
    setMessage('');

  }
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
          
          <div className='h-auto bg-gray-800 text-gray-600'>
            <div className='flex flex-col lg:flex-row items-center justify-center lg:ml-60 lg:mr-60 gap-5 lg:gap-32'>
          <div className='w-1/3 h-1/3'>
            <img src={pescal} alt="logo" className="object-contain invisible 2xl:visible" />
          </div>
          <div>
            <h2 className='text-3xl text-white -mt-10 lg:mt-5'>{t('Contactus')}</h2>
            <h3 className='text-1xl text-white w-80 pt-5'>{t('Description')}</h3>
            <h3 className='text-1x3 text-white w-80 pt-2'><LocalPhoneOutlinedIcon fontSize="small"/>+212 673653203</h3>
            <h3 className='text-1x3 text-white w-80 pt-1'><EmailOutlinedIcon fontSize="small"/> farid@pescatitan.net</h3>
          </div>   
          <div className="flex flex-col gap-2 ">
            <div>
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="email">
              {t('sub')}
              </label>
            </div>
            <div>
              <input
              className="appearance-none block w-80 bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
              name="user_email"
              value={email}
              placeholder='Email'
              onChange={event => setEmail(event.target.value)}
            /></div>
            <div className='flex bg-blue-200 rounded-md hover:bg-black w-auto mx-28 text-center justify-center items-center'>
              <Button className="p-4 text-sm z-auto text-white bg-transparent hover:bg-black hover:text-white">{t('sub')}</Button>
            </div>
            
          </div> 
          
          </div>
          <div className='flex flex-col justify-between items-center mt-5 lg:mt-14'>
            <span class="w-full h-px bg-white  lg:w-10/12 bottom-0"/>
            <h1 className='text-lg font-medium p-2'>
                © 2023 Pescatitan. All rights reserved.
                  </h1>
              </div>
            {/* <IconButton color='gray' ripple='dark' size='2xl' className='bg-gray-800'>
                <i className='material-icons'>instagram</i>
            </IconButton> */}
        </div>
        

    </div>
  )
}

export default Footer