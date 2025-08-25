import React from "react";
import CoffeeGif from "../assets/hero/coffee2.gif";

const Navbar = () => {
  return (
    <div className="flex justify-center z-10">
      <div className="w-1/2 h-12 border border-black/5 bg-black/20 shadow-lg backdrop-filter backdrop-blur-3xl rounded-full px-6 py-3 flex items-center justify-between text-[#efefef] fixed z-50">
        <div>
          <p className="font-bodoni text-2xl">{"S."}</p>
        </div>
        <div className="flex gap-6 font-bodoni text-md items-center text-lg font-normal">
          <div className="hover:underline hover:[text-underline-offset:5px] hover:[text-decoration-thickness:2px] hover:decoration-[#f8f7f3] cursor-pointer">
            <p>HOME</p>
          </div>
          <div className="hover:underline hover:[text-underline-offset:5px] hover:[text-decoration-thickness:2px] hover:decoration-[#f8f7f3] cursor-pointer">
            <p>SKILLS</p>
          </div>
          <div className="hover:underline hover:[text-underline-offset:5px] hover:[text-decoration-thickness:2px] hover:decoration-[#f8f7f3] cursor-pointer">
            <p>PROJECTS</p>
          </div>
          <div className="hover:underline hover:[text-underline-offset:5px] hover:[text-decoration-thickness:2px] hover:decoration-[#f8f7f3] cursor-pointer">
            <p>ABOUT</p>
          </div>
          <div className="hover:underline hover:[text-underline-offset:5px] hover:[text-decoration-thickness:2px] hover:decoration-[#f8f7f3] cursor-pointer">
            <p>CONTACT</p>
          </div>
        </div>
        <div>
          <p className="font-bodoni text-xl flex items-center">
            <img src={CoffeeGif} alt="" className="w-12 h-auto" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
