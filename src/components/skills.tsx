"use client"

import { motion } from "framer-motion"
import MaxWidthWrapper from "./MaxWidthWrapper"

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML/CSS", level: 85 },
      { name: "JavaScript", level: 70 },
      { name: "React", level: 65 },
      { name: "Next.js", level: 80 },
      { name: "Typescript", level: 60 },
      { name: "TailwindCSS", level: 80 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Python/Flask", level: 70 },
      { name: "SQL", level: 55 },
      { name: "MongoDB", level: 78 },
    ],
  },
  {
    category: "Machine Learning",
    skills: [
      { name: "Tensorflow", level: 60 },
      { name: "Pytorch", level: 55 },
      { name: "numpy", level: 78 },
      { name: "OpenCV", level: 58 },
    ],
  },
  {
    category: "Other",
    skills: [
      { name: "Git", level: 90 },
      { name: "UI/UX Design", level: 60 },
      { name: "Adobe Illustrator", level: 70 },
      { name: "Adobe Photoshop", level: 60 },
      { name: "Wordpress", level: 60 },
    ],
  },
]

export default function Skills() {
  return (
    <section className="py-24">
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#123524]">Skills</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              My professional skill set and expertise levels
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="space-y-4 rounded border border-[#3E7B27]/60 bg-background p-6"
              >
                <h3 className="text-xl font-bold">{category.category}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted">
                        <motion.div
                          className="h-full rounded-full bg-[#3E7B27]"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
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

