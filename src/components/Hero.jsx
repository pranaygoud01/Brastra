import React from 'react'
import header from "../assets/header.png"
import { MdOutlinePhone } from "react-icons/md";
const Hero = () => {
  return (
    <div className='bg-black w-full text-white flex gap-2 h-fit overflow-hidden'>
     <div className='w-[65%] flex flex-col gap-7 p-20 py-36 h-full'>
        <h1 className='font-semibold text-8xl font-poppins leading-25'>Fresh Foods<br/>
        <span className='font-playwrite font-light'>with</span> Great taste</h1>
        <p className='font-albert-sans w-8/12'>Whether you’re here for a casual lunch, a romantic dinner, or a celebration, Baristra’s warm and attentive service promises to make your visit delightful. Enjoy the charm of our modern, stylish interior. </p>
        <button className='flex gap-5 rounded-full border border-white px-8 py-3 items-center w-fit'><MdOutlinePhone className='text-xl'/>Call or Book</button>
     </div>
     <div className='w-[35%] h-full'>
        <img src={header} className='w-full h-full object-cover'/>
     </div>
    </div>
  )
}

export default Hero