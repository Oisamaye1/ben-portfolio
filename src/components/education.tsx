"use client"

import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"
import MaxWidthWrapper from "./MaxWidthWrapper"

const education = [
  {
    degree: "Doctorate of Philosophy in Computer Engineering",
    school: "Bahçeşehir Cyprus University",
    year: "2023-Present",
    description: "Specialized in Convolution Neural Network in Multi-Modal security systems.",
  },
  {
    degree: "Master of Computer Engineering",
    school: "Bahçeşehir Cyprus University",
    year: "2021-2023",
    description: "Specialized in Machine Learning/Deep Learning application for IoT security.",
  },
  {
    degree: "Postgraduate Diploma in Remote Sensing and GIS",
    school: "African Regional Center for Space Science and Technology Education - Engineering.",
    year: "2020-2021",
    description: "Specialized in remote sensing and GIS related topics.",
  },
  {
    degree: "ND and HND in Electrical/Electronics Engineering",
    school: "Federal Polytechnic, Auchi.",
    year: "2013-2018",
    description: "Major in Computer Science with focus on Programming",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-24 bg-muted">
      <MaxWidthWrapper>
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold text-[#123524] tracking-tighter sm:text-4xl md:text-5xl">Education</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              My academic journey in computer science and software development.
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-8 pb-8 last:pb-0"
              >
                <div className="absolute left-0 top-0 size-6 rounded-full bg-[#3E7B27]">
                  <GraduationCap className="size-4 absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-primary-foreground" />
                </div>
                <div className="absolute left-3 top-8 h-[calc(100%-32px)] w-px bg-border last:hidden" />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{item.degree}</h3>
                  <p className="text-muted-foreground">{item.school}</p>
                  <p className="text-sm text-muted-foreground">{item.year}</p>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      </MaxWidthWrapper>
     
    </section>
  )
}

