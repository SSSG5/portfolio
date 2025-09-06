import React, { useEffect, useState } from "react";

const Lang = () => {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Calculate counts
  const sectionsCount = sections.length;
  const languageCount = sections.reduce(
    (total, section) => total + section.items.length,
    0
  );

  console.log("sectionsCount:", sectionsCount);
  console.log("languageCount:", languageCount);

  useEffect(() => {
    const fetchUrl = "/portfolio/languages.json";
    console.log("Lang component mounted, fetching data from:", fetchUrl);
    setLoading(true);
    // Use the correct path that matches Vite base configuration
    fetch(fetchUrl)
      .then((res) => {
        console.log("Fetch response:", res);
        console.log("Response status:", res.status);
        console.log("Response ok:", res.ok);
        console.log("Response headers:", res.headers);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        console.log("Data type:", typeof data);
        console.log(
          "Data length:",
          Array.isArray(data) ? data.length : "Not an array"
        );
        setSections(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  console.log("Current sections state:", sections);
  console.log("Loading:", loading);
  console.log("Error:", error);

  if (loading) {
    return (
      <div className="px-4 sm:px-6 lg:px-10 bg-shadow-a0 text-[#f8f7f3] h-full py-10">
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-start mb-12 relative -top-6">
          languages & tools
        </h2>
        <div className="text-center text-2xl">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="px-4 sm:px-6 lg:px-10 bg-shadow-a0 text-[#f8f7f3] h-full py-10">
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-start mb-12 relative -top-6">
          languages & tools
        </h2>
        <div className="text-center text-2xl text-red-400">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 lg:px-10 bg-[#020617] text-[#f8f7f3] h-full py-10">
      <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-start mb-12 relative -top-6">
        languages & tools
      </h2>

      {/* Wrap in grid with 2 columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-y-16 gap-x-8 lg:gap-x-20 ">
        {sections.map((section, index) => (
          <div key={index} className="w-full">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 lg:mb-6 text-start">
              {section.section}
            </h3>
            <div className="flex flex-wrap gap-3 lg:gap-4 px-2 lg:px-4">
              {section.items.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center space-y-2">
                  <div
                    className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 flex items-center justify-center rounded-2xl shadow-lg"
                    style={{
                      background: `${item.dominantColor || "#666"}20`,
                      border: `2px solid ${item.dominantColor || "#666"}`,
                    }}
                  >
                    <img
                      src={item.logo.replace(/^\//, "./")}
                      alt={item.name}
                      className="w-8 sm:w-9 lg:w-10 h-8 sm:h-9 lg:h-10"
                    />
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-center">
                    {item.name}
                  </p>
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
