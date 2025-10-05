'use client'
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import CareerHistory from "./components/Career/CareerHistory";
import Project from "./components/Projects/Project";
import CustomCursor from "./components/CustomCursor";
import { useState } from "react";
import HeaderTwo from "./components/HeaderTwo";
import ProjectBackStrip from "./components/Projects/ProjectBackStrip";

export default function Home() {
  // const [hovering, setHovering] = useState(false)
  return (
    <div className="">
      <Navbar />
      <div className="h-[89vh] w-full flex items-center justify-center"><HeaderTwo /></div>
      <div className="mt-[100px]">
        <Skills />
      </div>
      <div className="mt-[100px] flex items-center justify-center w-full"><CareerHistory /></div>
      <div className="mt-[300px] flex items-center justify-center w-full relative mb-[80px]">
        <div className="absolute w-[900px] h-full top-[100px] max-[940px]:w-[700px] max-[710px]:w-[90%] 
        max-[590px]:hidden">
          <ProjectBackStrip />
        </div>

        <Project />
      </div>
    </div>
  );
}
