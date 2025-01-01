import Skills from "../Skills/Skills"
import '../About/about.css'

const About = () => {
  return (

    

    <div id="about">
         <div className='container mx-auto px-3 md:px-24 md:flex py-2  md:py-28'>
            <div className='grid grid-cols-1 lg:grid-cols-2 px-3 py-3  gap-4 items-center'>
                {/* img-section */}
                <div data-aos="fade-left">
                   <img src="sohel.png" className="sohel" alt="" />
                </div>
                {/* info */}
                <div>
                <h1 className='text-xl font-semibold text-green-500 py-6'>About Us</h1>
                    <h1 className='text-3xl font-bold text-orange-500'>I AM SOHEL KHAN</h1>
                    <p className='text-slate-600 font-serif text-base -tracking--tracking-tighter font-light py-6'>
                    Welcome everyone. I am Sohel, a professional full-stack web developer. I have 3 years of experience in web development. In front-end web development, I use React, JavaScript, Tailwind CSS, Bootstrap, CSS, and HTML. And in the back-end, I use Node.js, Express JS, and MongoDB. For authentication, I prefer using Firebase. I conduct new research or intelligence to improve the website so that it becomes more user-friendly and is able to retain the user for a long time. I also work with the popular CMS, WordPress. I can easily create your favorite website using WordPress.
                    </p>
                    <div className='flex gap-3'>
                    <button className="btn btn-outline btn-info">Contact Me</button>
                    <button className="btn btn-outline btn-success">Project</button>
                    </div>
                </div>
            </div>
         
    </div>
    <Skills/>
    </div>
        
  )
}

export default About