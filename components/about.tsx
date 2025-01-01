'use client';

import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function About() {
  return (
    <section id='about' className='py-20 bg-muted'>
      <div className='container mx-auto px-6'>
        <motion.h2
          variants={fadeIn}
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          className='text-4xl font-bold mb-8 text-center'
        >
          About Me
        </motion.h2>
        <motion.div
          variants={fadeIn}
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          className='max-w-3xl mx-auto'
        >
          <p className='text-lg mb-6'>
            I&lsquo;m a full stack developer with 2.5 years of experience in
            JavaScript and related technologies, including React, Next.js, and
            Node.js. I&lsquo;m proficient in agile methodologies and have strong
            communication and leadership skills.
          </p>
          <p className='text-lg mb-6'>
            As a team player, I believe in helping others and continuously
            adapting to new technologies and frameworks as needed. I&lsquo;m
            always seeking opportunities to solve new problems and explore
            innovative technologies.
          </p>
          <p className='text-lg'>
            My expertise spans across frontend and backend development, and
            I&lsquo;m passionate about creating efficient, scalable, and
            user-friendly web applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
