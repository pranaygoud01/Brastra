import React from 'react'
import about from "../assets/about.png"
import about1 from "../assets/about1.png"
import logo from "../assets/logo1.png"
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import { RiHomeFill } from "react-icons/ri";
import { MdCall } from "react-icons/md";
import { IoMail } from "react-icons/io5";
const About = () => {
  return (
    <div className='w-full h-fit overflow-hidden bg-cover grid text-white max-lg:grid-cols-1 font-albert-sans grid-cols-2 bg-no-repeat'
    style={{backgroundImage:`url(${about})`}}>
            <div className='flex items-end max-lg:hidden'>
               <img src={about1} className='h-[50%] min-w-[50%] w-auto object-cover'/>
            </div>
            <div className='w-full h-full flex flex-col bg-gradient-to-r gap-10 items-center justify-center py-14 from-black/20 via-neutral-950 to-black '>
                 <img src={logo} className='h-56 w-64  max-lg:w-30  max-lg:h-20 object-cover'/>
                 <div className='w-8/12 max-lg:w-11/12 flex justify-center flex-col items-center' >
                 <span className='flex justify-start pb-2 max-lg:w-full w-9/12'><BiSolidQuoteAltLeft className='text-2xl'/></span>
                    <p className='text-xl text-center w-8/12 max-lg:w-full max-lg:text-sm'>
                    Welcome to Brastra, where the essence of traditional flavors meets modern culinary artistry. Our journey began with a simple vision: to create a dining experience that brings people together over delicious, carefully crafted dishes inspired by our roots and local ingredients. At Brastra, we believe in honoring heritage while embracing innovation, resulting in a menu that celebrates both classic favorites and unique, original creations.
                    <span className='w-full flex justify-end'><BiSolidQuoteAltRight className='text-2xl text-end'/></span></p>
                 </div>
                 <div className='w-8/12 max-lg:w-11/12 max-lg:text-sm flex flex-col items-end gap-2'>
                        <p className='flex gap-2 items-center'>5th Eve,Colombo Road,Galle.<RiHomeFill/></p>
                        <p className='flex gap-2 items-center'>+94 111 123 457<MdCall/></p>
                        <p className='flex gap-2 items-center'>brastra@gmail.com<IoMail/></p>
                 </div>
            </div>
    </div>
  )
}

export default About