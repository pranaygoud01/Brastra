import React, { useState } from 'react'
import Wine from "../assets/Wine.png"
import design1 from "../assets/design1.png"
import design2 from "../assets/design2.png"
import design3 from "../assets/design3.png"
import design4 from "../assets/design4.png"
import design5 from "../assets/design5.png"
import { FaWineGlass } from "react-icons/fa6";
import logo from "../assets/logo1.png"
import RedWine from '../components/RedWine'
import WhiteWine from '../components/WhiteWine'
import SparklingWine from '../components/SparklingWine'
import RoseWine from '../components/RoseWine'

const Wines = () => {
    const menus = [
        { name: "Red" },
        { name: "White" },
        { name: "Sparkling" },
        { name: "Rose" },
    ]

    const [active, setActive] = useState("Red")

    const renderWineComponent = () => {
        switch (active) {
            case "Red":
                return <RedWine />
            case "White":
                return <WhiteWine />
            case "Sparkling":
                return <SparklingWine />
            case "Rose":
                return <RoseWine />
            default:
                return null
        }
    }

    return (
        <div className='w-full bg-black text-white flex flex-col items-center h-fit'>
            <div className='h-[100vh] max-lg:h-[40vh] flex justify-center flex-col gap-3 items-center relative w-full bg-center bg-no-repeat bg-cover'
                style={{ backgroundImage: `url(${Wine})` }}>
                <div className='absolute h-full w-full grid grid-cols-3'>
                    <img src={design1} className='h-[60%] w-full' />
                    <img src={design2} className='h-[20%] w-full' />
                    <img src={design3} className='h-[60%] w-full' />
                </div>
                <div className='flex justify-between absolute h-full w-full items-end'>
                    <img src={design4} className='h-[60%] object-contain w-[50%]' />
                    <img src={design5} className='h-[50%] object-cover w-[20%]' />
                </div>
                <img src={logo} className='h-32 max-lg:h-20 max-lg:w-30 w-50 object-cover' />
                <h1 className='font-aladin text-6xl max-lg:text-4xl font-semibold'>The Finest Wines</h1>
                <p className='font-albert-sans text-center max-lg:text-sm text-lg'>from Brastra Collection</p>
                <a href="#wines" className='font-albert-sans text-sm cursor-pointer z-10 max-lg:text-xs font-semibold px-4 py-2 bg-gradient-to-r from-[#D93564] via-[#8C2240] to-[#731C35]'>Explore</a>
            </div>

            <div id="wines" className='flex flex-col items-center gap-1 py-10'>
                <h1 className='font-poppins font-semibold max-lg:text-2xl text-3xl'>Our Wines</h1>
                <div className='flex gap-3 text-md max-lg:text-sm text-red-500 items-center'>
                    <span className='w-10 border-t border-t-red-500'></span>
                    <FaWineGlass />
                    <span className='w-10 border-t border-t-red-500'></span>
                </div>
            </div>

            <div className='flex gap-16 max-lg:gap-5 max-lg:px-5 font-albert-sans'>
                {menus.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => setActive(item.name)}
                        className={`${active === item.name && "text-red-500"} font-semibold max-lg:text-xl cursor-pointer text-lg`}
                    >
                        {item.name}<span className='max-lg:hidden'> Wines</span>
                    </button>
                ))}
            </div>

            <div className='w-full'>
                {renderWineComponent()}
            </div>
        </div>
    )
}

export default Wines
