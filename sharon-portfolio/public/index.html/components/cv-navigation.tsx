"use client"

import { Download, Globe, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function CVNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleDownloadCV = async () => {
    try {
      const response = await fetch("/api/generate-cv-pdf")
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = "CV_Sharon_Alihonou.pdf"
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    } catch (error) {
      console.error("Error downloading CV:", error)
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold text-foreground">Sharon Alihonou</h2>
            <span className="hidden sm:inline text-sm text-muted-foreground">• CV Digital</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={() => scrollToSection("experiences")} className="text-sm">
              Expériences
            </Button>
            <Button variant="ghost" size="sm" onClick={() => scrollToSection("formations")} className="text-sm">
              Formations
            </Button>
            <Button variant="ghost" size="sm" onClick={() => scrollToSection("competences")} className="text-sm">
              Compétences
            </Button>
            <div className="w-px h-6 bg-border mx-2" />
            <Button variant="outline" size="sm" onClick={handleDownloadCV} className="gap-2 bg-transparent">
              <Download className="w-4 h-4" />
              Télécharger
            </Button>
            <Button asChild size="sm" className="gap-2">
              <a href="https://shas2707.github.io/Portfolio_vf/" target="_blank" rel="noopener noreferrer">
                <Globe className="w-4 h-4" />
                Portfolio
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("experiences")}
              className="w-full justify-start"
            >
              Expériences
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("formations")}
              className="w-full justify-start"
            >
              Formations
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("competences")}
              className="w-full justify-start"
            >
              Compétences
            </Button>
            <div className="h-px bg-border my-2" />
            <Button
              variant="outline"
              size="sm"
              onClick={handleDownloadCV}
              className="w-full justify-start gap-2 bg-transparent"
            >
              <Download className="w-4 h-4" />
              Télécharger CV
            </Button>
            <Button asChild size="sm" className="w-full justify-start gap-2">
              <a href="https://shas2707.github.io/Portfolio_vf/" target="_blank" rel="noopener noreferrer">
                <Globe className="w-4 h-4" />
                Voir mon Portfolio
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
