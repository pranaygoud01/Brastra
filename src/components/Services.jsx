import React from 'react'
import chef from "../assets/chef.png";
import food6 from "../assets/food6.png";
import logo1 from "../assets/logo1.png"
import { SiCodefresh } from "react-icons/si";
import { IoReceiptSharp } from "react-icons/io5";
import { PiChefHat } from "react-icons/pi";
const Services = () => {
  return (
    <div className='w-full h-fit overflow-hidden  relative bg-black text-white'>
        <div className='flex flex-col gap-3  items-center'>
            <h1 className='font-albert-sans font-bold max-lg:text-2xl text-4xl'>Our Special Environment</h1>
            <div className='flex items-end text-[#FF0000] max-lg:text-sm font-bold gap-3 font-prata text-xl '><span className='w-20 max-lg:w-10 border-t'></span><span>Feast your eyes</span ><span className='w-20 max-lg:w-10 border-t'></span></div>
        </div>
        <div  className='flex relative justify-between max-lg:flex-col'>
            <img src={chef} className='h-[650px] max-lg:w-full max-lg:h-[400px] w-[50%] object-contain'/>
            <img src={food6} className='h-[400px] max-lg:hidden w-[16%] max-lg:w-full object-cover'/>
            <div className='w-full flex justify-end py-10 pr-72 max-lg:p-4 h-full max-lg:static absolute'>
                <div className='bg-white/12 max-lg:w-full h-fit flex flex-col py-8 items-center gap-2 w-4/12 rounded-xl'>
                     <img src={logo1} className='w-30 max-lg:h-20 h-30 object-cover'/>
                     <SiCodefresh className='text-5xl max-lg:text-4xl text-red-500'/>
                     <p className='font-bold font-albert-sans max-lg:text-xl text-2xl'>Fresh Products</p>
                     <p className='text-md w-9/12 max-lg:text-sm text-center text-neutral-400'>These nutrients support everything from immune function to bone health.</p>
                     <PiChefHat className='text-5xl mt-3  max-lg:text-4xl text-red-500'/>
                     <p className='font-bold font-albert-sans max-lg:text-xl text-2xl'>Skilled Chefs</p>
                     <p className='text-md w-9/12 text-center max-lg:text-sm text-neutral-400'>excellent culinary skills, time management expertise, the ability to work</p>
                     <IoReceiptSharp className='text-5xl mt-3  max-lg:text-4xl text-red-500'/>
                     <p className='font-bold font-albert-sans max-lg:text-xl text-2xl'>Unique Recipes</p>
                     <p className='text-md w-9/12 pb-5 text-center max-lg:text-sm text-neutral-400'>Having an extra visual element around these items on your menu will help attract your guest's </p>
                </div>
        </div>
        </div>
       
    </div>
  )
}

export default Services