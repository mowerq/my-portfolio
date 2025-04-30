"use client"

import { useState, useEffect } from "react"
import { Home, User, Code, Briefcase, GraduationCap, Mail, Sparkles } from "lucide-react"
import { useTranslation } from "react-i18next"

export default function Navigation({
  isVisible,
  isMobile,
  closeMenu,
}: {
  isVisible: boolean
  isMobile: boolean
  closeMenu: () => void
}) {
  const { t } = useTranslation("common")
  const [activeSection, setActiveSection] = useState("home")

  const navItems = [
    { name: "Home", icon: <Home className="h-5 w-5" />, id: "home" },
    { name: t("aboutMe"), icon: <User className="h-5 w-5" />, id: "about" },
    { name: t("mySkills"), icon: <Sparkles className="h-5 w-5" />, id: "skills" },
    { name: t("workExperience"), icon: <Briefcase className="h-5 w-5" />, id: "experience" },
    { name: t("education"), icon: <GraduationCap className="h-5 w-5" />, id: "education" },
    { name: t("myPortfolio"), icon: <Code className="h-5 w-5" />, id: "portfolio" },
    { name: t("getInTouch"), icon: <Mail className="h-5 w-5" />, id: "contact" },
  ]

  // Scroll to section with 36px offset
  const scrollToSection = (id: string) => {
    const yOffset = -36
    const element = document.getElementById(id)
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "experience", "education", "portfolio", "contact"]

      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`
        fixed lg:fixed top-0 left-0 h-screen w-16 
        bg-background dark:bg-zinc-900 backdrop-blur-sm border-r border-border z-40
        flex flex-col items-center justify-center
        transition-transform duration-300
        ${isVisible ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0
      `}
      onClick={(e) => e.stopPropagation()}
    >
      <ul className="space-y-6 md:space-y-8">
        {navItems.map((item) => (
          <li key={item.name} className="relative group">
            <button
              onClick={() => {
                scrollToSection(item.id)
                if (isMobile) closeMenu()
              }}
              title={item.name}
              className={`
                flex flex-col items-center justify-center 
                w-10 h-10 rounded-full transition-all duration-300
                ${
                  activeSection === item.id
                    ? "bg-emerald-600 text-white glow"
                    : "text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-500"
                }
              `}
            >
              {item.icon}
              <span className="sr-only">{item.name}</span>
            </button>

            {/* Tooltip - only show on desktop */}
            <div className="absolute left-14 top-1/2 -translate-y-1/2 bg-card text-card-foreground px-2 py-1 rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 text-xs whitespace-nowrap z-50 border border-emerald-600/30 hidden lg:block">
              {item.name}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  )
}
