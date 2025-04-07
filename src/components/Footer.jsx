import React from 'react'
import logo from "../assets/logo1.png"
import { IoLogoFacebook } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from '@tanstack/react-router';
const Footer = () => {
  return (
    <div className='w-full flex flex-col max-lg:h-fit max-lg:p-5 font-instrument-sans text-white font px-32 py-10 h-fit bg-black'>
        <div className='border-b flex max-lg:flex-col justify-between items-center max-lg:pb-5 max-lg:items-start border-b-white '>
           <div className='flex flex-col  max-lg:flex-row max-lg:justify-between max-lg:w-full max-lg:text-sm gap-2 items-center max-lg:items-center max-lg:pb-4 pb-10'><img src={logo} className='h-20 pb-2 max-lg:h-20 max-lg:w-35  w-46 object-cover '/>
           <div className='flex flex-col gap-2'>
           <p>Phone number</p>
           <a  href="tel:+44 7438865788">+44 7438865788</a>
           </div>
           </div>
           <ul className='flex max-lg:text-sm max-lg:w-full  text-lg max-lg:justify-between max-lg:pr-0 pr-4 gap-5'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            
            <li><Link to="/">Christmas Dinner</Link></li>
           </ul>
        </div>
        <div className='flex justify-between max-lg:py-5 items-center pt-10'>
        <p className='max-lg:text-xs'>copyright &copy; 2025 D'Spicy Kitchen</p>
        <div className='flex max-lg:text-xl gap-3 text-4xl'>
            <IoLogoFacebook/>
            <RiInstagramFill/>
        </div>
        </div>
    </div>
  )
}

export default Footer