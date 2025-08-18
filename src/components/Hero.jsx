import React from "react";
import { ReactTyped } from "react-typed";
import Timeline from "./Timeline";
import PfpImg from "../assets/pfp.png";

const Hero = () => {
  return (
    <div className="font-poppins flex items-center justify-center h-screen px-20">
      <div className="flex w-1/3">
        <img src={PfpImg} alt="" />
      </div>
      <div className="text-center flex-col items-end justify-center flex gap-4 w-2/3 h-2/3 pr-40  ">
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl font-semibold">HELLO</h1>
          <div className="text-4xl h-12 flex items-center justify-center">
            <ReactTyped
              strings={[
                '<a href="https://www.linkedin.com/in/sarthak-wadegaonkar/" target="_blank" rel="noopener noreferrer" style="color:#0077B5;">LinkedIn</a>', // Instagram in pink
                '<a href="https://x.com/Sarthak_Wade" target="_blank" rel="noopener noreferrer" style="color:#1DA1F2;">Twitter</a>', // Twitter in pink
                '<a href="https://www.instagram.com/sarthak_wadegaonkar/" target="_blank" rel="noopener noreferrer" style="color:#E1306C;">Instagram</a>', // Instagram in pink
                '<span style="color:#E6443C;">Sir</span>',
                '<span style="color:#E6443C;">Mam</span>',
              ]}
              typeSpeed={80}
              backSpeed={100}
              className="text-[#efefef]"
              loop
            />
          </div>
          <h1 className="text-4xl font-semibold">Sarthak here</h1>
          <p className="font-light text-2xl ">
            Code <span className="text-c-orange">&bull;</span> Coffee{" "}
            <span className="text-c-orange">&bull;</span> Creativity
          </p>
        </div>
      </div>
      {/* <div className="w-1/2 h-full flex items-center justify-center">
        <Timeline />
      </div> */}
    </div>
  );
};

export default Hero;
