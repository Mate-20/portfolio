'use client'
import React, { useRef } from 'react'
import TenTimesLogo from '/public/10timeslogo.png'
import NagarroLogo from '/public/nagarrologo.png'
import CarrerCard from './CarrerCard'
import { motion, useScroll, useTransform } from "framer-motion";

const CareerHistory = () => {

  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Dynamically calculate when the timeline should start and end filling
  const startScroll = ref.current?.offsetTop ?? 1000;
  const endScroll = startScroll + (ref.current?.clientHeight ?? 500);

  const timelineHeight = useTransform(scrollY, [startScroll+200, endScroll+300], ["0%", "100%"]);
  const history = [
    {
      companyName: '10Times', logo: TenTimesLogo, designation: "SDE-1", timeline: "2024 Jan - Present",
      summary: "Building and managing interactive frontend UIs using React and Next.js. Integrating with backend APIs and services to fetch and manipulate data.Participating in client meetings to gather requirements, provide updates,and address feedback. Building and managing interactive frontend UIs using React and Next.js.Integrating with backend APIs and services to fetch and manipulate data.Participating in client meetings to gather requirements, provide updates,and address feedback."
    },
    {
      companyName: 'Nagarro', logo: NagarroLogo, designation: "Software Developer Trainee", timeline: "2023 Mar - 2023 Dec",
      summary: "Building and managing interactive frontend UIs using React and Next.js. Integrating with backend APIs and services to fetch and manipulate data.Participating in client meetings to gather requirements, provide updates,and address feedback. Building and managing interactive frontend UIs using React and Next.js.Integrating with backend APIs and services to fetch and manipulate data.Participating in client meetings to gather requirements, provide updates,and address feedback."
    }
  ]

  return (
    <div ref={ref} className='flex flex-col gap-[150px] items-center justify-center w-[70%] relative'>
      {/* Timeline Line */}
      <motion.div
        style={{ height: timelineHeight,
          maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%)",
         }}
        className="absolute left-[25px] top-[85px] w-[1.5px] bg-gradient-to-b from-[#8deb6a] to-[#60e9d8] h-0 z-[-1]"
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
      <div className="absolute left-[25px] top-[85px] w-[1.5px] bg-[#212121] h-full z-[-2]" />

      <div className='text-white text-[50px]'>Carrer History</div>
      <div className='flex flex-col gap-[100px] w-full'>
        {history.map((company, key) => (
          <CarrerCard key={key} company={company} />
        ))}
      </div>
    </div>
  )
}

export default CareerHistory