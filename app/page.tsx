'use client';

import { motion } from 'framer-motion';
import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/components/about';
import Experience from '@/components/experience';
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import Education from '@/components/education';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import BottomDock from '@/components/bottom-dock';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function Home() {
  return (
    <main className='bg-background text-foreground min-h-screen'>
      <Header />
      <motion.div
        initial='initial'
        animate='animate'
        variants={{
          animate: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        <motion.section variants={fadeInUp}>
          <Hero />
        </motion.section>
        <motion.section variants={fadeInUp}>
          <About />
        </motion.section>
        <motion.section variants={fadeInUp}>
          <Experience />
        </motion.section>
        <motion.section variants={fadeInUp}>
          <Projects />
        </motion.section>
        <motion.section variants={fadeInUp}>
          <Skills />
        </motion.section>
        <motion.section variants={fadeInUp}>
          <Education />
        </motion.section>
        <motion.section variants={fadeInUp}>
          <Contact />
        </motion.section>
      </motion.div>
      <Footer />
      <BottomDock />
    </main>
  );
}
