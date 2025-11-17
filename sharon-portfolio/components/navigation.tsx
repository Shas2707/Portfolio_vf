"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { label: "Accueil", href: "#home" },
    { label: "Compétences", href: "#skills" },
    { label: "Expériences", href: "#experience" },
    { label: "Formation", href: "#education" },
    { label: "Projets", href: "#projects" },
    { label: "Loisirs", href: "#interests" },
    { label: "À propos", href: "#about" },
    { label: "Contact", href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-16">
          <div className="flex items-center justify-between h-20">
            <button onClick={() => scrollToSection("#home")} className="text-2xl font-bold text-primary">
              SA
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  variant="ghost"
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm font-medium hover:text-primary"
                >
                  {item.label}
                </Button>
              ))}
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-2">
              <ThemeToggle />
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
    </>
  )
}
