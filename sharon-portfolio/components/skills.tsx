import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Wrench, FileText } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Langages",
      icon: Code2,
      skills: ["HTML", "CSS", "JavaScript", "PHP", "Python", "SQL"],
    },
    {
      title: "Outils",
      icon: Wrench,
      skills: ["WordPress", "GitHub", "Visual Studio Code", "Canva", "ChatGPT", "Figma"],
    },
    {
      title: "Pack Office",
      icon: FileText,
      skills: ["Word", "Excel", "PowerPoint"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Compétences</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies et outils que je maîtrise pour créer des solutions web modernes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <Card key={category.title} className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
