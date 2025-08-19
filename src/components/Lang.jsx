import React, { useEffect, useState } from "react";

const Lang = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    fetch("/languages.json")
      .then((res) => res.json())
      .then((data) => setSections(data));
  }, []);

  return (
    <div className="py-10 px-6 md:px-10 lg:px-20 bg-[radial-gradient(circle_at_right,rgba(50,150,255,1)_0%,rgba(100,100,255,0.8)_5%,rgba(120,50,200,0.7)_15%,rgba(20,10,50,0.7)_30%,black_50%)]">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Languages & Tools
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
