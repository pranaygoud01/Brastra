import React from 'react';
import { FiSearch } from "react-icons/fi";
import { useRouter } from '@tanstack/react-router'; // TanStack Router hook
import logo from "../assets/logo.png";

const NavBar = () => {
  const router = useRouter();
  const currentPath = router.state.location.pathname;

  const menu = [
    { name: "Home", path: "/" },
    { name: "Restaurant Menu", path: "/menu" },
    { name: "Wines", path: "/wines" },
  ];

  return (
    <div className='w-full text-white flex sticky z-30 top-0 items-center font-instrument-sans justify-between bg-black h-fit p-12 py-6'>
      <img src={logo} className='h-[60px] w-[150px] object-contain' />

      <nav className='flex gap-5'>
        {menu.map((item, index) => {
          const isActive = currentPath === item.path;
          return (
            <a href={item.path} key={index}>
              <button
                className={`cursor-pointer ${isActive ? "text-[#D22020] border-b" : ""}`}
              >
                {item.name}
              </button>
            </a>
          );
        })}
      </nav>

      <div className='flex border rounded-full py-2 px-5 items-center border-white'>
        <input type='text' className='outline-none bg-transparent text-white placeholder-white' placeholder='Find Great Food' />
        <FiSearch />
      </div>
    </div>
  );
};

export default NavBar;
