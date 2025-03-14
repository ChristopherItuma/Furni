import React, { useState } from 'react'
import { CiShoppingCart } from 'react-icons/ci'
import { IoIosClose, IoIosMenu } from 'react-icons/io'
import { motion } from 'framer-motion'
import { AiOutlineUser } from 'react-icons/ai'

const Navbar = ({isOpen,setIsOpen}) => {


  const handleNavToggle = ()=>{
    setIsOpen(prev=>!prev)
  }
  return (
    <nav>
      <div>
        <div className='flex justify-between flex-wrap items-center '>
          <div>
            <h1 className='text-secondary text-4xl md:text-4xl'>Furni.</h1>
          </div>
          <ul className='md:flex space-x-7 text-xl text-secondary hidden font-default'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Shop</li>
                <li>Blog</li>
              </ul>
          <div className='flex space-x-3 text-secondary items-center '>
            <CiShoppingCart className='text-3xl'/>
            <AiOutlineUser className='text-3xl hidden md:inline-block'/>
            {
              isOpen ?
              <IoIosClose className='text-3xl md:hidden' onClick={handleNavToggle}/> :
              <IoIosMenu className='text-3xl md:hidden'  onClick={handleNavToggle}/>
            }
            
          </div>
        </div>
      {/*Mobile*/}
        <div>
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: isOpen ? 1 : -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {isOpen && (
              <ul className='flex flex-col space-y-3 text-xl mt-5 text-secondary font-default'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Shop</li>
                <li>Blog</li>
              </ul>
            )}
          </motion.div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar