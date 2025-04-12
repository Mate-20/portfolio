import { motion } from 'framer-motion';
import React from 'react'

interface Props {
  text: string;
  size: number;
}

const Heading = ({ text, size }: Props) => {
  return (
    <motion.div
      initial={{ textShadow: "0px 0px 0px rgba(100,100,100,0)", y: 20, opacity: 0 }}
      whileInView={{ textShadow: "0px 5px 10px rgba(100,100,100,0.6)", y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ amount: 1 }}
      className={`drop-shadow-[0_5px_20px_rgba(100,100,100,1)] text-[${size}px] font-semibold text-white`}
    >
      {text}
    </motion.div>
  )
}

export default Heading