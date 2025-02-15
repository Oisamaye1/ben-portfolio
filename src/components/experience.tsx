"use client"

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"
import MaxWidthWrapper from "./MaxWidthWrapper"

const experience = [
  {
    position: "Web Developer",
    company: "SwiftMunch",
    year: "Feb. 2024 - Present",
    description: "Leading frontend development team and implementing modern web solutions",
  },
  {
    position: "Research Assistant",
    company: "Bahçeşehir Cyprus University",
    year: "Oct. 2023 - Present",
    description: "Developed and maintained multiple client projects using various technologies",
  },
  {
    position: "Part-Time Instructor",
    company: "Bahçeşehir Cyprus University",
    year: "Feb. 2024 - Jul. 2024",
    description: "Developed and maintained multiple client projects using various technologies",
  },
  {
    position: "Computer Hardware Technician and Junior Developer",
    company: "WII Technologies",
    year: "Apr. 2021 - Aug. 2021",
    description: "Started career working on innovative web applications",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24">
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#123524] md:text-5xl">Experience</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              My professional journey in software development.
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-8 pb-8 last:pb-0"
              >
                <div className="absolute left-0 top-0 size-6 rounded-full bg-[#3E7B27]">
                  <Briefcase className="size-4 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-primary-foreground" />
                </div>
                <div className="absolute left-3 top-8 h-[calc(100%-32px)] w-px bg-border last:hidden" />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{item.position}</h3>
                  <p className="text-muted-foreground">{item.company}</p>
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

