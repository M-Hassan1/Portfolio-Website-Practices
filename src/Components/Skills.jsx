    import Html from '../assets/html.png';
    import Css3 from '../assets/CSS3_logo_and_wordmark.svg.png';
    import Javascript from '../assets/javascript.png';
    import Typescript from '../assets/Typescript_logo_2020.svg.png';
    import React_icons from '../assets/1631110818-logo-react-js.png';
    import Next_icon from '../assets/download.png';
    import Anguler from '../assets/anguler.png';
    import C from '../assets/1200px-C_Programming_Language.svg.png';

    function Skills() {
    return (
    <div name='Skills' className='w-full max-w-[1000px] py-40 px-6 md:px-[10rem]'  >
    {/* Contaner */}
    <div className=' max-w-[1000] mx-auto flex flex-col justify-center w-full h-full ' >
    <div>
        <p className=' font-bold inline text-4xl text-gray-600 border-b-4 border-pink-900 py-2 ' >Skills </p>
        <p className='py-6'> These are Technologies I've worked with </p>
    </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4  gap-6  text-center py-18   ' >  
            <div className='shadow-md shadow-[#8c8f93] hover:scale-110 duration-300 ' >
                <img className='w-20 mt-6 mx-auto' src={Html} alt="HTML" />
                <p className='my-4' >HTML</p>
            </div>
            <div className='shadow-md shadow-[#8c8f93] hover:scale-110 duration-300 ' >
            <img className='w-20 mx-auto mt-4 ' src={Css3} alt="Css3" />
                <p className='my-4' >CSS</p>
            </div><div className='shadow-md shadow-[#8c8f93] hover:scale-110 duration-300 ' >
            <img className='w-20 mx-auto mt-4 ' src={Javascript} alt="Javascript" />
                <p className='my-4 text-sm md:text-xl ' >JAVASCRIPT</p>
            </div><div className='shadow-md shadow-[#8c8f93] hover:scale-110 duration-300 ' >
            <img className='w-20 mx-auto mt-4 ' src={Typescript} alt="Typescript" />
                <p className='my-4 text-sm md:text-xl ' >TYPESCRIPT</p>
            </div><div className='shadow-md shadow-[#8c8f93] hover:scale-110 duration-300 ' >
            <img className='w-20 mx-auto mt-4 ' src={React_icons} alt="React.js" />
                <p className='my-4' >REACT</p>
            </div><div className='shadow-md shadow-[#8c8f93] hover:scale-110 duration-300 ' >
            <img className='w-20 mx-auto mt-4 ' src={Next_icon} alt="HTML" />
                <p className='my-4 text-sm md:text-xl ' >NEXT</p>
            </div><div className='shadow-md shadow-[#8c8f93] hover:scale-110 duration-300 ' >
            <img className='w-20 mx-auto mt-4 ' src={Anguler} alt="Anguler" />
                <p className='my-4 text-sm md:text-xl ' >ANGULATR</p>
            </div>
            <div className='shadow-md shadow-[#8c8f93] hover:scale-110 duration-300 ' >
            <img className='w-20 mx-auto mt-4 ' src={C} alt="C" />
                <p className='my-4 text-sm md:text-xl ' >C-LANGUAGE</p>
            </div>
        </div>
    </div>


    </div>
    )
    }

    export default Skills


