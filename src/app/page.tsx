'use client'
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import CareerHistory from "./components/Career/CareerHistory";
import Project from "./components/Projects/Project";
import CustomCursor from "./components/CustomCursor";
import { useState } from "react";
import HeaderTwo from "./components/HeaderTwo";

export default function Home() {
  // const [hovering, setHovering] = useState(false)
  return (
    <div className="w-[100vw]">
      <Navbar />
      <div className="h-[89vh] w-full flex items-center justify-center"><HeaderTwo /></div>
      <div className="mt-[100px]">
        <Skills />
      </div>
      <div className="mt-[100px] flex items-center justify-center w-full"><CareerHistory /></div>
      <div className="mt-[300px] flex items-center justify-center w-full relative">
        {/* {hovering && <CustomCursor />} */}
        <Project />
      </div>
    </div>
  );
}
