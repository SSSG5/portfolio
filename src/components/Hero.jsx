import React, { useState } from "react";
import PImg from "../assets/sarthak_profile.png";
import BgImg from "../assets/hero/bg1.jpg";
import ResumeImg from "../assets/hero/resume.png";
import ResumePdf from "../assets/docs/resume.pdf";
import { TbFileCv } from "react-icons/tb";
import PdfPopUp from "./PdfPopUp";

const Hero = () => {
  const [showResume, setShowResume] = useState(false);
  return (
    <div className="flex h-screen bg-[BgImg]">
      <div className="w-1/2 flex items-center justify-end"></div>
      <div className="w-1/2 flex items-center justify-start">
        {/* <div className="flex w-4/5 h-3/4 rounded-3xl items-end justify-between bg-[#feb44580] shadow-lg">
          <div className="rounded-bl-3xl rounded-tr-full h-52 w-16 bg-[#f8f7f3]"></div>
          <div className="bg-[#f8f7f3] w-24 h-24 rounded-full rounded-br-none self-start flex items-center justify-center absolute right-28 top-16">
            <button className="bg-black w-20 h-20 hover:scale-110 ease-in-out transition duration-100 rounded-full ">d</button>
          </div>
          <img
            src={PImg}
            alt=""
            className="w-auto h-4/6 mr-10 absolute right-32"
          />
        </div> */}
        <div className="w-4/5 h-3/4 relative">
          <div className="flex w-full h-full border border-[#feb44580] bg-[#feb44580]  backdrop-filter backdrop-blur-3xl rounded-3xl z-0 absolute items-end justify-end">
            <img src={PImg} alt="" className="w-auto h-5/6 mr-10" />
          </div>
          <div className="bg-[#f8f7f3] w-24 h-24 absolute z-10 -right-10 -top-10 rounded-full flex justify-center items-center">
            <button
              onClick={() => setShowResume(true)}
              className="w-20 h-20 rounded-full hover:scale-110 transition ease-in-out duration-100 bg-[#020202] text-[#f8f7f3] flex items-center justify-center"
            >
              <img src={ResumeImg} alt="" className="w-12 h-auto" />
            </button>
          </div>
          <div className="flex absolute bg-[#f8f7f3] h-52 w-16 bottom-0 rounded-bl-3xl rounded-tr-3xl z-10"></div>
        </div>
      </div>
      <PdfPopUp
        open={showResume}
        onClose={() => setShowResume(false)}
        src={ResumePdf}
        title="Resume"
      />
    </div>
  );
};

export default Hero;
