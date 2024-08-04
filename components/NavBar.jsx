"use client"
import Link from "next/link";
import Image from "next/image";
import navLogo from "../public/logo.png";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [colorMenuMobile, setColorMenuMobile] = useState('white')

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 754) {
        setColor("#ecf0f3");
        setTextColor("#000000");
        setShadow(true);
        setColorMenuMobile('#000000')
      } else {
        setColor("transparent");
        setTextColor("white");
        setShadow(false);
        setColorMenuMobile('#ecf0f3')
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <header
      style={{ backgroundColor: `${color}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] left-0 top-0 ease-in duration-300"
          : "fixed w-full h-20 z-[100] left-0 top-0 ease-in duration-300"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image src={navLogo} alt="/" width={50} height={50} className="mt-3 md:w-16 md:h-16" />
        </Link>

        <div>
          <ul style={{ color: `${textColor}` }} className="hidden md:flex">
            <li className="p-4 uppercase text-sm hover:text-gray-400">
              <Link href="/#inicio">Inicio</Link>
            </li>
            <li className="p-4 uppercase text-sm hover:text-gray-400">
              <Link href="/#caracteristicas">Servicios</Link>
            </li>
            <li className="p-4 uppercase text-sm hover:text-gray-400">
              <Link href="/#faqs">Preguntas frecuentes</Link>
            </li>
            
          </ul>
          <div onClick={handleNav} className="md:hidden " style={{color: `${colorMenuMobile}`}}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full  items-center justify-between">
              <Link href="/" onClick={() => setNav(false)}>
                <Image src={navLogo} alt="/" width={50} height={50} />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-2">
              ¡Devolvemos la vida a tus muebles y a tu vehículo!
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase ">
              <li onClick={() => setNav(false)} className="py-4 text-sm">
                <Link href="/">Inicio</Link>
              </li>
              <li onClick={() => setNav(false)} className="py-4 text-sm">
                <Link href="/#caracteristicas">Servicios</Link>
              </li>
              <li onClick={() => setNav(false)} className="py-4 text-sm">
                <Link href="/#faqs">Preguntas frecuentes</Link>
              </li>
              
            </ul>
            
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
