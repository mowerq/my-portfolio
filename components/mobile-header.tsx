"use client"

import type React from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ToggleGroup } from "@/components/toggle-group"

export default function MobileHeader({
  isMenuOpen,
  toggleMenu,
}: {
  isMenuOpen: boolean
  toggleMenu: (e: React.MouseEvent) => void
}) {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-background/95 backdrop-blur-sm border-b border-border z-50 lg:hidden flex items-center justify-between px-4 pl-0 shadow-md">
      
      <div className="flex items-center">

      <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-foreground hover:bg-muted">
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>
      <h1 className="text-lg font-bold">Murat Gürgenyatağı</h1>
      </div>
      <ToggleGroup />
    </header>
  )
}
