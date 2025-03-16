'use client'
import { useState, useEffect } from "react";
import { House, Linkedin, Github } from "lucide-react"; // Assuming you're using lucide-react
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Akash_Jindal_resume.pdf"; // Make sure 'resume.pdf' is inside the 'public' folder
    link.download = "Akash_Jindal_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className={`flex items-center justify-between p-4 sticky top-0 bg-[var(--foreground)] z-10 transition-shadow duration-300 ${!scrolled
          ? "shadow-[0_10px_50px_-15px_rgba(86,227,159,0.1)]"
          : "shadow-[0_20px_30px_-15px_rgba(0,0,0,0.3)]"
        }`}
    >
      <div>
        <House color="white" />
      </div>
      <div className="flex gap-5 items-center">
        <Link href={"https://www.linkedin.com/in/akash-jindal-2258771a9/"} target="_blank"><Linkedin color="white" /></Link>
        <Link href={"https://github.com/Mate-20/MyProjects"} target="_blank"><Github color="white" /></Link>
        <motion.button
        whileTap={{scale : 0.9}}
          onClick={handleDownload}
          className="border cursor-pointer border-[var(--prim-text)] rounded text-[var(--prim-text)] px-4 py-1 
             transition-colors duration-300 ease-in-out hover:bg-[#56E39F] hover:text-black"
        >
          My Resume
        </motion.button>

      </div>
    </div>
  );
};

export default Navbar;
