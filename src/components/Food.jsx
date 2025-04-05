import React from 'react'
import food1 from "../assets/food1.png"
import logo1 from "../assets/logo1.png"
import FoodItems from './FoodItems'
const Food = () => {
  return (
    <div className='w-full h-fit pb-20 relative flex justify-center bg-black'>
         <div className='w-full absolute flex justify-between h-[20%]'><img src={food1} className='h-full max-lg:h-30 max-lg:w-30  max-lg:object-fill'/><img src={logo1} className='pr-10 max-lg:pr-3 max-lg:h-20 max-lg:w-30 max-lg:object-cover'/></div> 
         <div className='flex flex-col w-full text-white items-center gap-4 pt-30'>
               <div className='flex items-end text-[#FF0000] gap-3 max-lg:text-sm font-prata font-bold text-xl '><span className='w-20 max-lg:w-10 border-t'></span><span>Slice of Heaven</span ><span className='w-20 max-lg:w-10 border-t'></span></div>
               <h1 className='font-bold font-albert-sans max-lg:text-2xl text-3xl'>Essence of Traditional Flavors</h1>
               <div className='w-9/12 max-lg:w-11/12 mt-4 bg-white/9 rounded-xl h-fit'>
                <FoodItems/>
               </div>
            </div>    
    </div>
  )
}

export default Food