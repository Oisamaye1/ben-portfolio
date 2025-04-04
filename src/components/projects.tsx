"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Lock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { Badge } from "./ui/badge"

const projects = [
  {
    title: "Form Dashboard",
    description: "A modern web app that allows users submit online forms and also allows Admin access all submissions, while also providing a download button",
    image: "/moviediscovery.png",
    github: "https://github.com/Oisamaye1/movie-discovery",
    demo: "https://form-submission-five.vercel.app/",
    availability: true,
  },
  {
    title: "Movie Discovery",
    description: "A modern web application built with Next.js and TypeScript where users can browse their favorite, seacrch upcoming releases and mark the for future viewing",
    image: "/moviediscovery.png",
    github: "https://github.com/Oisamaye1/movie-discovery",
    demo: "https://movie-discovery-ten.vercel.app/",
    availability: true,
  },
  {
    title: "JamiLegacy",
    description: "A modern web application built with Next.js and TypeScript",
    image: "/jamilegacy.png",
    github: "https://github.com/Oisamaye1/jamilegacy",
    demo: "https://jamilegacy.vercel.app/",
    availability: true,
  },
  {
    title: "SubFlow",
    description: "Full-stack web3 SaaS application with real-time features",
    image: "/subflow.png",
    github: "#",
    demo: "#",
    availability: false,
  },
  {
    title: "BeShop",
    description: "Responsive E-Commerce web application",
    image: "/beshop.png",
    github: "https://github.com/Oisamaye1/Beshop",
    demo: "https://beshop-peach.vercel.app/",
    availability: true,
  },
  {
    title: "Mix-Fit",
    description: "Frontend fitness web application",
    image: "/mixfit.png",
    github: "https://github.com/Oisamaye1/Mix-Fit",
    demo: "https://mix-fit.vercel.app/",
    availability: true,
  },
  // {
  //   title: "Dream Agency",
  //   description: "Frontend web app built with Nextjs",
  //   image: "/placeholder.svg",
  //   github: "https://github.com",
  //   demo: "https://demo.com",
  //   availability: true,
  // },
  {
    title: "Exercise Web App",
    description: "Fullstack Excercise helper built with Flask",
    image: "/excercise.png",
    github: "https://github.com/Oisamaye1/exercise-app",
    demo: "https://exercise-generator-app.onrender.com/",
    availability: true,
  },
  {
    title: "Portfolio Website",
    description: "Responsive portfolio web application",
    image: "/portfolio.png",
    github: "#",
    demo: "#",
    availability: false,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24">
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#123524]">My Projects</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Here are some of my featured projects. Each one is crafted with attention to detail and best practices.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded border border-[#3E7B27]/60 bg-background"
              >
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={225}
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="mt-2 text-muted-foreground">{project.description}</p>

                  {project.availability ? 
                  <div className="mt-4 flex gap-4">
                    <Link
                      href={project.github}
                      target="_blank"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                    >
                      <Github className="size-4 text-[#3E7B27]" />
                      Code
                    </Link>
                    <Link
                      href={project.demo}
                      target="_blank"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                    >
                      <ExternalLink className="size-4 text-[#3E7B27]" />
                      Demo
                    </Link>
                  </div> : 
                  <div className="mt-4 flex gap-4">
                    <Badge variant="secondary" className="inline-flex items-center gap-2 text-sm text-muted-foreground ">
                      <Lock className="size-4"/> Private</Badge></div>
                  }
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

