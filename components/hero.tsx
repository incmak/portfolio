'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function Hero() {
  return (
    <section className='h-screen flex items-center justify-center text-center'>
      <motion.div
        initial='initial'
        animate='animate'
        variants={{
          animate: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        className='space-y-6'
      >
        <motion.h1 variants={fadeIn} className='text-5xl md:text-7xl font-bold'>
          Hi, I&apos;m <span className='text-primary'>Mueen Ahmed</span>
        </motion.h1>
        <motion.p variants={fadeIn} className='text-xl md:text-2xl'>
          Software Engineer | Full Stack Developer | Technology Enthusiast
        </motion.p>
        <motion.div variants={fadeIn}>
          <Button className='text-lg' size='lg'>
            View My Work <ArrowRight className='ml-2' />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
