import { useState } from "react";
import Hero from "./components/Hero";
import Skill from "./components/Skill";
import Lang from "./components/Lang";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="pt-4 text-[#020202] bg-[#f8f7f3]">
      <Navbar />
      <Hero />
      <Lang />
      <Skill />
    </div>
  );
}

export default App;
