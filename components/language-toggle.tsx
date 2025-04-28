"use client"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"

export function LanguageToggle() {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "tr" : "en"
    i18n.changeLanguage(newLang)
    localStorage.setItem("i18nextLng", newLang)
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleLanguage}
      className="light:bg-white dark:bg-black border-zinc-700 text-zinc-200 w-8 h-8"
      title={i18n.language === "en" ? "Türkçe'ye geç" : "Switch to English"}
    >
      <span className="text-xs font-medium text-black dark:text-white">{i18n.language === "en" ? "🇹🇷" : "🇺🇸"}</span>
      <span className="sr-only">Change language</span>
    </Button>
  )
}
