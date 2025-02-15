import Hero from "@/components/hero"
import About from "@/components/about"
import TechStack from "@/components/tech-stacks"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Home() {
  return (
    <ScrollArea className="h-screen">
      <main className="min-h-screen bg-background">
        <Hero />
        <About />
        <TechStack />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Contact />
      </main>
    </ScrollArea>
  )
}

