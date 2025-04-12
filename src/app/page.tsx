'use client'
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import CareerHistory from "./components/Career/CareerHistory";
import Project from "./components/Projects/Project";
import CustomCursor from "./components/CustomCursor";
import { useState } from "react";

export default function Home() {
  // const [hovering, setHovering] = useState(false)
  return (
    <div className="">
      <Navbar />
      <div className="h-[89vh] flex items-center justify-center"><Header /></div>
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
