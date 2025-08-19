// MovingStrip.jsx
import React from "react";

const skills = ["UI/UX", "Full Stack", "AI & ML", "IoT"];

const MovingStrip = () => {
  return (
    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 overflow-hidden z-0 font-poppins rounded-xl">
      <div className="flex whitespace-nowrap border border-black/5 bg-black/10 shadow-lg backdrop-blur-3xl py-2">
        <div className="animate-marquee flex">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="mx-8 text-lg font-semibold text-white drop-shadow"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="animate-marquee flex" aria-hidden="true">
          {skills.map((skill, index) => (
            <span
              key={`duplicate-${index}`}
              className="mx-8 text-lg font-semibold text-white drop-shadow"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovingStrip;
