'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function Skills() {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python', 'C#', 'PHP', 'SQL',
    'React', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose',
    'Socket.io', 'REST API', 'Tanstack Query', 'Tailwind CSS',
    'Module Federation', 'Micro Frontends', 'Electron', '.NET',
    'Git', 'GitHub', 'VS Code', 'Jupyter Notebooks', 'WordPress'
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Technical Skills
        </motion.h2>
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {skills.map((skill, index) => (
            <Badge key={index} variant="outline" className="text-lg py-2 px-4">
              {skill}
            </Badge>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

