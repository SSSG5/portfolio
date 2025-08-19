import React from "react";
import { ReactTyped } from "react-typed";
import Timeline from "./Timeline";
import PfpImg from "../assets/pfp.png";
import CoffeeGif from "../assets/hero/coffee2.gif";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="font-poppins flex items-center justify-center h-screen px-20">
      <div className="flex w-1/3">
        <img src={PfpImg} alt="" className="h-full" />
      </div>
      <div className="text-center flex-col items-end justify-center flex gap-4 w-2/3 h-2/3 pr-40  ">
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
          <div className="px-8 py-2 bg-c-blue text-[#efefef] rounded-lg font-medium flex items-center">
            <p className="">Hi there, a coder with a passion of 3 am</p>
            <img src={CoffeeGif} alt="" className="w-8 h-auto mb-2" />
            <p>and alot of code.</p>
          </div>
          <div>
            <div className="px-8 py-2 text-[#efefef] rounded-lg font-medium flex items-center justify-center gap-8">
              <a href="https://www.linkedin.com/in/sarthak-wadegaonkar/">
                <div className="bg-[#0077B520] p-2 rounded-lg hover:bg-[#0077B540]">
                  <FaLinkedin className="w-8 h-auto text-[#0077B5]" />
                </div>
              </a>
              <a href="https://x.com/Sarthak_Wade">
                <div className="bg-[#efefef20] p-2 rounded-lg hover:bg-[#efefef40]">
                  <FaSquareXTwitter className="w-8 h-auto text-[#efefef]" />
                </div>
              </a>
              <a href="https://www.instagram.com/sarthak_wadegaonkar/">
                <div className="bg-[#d6297620] p-2 rounded-lg hover:bg-[#d6297640]">
                  <FaInstagram className="w-8 h-auto text-[#d62976]" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-1/2 h-full flex items-center justify-center">
        <Timeline />
      </div> */}
    </div>
  );
};

export default Hero;
