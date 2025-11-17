import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Stage Développeuse Web Junior",
      company: "Camara Itec Sarl",
      period: "15 juin - 25 juillet 2025",
      location: "Paris",
      tasks: [
        "Mise à jour des informations sur le site shopintech.fr",
        "Développement d'applications web",
        "Apprentissage des bases du langage Python",
      ],
    },
    {
      title: "Organisatrice d'Événements",
      company: "Indépendante",
      period: "2018 - 2022",
      location: "Paris et Île-de-France",
      tasks: [
        "Coordination d'anniversaires : thème, décoration, prestataires",
        "Supervision budgétaire et optimisation des coûts",
        "Gestion des invitations et des imprévus",
      ],
    },
    {
      title: "Assistante de Vente",
      company: "Magasin familial",
      period: "Juillet - Août 2022",
      location: "Paris",
      tasks: [
        "Conseil clientèle et encaissement",
        "Gestion des stocks et mise en rayon",
        "Service client personnalisé",
      ],
    },
    {
      title: "Stage de Troisième",
      company: "Secteur de la vente",
      period: "Décembre 2021",
      location: "Paris",
      tasks: [
        "Responsable du rangement des vêtements",
        "Promotion des produits sur les réseaux sociaux",
        "Mise en avant d'articles sélectionnés",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Expériences</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mon parcours professionnel et mes réalisations
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 mt-1">
                        <Briefcase className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-xl">{exp.title}</div>
                        <div className="text-base font-normal text-muted-foreground">{exp.company}</div>
                      </div>
                    </CardTitle>
                  </div>
                  <Badge variant="outline" className="gap-2 whitespace-nowrap">
                    <Calendar className="h-3 w-3" />
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {exp.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">{task}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
