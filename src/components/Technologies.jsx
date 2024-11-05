
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from 'react-icons/fa';    // React icon
import { SiMongodb } from 'react-icons/si';  // MongoDB icon
import { FaNode } from 'react-icons/fa';   // Node.js icon
import { FaJava } from 'react-icons/fa';     // Java icon
import { BsFiletypeSql } from "react-icons/bs";  // SQL (MySQL) icon
// import { SiPython } from 'react-icons/si';      // Python icon
// import { SiCplusplus } from 'react-icons/si';   // C++ icon
import { SiExpress } from "react-icons/si"; //Javascirpt icon
import { SiGooglecloud } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";


import {animate, motion} from "framer-motion";

const iconVariants = (duration) => ({
  initial : {y:-10},
  animate : {
    y: [10,-10],
    transition : {
      duration : duration,
      ease : "linear",
      repeat : Infinity,
      repeatType : "reverse"
    },
  },
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 
      whileInView={{opacity:1,y:0}}
      initial = {{opacity:0,y:-100}}
      transition={{duration:1.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div
      whileInView={{opacity:1,x:0}}
      initial = {{opacity:0,x:-100}}
      transition={{duration:1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
         <motion.div 
        variants={iconVariants(3)}
        initial = "inital"
        animate = "animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiJavascriptFill className="text-7xl text-[#f0db4f]"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(3)}
        initial = "inital"
        animate = "animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaReact className="text-7xl text-cyan-400"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(5)}
        initial = "inital"
        animate = "animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className="text-7xl text-green-500"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(6)}
        initial = "inital"
        animate = "animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaNode className="text-7xl text-[#339933]"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(6)}
        initial = "inital"
        animate = "animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiExpress className="text-7xl text-[#fff]"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(4)}
        initial = "inital"
        animate = "animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaJava className="text-7xl text-blue-700"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(2)}
        initial = "inital"
        animate = "animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <BsFiletypeSql className="text-7xl text-[#f29111]"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(8)}
        initial = "inital"
        animate = "animate" className="rounded-2xl border-4 border-neutral-800 p-4">
           <SiGooglecloud className="text-7xl text-[#4285f4]"/>
        </motion.div>
        <motion.div
        variants={iconVariants(8)}
        initial = "inital"
        animate = "animate" className="rounded-2xl border-4 border-neutral-800 p-4">
           <FaBootstrap className="text-7xl text-[#6f42c1]"/>
        </motion.div>
        <motion.div
        variants={iconVariants(6)}
        initial = "initail"
        animate = "animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaHtml5 className="text-7xl text-[#ff5733]"/>
        </motion.div>
        <motion.div
        variants={iconVariants(6)}
        initial = "initail"
        animate = "animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaCss3Alt className="text-7xl text-[#2965f1]"/>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies
