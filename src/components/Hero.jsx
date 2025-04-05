import React from 'react'
import header from "../assets/header.png"
import { MdOutlinePhone } from "react-icons/md";
const Hero = () => {
  return (
    <div className='bg-black w-full text-white flex gap-2 max-lg:flex-col h-fit overflow-hidden'>
     <div className='w-[65%] max-lg:w-full flex flex-col gap-7 p-20 max-lg:px-5 max-lg:py-10 py-36 h-full'>
        <h1 className='font-semibold text-8xl max-lg:text-[43px] max-lg:leading-10 font-poppins leading-25'>Fresh Foods<br/>
        <span className='font-playwrite font-light'>with</span> Great taste</h1>
        <p className='font-albert-sans max-lg:w-full max-lg:text-xs w-8/12'>Whether you’re here for a casual lunch, a romantic dinner, or a celebration, Baristra’s warm and attentive service promises to make your visit delightful. Enjoy the charm of our modern, stylish interior. </p>
        <button className='flex gap-5 rounded-full border border-white max-lg:text-sm max-lg:px-4 max-lg:gap-2 px-8 py-3 items-center w-fit'><MdOutlinePhone className='text-xl'/>Call or Book</button>
     </div>
     <div className='w-[35%] max-lg:w-full   max-lg:h-[400px] h-fit'>
        <img src={header} className='w-full h-fit object-cover'/>
     </div>
    </div>
  )
}

export default Hero