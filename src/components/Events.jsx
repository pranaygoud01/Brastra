import React from 'react'
import event from "../assets/events.png"
import food7 from "../assets/food7.png"
const Events = () => {
  return (
    <div className='w-full h-[550px] max-lg:h-fit  relative flex items-center max-lg:flex-col max-lg:py-10  bg-cover bg-center bg-no-repeat'
    style={{backgroundImage:`url(${event})`}}>
         <div className='w-full font-poppins flex flex-col gap-1 text-white p-20 px-32 max-lg:py-10 max-lg:p-5 h-[60%] bg-black'>
              <h1 className='font-semibold text-red-500'>discount</h1>
              <h1 className='text-4xl max-lg:text-3xl font-bold'>Upcoming Events</h1>
              <p className='w-4/12 max-lg:text-sm max-lg:mt-2 max-lg:w-full mt-4 text-neutral-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
         </div>
         <div className='w-full h-full absolute max-lg:static max-lg:p-5  p-10 pr-20 flex justify-end'>
            <img src={food7} className=''/>
         </div>
    </div>
  )
}

export default Events