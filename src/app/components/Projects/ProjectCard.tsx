// 'use client'
// import React, { useEffect, useState } from 'react'
// import Image, { StaticImageData } from 'next/image'
// import TenTimesLogo from '/public/10timeslogo.png'
// import { motion } from 'framer-motion'
// import { ArrowUpRight } from 'lucide-react'
// import Link from 'next/link'

// interface Project {
//   name: string;
//   desc: string;
//   image: StaticImageData
//   link: string;
// }

// interface Props {
//   project: Project;
// }

// const ProjectCard = ({ project }: Props) => {

//   const [isMobile, setIsMobile] = useState<boolean>(false)

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 500);
//     };
//     // Initial check
//     handleResize();
//     // Listen to resize events
//     window.addEventListener('resize', handleResize);
//     // Cleanup on unmount
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <motion.div
//       whileTap={{ scale: 0.6, transition: { duration: .1 } }}
//       className="rounded-lg transition-all duration-300 group
//       relative cursor-pointer w-[272px] h-[382px] flex items-center justify-center">
//       <div className="absolute inset-0 -z-10 rounded-lg bg-[linear-gradient(120deg,#87D6A7,#131313,#131313,#50CC81)] transition-opacity duration-500 group-hover:opacity-0 max-[500px]:hidden" />
//       <div className="absolute inset-0 -z-10 rounded-lg bg-[linear-gradient(180deg,#87D6A7,#131313,#131313,#50CC81)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 max-[500px]:hidden" />
//       <Link href={project.link} target='_blank' 
//       className={`w-[270px] h-[380px] ${isMobile ? "bg-gradient-to-b from-black/60 to-transparent backdrop-blur-[3px] rounded-lg p-1 border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] transition-all duration-300 hover:from-black/70 hover:to-transparent" : "bg-[linear-gradient(71deg,#131313,#131313,#1c1c1c,#131313,#131313)] rounded-lg p-1"} `}>
//         <Image
//           src={project.image}
//           alt="image"
//           className="w-full h-[150px] object-cover rounded-md"
//           unoptimized
//         />
//         <div className='p-2 flex flex-col justify-between h-[222px]'>
//           <div className='flex flex-col gap-2'>
//             <div className="font-medium text-[30px] bg-gradient-to-r from-[#faf2dc] to-[#faf2dc] bg-clip-text text-transparent transition-all duration-300 group-hover:from-[#56ccf2] group-hover:to-[#006dff] flex items-center gap-2">
//               {project.name}
//               {(project.link.includes("whr") || project.link.includes("10times")) && <Image src={TenTimesLogo} alt='logo' width={15}/>}
//             </div>
//             <div className='text-white text-sm'>{project.desc}</div>
//           </div>
//           <button className='group-hover:drop-shadow-[0_10px_10px_rgba(100,100,100,0.25)] border border-gray-600 rounded-lg flex items-center gap-2 justify-center p-1 bg-[linear-gradient(71deg,#131313,#131313,#1c1c1c,#131313,#131313)]'>
//             <span className='text-white font-thin'>Check Out</span>
//             <ArrowUpRight color='white' />
//           </button>
//         </div>
//       </Link>
//     </motion.div>
//   )
// }


// export default ProjectCard

'use client'
import React, { useEffect, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import TenTimesLogo from '/public/10timeslogo.png'
import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
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
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <motion.div 
      whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
      whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
      className="group relative w-[280px] h-[400px]"
    >
      {/* Animated gradient border */}
      {/* <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
       */}
      {/* Main card */}
      {/* <div className={`relative w-full h-full rounded-2xl overflow-hidden transition-all duration-500 ${
        isMobile 
          ? "bg-gradient-to-b from-black/60 to-transparent backdrop-blur-sm border border-white/10 shadow-2xl" 
          : "bg-[linear-gradient(71deg,#131313,#131313,#1c1c1c,#131313,#131313)] border border-gray-700/30 shadow-2xl group-hover:border-gray-600/50"
      }`}> */}
      <div className={`relative w-full h-full rounded-2xl overflow-hidden transition-all duration-500 ${"bg-gradient-to-b from-black/60 to-transparent backdrop-blur-sm border border-white/10 shadow-2xl" }`}>
        
        {/* Subtle inner glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <Link href={project.link} target='_blank' className="block w-full h-full">
          {/* Image container */}
          <div className="relative overflow-hidden rounded-t-2xl">
            <Image 
              src={project.image} 
              alt={project.name}
              className="w-full h-[180px] object-cover transition-transform duration-700 group-hover:scale-110" 
              unoptimized 
            />
            {/* Image overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
            
            {/* External link indicator */}
            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/50">
              <ExternalLink size={14} className="text-white" />
            </div>
          </div>
          
          {/* Content */}
          <div className='p-6 flex flex-col justify-between h-[220px]'>
            <div className='space-y-4'>
              {/* Title */}
              <div className="flex items-center gap-3">
                <h3 className="font-semibold text-2xl bg-gradient-to-r from-[#faf2dc] to-[#faf2dc] bg-clip-text text-transparent transition-all duration-300 group-hover:from-[#56ccf2] group-hover:to-[#2f80ed]">
                  {project.name}
                </h3>
                {(project.link.includes("whr") || project.link.includes("10times")) && (
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <Image src={TenTimesLogo} alt='logo' width={16} height={16} className="rounded-full"/>
                  </div>
                )}
              </div>
              
              {/* Description */}
              <p className='text-gray-300 text-sm leading-relaxed line-clamp-3'>
                {project.desc}
              </p>
            </div>
            
            {/* CTA Button */}
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className='mt-6 w-full group/btn relative overflow-hidden rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-600/50 h-[40px] transition-all duration-300 hover:from-gray-700 hover:to-gray-800 hover:border-gray-500/50 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer'
            >
              {/* Button gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-purple-600/0 to-emerald-600/0 group-hover/btn:from-blue-600/10 group-hover/btn:via-purple-600/10 group-hover/btn:to-emerald-600/10 transition-all duration-500" />
              
              <div className='relative flex items-center justify-center gap-2 '>
                <span className='text-white font-medium text-sm tracking-wide'>
                  View Project
                </span>
                <ArrowUpRight 
                  size={16} 
                  className='text-white transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5' 
                />
              </div>
            </motion.button>
          </div>
        </Link>
      </div>
    </motion.div>
  )
}

export default ProjectCard