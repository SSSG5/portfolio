import React, { useState, useEffect } from "react";
import StudentGif from "../assets/student.gif";

const Skill = () => {
  const [activeSection, setActiveSection] = useState(false);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    fetch("/lang.json")
      .then((res) => res.json())
      .then((json) => setSections(json))
      .catch((err) => console.error("Failed to fetch languages:", err));
  }, []);

  const handleClick = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="flex items-start justify-start min-h-screen p-20">
      <div className="w-full h-full flex flex-col gap-20">
        {/* Title */}
        <div className="font-poppins font-semibold text-4xl">
          HEY BOSS WHY ME?
        </div>

        {/* Section Tabs (dynamic from JSON) */}
        <div className="font-poppins flex justify-evenly items-center">
          {sections.map((sec, idx) => (
            <div
              key={idx}
              className={`w-1/3 flex justify-center border-b-2 p-2 text-xl hover:text-c-orange hover:border-c-orange cursor-pointer ${
                activeSection === sec.section
                  ? "text-c-orange border-c-orange border-b-4 font-semibold"
                  : ""
              }`}
              onClick={() => handleClick(sec.section)}
            >
              {sec.section.charAt(0).toUpperCase() + sec.section.slice(1)}
            </div>
          ))}
        </div>

        {/* Section Content */}
        <div>
          <div>
            {/* Default */}
            {activeSection === false && (
              <div className="flex items-center justify-center">
                <div className="flex flex-col gap-4 items-center w-1/2 text-3xl">
                  <p>
                    What kind of <span className="text-c-orange">profile</span>{" "}
                    do you want me to fill?
                  </p>
                  <p>Check it out yourself</p>
                </div>
                <div className="w-1/2 flex justify-center">
                  <img
                    src={StudentGif}
                    alt=""
                    className="h-auto w-3/4 rounded-md"
                  />
                </div>
              </div>
            )}

            {/* Dynamic Sections */}
            {sections.map((sec, idx) =>
              activeSection === sec.section ? (
                <div
                  key={idx}
                  className="flex items-start justify-start h-full"
                >
                  {/* Left Column → Stacks */}
                  <div className="flex flex-col gap-6 items-start px-8 w-1/3 h-full">
                    <div className="text-3xl mb-4">Stacks</div>

                    <div className="flex flex-wrap gap-6 w-full">
                      {sec.items.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center rounded-2xl text-white text-lg font-semibold shadow-lg w-min h-12"
                          // style={{ backgroundColor: item.dominantColor }}
                        >
                          {/* Square container with crisp logo */}
                          <div className="w-16 h-16 flex items-center justify-center rounded-md relative bg-white">
                            <img
                              src={item.logo}
                              alt={item.name}
                              className={`relative w-12 h-12 object-contain z-10`}
                            />
                          </div>
                          {/* {item.name} */}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column → Projects */}
                  <div className="w-2/3 h-full flex flex-col items-start px-8 justify-start border-l-2">
                    <div className="text-3xl">Projects</div>
                    {/* You can map your projects here later */}
                  </div>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
