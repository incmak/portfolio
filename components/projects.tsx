'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function Projects() {
  const projects = [
    {
      name: 'UniAdmissions',
      description: 'Developed a user-friendly web application and responsive UI design using ReactJS, TailwindCSS, and Zustand. Integrated REST APIs and caching using Tanstack Query.',
      period: 'Nov 2022 – Jun 2023',
      tags: ['Frontend Development', 'React', 'TailwindCSS', 'Zustand', 'Tanstack Query'],
    },
    {
      name: 'Manpower Services',
      description: 'Designed and implemented a robust full stack web platform for connecting job seekers with employers, utilizing Next.js for server-side rendering and React for frontend development.',
      period: 'Jan 2023 – March 2023',
      tags: ['Full Stack Development', 'Next.js', 'React', 'TailwindCSS', 'REST API'],
    },
    {
      name: 'Team Member Availability and Deployment Application',
      description: 'Lead and involved in the development of frontend in React from scratch. Integrated REST APIs using Tanstack Query and implemented Microfrontends architecture using Module Federation and Mono repo.',
      period: 'Jul 2023 – Present',
      tags: ['React', 'REST API', 'Tanstack Query', 'Microfrontends', 'Module Federation'],
    },
    {
      name: 'HR Screening Tool',
      description: 'Developed new features like real-time notifications and stats using Socket.io. Fixed errors in the frontend and optimized, refactored, and maintained the project.',
      period: 'May 2023 – Present',
      tags: ['JavaScript', 'React', 'Socket.io'],
    },
    {
      name: 'ATS (Applicant Tracking System)',
      description: 'Involved in the architecture design of the project. Managed and lead the project (frontend and backend).',
      period: 'Feb 2024 – Present',
      tags: ['Architecture Design', 'MERN Stack'],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <motion.h2
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Card className="bg-card text-card-foreground h-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">{project.name}</CardTitle>
                  <CardDescription>{project.period}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

