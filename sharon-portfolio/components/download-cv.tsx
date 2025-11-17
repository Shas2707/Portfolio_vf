"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function DownloadCV() {
  const handleDownload = () => {
    const cvData = {
      nom: "Sharon Alihonou",
      email: "sharonalihonou@gmail.com",
      telephone: "07.66.52.22.34",
      linkedin: "www.linkedin.com/in/sharon-alihonou-2478b4318",
      formation: "BTS SIO OPTION SLAM (2024-2026)",
      competences: ["HTML", "CSS", "JavaScript", "PHP", "Python", "WordPress", "GitHub"],
    }

    const blob = new Blob([JSON.stringify(cvData, null, 2)], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "CV_Sharon_Alihonou.json"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <Button onClick={handleDownload} size="lg" className="gap-2">
      <Download className="w-5 h-5" />
      Télécharger mon CV
    </Button>
  )
}
