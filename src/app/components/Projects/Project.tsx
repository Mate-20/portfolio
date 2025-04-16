'use client'
import React, { useEffect, useRef, useState } from 'react'
import Whr from '/public/projects/whr.png'
import Gtm from '/public/projects/gtm.png'
import Portfolio from '/public/projects/portfolio.png'
import Event from '/public/projects/event.jpg'
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
    {
      name: "Whr.ai",
      desc: "AI-powered location intelligence platform for businesses and developers.",
      image: Whr,
      link: "https://whr.ai"
    },
    {
      name: "GTM",
      desc: "Internal tool for managing go-to-market strategies, leads, and outreach.",
      image: Gtm,
      link: "https://gtm.whr.ai/internal"
    },
    {
      name: "Portfolio",
      desc: "My personal portfolio showcasing projects, skills, and experience.",
      image: Portfolio,
      link: "https://akashjindal.vercel.app/"
    },
    {
      name: "Youtube Clone",
      desc: "A functional YouTube UI clone built with React and RapidAPI.",
      image: Youtube,
      link: "https://github.com/Mate-20/youtube-clone"
    },
    {
      name: "E-commerce App",
      desc: "Full-stack e-commerce platform using Java Spring Boot and Angular.",
      image: Ecom,
      link: "https://github.com/Mate-20/MyProjects/tree/master/Java%20%2B%20Angular%20E%20commerce"
    },
    {
      name: "Events App",
      desc: "React-based app to create, manage, and browse local events.",
      image: Event,
      link: "https://github.com/Mate-20/react-event-app"
    },
    {
      name: "Notes App",
      desc: "Simple and responsive notes app with CRUD functionality.",
      image: Placeholder,
      link: "https://github.com/Mate-20/react-notes-app"
    }
  ]

  return (
    <div ref={ref} className='flex flex-col items-center justify gap-10 relative w-full'>
      <motion.div style={{ rotateZ }} className='w-[400px] h-[400px] -top-[150px] absolute -z-10 
      opacity-6 0 max-[500px]:sticky max-[500px]:top-[40%] max-[500px]:w-[300px] max-[500px]:h-[300px] 
      max-[400px]:h-[250px] max-[400px]:w-[250px] max-[500px]:opacity-100'>
        <Image src={SkillCircle} alt='skill' width={400} height={400} unoptimized />
      </motion.div>
      <Heading text='Projects' size={60} />
      <div className='w-[900px] grid grid-cols-3 max-[940px]:grid-cols-2 max-[940px]:w-[700px] max-[710px]:w-[90%] max-[590px]:grid-cols-1 gap-10 place-items-center'>
        {projects.map((project, key) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 40, scale : 0.8 }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale : 1,
              transition: { duration: 0.2, delay: key * 0.1 },
            }}
            viewport={{ amount: 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </div >
  )
}

export default Project