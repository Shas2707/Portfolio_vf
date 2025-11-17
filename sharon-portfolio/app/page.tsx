import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Education } from "@/components/education"
import { Projects } from "@/components/projects"
import { Interests } from "@/components/interests"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { ScrollProgress } from "@/components/scroll-progress"
import { ScrollAnimations } from "@/components/scroll-animations"

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <ScrollAnimations />
      <Navigation />
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Interests />
      <About />
      <Contact />
    </main>
  )
}
