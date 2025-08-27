import React, { useState } from "react";
import PImg from "../assets/sarthak_profile.png";
import BgImg from "../assets/hero/bg3.jpg";
import ResumeImg from "../assets/hero/resume.png";
import ResumePdf from "../assets/docs/resume.pdf";
import PdfPopUp from "./PdfPopUp";
import Socials from "./Socials";
import ArrowImg from "../assets/hero/arrow.png";

const Hero = () => {
  const [showResume, setShowResume] = useState(false);
  const [languageCount, setLanguageCount] = useState(0);
  const [sectionsCount, setSectionsCount] = useState(0);

  React.useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await fetch("/languages.json");
        const data = await response.json();
        const total = Array.isArray(data)
          ? data.reduce(
              (sum, section) =>
                sum + ((section.items && section.items.length) || 0),
              0
            )
          : 0;
        setLanguageCount(total);
        setSectionsCount(Array.isArray(data) ? data.length : 0);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error("Failed to load languages.json", e);
      }
    };
    fetchLanguages();
  }, []);
  return (
    <div className="flex h-screen gap-4">
      <div className="w-1/2 flex flex-col justify-center gap-10 px-10">
        <h1 className="text-7xl font-poppins text-[#f8f7f3] font-semibold">
          Sarthak Wadegaonkar
        </h1>
        <div className="flex justify-end">
          <p className="text-lg font-inter text-[#f8f7f3] italic">
            Developing till my <span className="text-c-cream">coffee</span>{" "}
            arrives.
          </p>
        </div>
        <Socials />
        <div className="flex gap-8">
          <div className="relative w-1/2">
            <h2 className="text-7xl font-roboto font-semibold italic text-[#f8f7f3]">
              {languageCount - 1}
              <sup className="text-c-cream"> +</sup>
            </h2>
            <p className="text-base text-[#f8f7f3]">
              Mastery at Languages and Frameworks{" "}
            </p>
          </div>
          <div className="w-1/2">
            <h2 className="text-7xl font-roboto font-semibold italic text-[#f8f7f3]">
              {sectionsCount}
              <sup className="text-c-cream"> +</sup>
            </h2>
            <p className="text-base text-[#f8f7f3]">Mastery at Industries </p>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-start relative">
        <div className="absolute w-min h-min flex flex-col z-20 right-12 top-4">
          <p className="z-50 w-min h-min text-[#f8f7f3] font-cursive text-2xl">
            Résumé
          </p>
          <img src={ArrowImg} alt="" className="w-10 h-auto scale-x-[-1]" />
        </div>
        <div className="w-4/5 h-3/4 relative">
          <div className="absolute top-8 left-6 z-30 text-[#f8f7f3] font-cursive">
            <p className="font-light text-2xl ">
              Code <span className="text-c-cream">&bull;</span> Coffee{" "}
              <span className="text-c-cream">&bull;</span> Creativity
            </p>
          </div>
          <div className="flex w-full h-full bg-black/30 backdrop-filter backdrop-blur-3xl rounded-3xl z-0 absolute items-end justify-end overflow-hidden">
            <img
              src={PImg}
              alt=""
              className="w-auto h-5/6 mr-10 hover:scale-105 duration-200"
            />
          </div>
          <div className="bg-shadow-a0 w-24 h-24 absolute z-10 -right-10 -top-10 rounded-full flex justify-center items-center">
            <button
              onClick={() => setShowResume(true)}
              className="w-20 h-20 rounded-full hover:scale-110 transition ease-in-out duration-100 text-[#f8f7f3] flex items-center justify-center bg-black/30 backdrop-filter backdrop-blur-3xl border border-black/5"
            >
              <img src={ResumeImg} alt="" className="w-10 h-auto" />
            </button>
          </div>
          <div className="flex absolute bg-shadow-a0 h-52 w-16 bottom-0 rounded-bl-3xl rounded-tr-3xl z-10"></div>
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
