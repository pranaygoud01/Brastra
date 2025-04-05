import React from 'react'
import logo from "../assets/logo1.png"
import { IoLogoFacebook } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
const Footer = () => {
  return (
    <div className='w-full flex flex-col font-instrument-sans text-white font px-32 py-10 h-[350px] bg-black'>
        <div className='border-b flex justify-between items-center border-b-white '>
           <div className='flex flex-col gap-2 items-center pb-10'><img src={logo} className='h-30 w-40 object-center '/>
           <p>Phone number</p>
           <p>+34 911 72 07 45</p>
           </div>
           <ul className='flex text-lg pr-4 gap-5'>
            <li>Home</li>
            <li>Menu</li>
            <li>Wines</li>
            <li>Christmas Dinner</li>
           </ul>
        </div>
        <div className='flex justify-between items-center py-10'>
        <p>copyright &copy; 2025 Brastra</p>
        <div className='flex gap-3 text-4xl'>
            <IoLogoFacebook/>
            <RiInstagramFill/>
        </div>
        </div>
    </div>
  )
}

export default Footer