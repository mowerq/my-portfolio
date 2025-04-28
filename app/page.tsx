"use client"

import MainLayout from "@/components/main-layout"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Skills from "@/components/sections/skills"
import Experience from "@/components/sections/experience"
import Education from "@/components/sections/education"
import Portfolio from "@/components/sections/portfolio"
import Contact from "@/components/sections/contact"

export default function Home() {
  return (
    <MainLayout>
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
        {/* Animated circles */}
        <div className="absolute top-1/4 right-1/3 w-16 h-16 bg-emerald-500/10 rounded-full animate-pulse hidden sm:block"></div>
        <div
          className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-emerald-500/5 rounded-full animate-pulse hidden sm:block"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

        <Hero />
      </section>

      <section id="about" className="min-h-screen pt-16">
        <About />
      </section>

      <section id="skills" className="min-h-screen pt-16">
        <Skills />
      </section>

      <section id="experience" className="min-h-screen pt-16">
        <Experience />
      </section>

      <section id="education" className="min-h-screen pt-16">
        <Education />
      </section>

      <section id="portfolio" className="min-h-screen pt-16">
        <Portfolio />
      </section>

      <section id="contact" className="min-h-screen pt-16 pb-16">
        <Contact />
      </section>
    </MainLayout>
  )
}
