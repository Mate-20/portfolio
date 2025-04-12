'use client'
import React from 'react'
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
  return (
    <motion.div
      whileTap={{ scale: 0.6, transition: { duration: .1 } }}
      className="p-[1px] rounded-lg transition-all duration-300 group
      relative cursor-pointer">
      <div className="absolute inset-0 -z-10 rounded-lg bg-[linear-gradient(120deg,#87D6A7,#131313,#131313,#50CC81)] transition-opacity duration-500 group-hover:opacity-0" />
      <div className="absolute inset-0 -z-10 rounded-lg bg-[linear-gradient(180deg,#87D6A7,#131313,#131313,#50CC81)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="w-[270px] h-[380px] bg-[linear-gradient(71deg,#131313,#131313,#1c1c1c,#131313,#131313)] rounded-lg p-1">
        <Image
          src={project.image}
          alt="image"
          className="w-full h-[150px] object-cover rounded-md"
          unoptimized
        />
        <Link href={project.link} target='_blank' className='p-2 flex flex-col justify-between h-[222px]'>
          <div className='flex flex-col gap-2'>
            <div className="font-medium text-[30px] bg-gradient-to-r from-[#faf2dc] to-[#faf2dc] bg-clip-text text-transparent transition-all duration-300 group-hover:from-[#56ccf2] group-hover:to-[#006dff] flex items-center gap-2">
              {project.name}
              {project.link.includes("whr") && <Image src={TenTimesLogo} alt='logo' width={15}/>}
            </div>
            <div className='text-white text-sm'>{project.desc}</div>
          </div>
          <button className='group-hover:drop-shadow-[0_10px_10px_rgba(100,100,100,0.25)] border border-gray-600 rounded-lg flex items-center gap-2 justify-center p-1 bg-[linear-gradient(71deg,#131313,#131313,#1c1c1c,#131313,#131313)]'>
            <span className='text-white font-thin'>Check Out</span>
            <ArrowUpRight color='white' />
          </button>
        </Link>
      </div>
    </motion.div>
  )
}


export default ProjectCard