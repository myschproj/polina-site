"use client"
// Import core
import { motion } from "framer-motion";
// Import customs

function Hero() {
  return (
    <motion.section
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2, delay: 1 }}
      className="flex relative pt-[40vh] sm:pt-[60vh] z-20 overscroll-y-none"
    >
      <div>
        <h4 className="text-3xl sm:text-5xl">
          <span className="italic">Hello</span>, I am Polina, a python developer, and experienced dog owner. 
          I have been creating Python apps for 3+ years. I am always learn new things and upgrade my skills.
          I am also really love music and architecture.
        </h4>
      </div>
    </motion.section>
  );
}

export default Hero;
