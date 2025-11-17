export interface Mission {
  id: number
  title: string
  lien: string
  technologies?: string[]
}

export interface TP {
  id: number
  title: string
  lien: string
  technologies?: string[]
}

export const missions: Mission[] = [
  {
    id: 1,
    title: "Mission 1 - Découverte des métiers du développement informatique",
    lien: "/mission1/index.html",
    technologies: ["HTML", "CSS", ]
  },
  {
    id: 2,
    title: "Mission 2 - Portail d’information interactif",
    lien: "/mission2/index.html",
    technologies: ["HTML", "CSS"]
  },
  {
    id: 3,
    title: "Mission 3 - Certifications rgpd",
    lien: "/mission3/index.html",
    technologies: ["HTML", "CSS", ]
  },
  {
    id: 4,
    title: "Mission 4 - Portail interactif pour événementiel",
    lien: "/mission4/index.html",
    technologies: ["html", "css"]
  },
  {
    id: 5,
    title: "Mission 5 - Cv en ligne",
    lien: "/mission5/index.html",
    technologies: ["html", "css", ]
  },
  {
    id: 6,
    title: "Mission 6 - Certification cybersécurité (en cours)",
    lien: "/mission6 certification cyber-sécurité/index.html",
    technologies: ["", ""]
  },
  {
    id: 8,
    title: "Mission 8 -Réalisation d’une plateforme d’auto-formation",
    lien: "/mission8/index.html",
    technologies: ["HTML5", "CSS3", "JAVASCRIPT"]
  },
  {
    id: 9,
    title: "Mission 9 - Quizz ",
    lien: "/mission9/index.html",
    technologies: ["HTML 5", "CSS", "JAVASCRIPT"]
  },
{
    id: 10,
    title: "Mission 10 - Réalisation d’un module de facturation ",
    lien: "/mission10/index.html",
    technologies: ["HTML 5", "CSS", "JAVASCRIPT"]
  }

]

export const tps: TP[] = [
  {
    id: 1,
    title: "TP 1 - HTML & CSS de base",
    lien: "/tp1/index.html",
    technologies: ["HTML", "CSS"]
  },
  {
    id: 2,
    title: "TP 2 - JavaScript interactif",
    lien: "/tp2/index.html",
    technologies: ["JavaScript"]
  },
  {
    id: 3,
    title: "TP 3 - Formulaire et validation",
    lien: "/tp3/index.html",
    technologies: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: 4,
    title: "TP 4 - CRUD PHP",
    lien: "/tp4/index.html",
    technologies: ["PHP", "MySQL"]
  },
  {
    id: 5,
    title: "TP 5 - Responsive design",
    lien: "/tp5/index.html",
    technologies: ["CSS", "Media Queries"]
  },
  {
    id: 6,
    title: "TP 6 - Calculatrice",
    lien: "/tp6/index.html",
    technologies: ["JavaScript"]
  }
]
