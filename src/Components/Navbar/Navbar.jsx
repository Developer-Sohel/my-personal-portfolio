import { CgMenuRight } from "react-icons/cg";
import { FaLocationArrow } from "react-icons/fa";
import '../Navbar/navbar.css'
import { Link } from "react-router-dom";





export const Navbar = () => {
    const navItems = <>
    <li className='text-slate-600 leading-7 hover:text-red-500  -tracking-tighter text-[15px] font-semibold'><a href="#/">Home</a></li>
    <li className='text-slate-600 leading-7 -tracking-tighter text-[15px] font-semibold'><a href="#/services">Services</a></li>,
    <li className='text-slate-600 leading-7 -tracking-tighter text-[15px] font-semibold'><a href="#about">About</a></li>
    <li className='text-slate-600 leading-7 -tracking-tighter text-[15px] font-semibold'><a href="#project">Project</a></li>
    <li className='text-slate-600 leading-7 -tracking-tighter text-[15px] font-semibold'><a href="#blog">Blog</a></li>
    <li className='text-slate-600 leading-7 -tracking-tighter text-[15px] font-semibold'><a href="#contact">Contact</a></li>
   
    </> 
  return (
    <div className="shadow-md shadow-slate-400">
        <div className="navbar container mx-auto lg:px-24">
  <div className="navbar-start">
    <div className="dropdown">
    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
    <CgMenuRight className="text-2xl font-black text-slate-800   shadow-xl" />

      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-slate-200 rounded-box z-[1] mt-3 px-16
        
         w-52 p-2 text-yellow-300  shadow">
       {navItems }
      </ul>
    </div>
      <Link to='/'><a className=" text-xl md:text-3xl text-green-500 font-semibold -tracking-tighter">
      (DEV) <span className="text-orange-400">SOHEL</span></a></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navItems}
    </ul>
  </div>
  <div className="navbar-end">
   <button className="bg-orange-500 px-5 py-2 flex items-center gap-2 text-white font-medium tracking-wider rounded-md"><FaLocationArrow />
   Contact
   </button>
  </div>
</div>
    </div>
  )
}
