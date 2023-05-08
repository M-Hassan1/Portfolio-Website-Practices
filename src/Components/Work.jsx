  import React from 'react'
  import Working from '../assets/pic-0.png'
  import Webone from '../assets/pic-1.png'
  import Twoweb from '../assets/pic-2.png'
  import Threeweb from '../assets/pic-3.png'
  import Webfour from '../assets/pic-4.png'
  import Fiveweb from '../assets/pic-5.png'

  function Work() {
  return (
  <div className='w-full md:h-screen text-gray-600  ' >
    <div className='max-w-[1000px] p-6 md:px-[10rem] mx-auto flex flex-col justify-center w-full h-full ' >
        <div className='pb-8  ' >
            <p className='text-4xl font-bold inline border-b-4 text-gray-700 border-pink-600 ' >Work</p>
            <p className='py-6' >The latest project I have created.</p>
        </div>
        <div className='  grid sm:grid-cols-2 md:grid-cols-3 gap-4  ' >
            <div style={{backgroundImage:`url(${Working})` }}  className='shadow-lg shadow-[#040c16] group container rounded-md  flex mx-auto content-div text-center justify-center items-center ' >
            {/* Hover Effect */}
            <div className='opacity-0 group-hover:opacity-100' >
              <span className=' text-2xl font-bold items-center p-12 tracking-wider  ' >
                React JS Application
              </span>
              <div className='pt-8 text-center  ' >
                <a href='/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 text-gray-700 font-bold text-lg  ' >Visit</button>
                  </a>
                  <a href='/'>
                    <button className='text-center  rounded-lg px-4 py-3 m-4 text-gray-700 font-bold text-lg ' >Code</button>
                  </a>
              </div>
            </div>
          </div><div style={{backgroundImage:`url(${Webone})` }}  className='shadow-lg shadow-[#040c16] group container rounded-md  flex mx-auto content-div text-center justify-center items-center ' >
            {/* Hover Effect */}
            <div className='opacity-0 group-hover:opacity-100' >
              <span className=' text-2xl font-bold p-12 tracking-wider  ' >
                React JS Application
              </span>
              <div className='pt-8 text-center  ' >
                <a href='/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 text-gray-700 font-bold text-lg  ' >Visit</button>
                  </a>
                  <a href='/'>
                    <button className='text-center  rounded-lg px-4 py-3 m-4 text-gray-700 font-bold text-lg ' >Code</button>
                  </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage:`url(${Twoweb})` }}  className=' border-2 border-solid border-green-200 shadow-lg shadow-[#040c16] group container rounded-md flex mx-auto content-div text-center justify-center items-center ' >
            {/* Hover Effect */}
            <div className='opacity-0 group-hover:opacity-100' >
              <span className=' text-2xl font-bold p-12 tracking-wider  ' >
                React JS Application
              </span>
              <div className='pt-8 text-center  ' >
                <a href='/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 text-gray-700 font-bold text-lg  ' >Visit</button>
                  </a>
                  <a href='/'>
                    <button className='text-center  rounded-lg px-4 py-3 m-4 text-gray-700 font-bold text-lg ' >Code</button>
                  </a>
              </div>
            </div>
          </div><div style={{backgroundImage:`url(${Threeweb})` }}  className='shadow-lg shadow-[#040c16] group container rounded-md flex mx-auto content-div text-center justify-center border-2 border-solid border-green-200 items-center ' >
            {/* Hover Effect */}
            <div className='opacity-0 group-hover:opacity-100' >
              <span className=' text-2xl font-bold p-12 tracking-wider  ' >
                React JS Application
              </span>
              <div className='pt-8 text-center  ' >
                <a href='/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 text-gray-700 font-bold text-lg  ' >Visit</button>
                  </a>
                  <a href='/'>
                    <button className='text-center  rounded-lg px-4 py-3 m-4 text-gray-700 font-bold text-lg ' >Code</button>
                  </a>
              </div>
            </div>
          </div><div style={{backgroundImage:`url(${Webfour})` }}  className='shadow-lg shadow-[#040c16] group container rounded-md flex mx-auto content-div text-center justify-center items-center ' >
            {/* Hover Effect */}
            <div className='opacity-0 group-hover:opacity-100' >
              <span className=' text-2xl font-bold p-12 tracking-wider  ' >
                React JS Application
              </span>
              <div className='pt-8 text-center  ' >
                <a href='/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 text-gray-700 font-bold text-lg  ' >Visit</button>
                  </a>
                  <a href='/'>
                    <button className='text-center  rounded-lg px-4 py-3 m-4 text-gray-700 font-bold text-lg ' >Code</button>
                  </a>
              </div>
            </div>
          </div><div style={{backgroundImage:`url(${Fiveweb})` }}  className='shadow-lg shadow-[#040c16] group container rounded-md flex mx-auto content-div text-center justify-center items-center ' >
            {/* Hover Effect */}
            <div className='opacity-0 group-hover:opacity-100' >
              <span className=' text-2xl font-bold p-12 tracking-wider  ' >
                React JS Application
              </span>
              <div className='pt-8 text-center  ' >
                <a href='/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 text-gray-700 font-bold text-lg  ' >Visit</button>
                  </a>
                  <a href='/'>
                    <button className='text-center  rounded-lg px-4 py-3 m-4 text-gray-700 font-bold text-lg ' >Code</button>
                  </a>
              </div>
            </div>
          </div>
        </div>
    </div>

  </div>
  )
  }

  export default Work;