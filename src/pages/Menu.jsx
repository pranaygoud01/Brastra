import React, { useState } from 'react';
import { PiBowlFood } from "react-icons/pi";
import Starters from '../components/Starters';
import Curries from '../components/Curries';
import MainCourse from '../components/MainCourse';
import Desserts from '../components/Desserts';

const Menu = () => {
  const menus = [
    { name: "Starters" },
    { name: "Curries" },
    { name: "Main Course" },
    { name: "Desserts & More" },
  ];

  const [active, setActive] = useState("Starters");

  const renderComponent = () => {
    switch (active) {
      case "Starters":
        return <Starters />;
      case "Curries":
        return <Curries />;
      case "Main Course":
        return <MainCourse />;
      case "Desserts & More":
        return  <Desserts/>
      default:
        return null;
    }
  };

  return (
    <div className='w-full text-white h-fit flex flex-col items-center gap-6 py-10 bg-black'>
      {/* Heading */}
      <div className='flex flex-col items-center gap-1'>
        <h1 className='font-poppins font-semibold max-lg:text-2xl text-3xl'>Menu</h1>
        <div className='flex gap-3 text-md max-lg:text-sm text-red-500 items-center'>
          <span className='w-8 border-t border-t-red-500'></span>
          <PiBowlFood />
          <span className='w-8 border-t border-t-red-500'></span>
        </div>
      </div>

      {/* Buttons */}
      <div className='flex gap-16 max-lg:gap-4 font-albert-sans'>
        {menus.map((item, index) => (
          <button
            key={index}
            onClick={() => setActive(item.name)}
            className={`${
              active === item.name ? "text-red-500" : ""
            } font-semibold cursor-pointer max-lg:text-sm text-lg`}
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Render Section */}
      <div className='w-full'>
        {renderComponent()}
      </div>
    </div>
  );
};

export default Menu;
