import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"

export function ToggleGroup() {
  return (
    <div className="flex items-center gap-2">
      <ThemeToggle />
      <LanguageToggle />
    </div>
  )
}
