// import React, { useState } from "react";
// import PImg from "../assets/sarthak_profile.png";
// import BgImg from "../assets/hero/bg3.jpg";
// import ResumeImg from "../assets/hero/resume.png";
// import ResumePdf from "../assets/docs/resume.pdf";
// import PdfPopUp from "./PdfPopUp";
// import Socials from "./Socials";
// import ArrowImg from "../assets/hero/arrow.png";

// const Hero = () => {
//   const [showResume, setShowResume] = useState(false);
//   const [languageCount, setLanguageCount] = useState(0);
//   const [sectionsCount, setSectionsCount] = useState(0);

//   React.useEffect(() => {
//     const fetchLanguages = async () => {
//       try {
//         const response = await fetch("/portfolio/languages.json");
//         const data = await response.json();
//         const total = Array.isArray(data)
//           ? data.reduce(
//               (sum, section) =>
//                 sum + ((section.items && section.items.length) || 0),
//               0
//             )
//           : 0;
//         setLanguageCount(total);
//         setSectionsCount(Array.isArray(data) ? data.length : 0);
//       } catch (e) {
//         // eslint-disable-next-line no-console
//         console.error("Failed to load languages.json", e);
//       }
//     };
//     fetchLanguages();
//   }, []);
//   return (
//     <div className="flex h-screen gap-4">
//       <div className="w-1/2 flex flex-col justify-center gap-10 px-10">
//         <h1 className="text-7xl font-poppins text-[#f8f7f3] font-semibold">
//           Sarthak Wadegaonkar
//         </h1>
//         <div className="flex justify-end">
//           <p className="text-lg font-inter text-[#f8f7f3] italic">
//             Developing till my <span className="text-c-cream">coffee</span>{" "}
//             arrives.
//           </p>
//         </div>
//         <Socials />
//         <div className="flex gap-8">
//           <div className="relative w-1/2">
//             <h2 className="text-7xl font-roboto font-semibold italic text-[#f8f7f3]">
//               {languageCount - 1}
//               <sup className="text-c-cream"> +</sup>
//             </h2>
//             <p className="text-base text-[#f8f7f3]">
//               Mastery at Languages and Frameworks{" "}
//             </p>
//           </div>
//           <div className="w-1/2">
//             <h2 className="text-7xl font-roboto font-semibold italic text-[#f8f7f3]">
//               {sectionsCount}
//               <sup className="text-c-cream"> +</sup>
//             </h2>
//             <p className="text-base text-[#f8f7f3]">Mastery at Industries </p>
//           </div>
//         </div>
//       </div>
//       <div className="w-1/2 flex items-center justify-start relative">
//         <div className="absolute w-min h-min flex flex-col z-20 right-12 top-4">
//           <p className="z-50 w-min h-min text-[#f8f7f3] font-cursive text-2xl">
//             Résumé
//           </p>
//           <img src={ArrowImg} alt="" className="w-10 h-auto scale-x-[-1]" />
//         </div>
//         <div className="w-4/5 h-3/4 relative">
//           <div className="absolute top-8 left-6 z-30 text-[#f8f7f3] font-cursive">
//             <p className="font-light text-2xl ">
//               Code <span className="text-c-cream">&bull;</span> Coffee{" "}
//               <span className="text-c-cream">&bull;</span> Creativity
//             </p>
//           </div>
//           <div className="flex w-full h-full bg-black/30 backdrop-filter backdrop-blur-3xl rounded-3xl z-0 absolute items-end justify-end overflow-hidden">
//             <img
//               src={PImg}
//               alt=""
//               className="w-auto h-5/6 mr-10 hover:scale-105 duration-200"
//             />
//           </div>
//           <div className="bg-shadow-a0 w-24 h-24 absolute z-10 -right-10 -top-10 rounded-full flex justify-center items-center">
//             <button
//               onClick={() => setShowResume(true)}
//               className="w-20 h-20 rounded-full hover:scale-110 transition ease-in-out duration-100 text-[#f8f7f3] flex items-center justify-center bg-black/30 backdrop-filter backdrop-blur-3xl border border-black/5"
//             >
//               <img src={ResumeImg} alt="" className="w-10 h-auto" />
//             </button>
//           </div>
//           <div className="flex absolute bg-shadow-a0 h-52 w-16 bottom-0 rounded-bl-3xl rounded-tr-3xl z-10"></div>
//         </div>
//       </div>
//       <PdfPopUp
//         open={showResume}
//         onClose={() => setShowResume(false)}
//         src={ResumePdf}
//         title="Resume"
//       />
//     </div>
//   );
// };

// export default Hero;

import React, { useState } from "react";
import PImg from "../assets/sarthak_profile.png";
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
        const response = await fetch("/portfolio/languages.json");
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
        console.error("Failed to load languages.json", e);
      }
    };
    fetchLanguages();
  }, []);

  return (
    <div className="relative flex flex-col lg:flex-row h-screen gap-4 overflow-hidden bg-slate-950 py-4 px-4 lg:px-0 pt-16 lg:pt-0">
      {/* Blobs Behind */}
      <div className="absolute top-[-220px] right-[-220px] w-[20rem] sm:w-[25rem] lg:w-[35rem] h-[20rem] sm:h-[25rem] lg:h-[35rem] animate-float z-0">
        <div
          className="w-full h-full p-[6px] rounded-[60%_40%_70%_30%/40%_60%_30%_70%] animate-blob 
                        bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700 drop-shadow-[0_0_80px_rgba(59,130,246,0.7)]"
        >
          <div className="w-full h-full rounded-[60%_40%_70%_30%/40%_60%_30%_70%] bg-blue-900/40" />
        </div>
      </div>

      <div className="absolute bottom-[-220px] left-[-220px] w-[20rem] sm:w-[25rem] lg:w-[35rem] h-[20rem] sm:h-[25rem] lg:h-[35rem] animate-float-delayed z-0">
        <div
          className="w-full h-full p-[6px] rounded-[70%_30%_60%_40%/30%_70%_40%_60%] animate-blob-delayed 
                        bg-gradient-to-tr from-blue-500 via-blue-600 to-blue-800 drop-shadow-[0_0_80px_rgba(37,99,235,0.7)]"
        >
          <div className="w-full h-full rounded-[70%_30%_60%_40%/30%_70%_40%_60%] bg-blue-900/40" />
        </div>
      </div>

      {/* Frosted Ice Overlay */}
      <div className="absolute inset-0 backdrop-blur-3xl  z-10"></div>

      {/* Hero Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6 lg:gap-10 px-4 lg:px-10 relative z-20 order-2 lg:order-1">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins text-[#f8f7f3] font-semibold leading-tight">
          Sarthak Wadegaonkar
        </h1>
        <div className="flex justify-center lg:justify-end">
          <p className="text-base sm:text-lg font-inter text-[#f8f7f3] italic text-center lg:text-left">
            Developing till my <span className="text-c-cream">coffee</span>{" "}
            arrives.
          </p>
        </div>
        <div className="flex justify-center lg:justify-start">
          <Socials />
        </div>
        <div className="flex flex-col sm:flex-row gap-6 lg:gap-8">
          <div className="relative flex-1 text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-roboto font-semibold italic text-[#f8f7f3]">
              {languageCount - 1}
              <sup className="text-c-cream"> +</sup>
            </h2>
            <p className="text-sm sm:text-base text-[#f8f7f3]">
              Mastery at Languages and Frameworks{" "}
            </p>
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-roboto font-semibold italic text-[#f8f7f3]">
              {sectionsCount}
              <sup className="text-c-cream"> +</sup>
            </h2>
            <p className="text-sm sm:text-base text-[#f8f7f3]">
              Mastery at Industries{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start relative z-20 order-1 lg:order-2 h-1/2 lg:h-auto">
        <div className="absolute w-min h-min flex flex-col z-20 right-4 lg:right-12 top-4">
          <p className="z-50 w-min h-min text-[#f8f7f3] font-cursive text-xl lg:text-2xl">
            Résumé
          </p>
          <img
            src={ArrowImg}
            alt=""
            className="w-8 lg:w-10 h-auto scale-x-[-1] hidden lg:block"
          />
        </div>
        <div className="w-4/5 h-3/4 relative">
          <div className="absolute top-4 lg:top-8 left-4 lg:left-6 z-30 text-[#f8f7f3] font-cursive">
            <p className="font-light text-lg lg:text-2xl ">
              Code <span className="text-c-cream">&bull;</span> Coffee{" "}
              <span className="text-c-cream">&bull;</span> Creativity
            </p>
          </div>
          <div className="flex w-full h-full bg-black/30 backdrop-blur-3xl rounded-3xl z-0 absolute items-end justify-end overflow-hidden">
            <img
              src={PImg}
              alt=""
              className="w-auto h-4/6 lg:h-5/6 mr-4 lg:mr-10 hover:scale-105 duration-200"
            />
          </div>
          <div className="w-20 lg:w-24 h-20 lg:h-24 absolute z-10 -right-8 lg:-right-10 -top-8 lg:-top-10 rounded-full flex justify-center items-center">
            <button
              onClick={() => setShowResume(true)}
              className="w-16 lg:w-20 h-16 lg:h-20 rounded-full hover:scale-110 transition ease-in-out duration-100 text-[#f8f7f3] flex items-center justify-center bg-black/30 backdrop-blur-3xl border border-black/5"
            >
              <img src={ResumeImg} alt="" className="w-8 lg:w-10 h-auto" />
            </button>
          </div>
          <div className="flex absolute bg-[#020617] h-32 lg:h-52 w-12 lg:w-16 bottom-0 rounded-bl-3xl rounded-tr-3xl z-10"></div>
        </div>
      </div>

      <PdfPopUp
        open={showResume}
        onClose={() => setShowResume(false)}
        src={ResumePdf}
        title="Resume"
      />

      {/* Animations */}
      <style>
        {`
          @keyframes floatTop {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(45vh); }
          }
          @keyframes floatBottom {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-45vh); }
          }
          .animate-float {
            animation: floatTop 14s ease-in-out infinite;
          }
          .animate-float-delayed {
            animation: floatBottom 14s ease-in-out infinite;
            animation-delay: 7s;
          }
          @keyframes blobMorph {
            0%, 100% { border-radius: 60% 40% 70% 30% / 40% 60% 30% 70%; }
            50% { border-radius: 40% 60% 30% 70% / 60% 40% 70% 30%; }
          }
          .animate-blob {
            animation: blobMorph 12s ease-in-out infinite;
          }
          .animate-blob-delayed {
            animation: blobMorph 12s ease-in-out infinite;
            animation-delay: 6s;
          }
        `}
      </style>
    </div>
  );
};

export default Hero;
