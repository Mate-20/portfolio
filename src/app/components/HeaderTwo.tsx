'use client'
import React, { useEffect, useState } from 'react'
import { Plus, SquareTerminal, ChevronDown, Minus, Square, X } from 'lucide-react'
import { motion } from 'framer-motion'

const HeaderTwo = () => {
  const lines = [
    "Hi",
    "My Name is Akash Jindal. I am a Software Developer with 2 Years of Industry Experience.",
    "Skilled in React, Next.js, Framer Motion, and much more.",
    "Always learning, always building 🚀"
  ]

  const [typedLines, setTypedLines] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState('')
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (lineIndex < lines.length) {
        if (charIndex < lines[lineIndex].length) {
          setCurrentLine(prev => prev + lines[lineIndex][charIndex])
          setCharIndex(prev => prev + 1)
        } else {
          setTypedLines(prev => [...prev, lines[lineIndex]])
          setCurrentLine('')
          setCharIndex(0)
          setLineIndex(prev => prev + 1)
        }
      }
    }, 50)
    return () => clearTimeout(timeout)
  }, [charIndex, lineIndex, lines])
  
  return (
    <div className='flex flex-col w-full items-center justify-center'>
      {/* <Heading text='About Me' size={60}/> */}
      <div className='w-full flex h-[380px] overflow-hidden items-start justify-center'>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ amount: 0.7 }}
          // transition={{duration : 0.2}}
          className='flex flex-col w-[80%] shadow-[0_15px_20px_rgba(86,227,159,0.1)] rounded-lg '>
          <div className='flex items-center justify-between h-[45px] bg-[#27272a] w-full rounded-t-lg'>
            <div className='flex items-end gap-2 pl-3 h-full'>
              <div className='text-white flex items-center gap-2 bg-black rounded-t-md p-2 h-[35px] w-[200px] max-[400px]:w-[180px]'>
                <SquareTerminal height={18} />
                <span className='text-white text-sm max-[400px]:text-xs'>Windows PowerShell</span>
                <span>x</span>
              </div>
              <div className='flex items-center gap-2 mb-2 max-[490px]:hidden'>
                <Plus height={15} color='white' />
                <div className='h-[20px] bg-white w-[1px]'></div>
                <ChevronDown height={15} color='white' />
              </div>

            </div>
            <div className='flex h-full items-center text-white'>
              <div className='h-full flex items-center justify-center hover:bg-[#444444] w-[35px] max-[400px]:w-[30px]'>
                <Minus height={15} /></div>
              <div className='h-full flex items-center justify-center hover:bg-[#444444] w-[35px] max-[400px]:w-[30px]'>
                <Square height={15} /></div>
              <div className='h-full flex items-center justify-center rounded-se-lg hover:bg-red-500 w-[35px] max-[400px]:w-[30px]'>
                <X height={15} /></div>
            </div>
          </div>
          {/* Terminal Body */}
          <div className='bg-black text-[#60e9d8] font-mono text-sm p-4 w-full h-[300px] rounded-b-lg overflow-y-auto'>
            {typedLines.map((line, i) => (
              <div key={i}>
                <span className="text-[#4ee16b]">PS C:\akash\portfolio&gt;</span> {line}
              </div>
            ))}
            {lineIndex < lines.length && (
              <div>
                <span className="text-[#4ee16b]">PS C:\akash\portfolio&gt;</span> {currentLine}
                <span className="animate-pulse">█</span>
              </div>
            )}
          </div>

        </motion.div>
      </div>
    </div>
  )
}

export default HeaderTwo