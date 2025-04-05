import React, { useState } from 'react'
import { PiBowlFood } from "react-icons/pi";
import Menu1 from '../components/Menu1';
import Menu2 from '../components/Menu2';
import food8 from "../assets/food8.png"
import food13 from "../assets/food13.png"
import food14 from "../assets/food14.png"
import food15 from "../assets/food15.png"
import { Tapes,SeafoodMenu,TraditionalStews,MeatDishes } from '../components/MenuData';
const Menu = () => {
    const menus=[
        {name:"BreakFast"},
        {name:"Lunch"},
        {name:"Dinner"},
        {name:"Desserts"},
    ]
    const Data=[Tapes,SeafoodMenu,TraditionalStews,MeatDishes];
    const title=[
        {
            name:"Tapes",
            image:food8
        },
        {
            name:"Seafood",
            image:food13
        },
        {
            name:"Traditional Stews",
            image:food14
        },
        {
            name:"Meat Dishes",
            image:food15
        },

    ]
    
    const [active,SetActive]=useState("BreakFast")
  return (
    <div className='w-full  text-white h-fit  flex flex-col items-center gap-6  py-10 bg-black'>
             <div className='flex flex-col items-center gap-1'> <h1 className='font-poppins font-semibold text-3xl'>Menu</h1>
               <div className='flex gap-3 text-md text-red-500 items-center'><span className='w-8 border-t border-t-red-500'></span><PiBowlFood/><span  className='w-8 border-t border-t-red-500'></span></div>
               </div>
               <div className='flex gap-16 font-albert-sans'>
               {menus.map((item,index)=>{
                return <button key={index} className={`${active===item.name&& "text-red-500"} font-semibold cursor-pointer text-lg`}>{item.name}</button>
               })}
               </div>
                <div className='w-full'>
    
                {Data.map((item, index) => 
    index % 2 === 0 
        ? <Menu1 key={index} menu={item} title={title[index]?.name} image={title[index]?.image} /> 
        : <Menu2 key={index} menu={item} title={title[index]?.name} image={title[index]?.image} />
)}
               </div>
    </div>
  )
}

export default Menu