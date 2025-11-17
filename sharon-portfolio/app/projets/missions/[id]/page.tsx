import { missions } from "@/lib/projects-data"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"

export function generateStaticParams() {
  return missions.map((mission) => ({
    id: mission.id.toString(),
  }))
}

export default function MissionPage({ params }: { params: { id: string } }) {
  const mission = missions.find((m) => m.id === Number.parseInt(params.id))

  if (!mission) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background">
      {/* Header */}
      <div className="border-b-2 border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <Link href="/#projects">
            <Button variant="ghost" className="mb-4 hover:bg-primary/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux projets
            </Button>
          </Link>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-2xl border-2 border-primary">
              {mission.id}
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{mission.title}</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Card className="border-2 border-border">
          <CardContent className="p-8 text-center space-y-6">
            <p className="text-lg text-muted-foreground">
              Clique sur le bouton ci-dessous pour consulter cette mission.
            </p>

            <Link href={mission.lien || "#"} target="_blank">
              <Button size="lg" className="gap-2">
                <ExternalLink className="w-4 h-4" />
                Ouvrir la mission
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
