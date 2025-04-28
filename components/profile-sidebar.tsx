"use client"

import Image from "next/image"
import { Github, Linkedin } from "lucide-react"
import { ToggleGroup } from "@/components/toggle-group"
import { useTranslation } from "react-i18next"

export default function ProfileSidebar({
  isVisible,
  isMobile,
}: {
  isVisible: boolean
  isMobile: boolean
}) {
  const { t } = useTranslation("common")

  return (
    <aside
      className={`
        fixed lg:fixed top-0 lg:left-16 h-screen w-64
        bg-background dark:bg-zinc-800 backdrop-blur-sm border-r border-border z-30
        flex flex-col
        transition-transform duration-300
        ${isVisible ? "translate-x-16" : "-translate-x-full"}
        lg:translate-x-0
      `}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Profile Section - Simplified */}
      <div className="flex flex-col items-center justify-center flex-1 py-6 lg:py-0">
        <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-6 fancy-border p-1 floating">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-emerald-900/20 animate-pulse"></div>
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <Image src="/avatar.png" alt="Murat Gürgenyatağı" fill className="object-cover" />
          </div>
        </div>
        <h1 className="text-xl font-bold gradient-text shine">Murat Gürgenyatağı</h1>
        <div className="h-0.5 w-16 bg-emerald-600 my-3"></div>
        <p className="text-foreground font-medium">{t("fullStackDeveloper")}</p>
        <p className="text-muted-foreground text-sm mt-2">{t("frontendFocused")}</p>

        {/* Theme and Language Toggles - Desktop only */}
        <div className="mt-6 hidden lg:block">
          <ToggleGroup />
        </div>
      </div>

      {/* Social links */}
      <div className="p-6 border-t border-border bg-gradient-to-t from-muted to-transparent">
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/mowerq"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors transform hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/murat-gurgenyatagi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
    </aside>
  )
}
