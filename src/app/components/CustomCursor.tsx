// components/CustomCursor.tsx
'use client'
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
    }
    const enter = () => setVisible(true)
    const leave = () => setVisible(false)

    window.addEventListener("mousemove", move)
    window.addEventListener("mouseenter", enter)
    window.addEventListener("mouseleave", leave)

    return () => {
      window.removeEventListener("mousemove", move)
      window.removeEventListener("mouseenter", enter)
      window.removeEventListener("mouseleave", leave)
    }
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      animate={{ x: pos.x, y: pos.y, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.01, ease: "linear" }}>
      <div className="w-5 h-5 rounded-full bg-[rgba(96,233,216,0.5)] border border-[#60e9d8] 
      drop-shadow-[0_0px_3px_rgba(96,233,216,0.9)]" />
    </motion.div>
  )
}

export default CustomCursor
