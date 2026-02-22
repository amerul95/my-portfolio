import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Experience } from "@/components/sections/Experience"
import { Competencies } from "@/components/sections/Competencies"
import { TechStack } from "@/components/sections/TechStack"
import { FeaturedProjects } from "@/components/sections/FeaturedProjects"
import { Contact } from "@/components/sections/Contact"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col">
        <Hero />
        <About />
        <Experience />
        <Competencies />
        <TechStack />
        <FeaturedProjects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
