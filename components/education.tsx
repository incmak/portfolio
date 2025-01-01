'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function Education() {
  const education = [
    {
      degree: 'Master of Computer Application',
      institution: 'Cluster University Srinagar',
      period: 'Mar 2021 – May 2023',
      location: 'Srinagar, Jammu and Kashmir',
      gpa: '8.9',
    },
    {
      degree: 'Bachelor of Computer Application',
      institution: 'Amar Singh College',
      period: 'May 2017 – Sep 2020',
      location: 'Srinagar, Jammu and Kashmir',
      gpa: '8.42',
    },
  ];

  return (
    <section id='education' className='py-20 bg-muted'>
      <div className='container mx-auto px-6'>
        <motion.h2
          variants={fadeIn}
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          className='text-4xl font-bold mb-12 text-center'
        >
          Education
        </motion.h2>
        <div className='grid md:grid-cols-2 gap-6'>
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              initial='initial'
              whileInView='animate'
              viewport={{ once: true }}
            >
              <Card className='bg-card text-card-foreground'>
                <CardHeader>
                  <CardTitle className='text-2xl font-bold'>
                    {edu.degree}
                  </CardTitle>
                  <p className='text-primary'>{edu.institution}</p>
                </CardHeader>
                <CardContent>
                  <p>{edu.period}</p>
                  <p>{edu.location}</p>
                  <p className='font-semibold'>GPA: {edu.gpa}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
