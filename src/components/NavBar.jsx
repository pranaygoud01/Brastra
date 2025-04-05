import React, { useState } from 'react';
import { FiSearch } from "react-icons/fi";
import { Link, useRouter } from '@tanstack/react-router';
import logo from "../assets/logo.png";
import { IoMenuOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { AnimatePresence, motion } from 'framer-motion';

const NavBar = () => {
  const router = useRouter();
  const currentPath = router.state.location.pathname;

  const menu = [
    { name: "Home", path: "/" },
    { name: "Restaurant Menu", path: "/menu" },
    { name: "Wines", path: "/wines" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='w-full text-white max-lg:items-center flex sticky z-20 top-0 items-center font-instrument-sans justify-between bg-black h-fit p-12 max-lg:py-3 max-lg:pl-0 max-lg:px-4 py-6'>
        <img src={logo} className='h-[60px] max-lg:h-[50px] max-lg:w-[90px] w-[150px] max-lg:object-cover object-contain' />

        <nav className='flex gap-5 max-xl:hidden'>
          {menu.map((item, index) => {
            const isActive = currentPath === item.path;
            return (
              <a href={item.path} key={index}>
                <button className={`cursor-pointer ${isActive ? "text-[#D22020] border-b" : ""}`}>
                  {item.name}
                </button>
              </a>
            );
          })}
        </nav>

        <div className='flex border max-lg:hidden rounded-full py-2 px-5 items-center border-white'>
          <input type='text' className='outline-none bg-transparent text-white placeholder-white' placeholder='Find Great Food' />
          <FiSearch />
        </div>

        <div className='flex items-center lg:hidden gap-5'>
          <FiSearch className='text-2xl' />
          <button onClick={() => setOpen(!open)}>
            {open ? <IoClose className='text-3xl' /> : <IoMenuOutline className='text-3xl' />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className='w-full lg:hidden font-albert-sans flex flex-col px-5 py-10 bg-black text-white fixed top-18 h-[100vh] border-t border-t-white/70 z-30'
          >
            <div className='flex flex-col items-start gap-7 text-2xl font-semibold'>
              {menu.map((item, index) => (
                <Link
                  to={item.path}
                  key={index}
                  onClick={() => setOpen(false)}
                  className='border-b border-b-white '
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
