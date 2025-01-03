import React, { useEffect } from 'react'
import '../Bannar/bannar.css'
import { GrContact } from "react-icons/gr";
import { TypeAnimation } from 'react-type-animation';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Bannar = () => {
  useEffect(()=>{
    AOS.init({duration: "2000"});
  },[])

  
  return (
   <div className="">
     <div className='bg'>
        <div className="container mx-auto px-3 md:px-24 md:flex py-24  md:py-28 gap-8 items-center flex-col lg:flex-row-reverse">

              {/* img */}

              <div className='lg:w-1/2 w-full flex md:justify-end' data-aos="zoom-in">

            <img src="sohel.png" className='w-96 h-96 rounded-full red relative animate-bounce shadow-2xl shadow-red-400' alt="" />
            </div>
            {/* info */}
            <div className='lg:w-1/2 w-full '  data-aos="fade-right">
                <h1 className="md:text-6xl text-4xl font-bold tracking-wide leading-10 mb-4 mt-7 md:mb-8
                 text-green-500 "> HEY I'M 👋 <span className='text-orange-500'>SOHEL</span></h1>

                 <p className='text-xl font-medium text-orange-500 mb-4 md:mb-6'>
                    I'M:   


                    <span className='text-green-500'>
                    <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Mern-Stack Developer',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'Front-End Developer',
                    1000,
                    'Full-Stack Developer',
                    1000,
                    'Content Creator',
                    1000
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1.5em', display: 'inline-block' }}
                repeat={Infinity}
    />
                    </span>
                 
                 </p>

                <p className='mb-5 text-[17px] -tracking-tight leading-7'>
                Mern-Stack Developer | Adept Front-End Developer | MongoDB, NodeJS , ExpressJS , ReactJS , JavaScript , Tailwind.
                </p>

                <div className="flex gap-4">

                <button type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 rounded-bl-3xl">Purple to Pink</button>

                <button type="button" class="text-white bg-gradient-to-r -tracking-tighter leading-8 from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 rounded-tr-3xl">Download CV</button>

                
                </div>
                </div>
          
        </div>
    </div>
   </div>
  )
}
