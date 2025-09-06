import { useState } from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Lang from "./components/Lang";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="text-[#020202] bg-[#020617]">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="skills">
        <Lang />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </div>
  );
}

export default App;
