import React from 'react'
import rose from "../assets/rose.png"
const RoseWine = () => {
    const Wines=[
        {name:"Monteabellón 2021",price:"20"},
        {name:"Arnaiz 2022",price:"18"},
        {name:"La Galga",price:"19"},
        {name:"Carmelo Rodero Roble",price:"26"},
        
    ]
  return (
    <div className='h-fit grid grid-cols-3 gap-10 max-lg:grid-cols-2 max-lg:p-5 max-lg:py-10 w-full px-24 py-20'>
       {Wines.map((item,index)=>{
        return <div key={index} className='w-full font-poppins flex flex-col  max-lg:h-[300px] h-[600px]'>
            <div className='h-[80%] bg-[#2B2B2B] w-full flex justify-center items-center'>
                 <img src={rose}  className='max-lg:h-11/12'/>
        
                </div>
                <div className='flex flex-col gap-2 items-center py-5 max-lg:py-2'>
                    <h1 className='text-xl max-lg:text-lg'>{item.name}</h1>
                    <p>€{item.price}</p>
                    </div>
        </div>
       })}
    </div>
  )
}

export default RoseWine