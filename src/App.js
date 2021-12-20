import "./style/reset.css";
import "./style/app.css";
import React from "react";
import GenInfoCard from "./components/GeneralInfoCard.js";
import About from "./components/About";
import WorkExperienceCard from "./components/WorkExperienceCard";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="App">
      <GenInfoCard />
      <About />
      <WorkExperienceCard />
      <Skills />
    </div>
  );
}
