import React from 'react'
import '../Bannar/bannar.css'
import { GrContact } from "react-icons/gr";
import { TypeAnimation } from 'react-type-animation';

export const Bannar = () => {
  return (
   <div className="shadow min-h-screen">
     <div className='bg min-h-screen'>
        <div className="container mx-auto px-2 md:px-24 md:flex py-24 md:py-28 gap-8 items-center flex-col lg:flex-row-reverse">

              {/* img */}

              <div className='lg:w-1/2 w-full flex md:justify-end'>

            <img src="sohel.png" className='w-96 h-96 rounded-full red relative animate-bounce' alt="" />
            </div>
            {/* info */}
            <div className='lg:w-1/2 w-full'>
                <h1 className="md:text-6xl text-3xl font-semibold tracking-wide leading-10 mb-4 mt-7 md:mb-8
                 text-green-500 "> I'M SOHEL <span className='text-orange-500'>KHAN</span></h1>

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

                <p className='mb-5 text-[17px] -tracking-tight leading-7'>Junior mern-stack developer with a solid understanding of core web
                development principles. Proficient in building dynamic web
                applications using React, Node.JS, Express, and MongoDB. Seeking a
                challenging role to expand my skills and contribute to a successful
                development team.</p>

                <button className='flex items-center gap-3 bg-orange-500 px-8 py-2 text-white
                font-semibold rounded-md
                
                '>Contact <span><GrContact /></span> </button>
                
                            
                </div>
          
        </div>
    </div>
   </div>
  )
}
