import React, { useEffect, useRef } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Typed from 'typed.js';

function Home() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Front-End-Developer','Youtuber', 'Graphic Designer'],
      typeSpeed: 150,
      backSpeed: 100,
      backDelay: 100,
      // showCursor: true,
      loop: true,
      // cursorChar: '|'
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div name='home' className='w-full pt-40 h-screen'>
      {/* contaner */}
      <div className='max-w-[1000px] p-6  md:px-44   my-auto flex flex-col justify-center h-full  '>
        <h2 className='text-[#616d93] text-2xl'>Hi! My Name Is</h2>
        <h1 className='text-2xl sm:text-5xl text-[#bb43b9] font-bold  '>Muhammad Hassan</h1>
        <h2>i am a </h2>
        <p className=' sm:text-4xl font-bold text-[#8892b0]  ' >
           <span ref={typedRef}></span>
         </p>
        <p className='py-4 max-w-[700px] ' >
          My Name Is Muhammad-Hassan i am a Student of National University of Sciences and Technology (NUST) Islamabad.I am a Front-End-Developer,Youtuber,Graphic Designer
        </p>
        <div className='flex' >
          <button className='border-2 group border-[#6c6565] flex items-center px-6 py-3 my-2 hover:bg-pink-600 hover:border-pink-600 ' >
            View Work <span className='group-hover:rotate-90 duration-300 ' >
              <HiArrowNarrowRight className='ml-2  '/>
              </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;





