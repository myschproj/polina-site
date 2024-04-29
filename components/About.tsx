"use client"

// Import core
import Image from "next/image";
import { motion } from "framer-motion";
// Import customs


function About() {
  return (
    <motion.section className="relative z-20">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, delay: 0.04 }}
        viewport={{ once: true }}
        className="space-y-20 sm:space-y-40"
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 0.04 }}
          viewport={{ once: true }}
          className="relative w-full h-96 sm:h-124 md:h-128 bg-grey-light dark:bg-pop-dark rounded-xl overflow-hidden"
        >
          <Image
            src="/image/cover.jpg"
            className="object-center object-cover rounded-xl"
            alt="полина :)"
            fill
          />
        </motion.div>
        <motion.h3 className="text-6xl sm:text-9xl font-bold">
          In the market for tits, only Feuerbachian tenderness evokes in me
        </motion.h3>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 0.04 }}
          viewport={{ once: true }}
          className="space-y-6 sm:space-y-10"
        >
          <motion.h4 className="text-2xl sm:text-4xl">
            What about me. My name is Polina Petkevich. I’m 17 and I
            am from Moscow, Russia. While in high school I developed a special
            passion for programming, which subsequently led me to approach the
            world of art and design and then to start my studies at MAI.
          </motion.h4>
          <motion.h4 className="text-2xl sm:text-4xl">
            I was studying at school 1576, nad after that I am planning to go to the MAI.
          </motion.h4>
          <motion.h4 className="text-2xl sm:text-4xl">
            My first work experience was in Yandex, I developed some cool and beautiful stuff as an
            Interface Designer, as well as User Experience & Interaction
            Designer, collaborating with clients.
          </motion.h4>
          <motion.h4 className="text-2xl sm:text-4xl">
            I currently work as Backend developer at Dohuya_krutaya_kompaniya, 
            that is developing the next generation of Investigative & Decision intelligence
            software.
          </motion.h4>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default About;
