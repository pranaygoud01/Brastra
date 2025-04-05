import React from 'react'
import event from "../assets/events.png"
import food7 from "../assets/food7.png"
const Events = () => {
  return (
    <div className='w-full h-[550px] relative flex items-center bg-cover bg-center bg-no-repeat'
    style={{backgroundImage:`url(${event})`}}>
         <div className='w-full font-poppins flex flex-col gap-1 text-white p-20 px-32 h-[60%] bg-black'>
              <h1 className='font-semibold text-red-500'>discount</h1>
              <h1 className='text-4xl font-bold'>Upcoming Events</h1>
              <p className='w-4/12 mt-4 text-neutral-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
         </div>
         <div className='w-full h-full absolute p-10 pr-20 flex justify-end'>
            <img src={food7} className=''/>
         </div>
    </div>
  )
}

export default Events