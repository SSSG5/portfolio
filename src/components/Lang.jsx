import React, { useEffect, useState } from "react";

const Lang = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    fetch("/languages.json")
      .then((res) => res.json())
      .then((data) => setSections(data));
  }, []);

  return (
    <div className="px-20 bg-[#020202] text-[#f8f7f3] h-screen">
      <h2 className="text-7xl font-bold text-start mb-12 relative -top-6">
        languages & tools
      </h2>
      {/* Wrap in grid with 2 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-20 ">
        {sections.map((section, index) => (
          <div key={index} className="w-full">
            <h3 className="text-2xl font-semibold mb-6 text-start">
              {section.section}
            </h3>
            <div className="flex flex-wrap gap-4 px-4">
              {section.items.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center space-y-2">
                  <div
                    className="w-16 h-16 flex items-center justify-center rounded-2xl shadow-lg"
                    style={{
                      background: `${item.dominantColor}20`,
                      border: `2px solid ${item.dominantColor}`,
                    }}
                  >
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="w-10 h-10"
                    />
                  </div>
                  <p className="text-sm font-medium">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lang;
