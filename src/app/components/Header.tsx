'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Profile from '/public/profile.png'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

const Header = () => {

  const [color, setColor] = useState<string>("#ffffff")

  useEffect(() => {
    setTimeout(() => {
      setColor("var(--prim-text)")
    }, 1000)
  }, [])


  // Scroll hook to track vertical scrolling progress
  const { scrollY } = useScroll();

  const smoothScrollY = useSpring(scrollY, {
    stiffness: 80,
    damping: 10,
    mass: 0.5,
  });
  // Scale effect for "Software Developer" (grows as you scroll)
  const scale = useTransform(smoothScrollY, [50, 300], [1.2, 2.5], {
    clamp: false,
  });
  const opacity = useTransform(scrollY, [0, 150], [1, 0]);

  // Underline width effect (expands as you scroll)
  const underlineWidth = useTransform(smoothScrollY, [0, 300], ["0%", "100%"]);
  // Underline opacity effect (fades in as you scroll)
  const underlineOpacity = useTransform(smoothScrollY, [0, 150], [0, 1]);

  return (
    <div className='flex items-center justify-evenly w-full'>
      <div className='flex flex-col'>
        <motion.div style={{ opacity }}>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: .5, delay: .5 }}
            className='text-[var(--prim-text)] text-xs tracking-widest font-extralight mb-3'>HELLO I'M</motion.div>
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: .5, delay: .5 }}
            className='text-white font-semibold text-[60px] leading-[64px] tracking-wide'>
            <div className='flex items-center'><span className='text-[95px]'>A</span><span>kash</span></div>
            <span className='ml-4'>Jindal</span>
          </motion.h1>
        </motion.div>
        <motion.div
          style={{ scale }}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: .5, delay: .5 }}
          className='text-white text-lg'>
          <div className='flex items-center gap-1'>
            <span>An eager</span>
            <span
              className={`text-[${color}] inline-block transition-color duration-500 font-semibold`}>
              Software Developer
            </span>
          </div>
          <motion.div
            style={{ width: underlineWidth, opacity: underlineOpacity }}
            className="h-[1px] bg-[var(--prim-text)]"
          ></motion.div>
        </motion.div>
        {/* Underline animation */}

      </div>
      <motion.div
        initial={{ scale: 0.8, opacity : 0 }}
        animate={{ scale: 1, opacity : 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 10, duration : 0.8 }}
        className="w-[400px] h-[400px] overflow-hidden rounded-full bg-[#262626] relative"
      >
        {/* <Image src={Profile} alt="profile" className="absolute h-[450px] top-[-40px]" /> */}
      </motion.div>
    </div>
  )
}

export default Header