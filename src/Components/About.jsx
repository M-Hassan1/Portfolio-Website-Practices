import React from 'react'

function About() {
  return (
    <div name='about' className='  w-full px-6 py-40 md:px-[10rem] text-gary-300 ' >
      <div className='max-w-[1000px] flex flex-col w-full ' >
        <div className=' w-full grid grid-cols-2 gap-8 ' >
          <div className='sm:text-right mb-8' >
            <p className=' text-4xl font-solid inline border-b-4 border-pink-600 ' >About</p>
          </div>
          <div>

          </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 ' >
          <div className='text-2xl sm:text-right font-bold ' >
            <p>I am Muhammad-Hassan Nice To Meet. Take A Look Around  </p>
          </div>
          <div>
            <p>As a Front-End Developer, your main tasks involve designing and creating user interfaces, ensuring cross-device compatibility</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About