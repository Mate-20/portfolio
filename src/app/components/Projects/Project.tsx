'use client'
import React, { useState } from 'react'
import Whr from '/public/projects/whr.png'
import Gtm from '/public/projects/gtm.png'
import Portfolio from '/public/projects/portfolio.png'
import Event from '/public/projects/event.png'
import Youtube from '/public/projects/youtube.png'
import Placeholder from '/public/projects/placeholder.png'
import ProjectCard from './ProjectCard'
import { motion } from 'framer-motion';
import { StaticImageData } from 'next/image';

interface Project {
  name: string;
  desc: string;
  image: StaticImageData
}
const ProjectRow: React.FC<{ projects: Project[]; delayOffset: number }> = ({ projects, delayOffset }) => {

  return (
    <div className="flex items-center gap-[50px]">
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

  const projects = [
    { name: "Whr.ai", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint asperiores tempora alias perspiciatis porro voluptates at architecto saepe quidem veritatis!", image: Whr },
    { name: "Whr.ai", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint asperiores tempora alias perspiciatis porro voluptates at architecto saepe quidem veritatis!", image: Youtube },
    { name: "Whr.ai", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint asperiores tempora alias perspiciatis porro voluptates at architecto saepe quidem veritatis!", image: Gtm },
    { name: "Whr.ai", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint asperiores tempora alias perspiciatis porro voluptates at architecto saepe quidem veritatis!", image: Placeholder },
    { name: "Whr.ai", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint asperiores tempora alias perspiciatis porro voluptates at architecto saepe quidem veritatis!", image: Portfolio },
    { name: "Whr.ai", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint asperiores tempora alias perspiciatis porro voluptates at architecto saepe quidem veritatis!", image: Event }
  ]

  return (
    <div className='flex flex-col items-center gap-10'>
      {Array.from({ length: Math.ceil(projects.length / 3) }, (_, rowIndex) => (
        <ProjectRow
          key={rowIndex}
          projects={projects.slice(rowIndex * 3, rowIndex * 3 + 3)}
          delayOffset={0.2 + rowIndex * 0.1}
        />
      ))}

    </div>
  )
}

export default Project