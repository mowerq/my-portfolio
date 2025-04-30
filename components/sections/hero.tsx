"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Download, ChevronDown, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useTranslation } from "react-i18next"

export default function Hero() {
  const { t } = useTranslation("common")
  const [typedText, setTypedText] = useState("")
  const fullText = t("fullStackDeveloper")
  const typingSpeed = 75
  const containerRef = useRef<HTMLDivElement>(null)
  const [isCompleted, setIsCompleted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check if mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.substring(0, currentIndex))
        currentIndex++
      } else {
        setIsCompleted(true) // Mark completed
        setTimeout(() => {
          setTypedText("")
          setIsCompleted(false) // Reset animation
          currentIndex = 0
        }, 1500)
      }
    }, typingSpeed)

    return () => clearInterval(typingInterval)
  }, [fullText])

  // Add animation on mount
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.classList.add("animate-fade-in")
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="space-y-4 sm:space-y-6 opacity-0 transition-opacity duration-1000 relative w-full mt-6"
    >

      {/* Mobile layout with image */}
      {isMobile && (
        <div className="flex flex-col items-center mb-8">
          <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 fancy-border p-1 floating">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-emerald-900/20 animate-pulse"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image
                src="/avatar.png"
                alt="Murat Gürgenyatağı"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="inline-block bg-emerald-600/20 px-3 py-1.5 rounded-full text-emerald-500 text-xs font-medium animate-pulse border border-emerald-500/20">
            {t("availableForHire")}
          </div>
        </div>
      )}

      {/* Desktop "Available for hire" badge */}
      {!isMobile && (
        <div className="inline-block bg-emerald-600/20 px-3 py-1.5 rounded-full text-emerald-500 text-xs font-medium mb-2 animate-pulse border border-emerald-500/20">
          {t("availableForHire")}
        </div>
      )}

      <h1
        className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${isMobile ? "text-center" : ""}`}
      >
        <span className="block">{t("hiIm")}</span>
        <span className="bg-gradient-to-r from-black to-emerald-400 dark:from-white dark:to-emerald-400 bg-clip-text text-transparent">
          Murat Gürgenyatağı
        </span>
      </h1>

      <h2 className={`text-xl sm:text-2xl md:text-3xl text-zinc-500 h-10 ${isMobile ? "text-center" : ""}`}>
        <span
          className={`relative after:content-[''] after:inline-block after:w-1 after:h-6 after:bg-emerald-500 after:ml-1 after:animate-blink ${
            isCompleted ? "animate-pulse text-emerald-600" : ""
          }`}
        >
          {typedText}
        </span>
      </h2>

      <p
        className={`text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed ${isMobile ? "text-center mx-auto" : ""}`}
      >
        I create modern, responsive web applications with a focus on user experience. Specializing in{" "}
        <span className="text-emerald-500 font-medium">React</span> and backed by experience with{" "}
        <span className="text-emerald-500 font-medium">Java Spring</span>,
        <span className="text-emerald-500 font-medium"> Node.js</span>, and
        <span className="text-emerald-500 font-medium"> Python</span>.
      </p>

      {/* Mobile skill badges */}
      {isMobile && (
        <div className="flex flex-wrap justify-center gap-2 py-2">
          {["React", "JavaScript", "TypeScript", "Node.js", "Java Spring"].map((skill) => (
            <span
              key={skill}
              className="text-xs bg-emerald-900 text-white px-3 py-1 rounded-full border border-emerald-600/30"
            >
              {skill}
            </span>
          ))}
        </div>
      )}

      <div className={`flex flex-wrap gap-3 sm:gap-4 pt-4 relative z-10 ${isMobile ? "justify-center" : ""}`}>
        <Button size="default" className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm">
          <Download className="mr-2 h-4 w-4" />
          {t("downloadCV")}
        </Button>
        <Button size="default" variant="outline" className="group text-sm" asChild>
          <a href="#portfolio">
            {t("viewMyWork")}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Button>
      </div>

      {/* Mobile scroll indicator */}
      {isMobile && (
        <div className="flex justify-center mt-8">
          <a
            href="#about"
            className="animate-bounce bg-zinc-800 p-2 mt-8 w-10 h-10 ring-1 ring-zinc-700 shadow-lg rounded-full flex items-center justify-center"
            aria-label="Scroll down"
          >
            <ChevronDown className="h-6 w-6 text-emerald-500" />
          </a>
        </div>
      )}

      {/* Desktop scroll indicator */}
      {!isMobile && (
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 hidden md:block">
          <a
            href="#about"
            className="animate-bounce bg-zinc-800 p-2 w-10 h-10 ring-1 ring-zinc-700 shadow-lg rounded-full flex items-center justify-center"
            aria-label="Scroll down"
          >
            <ChevronDown className="h-6 w-6 text-emerald-500" />
          </a>
        </div>
      )}
    </div>
  )
}
