import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface Props {
  company: { companyName: string, logo: StaticImageData, designation: string, timeline: string, summary: string }
}

const CarrerCard = ({ company }: Props) => {
  return (
    <div className='flex items-start relative'>
      <div className='flex items-center gap-8 min-w-[350px]'>
        <div className='w-[50px] h-[50px] border border-[#303030] shadow-lg bg-[#212121] rounded-full flex items-center justify-center'>
          <Image src={company.logo} alt='logo' className={company.companyName === "10Times" ? "rounded-full" : ""} width={40} height={40} />
        </div>
        <div className='text-[var(--sec-text)] text-[24px] font-medium'>{company.timeline}</div>
      </div>
      <div className='flex flex-col ml-[80px]'>
        <div className='text-white text-[20px] font-semibold'>{company.designation}</div>
        <div className='text-[var(--prim-text)] text-[20px] font-medium mt-2'>{company.companyName}</div>
        <div className='text-white mt-4'>{company.summary}</div>
      </div>
    </div>
  )
}

export default CarrerCard