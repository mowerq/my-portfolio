"use client"

import type { ReactNode } from "react"
import i18n from "i18next"
import { initReactI18next, I18nextProvider } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

import enCommon from "../../locales/en/common.json"
import trCommon from "../../locales/tr/common.json"

// Initialize i18next
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
      },
      tr: {
        common: trCommon,
      },
    },
    fallbackLng: "en",
    debug: process.env.NODE_ENV === "development",
    ns: ["common"],
    defaultNS: "common",
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  })

export function I18nProvider({ children }: { children: ReactNode }) {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
