import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar } from "lucide-react"

export function Education() {
  const education = [
    {
      degree: "BTS SIO option SLAM",
      school: "Iris Paris",
      period: "2025 - 2026",
      description: "Services Informatiques aux Organisations - Solutions Logicielles et Applications Métiers",
    },
    {
      degree: "BTS SIO option SLAM",
      school: "Ingetis Paris",
      period: "2024 - 2025",
      description: "Services Informatiques aux Organisations - Solutions Logicielles et Applications Métiers",
    },
    {
      degree: "Bac Général option DGEMC",
      school: "Lycée Charles Le Chauve",
      period: "2021 - 2024",
      description: "Droit et Grands Enjeux du Monde Contemporain",
    },
  ]

  return (
    <section id="education" className="py-20 px-4 bg-card">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Formation</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mon parcours académique et mes qualifications
          </p>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <CardTitle className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 mt-1">
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xl">{edu.degree}</div>
                      <div className="text-base font-normal text-muted-foreground">{edu.school}</div>
                    </div>
                  </CardTitle>
                  <Badge variant="outline" className="gap-2 whitespace-nowrap">
                    <Calendar className="h-3 w-3" />
                    {edu.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
