import { motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface Props {
  company: { companyName: string, logo: StaticImageData, designation: string, timeline: string, summary: string }
}

const CarrerCard = ({ company }: Props) => {
  return (
    <div className='flex items-start relative'>
      <div className='flex items-center gap-8 min-w-[350px]'>
        <div className='perspective-1000'>
          <motion.div 
          initial={{rotateY : 0}}
          viewport={{amount : 0.5}}
          whileInView={{rotateY : 360}}
          transition={{delay : 0.2, duration : 0.8}}
          className='w-[50px] h-[50px] border border-[#303030] shadow-lg bg-[#212121] rounded-full flex items-center justify-center'>
            <Image src={company.logo} alt='logo' className={company.companyName === "10Times" ? "rounded-full" : ""} width={40} height={40} />
          </motion.div>
        </div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ amount: 0.5 }}
          className='text-[var(--sec-text)] text-[24px] font-medium'>{company.timeline}</motion.div>
      </div>
      <div className='flex flex-col ml-[80px]'>
        <motion.div
          viewport={{ amount: 0.4 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          initial={{ y: -10, x: -20, opacity: 0 }}
          whileInView={{ y: 0, x: 0, opacity: 1 }}
          className='text-white text-[20px] font-semibold'>{company.designation}</motion.div>
        <motion.div
          viewport={{ amount: 0.4 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          initial={{ y: -10, x: -20, opacity: 0 }}
          whileInView={{ y: 0, x: 0, opacity: 1 }}
          className='text-[var(--prim-text)] text-[20px] font-medium mt-2'>{company.companyName}</motion.div>
        <motion.div
          viewport={{ amount: 0.4 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          initial={{ y: -10, x: -20, opacity: 0 }}
          whileInView={{ y: 0, x: 0, opacity: 1 }}
          className='text-white mt-4'>{company.summary}</motion.div>
      </div>
    </div>
  )
}

export default CarrerCard