"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="bg-white dark:bg-black border-zinc-700 text-zinc-200 w-8 h-8"
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      <Sun className="text-black scale-75 h-[1.2rem] w-[1.2rem] rotate-0 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute scale-0 h-[1.2rem] w-[1.2rem] rotate-90 transition-all dark:rotate-0 dark:scale-75" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
