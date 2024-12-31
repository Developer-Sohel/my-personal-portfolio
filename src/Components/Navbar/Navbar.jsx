import { CgMenuRight } from "react-icons/cg";
import { FaLocationArrow } from "react-icons/fa";





export const Navbar = () => {
    const navItems = <>
    <li className='text-[#E5E7EB] text-base tracking-tight'><a href="#/">Home</a></li>
    <li className='text-[#E5E7EB] text-base tracking-tight'><a href="#about">About</a></li>
    <li className='text-[#E5E7EB] text-base tracking-tight'><a href="#project">Project</a></li>
    <li className='text-[#E5E7EB] text-base tracking-tight'><a href="#blog">Blog</a></li>
    <li className='text-[#E5E7EB] text-base tracking-tight'><a href="#contact">Contact</a></li>
    </> 
  return (
    <div className="bg-slate-900">
        <div className="navbar container mx-auto lg:px-24 shadow-md">
  <div className="navbar-start">
    <div className="dropdown">
    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
    <CgMenuRight className="text-2xl font-black text-white   shadow-xl" />

      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-slate-600 rounded-box z-[1] mt-3 px-16
        
         w-52 p-2 text-yellow-300  shadow">
       {navItems}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl text-white font-medium -tracking-tighter">
(DEV) <span className="text-orange-400">SOHEL</span></a>
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
