import React, { useState } from 'react'
import { CiShoppingCart } from 'react-icons/ci'
import { IoIosMenu } from 'react-icons/io'
import { motion } from 'framer-motion'
import { AiOutlineUser } from 'react-icons/ai'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav>
      <div>
        <div className='flex justify-between flex-wrap items-center '>
          <div>
            <h1 className='text-secondary heading'>Furni.</h1>
          </div>
          <ul className='md:flex space-x-7 text-xl text-secondary hidden'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Shop</li>
                <li>Blog</li>
              </ul>
          <div className='flex space-x-3 text-secondary items-center '>
            <CiShoppingCart className='text-3xl'/>
            <AiOutlineUser className='text-3xl hidden md:inline-block'/>
            <IoIosMenu className='text-3xl md:hidden' onClick={()=>setIsOpen(prev=>!prev)}/>
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
              <ul className='flex flex-col space-y-3 text-xl mt-5 text-secondary'>
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