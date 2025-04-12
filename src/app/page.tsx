import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import CareerHistory from "./components/Career/CareerHistory";
import Project from "./components/Projects/Project";

export default function Home() {
  return (
    <div className="h-[4000px]">
      <Navbar />
      <div className="h-[89vh] flex items-center justify-center"><Header /></div>
      <div className="mt-[100px]">
        <Skills />
      </div>
      <div className="mt-[100px] flex items-center justify-center w-full"><CareerHistory /></div>
      <div className="mt-[100px] flex items-center justify-center w-full">
        <Project />
      </div>
    </div>
  );
}
