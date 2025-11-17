import { Card, CardContent } from "@/components/ui/card"
import { Code, Users, Lightbulb, Award } from "lucide-react"

export function About() {
  const stats = [
    { number: "1+", label: "Années d'études", icon: Award },
    { number: "5+", label: "Projets réalisés", icon: Code },
    { number: "3+", label: "Langages maîtrisés", icon: Lightbulb },
    { number: "2", label: "Langues parlées", icon: Users },
  ]

  const qualities = [
    "Sens logique",
    "Esprit de synthèse",
    "Capacité d'adaptation",
    "Polyvalence",
    "Discrétion",
    "Créativité",
  ]

  return (
    <section id="about" className="py-24 px-6 lg:px-20 bg-card">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="space-y-6">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter">
            À propos <span className="text-primary">de moi</span>
          </h2>
          <div className="w-24 h-1.5 bg-primary rounded-full" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
              Passionnée par le développement web et les technologies, j'apporte une approche créative et orientée
              utilisateur à chaque projet. Mon expérience en organisation d'événements et en service client me permet de
              comprendre les besoins des utilisateurs et de créer des solutions adaptées.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-bold">Savoir-être</h3>
              <div className="flex flex-wrap gap-2">
                {qualities.map((quality) => (
                  <span
                    key={quality}
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                  >
                    {quality}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <Card key={stat.label} className="border-2 hover:border-primary transition-colors">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-4xl font-bold text-primary">{stat.number}</div>
                      <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
