"use client"

import { motion } from "framer-motion"
import MaxWidthWrapper from "./MaxWidthWrapper"
import Image from "next/image"


const technologies = [
  {
    name: "HTML5",
    icon: "html5.svg",
  },
  {
    name: "CSS3",
    icon: "css3.svg",
  },
  {
    name: "Javascript",
    icon: "javascript.svg",
  },
  {
    name: "React",
    icon: "react.svg",
  },
  {
    name: "NextJS",
    icon: "nextjs.svg",
  },
  {
    name: "Typescript",
    icon: "typescript.svg",
  },
  {
    name: "TailwindCSS",
    icon: "tailwind.svg",
  },
  {
    name: "Python",
    icon: "python.svg",
  },
  {
    name: "Flask",
    icon: "flask.svg",
  },
  {
    name: "MySQL",
    icon: "mysql.svg",
  },
  {
    name: "Git",
    icon: "git.svg",
  },
  {
    name: "MongoDB",
    icon: "mongodb.svg",
  },
  {
    name: "Wordpress",
    icon: "wordpress.svg",
  },
 
]

export default function TechStack() {
  return (
    <section className="py-24 bg-muted">
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#123524]">Tech Stack</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">Technologies and tools I work with</p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-3 gap-8 sm:grid-cols-4 md:grid-cols-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center justify-center space-y-2 rounded border border-[#3E7B27]/60 bg-background p-4"
              >
                <Image
                  src={tech.icon || "/placeholder.svg"}
                  alt={tech.name}
                  width={100}
                  height={100}
                  className="size-12"
                  style={{ objectFit: "contain" }}
                />
                <span className="text-sm font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      </MaxWidthWrapper>
     
    </section>
  )
}

