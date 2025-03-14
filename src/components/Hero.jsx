import React from 'react'
import Navbar from './Navbar'
import hero_img from '../assets/hero-img.png'
import { motion } from 'framer-motion'
import { useState } from 'react'

const variants = {
  open:{opacity:0.4, y:-90 },
  close:{opacity:1, y:1}
}

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='bg-primary px-[3%] py-[3%] md:py-[1%]'>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen}/>

      <motion.section className='flex flex-col mt-20 pb-20  md:flex-row md:items-center'
      variants={variants}
      initial={{y:1}}
      animate={isOpen ? "open":"close"}
      transition={{duration:1, ease:"easeInOut"}}
      >
        {/*Hero Section*/}
         <motion.div className='flex flex-col space-y-3 md:basis-[60%]'
         initial={{x:-100}}
         animate={{x:1,scale:1}}
         transition={{duration:1}}
         >

          <h1 className='md:text-left heading text-center leading-[1.5] text-secondary md:max-w-2/3'>Modern Interior Decoration Studio</h1>
          <p className='font-light text-center text-secondary sm:text-left sm:max-w-2/3 text-lg md:text-left lg:font-normal lg:max-w-2/3'>we sell, hire and supply trendy, classic and yet affordable interior accessories to give your interiors the befitting look it deserves in a world full of aesthetics blunders</p>
          <div className='flex justify-around my-6 sm:w-full sm:justify-start sm:space-x-5'>
            <button className='bg-accent button '>Shop Now</button>
            <button className='button border-1 border-secondary text-secondary'>Explore More</button>
          </div>
         </motion.div>
        <motion.div
        initial={{rotate:0}} 
        animate={{rotate:[45,90,180,270,360]}}
        transition={{duration:2, ease:"linear"}}
        
        className='hidden sm:hidden md:block md:basis-[40%]'>
          <img src={hero_img} alt="hero furniture image from furni.com" />
        </motion.div>
      </motion.section>
    </div>
  )
}

export default Hero