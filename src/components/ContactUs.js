import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
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
              <div id="Contact" className='flex flex-col items-center   justify-center max-w-full max-h-full lg:max-h-screen lg:max-h-screen bg-[url("/src/assets/sands.jpg")]'>
          <div className='backdrop-blur-sm m-10 bg-white/30 box-content w-400 py-1 border-4 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 lg:hover:scale-105   hover:bg-white duration-300'>  
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mx-1 my-1 lg:gap-40 lg:mx-20 lg:my-10'>
              <div className='shrink'>
                <h1 className='text-center lg:text-left pt-2 lg:mt-20 text-lg lg:text-6xl font-bold text-sky-900'>Contact Us</h1>
                <br/>
              <h2 className='mt-5 text-justify ml-2 max-w-md hidden lg:block'>If you need information about our products or want to get in touch, you can either fill out the form with your request or find our <a href='' className='text-sky-700'>contact information</a></h2>
              </div> 
    <form ref={form}
      onSubmit={handleSubmit}
      className="w-full max-w-lg mx-auto pt-0 pb-0 px-4 lg:px-4 lg:py-8"
    >
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-1 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="name"
                                    type="text"
                                    name="user_name"
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </div>
        <div className="w-full md:w-1/2 px-1">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="email"
                                    type="email"
                                    name="user_email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </div>
          </div>
        <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-1">
                <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="item"
      >
        Products
      </label>
      <div className="relative">
        <select
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-1 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="item"
                                        name="item"
          value={item}
          onChange={event => setItem(event.target.value)}
        >
          <option value="">--- Select a product ---</option>
          <option value="item1">Item 1</option>
          <option value="item2">Item 2</option>
          <option value="item3">Item 3</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
                  </div>
              </div>
              </div>
      <br />

      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-1">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-1 mb-1 lg:py-3 lg:px-4 lg:mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48"
            id="message"
                                    value={message}
                                    name="message"
            onChange={event => setMessage(event.target.value)}
                   />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                                value="send"
        >
          Send
        </button>
      </div>
                    </form>
                              </div>
          </div>
          </div>
  );
}

export default ContactForm;
