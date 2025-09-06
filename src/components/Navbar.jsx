import React from "react";
import CoffeeGif from "../assets/hero/coffee2.gif";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <div className="flex justify-center z-10">
      <div className="w-4/5 sm:w-3/4 md:w-2/3 lg:w-1/2 h-12 border border-black/5 bg-black/20 shadow-lg backdrop-filter backdrop-blur-3xl rounded-full px-3 sm:px-4 md:px-6 py-3 flex items-center justify-between text-[#efefef] fixed z-50 top-4">
        <div>
          <p className="font-bodoni text-xl sm:text-2xl">{"S."}</p>
        </div>
        <div className="flex gap-2 sm:gap-4 md:gap-6 font-bodoni text-xs sm:text-sm md:text-base items-center font-normal">
          <div
            className="hover:underline hover:[text-underline-offset:5px] hover:[text-decoration-thickness:2px] hover:decoration-[#f8f7f3] cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <p>HOME</p>
          </div>
          <div
            className="hover:underline hover:[text-underline-offset:5px] hover:[text-decoration-thickness:2px] hover:decoration-[#f8f7f3] cursor-pointer"
            onClick={() => scrollToSection("skills")}
          >
            <p>SKILLS</p>
          </div>
          <div
            className="hover:underline hover:[text-underline-offset:5px] hover:[text-decoration-thickness:2px] hover:decoration-[#f8f7f3] cursor-pointer"
            onClick={() => scrollToSection("projects")}
          >
            <p>PROJECTS</p>
          </div>
          {/* <div className="hover:underline hover:[text-underline-offset:5px] hover:[text-decoration-thickness:2px] hover:decoration-[#f8f7f3] cursor-pointer">
            <p>ABOUT</p>
          </div>
          <div className="hover:underline hover:[text-underline-offset:5px] hover:[text-decoration-thickness:2px] hover:decoration-[#f8f7f3] cursor-pointer">
            <p>CONTACT</p>
          </div> */}
        </div>
        <div>
          <p className="font-bodoni text-lg sm:text-xl flex items-center">
            <img
              src={CoffeeGif}
              alt=""
              className="w-8 sm:w-10 md:w-12 h-auto"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
