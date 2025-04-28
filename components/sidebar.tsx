"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, User, Briefcase, GraduationCap, Code, Mail, Github, Linkedin } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

const navItems = [
  { name: "Home", icon: <Home className="h-4 w-4" />, href: "#home" },
  { name: "About", icon: <User className="h-4 w-4" />, href: "#about" },
  { name: "Skills", icon: <Code className="h-4 w-4" />, href: "#skills" },
  { name: "Experience", icon: <Briefcase className="h-4 w-4" />, href: "#experience" },
  { name: "Education", icon: <GraduationCap className="h-4 w-4" />, href: "#education" },
  { name: "Portfolio", icon: <Code className="h-4 w-4" />, href: "#portfolio" },
  { name: "Contact", icon: <Mail className="h-4 w-4" />, href: "#contact" },
]

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMobile()
  const [activeSection, setActiveSection] = useState("home")

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = () => {
      if (isOpen && isMobile) {
        setIsOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [isOpen, isMobile])

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1))

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleSidebar = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* Mobile menu button */}
      <Button variant="ghost" size="icon" className="fixed top-4 right-4 z-50 lg:hidden" onClick={toggleSidebar}>
        {isOpen ? <X /> : <Menu />}
      </Button>

      <div className="flex h-screen">
        {/* Navigation Menu - Now on the left */}
        <nav
          className={`${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 fixed lg:relative top-0 left-0 h-screen w-16 bg-zinc-900 border-r border-zinc-700 z-40 flex flex-col items-center py-8`}
        >
          <ul className="space-y-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`flex flex-col items-center justify-center w-10 h-10 rounded-full transition-colors group ${
                    activeSection === item.href.substring(1)
                      ? "bg-emerald-600 text-white"
                      : "hover:bg-zinc-800 text-zinc-400 hover:text-emerald-500"
                  }`}
                  onClick={() => isMobile && setIsOpen(false)}
                  title={item.name}
                >
                  <div className={activeSection === item.href.substring(1) ? "text-white" : ""}>{item.icon}</div>
                  <span className="sr-only">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Profile Section - Now in the middle */}
        <aside
          className={`${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 fixed lg:relative top-0 left-16 h-screen w-64 bg-zinc-800 border-r border-zinc-700 z-30 flex flex-col`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col items-center p-6 border-b border-zinc-700">
            <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-zinc-600">
              <Image
                src="/placeholder.svg?height=128&width=128"
                alt="Murat Gürgenyatağı"
                fill
                className="object-cover"
              />
            </div>
            <h1 className="text-xl font-bold">Murat Gürgenyatağı</h1>
            <p className="text-sm text-zinc-400 text-center mt-1">Full Stack Web Developer</p>
          </div>

          {/* Social links */}
          <div className="p-6 border-t border-zinc-700 mt-auto">
            <div className="flex justify-center space-x-4">
              <a
                href="https://github.com/mowerq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/murat-gurgenyatagi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}
