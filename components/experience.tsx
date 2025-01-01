'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function Experience() {
  const experiences = [
    {
      company: 'iQuasar Software Solutions',
      position: 'Full Stack Engineer',
      period: 'May 2023 – Present',
      responsibilities: [
        'Build and maintain multiple web applications.',
        'Developed an ERP application for team availability and deployment.',
        'Contributed to an HR recruiting application.',
        'Built multiple tools to automate the workflow of teams across the organization.',
      ],
    },
    {
      company: 'Aiiots Geek World Pvt Ltd',
      position: 'Frontend Engineer',
      period: 'May 2022 – Apr 2023',
      responsibilities: [
        'Built and maintained multiple web applications',
        'Developed an application that provides courses and tutors on demand.',
      ],
    },
  ];

  return (
    <section id='experience' className='py-20'>
      <div className='container mx-auto px-6'>
        <motion.h2
          variants={fadeIn}
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          className='text-4xl font-bold mb-12 text-center'
        >
          Work Experience
        </motion.h2>
        <div className='grid md:grid-cols-2 gap-6'>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              initial='initial'
              whileInView='animate'
              viewport={{ once: true }}
            >
              <Card className='bg-card text-card-foreground h-full'>
                <CardHeader>
                  <CardTitle className='text-2xl font-bold'>
                    {exp.company}
                  </CardTitle>
                  <p className='text-primary'>{exp.position}</p>
                  <p className='text-sm text-gray-400'>{exp.period}</p>
                </CardHeader>
                <CardContent>
                  <ul className='list-disc list-inside space-y-2'>
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
