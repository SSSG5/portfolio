import { useState } from "react";
import Hero from "./components/Hero";
import Skill from "./components/Skill";
import Lang from "./components/Lang";

function App() {
  return (
    <div className="text-[#efefef]">
      <Hero />
      <Lang />
      <Skill />
    </div>
  );
}

export default App;
