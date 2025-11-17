"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { FileText, Code2, Search, Filter, ExternalLink } from "lucide-react"
import { missions, tps } from "@/lib/projects-data"
import Link from "next/link"

export function Projects() {
  const [activeTab, setActiveTab] = useState<"missions" | "tp">("missions")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTech, setSelectedTech] = useState<string | null>(null)

  const currentProjects = activeTab === "missions" ? missions : tps

  const filteredProjects = currentProjects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTech = !selectedTech || project.technologies?.includes(selectedTech)
    return matchesSearch && matchesTech
  })

  const allTechnologies = Array.from(new Set(currentProjects.flatMap((p) => p.technologies ?? []))).sort()

  return (
    <section id="projects" className="py-20 px-4 lg:px-16 lg:pr-24">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-6">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight border-4 border-foreground px-6 py-3">
              MES PROJETS
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Découvrez mes missions et travaux pratiques réalisés durant ma première année de BTS SIO SLAM.
          </p>

          {/* Tabs */}
          <div className="flex gap-4 flex-wrap">
            <Button
              onClick={() => setActiveTab("missions")}
              variant={activeTab === "missions" ? "default" : "outline"}
              size="lg"
            >
              <FileText className="w-5 h-5 mr-2" />
              Missions ({missions.length})
            </Button>
            <Button
              onClick={() => setActiveTab("tp")}
              variant={activeTab === "tp" ? "default" : "outline"}
              size="lg"
            >
              <Code2 className="w-5 h-5 mr-2" />
              Travaux Pratiques ({tps.length})
            </Button>
          </div>

          {/* Search + Filter */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Rechercher un projet..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 text-base"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              <Button
                variant={selectedTech === null ? "default" : "outline"}
                onClick={() => setSelectedTech(null)}
                size="sm"
              >
                <Filter className="w-4 h-4 mr-2" />
                Tous
              </Button>
              {allTechnologies.slice(0, 6).map((tech) => (
                <Button
                  key={tech}
                  variant={selectedTech === tech ? "default" : "outline"}
                  onClick={() => setSelectedTech(tech === selectedTech ? null : tech)}
                  size="sm"
                >
                  {tech}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl"
            >
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{project.title}</h3>
                  {project.technologies && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <Link href={project.lien} target="_blank">
                  <Button className="w-full mt-auto flex items-center justify-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Voir le projet
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Aucun projet trouvé */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">Aucun projet trouvé</p>
            <Button
              variant="link"
              onClick={() => {
                setSearchQuery("")
                setSelectedTech(null)
              }}
              className="mt-4"
            >
              Réinitialiser les filtres
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
