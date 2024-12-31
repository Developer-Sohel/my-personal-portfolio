import React from 'react'
import { Navbar } from '../Components/Navbar/Navbar'
import { Footer } from '../Components/Footer/Footer'
import '../MainLayouts/main.css'
import Home from '../Pages/Home/Home'


const MainLayouts = () => {
  return (
    <div>
        <Navbar/>
        <Home/>
        
        <Footer/>
    </div>
  )
}

export default MainLayouts