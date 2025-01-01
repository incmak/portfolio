'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, Linkedin, Github } from 'lucide-react'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Get In Touch
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <p className="flex items-center">
                <Phone className="mr-2" /> +91-9797891105
              </p>
              <p className="flex items-center">
                <Mail className="mr-2" /> ahmedmuieen@gmail.com
              </p>
              <p className="flex items-center">
                <Linkedin className="mr-2" /> linkedin.com/in/incmak
              </p>
              <p className="flex items-center">
                <Github className="mr-2" /> github.com/incmak
              </p>
            </div>
          </motion.div>
          <motion.form
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <Input type="text" placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Textarea placeholder="Your Message" />
              <Button type="submit" className="w-full">Send Message</Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

