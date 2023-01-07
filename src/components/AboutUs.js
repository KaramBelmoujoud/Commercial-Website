import React, { useEffect, useRef } from 'react';
import { useAnimation } from 'framer-motion';

function AboutUs  ()  {
  const ref = useRef(null);
  const animation = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        animation.start('visible');
      }
    });
    observer.observe(ref.current);
  }, [animation]);

  return (
    <div ref={ref} className="mx-auto max-w-2xl text-center">
      <h1 className="text-4xl font-bold my-4" animate={animation} initial="hidden" variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        },
        hidden: {
          opacity: 0,
          y: 50,
          transition: { duration: 0.5 },
        },
      }}>About Us</h1>
      <p className="my-4 text-lg" animate={animation} initial="hidden" variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        },
        hidden: {
          opacity: 0,
          y: 50,
          transition: { duration: 0.5 },
        },
      }}>We are a team of passionate professionals committed to delivering the best products and services to our customers.</p>
      <h2 className="text-2xl font-bold my-4" animate={animation} initial="hidden" variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        },
        hidden: {
          opacity: 0,
          y: 50,
          transition: { duration: 0.5 },
        },
      }}>Our Mission</h2>
      <p className="my-4 text-lg" animate={animation} initial="hidden" variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        },
        hidden: {
          opacity: 0,
          y: 50,
          transition: { duration: 0.5 },
        },
      }}>Our mission is to help our customers succeed by providing them with the best tools and resources they need to achieve their goals.</p>
    </div>
    );
};


export default AboutUs