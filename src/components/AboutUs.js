import React, { useEffect, useRef } from 'react';
import { useAnimation } from 'framer-motion';
import azayz from '../assets/azayz.png';
import export1 from '../assets/export.jpg';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import { zoomIn } from 'react-animations';

function AboutUs  ()  {
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
    <div ref={ref} className="mx-auto max-w-7xl mb-24 w-screen h-screen " id="AboutUs" style={{ y: animation }}>
   
            <Animator animation={batch(MoveIn(-1100,0), FadeIn(0,1))}>
      <h1 className="text-4xl font-bold my-10 mt-24 text-center"  >About Us</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <img src={azayz} alt='fish' className='h- mx-auto rounded-lg shadow-lg' />
        <div >
      <p className=" text-lg li text-justify p-5">Welcome to our company! We are a business dedicated to providing our customers with the highest quality fish available. From fresh, sustainably caught seafood to frozen options, we have something for everyone. Our team is passionate about sourcing and selling only the best products, and we take pride in the excellent customer service that we offer. We hope to serve you and your family with delicious, healthy fish for years to come. In addition to supplying customers locally, we also have a thriving export business. Our team works hard to ensure that all of our products meet the highest standards of quality and freshness, no matter where they are going. We have experience shipping to a variety of international destinations and are able to meet the unique requirements of each market. We are proud to be able to bring our high-quality fish and seafood to customers around the world.<br></br><br></br></p>
      <p className='text-center text-lg'><b className='text-blue-500'>thank you for choosing us!.</b></p>
        </div>
        </div>
        </Animator>
      <Animator  animation={batch(MoveIn(1100,0),FadeIn(0,1))}>
      <h2 className="text-4xl font-bold my-10 mt- text-center">Our Mission</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      <p className="my-4 text-lg text-justify p-5">Our mission is to provide our customers with the freshest, highest quality fish and seafood available. We are proud to serve both local and international markets, and work hard to ensure that all of our products meet the highest standards of quality and freshness. We are committed to sustainability and source our products responsibly. In addition to serving individual customers, we also have a thriving wholesale business, supplying other businesses with the products they need to succeed. We are dedicated to building lasting relationships with all of our customers and providing excellent service at every step of the way. We strive to be the go-to source for all of your fish and seafood needs, whether you are a restaurant owner, caterer, or retailer.</p>
      <img src={export1} alt='fish' className='h- mx-auto rounded-lg shadow-lg' />
        </div>
      </Animator>
    </div>
    );
};


export default AboutUs