'use client'
import React from 'react'
import CssLogo from '/public/skills/csslogo.png'
import FramerLogo from '/public/skills/framerlogo.png'
import GitLogo from '/public/skills/gitlogo.png'
import HtmlLogo from '/public/skills/htmllogo.png'
import JavaLogo from '/public/skills/javalogo.png'
import JsLogo from '/public/skills/jslogo.png'
import NextLogo from '/public/skills/nextjslogo.png'
import ReactLogo from '/public/skills/reactlogo.png'
import SpringLogo from '/public/skills/springlogo.png'
import TailwindLogo from '/public/skills/tailwindlogo.png'
import TsLogo from '/public/skills/tslogo.png'
import WebcompLogo from '/public/skills/webcomplogo.png'
import SqlLogo from '/public/skills/sqllogo.png'
import VercelLogo from '/public/skills/vercellogo.png'
import NodeLogo from '/public/skills/nodejslogo.png'
import PostmanLogo from '/public/skills/postmanlogo.png'
import Image, { StaticImageData } from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import Dot from './Dot'

// Define the Skill type for type safety
interface Skill {
  name: string;
  logo: string | StaticImageData;
}

const SkillRow: React.FC<{ skills: Skill[]; delayOffset: number }> = ({ skills, delayOffset }) => {
  return (
    <div className="flex items-center gap-4">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, rotate: 20 }}
          whileInView={{
            opacity: 1,
            rotate: 0,
            transition: { duration: 0.3, delay: index * 0.1 + delayOffset },
          }}
          viewport={{ amount: 0.5 }}
          whileHover={{ border: "1px solid var(--prim-text)", scale: 1.1 }}
          className="group cursor-default flex items-center gap-2 py-2 px-4 border border-[#303030] bg-[#212121] rounded-[12px] w-fit"
        >
          <Image src={skill.logo} alt={skill.name} width={20} height={20} />
          <div className="font-semibold bg-gradient-to-r from-[#faf2dc] to-[#faf2dc] bg-clip-text text-transparent transition-all duration-300 group-hover:from-[#56ccf2] group-hover:to-[#2f80ed]">
            {skill.name}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const Skills = () => {
  const skillLogos = [
    { name: "CSS", logo: CssLogo },
    { name: "Framer Motion", logo: FramerLogo },
    { name: "Git", logo: GitLogo },
    { name: "HTML", logo: HtmlLogo },
    { name: "Web Components", logo: WebcompLogo },
    { name: "Tailwind CSS", logo: TailwindLogo },
    { name: "Java", logo: JavaLogo },
    { name: "JavaScript", logo: JsLogo },
    { name: "NextJs", logo: NextLogo },
    { name: "React", logo: ReactLogo },
    { name: "Spring Boot", logo: SpringLogo },
    { name: "TypeScript", logo: TsLogo },
    { name: "Node js", logo: NodeLogo },
    { name: "Postman", logo: PostmanLogo },
    { name: "Sql", logo: SqlLogo },
    { name: "Vercel", logo: VercelLogo },
  ];
  return (
    <div className="flex flex-col items-center justify-center font-[family-name:var(--font-geist-jakarta)] relative">
      {/* <Dot/> */}
      {/* Animated heading */}
      <motion.div
        initial={{ textShadow: "0px 0px 0px rgba(100,100,100,0)", y: 20, opacity: 0 }}
        whileInView={{ textShadow: "0px 5px 10px rgba(100,100,100,0.6)", y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ amount: 1 }}
        className="drop-shadow-[0_5px_20px_rgba(100,100,100,1)] text-[60px] font-semibold text-white"
      >
        My Tech Stack
      </motion.div>
      <motion.div
        initial={{ textShadow: "0px 0px 0px rgba(100,100,100,0)", y: -20, opacity: 0 }}
        whileInView={{ textShadow: "0px 5px 10px rgba(100,100,100,0.6)", y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ amount: 1 }}
        className='text-[var(--prim-text)] text-[20px] font-light tracking-wider'>My key expertises and technical proficiencies</motion.div>
      {/* Skills Grid */}
      <div className="flex flex-col items-center gap-4 mt-[80px]">
        {Array.from({ length: Math.ceil(skillLogos.length / 4) }, (_, rowIndex) => (
          <SkillRow
            key={rowIndex}
            skills={skillLogos.slice(rowIndex * 4, rowIndex * 4 + 4)}
            delayOffset={0.2 + rowIndex * 0.1}
          />
        ))}
      </div>
    </div>
  );
}

export default Skills
