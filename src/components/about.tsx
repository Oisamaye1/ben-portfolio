"use client"

import { motion } from "framer-motion"
import { Code2, Layout, Server } from "lucide-react"
import MaxWidthWrapper from "./MaxWidthWrapper"

const skills = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces with React and Next.js",
    icon: Layout,
  },
  {
    title: "Backend Development",
    description: "Creating robust server-side applications with Node.js and databases",
    icon: Server,
  },
  {
    title: "Clean Code",
    description: "Writing maintainable, efficient, and well-documented code",
    icon: Code2,
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-muted">
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
            <h2 className="text-3xl text-[#123524] font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              I&apos;m a passionate web developer with expertise in modern web technologies. I love creating elegant
              solutions to complex problems.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded border border-[#3E7B27]/60 bg-background p-6"
              >
                <div className="space-y-4">
                  <skill.icon className="size-8 text-[#123524]" />
                  <h3 className="text-xl font-bold">{skill.title}</h3>
                  <p className="text-muted-foreground">{skill.description}</p>
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

