"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import ProfileSidebar from "@/components/profile-sidebar"
import MobileHeader from "@/components/mobile-header"
import AnimatedBackground from "@/components/animated-background"

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkIfMobile = () => {
      const isMobileView = window.innerWidth < 1024
      setIsMobile(isMobileView)
    }

    // Initial check
    checkIfMobile()

    // Add event listener
    window.addEventListener("resize", checkIfMobile)

    // Clean up
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [isMobileMenuOpen])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isMobileMenuOpen && isMobile) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [isMobileMenuOpen, isMobile])

  return (
    <div id="portfolio-container" className="flex flex-col lg:flex-row min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Decorative shapes - hide on smaller screens */}
      <div className="shape-circle w-96 h-96 top-0 right-0 opacity-20 hidden md:block"></div>
      <div className="shape-circle w-64 h-64 bottom-1/4 left-1/3 opacity-10 hidden md:block"></div>
      <div className="shape-square w-48 h-48 top-1/3 right-1/4 opacity-10 hidden md:block"></div>

      {/* Animated background - reduce particles on mobile */}
      <AnimatedBackground />

      {/* Subtle background gradient */}
      <div className="fixed inset-0 animated-gradient z-0"></div>

      {/* Mobile Header - Only visible on mobile */}
      <MobileHeader
        isMenuOpen={isMobileMenuOpen}
        toggleMenu={(e) => {
          e.stopPropagation()
          setIsMobileMenuOpen(!isMobileMenuOpen)
        }}
      />

      {/* Overlay for mobile menu - only visible when menu is open */}
      {isMobile && isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Navigation and sidebar wrapper */}
      <div className="lg:flex">
        {/* Left Navigation */}
        <Navigation isVisible={isMobileMenuOpen} isMobile={isMobile} closeMenu={() => setIsMobileMenuOpen(false)} />

        {/* Profile Sidebar */}
        <ProfileSidebar isVisible={isMobileMenuOpen} isMobile={isMobile} />
      </div>

      {/* Main Content */}
      <main
        className={`
          flex-1 
          ${!isMobile ? "lg:ml-[320px]" : ""} 
          overflow-y-auto relative z-10 w-full
        `}
      >
              {/* Decorative elements - hide some on mobile */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-600/20 rounded-full blur-3xl hidden sm:block"></div>
      <div className="absolute -top-200 -left-20 w-80 h-80 bg-emerald-900/20 rounded-full blur-3xl hidden sm:block"></div>

        <div className="max-w-4xl mx-auto px-12 py-8 lg:py-0 pt-8 lg:pt-0">{children}</div>
      </main>
    </div>
  )
}
