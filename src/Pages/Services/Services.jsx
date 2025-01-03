import React, { useEffect } from 'react'
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import AOS from 'aos';
import 'aos/dist/aos.css';




export const Services = () => {
     useEffect(()=>{
        AOS.init({duration: "2000"});
      },[])
    
      
  return (

    <div id="service">  
      
            
            <div className="divider">
            <h1 className='text-3xl font-bold text-orange-600 tracking-wider md:text-center mb-7 md:mt-7 px-4'>WHAT I DO</h1>

            </div>
         
        <div className='container mx-auto px-3 md:px-24 md:flex ' >

            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                 
                {/* fron-end development */}
                <div className='shadow-2xl shadow-red-100 px-4 py-4 rounded-lg'  data-aos="zoom-in">
                <FaReact className='text-3xl bg-orange-400 w-10 h-10 px-2 py-2 mb-2 rounded-full shadow-xl animate-spin' />
                    <h1 className='text-2xl font-semibold tracking-wider mb-4 text-slate-600 '>Front-End Develomment Using  React JS</h1>
                    <h3 className='text-xl font-semibold text-green-500 -tracking-wide mb-3'>Duration: <span 
                    className='text-orange-500'>2022 - present</span></h3>
                    <p className='text-[14ox] text-slate-600 font-medium -tracking-tighter leading-6'>
                    React employs a component-based architecture, enabling the division of the user interface into reusable and modular components. This approach enhances code maintainability and facilitates efficient development. Furthermore, React leverages a virtual DOM, which efficiently updates only the necessary portions of the UI, resulting in significant performance gains.
                    </p>
                </div>

                {/* Mern-Stack Develompent */}

                <div className='shadow-2xl shadow-red-100 px-4 py-4 rounded-lg'  data-aos="zoom-in">
                <FaNodeJs  className='text-3xl bg-orange-400 w-10 h-10 px-2 py-2 mb-2 rounded-full shadow-xl animate-pulse'/>

                    <h1 className='text-2xl font-semibold tracking-wider mb-4 text-slate-600 '>Node JS  Back-End Development</h1>
                    <h3 className='text-xl font-semibold text-green-500 -tracking-wide mb-3'>Duration: <span 
                    className='text-orange-500'>2023 - present</span></h3>
                    <p className='text-[14ox] text-slate-600 font-medium -tracking-tighter leading-6'>
                    Node.js is a JavaScript runtime environment that allows you to execute JavaScript code outside of a web browser. Express.js is a minimal and flexible Node.js web application framework. Together, they provide a powerful platform for building robust and scalable backends for web applications. Express.js simplifies the process of handling HTTP requests, routing, and middleware, making it easier to create RESTful APIs and other server-side applicati
                    </p>
                </div>


                {/* Database */}

                <div className='shadow-2xl shadow-red-100 px-4 py-4 rounded-lg'  data-aos="zoom-in">
                <DiMongodb  className='text-3xl text-white bg-green-500 w-10 h-10 px-2 py-2 mb-2 rounded-full shadow-xl animate-bounce'/>

                    <h1 className='text-2xl font-semibold tracking-wider mb-4 text-slate-600 '>MongoDB 
                        Database
                    </h1>
                    <h3 className='text-xl font-semibold text-green-500 -tracking-wide mb-3'>Duration: <span 
                    className='text-orange-500'>2023 - present</span></h3>
                    <p className='text-[14ox] text-slate-600 font-medium -tracking-tighter leading-6'>
                    MongoDB is a popular NoSQL database system that stores data in flexible, JSON-like documents. It offers high scalability and performance, making it suitable for handling large volumes of data and high traffic. MongoDB provides features like indexing, aggregation, and geospatial queries, enabling efficient data retrieval and analysis. Its flexible schema allows for easy schema evolution as your application grows.
                    </p>
                </div>
            
            </div>
            
        </div>
    </div>
  )
}
