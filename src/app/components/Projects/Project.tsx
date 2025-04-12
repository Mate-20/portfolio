'use client'
import React, { useEffect, useRef, useState } from 'react'
import Whr from '/public/projects/whr.png'
import Gtm from '/public/projects/gtm.png'
import Portfolio from '/public/projects/portfolio.png'
import Event from '/public/projects/event.png'
import Youtube from '/public/projects/youtube.png'
import Placeholder from '/public/projects/placeholder.png'
import Ecom from '/public/projects/ecom.png'
import SkillCircle from '/public/skillcircle.png'
import ProjectCard from './ProjectCard'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import Heading from '../Heading'

interface Project {
  name: string;
  desc: string;
  image: StaticImageData
  link: string;
}
const ProjectRow: React.FC<{ projects: Project[]; delayOffset: number }> = ({ projects, delayOffset }) => {

  return (
    <div className="flex items-center  gap-[50px]">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, delay: index * 0.1 + delayOffset },
          }}
          viewport={{ amount: 0.5 }}
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </div>
  );
};

const Project = () => {

  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll()
  const [scrollRange, setScrollRange] = useState({ start: 1000, end: 1500 })

  useEffect(() => {
    if (ref.current) {
      const start = ref.current.offsetTop
      const end = start + ref.current.clientHeight
      setScrollRange({ start, end })
    }
  }, []) // runs once after mount
  const rotateRaw = useTransform(scrollY, [scrollRange.start, scrollRange.end], [0, 360], { clamp: false })
  const rotateZ = useSpring(rotateRaw, {
    stiffness: 80,
    damping: 20,
    mass: 1
  })

  const projects = [
    { name: "Whr.ai", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint asperiores tempora alias perspiciatis porro voluptates at architecto saepe quidem veritatis!", image: Whr, link: "https://whr.ai" },
    { name: "GTM", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint asperiores tempora alias perspiciatis porro voluptates at architecto saepe quidem veritatis!", image: Gtm, link: "https://gtm.whr.ai/internal" },
    { name: "Portfolio", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint asperiores tempora alias perspiciatis porro voluptates at architecto saepe quidem veritatis!", image: Portfolio, link: "https://akashjindal.vercel.app/" },
    { name: "Youtube Clone", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint asperiores tempora alias perspiciatis porro voluptates at architecto saepe quidem veritatis!", image: Youtube, link: "https://github.com/Mate-20/youtube-clone" },
    { name: "E-commerce App", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint asperiores tempora alias perspiciatis porro voluptates at architecto saepe quidem veritatis!", image: Ecom, link: "https://github.com/Mate-20/MyProjects/tree/master/Java%20%2B%20Angular%20E%20commerce" },
    { name: "Events App", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint asperiores tempora alias perspiciatis porro voluptates at architecto saepe quidem veritatis!", image: Event, link: "https://github.com/Mate-20/react-event-app" },
    { name: "Notes App", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint asperiores tempora alias perspiciatis porro voluptates at architecto saepe quidem veritatis!", image: Placeholder, link: "https://github.com/Mate-20/react-notes-app" }
  ]

  return (
    <div ref={ref} className='flex flex-col items-center justify gap-10 relative w-full'>
      <motion.div style={{ rotateZ }} className='w-[400px] h-[400px] -top-[150px] absolute -z-10 opacity-50'>
        <Image src={SkillCircle} alt='skill' width={400} height={400} unoptimized/>
      </motion.div>
      <Heading text='Projects' size={60} />
      <div className='flex flex-col items-start gap-10'>
        {Array.from({ length: Math.ceil(projects.length / 3) }, (_, rowIndex) => (
          <ProjectRow
            key={rowIndex}
            projects={projects.slice(rowIndex * 3, rowIndex * 3 + 3)}
            delayOffset={0.2 + rowIndex * 0.1}
          />
        ))}
      </div>

    </div>
  )
}

export default Project