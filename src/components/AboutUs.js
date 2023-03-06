import React, { useEffect, useRef } from 'react';
import { useAnimation } from 'framer-motion';
import azayz from '../assets/azayz.png';
import export1 from '../assets/export.jpg';
import { useTranslation } from 'react-i18next';


function AboutUs() {
    const { t } = useTranslation();
  const animation = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const scrollHandler = () => {
      animation.set(window.scrollY * 0.4);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [animation]);

  return (
    <div className=''>
   {
      <div ref={ref} className="mx-auto max-w-7xl mb-10 lg:mb-72 w-screen h-auto lg:h-screen " id="aboutus" style={{ y: animation }}>
              <h1 className="text-4xl font-serif my-10 mt-24 text-center"  >{t('about_us_title')}</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-28'>
      <img src={azayz} alt='fish' className='scale-90 lg:scale-100 mx-auto rounded-lg shadow-2xl' />
      <div >
    <p className=" text-sm lg:text-lg li text-justify p-5">{t('about_us')}<br></br><br></br></p>
              <p className='text-center text-lg'><b className='text-blue-500'>{t("thankyou")}</b></p>
      </div>
      </div>
              <h2 className="text-4xl font-serif my-10 mt- text-center">{t('our_mission_title')}</h2>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <p className="my-1 text-sm lg:text-lg text-justify p-5">{t('our_mission')}</p>
    <img src={export1} alt='fish' className='scale-90 lg:scale-100 mx-auto rounded-lg shadow-2xl' />
      </div>
    </div>
}
</div>       
    );
};


export default AboutUs