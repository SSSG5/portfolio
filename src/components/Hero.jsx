import React from "react";
import { ReactTyped } from "react-typed";
import Timeline from "./Timeline";
import PfpImg from "../assets/pfp4.png";
import PImg from "../assets/sarthak_profile.png";
import CoffeeGif from "../assets/hero/coffee2.gif";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import MovingStrip from "./MovingStrip";

const Hero = () => {
  return (
    <div className="font-poppins flex items-center justify-center h-screen bg-[radial-gradient(circle_at_bottom,rgba(255,100,50,1)_0%,rgba(200,50,50,0.8)_20%,rgba(50,10,20,0.6)_40%,black_80%)] px-20">
      <div className="text-center flex-col items-end justify-center flex gap-4 w-2/3 h-1/2 pr-40  ">
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl font-semibold">HELLO</h1>
          <div className="text-4xl h-12 flex items-center justify-center">
            <ReactTyped
              strings={[
                '<a href="https://www.linkedin.com/in/sarthak-wadegaonkar/" target="_blank" rel="noopener noreferrer" style="color:#0077B5;">LinkedIn</a>', // Instagram in pink
                '<a href="https://www.instagram.com/sarthak_wadegaonkar/" target="_blank" rel="noopener noreferrer" style="color:#E1306C;">Instagram</a>', // Instagram in pink
                '<a href="https://x.com/Sarthak_Wade" target="_blank" rel="noopener noreferrer" style="color:#1DA1F2;">Twitter</a>', // Twitter in pink
                '<span style="color:#E7E4A0;">Sir</span>',
                '<span style="color:#E7E4A0;">Mam</span>',
              ]}
              typeSpeed={80}
              backSpeed={100}
              className="text-[#efefef]"
              loop
            />
          </div>
          <h1 className="text-4xl font-semibold">Sarthak here</h1>
          <p className="font-light text-2xl ">
            Code <span className="text-c-cream">&bull;</span> Coffee{" "}
            <span className="text-c-cream">&bull;</span> Creativity
          </p>
          <div className="px-8 py-2 border border-black/5 bg-black/10 shadow-lg backdrop-filter backdrop-blur-3xl text-[#efefef] rounded-lg font-medium flex items-center">
            <p className="">Hi there, a coder with a passion of 3 am</p>
            <img src={CoffeeGif} alt="" className="w-8 h-auto mb-2" />
            <p>and alot of code.</p>
          </div>
          <div className="flex justify-center">
            <div className="px-8 py-2 text-[#efefef] rounded-lg font-medium flex items-center justify-center gap-8 border border-black/5 bg-black/10 shadow-lg backdrop-filter backdrop-blur-3xl w-1/2 ">
              <a href="https://www.linkedin.com/in/sarthak-wadegaonkar/">
                <FaLinkedin className="w-8 h-auto " />
              </a>
              <a href="https://x.com/Sarthak_Wade">
                <FaSquareXTwitter className="w-8 h-auto " />
              </a>
              <a href="https://www.instagram.com/sarthak_wadegaonkar/">
                <FaInstagram className="w-8 h-auto " />
              </a>
              <a href="https://github.com/SSSG5">
                <FaGithub className="w-8 h-auto " />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-1/2 justify-center items-center">
        <div className="relative flex justify-end">
          <MovingStrip />
          <img src={PImg} alt="" className="h-auto w-2/4 relative z-10" />
        </div>

        <div className="px-4 py-2 flex border border-black/5 bg-black/10 shadow-lg backdrop-filter backdrop-blur-3xl rounded-full justify-center items-center gap-2">
          <div className="w-3 h-3 bg-c-green"></div>
          <h2 className="">
            Currently working on{" "}
            <span className="font-medium text-c-green">Portfolio</span>
          </h2>
        </div>
      </div>

      {/* <div className="w-1/2 h-full flex items-center justify-center">
        <Timeline />
      </div> */}
    </div>
  );
};

export default Hero;
