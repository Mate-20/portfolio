
import { motion } from 'framer-motion';
import React from 'react'

const Dot = () => {
  // Create a grid of dots
  const dots = Array.from({ length: 50 }, (_, i) => ({
    x: Math.random() * 100, // Random X position in percentage
    y: Math.random() * 100, // Random Y position in percentage
    delay: Math.random() * 0.5, // Random delay for a natural effect
  }));
  return (
    <div className="absolute inset-0 w-full h-full -z-10">
      {dots.map((dot, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 0.8, delay: dot.delay, ease: "easeOut" }}
          className="absolute h-[8px] w-[8px] rounded-full shadow-md"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(133,133,133,1) 50%, rgba(47,47,47,1) 100%)",
            top: `${dot.y}%`,
            left: `${dot.x}%`,
          }}
        ></motion.div>
      ))}
    </div>
  );
}

export default Dot
