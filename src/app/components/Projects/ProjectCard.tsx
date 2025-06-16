'use client'
import React, { useEffect, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import TenTimesLogo from '/public/10timeslogo.png'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

interface Project {
  name: string;
  desc: string;
  image: StaticImageData
  link: string;
}

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {

  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };
    // Initial check
    handleResize();
    // Listen to resize events
    window.addEventListener('resize', handleResize);
    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <motion.div
      whileTap={{ scale: 0.6, transition: { duration: .1 } }}
      className="rounded-lg transition-all duration-300 group
      relative cursor-pointer w-[272px] h-[382px] flex items-center justify-center">
      <div className="absolute inset-0 -z-10 rounded-lg bg-[linear-gradient(120deg,#87D6A7,#131313,#131313,#50CC81)] transition-opacity duration-500 group-hover:opacity-0 max-[500px]:hidden" />
      <div className="absolute inset-0 -z-10 rounded-lg bg-[linear-gradient(180deg,#87D6A7,#131313,#131313,#50CC81)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 max-[500px]:hidden" />
      <Link href={project.link} target='_blank' 
      className={`w-[270px] h-[380px] ${isMobile ? "bg-gradient-to-b from-black/60 to-transparent backdrop-blur-[3px] rounded-lg p-1 border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] transition-all duration-300 hover:from-black/70 hover:to-transparent" : "bg-[linear-gradient(71deg,#131313,#131313,#1c1c1c,#131313,#131313)] rounded-lg p-1"} `}>
        <Image
          src={project.image}
          alt="image"
          className="w-full h-[150px] object-cover rounded-md"
          unoptimized
        />
        <div className='p-2 flex flex-col justify-between h-[222px]'>
          <div className='flex flex-col gap-2'>
            <div className="font-medium text-[30px] bg-gradient-to-r from-[#faf2dc] to-[#faf2dc] bg-clip-text text-transparent transition-all duration-300 group-hover:from-[#56ccf2] group-hover:to-[#006dff] flex items-center gap-2">
              {project.name}
              {(project.link.includes("whr") || project.link.includes("10times")) && <Image src={TenTimesLogo} alt='logo' width={15}/>}
            </div>
            <div className='text-white text-sm'>{project.desc}</div>
          </div>
          <button className='group-hover:drop-shadow-[0_10px_10px_rgba(100,100,100,0.25)] border border-gray-600 rounded-lg flex items-center gap-2 justify-center p-1 bg-[linear-gradient(71deg,#131313,#131313,#1c1c1c,#131313,#131313)]'>
            <span className='text-white font-thin'>Check Out</span>
            <ArrowUpRight color='white' />
          </button>
        </div>
      </Link>
    </motion.div>
  )
}


export default ProjectCard