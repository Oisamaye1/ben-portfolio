"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import Email from "@/emails"

export default function Contact() {
  return (
    <footer id="contact" className="py-24 bg-muted">
      <MaxWidthWrapper>
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid gap-12 lg:grid-cols-2"
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter text-[#123524]">Get in Touch</h2>
            <p className="text-muted-foreground">
              I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="flex gap-4">
              <Link href="https://github.com/Oisamaye1" target="_blank" className="text-[#3E7B27] hover:text-[#3E7B27]/60">
                <Github className="size-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://linkedin.com/in/ovioisa-oisamaye-benjamin-93998019b/" target="_blank" className="text-[#3E7B27] hover:text-[#3E7B27]/60">
                <Linkedin className="size-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="mailto:ovioisab@gmail.com" target="_blank" className="text-[#3E7B27] hover:text-[#3E7B27]/60">
                <Mail className="size-6" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Email />
          </motion.div>
        </motion.div>
      </div>

      </MaxWidthWrapper>
     
    </footer>
  )
}

