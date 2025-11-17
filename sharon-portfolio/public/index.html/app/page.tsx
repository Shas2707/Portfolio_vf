/**
 * FICHIER PRINCIPAL DU CV
 *
 * Ce fichier contient tout le contenu de votre CV en ligne :
 * - En-tête avec nom, titre et description
 * - Coordonnées (email, téléphone, LinkedIn, portfolio)
 * - Expériences professionnelles
 * - Formations
 * - Compétences techniques (langages, outils, Pack Office)
 * - Langues parlées
 * - Savoir-être (qualités personnelles)
 * - Centres d'intérêt
 *
 * Pour modifier le contenu de votre CV, éditez ce fichier.
 */

import { Code2, Mail, Phone, Linkedin, Globe } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { CVNavigation } from "@/components/cv-navigation"

export default function Home() {
  return (
    <>
      <CVNavigation />
      <main className="min-h-screen bg-background py-8 px-4 sm:py-12">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-secondary to-accent p-8 sm:p-12 mb-8 shadow-2xl">
            <div className="absolute inset-0 bg-[url('/abstract-geometric-pattern.png')] opacity-10 mix-blend-overlay" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="w-8 h-8 text-primary-foreground" />
                <Badge variant="secondary" className="text-xs font-mono">
                  Disponible en alternance
                </Badge>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-3 text-balance">
                Sharon Alihonou
              </h1>
              <p className="text-xl sm:text-2xl text-primary-foreground/90 font-medium mb-6">Développeuse Web Junior</p>
              <p className="text-base sm:text-lg text-primary-foreground/80 leading-relaxed max-w-3xl text-pretty">
                Étudiante en 2ᵉ année de BTS SIO option SLAM, passionnée par le développement web. Je recherche une
                alternance (2 jours/semaine en cours, 3 jours en entreprise) pour mettre en pratique mes compétences
                techniques.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <a
              href="mailto:sharonalihonou@gmail.com"
              className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all group"
            >
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground mb-0.5">Email</p>
                <p className="text-sm font-medium truncate">sharonalihonou@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:0766522234"
              className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all group"
            >
              <div className="p-2 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                <Phone className="w-5 h-5 text-secondary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground mb-0.5">Téléphone</p>
                <p className="text-sm font-medium">07.66.52.22.34</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/sharon-alihonou-2478b4318"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all group"
            >
              <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                <Linkedin className="w-5 h-5 text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground mb-0.5">LinkedIn</p>
                <p className="text-sm font-medium truncate">sharon-alihonou</p>
              </div>
            </a>

            <a
              href="https://shas2707.github.io/Portfolio_vf/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all group"
            >
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Globe className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground mb-0.5">Portfolio</p>
                <p className="text-sm font-medium truncate">shas2707.github.io</p>
              </div>
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Experiences */}
              <section
                id="experiences"
                className="bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-sm scroll-mt-20"
              >
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <div className="w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full" />
                  Expériences Professionnelles
                </h2>
                <div className="space-y-6">
                  <div className="relative pl-6 border-l-2 border-primary/30">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <h3 className="font-bold text-lg text-foreground">Stage Développeuse Web Junior</h3>
                      <Badge variant="outline" className="text-xs">
                        Juin - Juillet 2025
                      </Badge>
                    </div>
                    <p className="text-sm text-primary font-medium mb-3">Camara Itec Sarl</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">▸</span>
                        <span>Mise à jour des informations sur le site shopintech.fr</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">▸</span>
                        <span>Développement d'application web, base du langage Python</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">▸</span>
                        <span>Utilisation des technologies GitHub</span>
                      </li>
                    </ul>
                  </div>

                  <div className="relative pl-6 border-l-2 border-secondary/30">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-secondary border-4 border-background" />
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <h3 className="font-bold text-lg text-foreground">Organisatrice d'Événements</h3>
                      <Badge variant="outline" className="text-xs">
                        2018 - 2022
                      </Badge>
                    </div>
                    <p className="text-sm text-secondary font-medium mb-3">Indépendante</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-secondary mt-1">▸</span>
                        <span>Coordination d'anniversaires : thème, décoration, prestataires</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary mt-1">▸</span>
                        <span>Supervision budgétaire et optimisation des coûts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary mt-1">▸</span>
                        <span>Gestion des invitations et des imprévus</span>
                      </li>
                    </ul>
                  </div>

                  <div className="relative pl-6 border-l-2 border-accent/30">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent border-4 border-background" />
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <h3 className="font-bold text-lg text-foreground">Assistante de Vente</h3>
                      <Badge variant="outline" className="text-xs">
                        Juillet - Août 2022
                      </Badge>
                    </div>
                    <p className="text-sm text-accent font-medium mb-3">Magasin familiale</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">▸</span>
                        <span>Conseil clientèle, encaissement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">▸</span>
                        <span>Gestion des stocks et mise en rayon</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">▸</span>
                        <span>Service client personnalisé</span>
                      </li>
                    </ul>
                  </div>

                  <div className="relative pl-6 border-l-2 border-muted">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-muted-foreground border-4 border-background" />
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <h3 className="font-bold text-lg text-foreground">Stage de Troisième</h3>
                      <Badge variant="outline" className="text-xs">
                        Décembre 2021
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground font-medium mb-3">Vente - Paris et Île-de-France</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-muted-foreground mt-1">▸</span>
                        <span>Responsable du rangement des vêtements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-muted-foreground mt-1">▸</span>
                        <span>Promotion des produits sur les réseaux sociaux</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Formations */}
              <section
                id="formations"
                className="bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-sm scroll-mt-20"
              >
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <div className="w-1 h-8 bg-gradient-to-b from-secondary to-accent rounded-full" />
                  Formations
                </h2>
                <div className="space-y-6">
                  <div className="relative pl-6 border-l-2 border-primary/30">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <h3 className="font-bold text-lg text-foreground">BTS SIO option SLAM</h3>
                      <Badge variant="secondary" className="text-xs">
                        2024 - 2026
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Ingetis Paris (2024-2025) • Iris Paris (2025-2026)</p>
                  </div>

                  <div className="relative pl-6 border-l-2 border-secondary/30">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-secondary border-4 border-background" />
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <h3 className="font-bold text-lg text-foreground">Bac Général option DGEMC</h3>
                      <Badge variant="secondary" className="text-xs">
                        2021 - 2024
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Lycée Charles Le Chauve</p>
                  </div>
                </div>
              </section>
            </div>

            <div className="space-y-8">
              {/* Compétences Techniques */}
              <section id="competences" className="bg-card rounded-2xl p-6 border border-border shadow-sm scroll-mt-20">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-primary" />
                  Compétences
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground mb-2">Langages</h3>
                    <div className="flex flex-wrap gap-2">
                      {["HTML", "CSS", "JavaScript", "PHP", "Python", "SQL"].map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground mb-2">Outils</h3>
                    <div className="flex flex-wrap gap-2">
                      {["WordPress", "GitHub", "VS Code", "Figma", "Canva", "ChatGPT"].map((tool) => (
                        <Badge key={tool} variant="outline" className="text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground mb-2">Pack Office</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Word", "Excel", "PowerPoint"].map((office) => (
                        <Badge key={office} variant="outline" className="text-xs">
                          {office}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Langues */}
              <section className="bg-card rounded-2xl p-6 border border-border shadow-sm">
                <h2 className="text-xl font-bold text-foreground mb-4">Langues</h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">Anglais</span>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">B2</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">Espagnol</span>
                    <Badge className="bg-secondary/10 text-secondary hover:bg-secondary/20">A1</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">Yoruba</span>
                    <Badge className="bg-accent/10 text-accent hover:bg-accent/20">C1</Badge>
                  </div>
                </div>
              </section>

              {/* Savoir-être */}
              <section className="bg-card rounded-2xl p-6 border border-border shadow-sm">
                <h2 className="text-xl font-bold text-foreground mb-4">Savoir-être</h2>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Sens logique",
                    "Esprit de synthèse",
                    "Capacité d'adaptation",
                    "Polyvalence",
                    "Discrétion",
                    "Créativité",
                  ].map((quality) => (
                    <Badge key={quality} variant="secondary" className="text-xs">
                      {quality}
                    </Badge>
                  ))}
                </div>
              </section>

              {/* Centres d'intérêt */}
              <section className="bg-card rounded-2xl p-6 border border-border shadow-sm">
                <h2 className="text-xl font-bold text-foreground mb-4">Centres d'Intérêt</h2>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-primary">Lecture</span>
                    <p className="text-muted-foreground">Physiologie et horreur</p>
                  </div>
                  <div>
                    <span className="font-semibold text-secondary">Sports</span>
                    <p className="text-muted-foreground">Musculation et ultimate</p>
                  </div>
                  <div>
                    <span className="font-semibold text-accent">Cuisine</span>
                    <p className="text-muted-foreground">Pâtisserie</p>
                  </div>
                  <div>
                    <span className="font-semibold text-primary">Photographie</span>
                    <p className="text-muted-foreground">Paysage</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
