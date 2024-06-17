import Link from "next/link";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";

const BotonWP = () => {
  return (
    <div >
      <Link href={"https://walink.co/2d2594"}  target="_blank" className="fixed bottom-1 right-1 z-1000">
        <div className="rounded-full shadow-lg bg-gradient-to-r from-green-500 to-green-700  shadow-gray-500 p-5 m-5 cursor-pointer opacity-90 hover:scale-125 hover:opacity-100 ease-in duration-300">
          <BsWhatsapp size={28} color="white" />
        </div>
      </Link>
    </div>
  );
};

export default BotonWP;
