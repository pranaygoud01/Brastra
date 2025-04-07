import React from 'react'

import { PiBowlFood } from "react-icons/pi";
const Menu1 = ({menu,title,image}) => {
    
  return (
    <div className='w-full px-[48px] relative max-lg:p-5 max-lg:flex-col max-lg:px-1 justify-between max-xl:gap-10 py-10 h-fit flex '>
       <div className='w-[35%] flex justify-center sticky top-24 max-lg:static  max-lg:w-full max-lg:h-[200px] h-[400px] self-start'>
    <img src={image} className='w-9/12 h-full object-cover' />
  </div>
      <div className='w-[65%] max-lg:w-full  flex flex-col pr-16  max-xl:pr-0 items-center'>
         
    <div className="flex font-albert-sans items-center space-x-2">
        
        <div className="flex items-center">
        <div className="w-1 h-1 bg-white border-2 border-white rotate-45"></div>
            <div className="w-20 h-0.5 bg-white"></div>
            
        </div>

        <h1 className="text-white text-3xl max-lg:text-[22px] font-bold">{title}</h1>

        
        <div className="flex items-center">
           
            <div className="w-20 h-0.5 bg-white"></div>
            <div className="w-1 h-1 bg-white border-2 border-white rotate-45"></div>
        </div>
    </div>
         <div className='flex flex-col font-poppins gap-2 w-full mt-3'>
            {menu.map((item,index)=>{
                return <div key={index} className="flex items-center justify-between bg-black text-white p-3 w-full ">
               
                <div className="w-16 h-16">
                  <img
                    src={item.image}
                  
                    className="w-full h-full object-cover"
                  />
                </div>
          
                
                <div className="flex-1  px-4">
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg max-lg:text-sm  uppercase">{item.name}</h2>
                    <span className=""><PiBowlFood/></span> 
                    
                <div className="flex-1 border-dotted border-b border-gray-500"></div>
          
                
          <div className="text-lg max-lg:text-sm ">£{item.price}</div>
                  </div>
                  <p className="text-xs max-lg max-lg:pt-1 text-[10px] text-gray-400">
                   {item.des}
                  </p>
                </div>
              </div>
            })}
            </div>
      </div>
    </div>
  )
}

export default Menu1