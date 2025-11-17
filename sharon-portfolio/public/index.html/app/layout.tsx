import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

/**
 * CONFIGURATION GÉNÉRALE DU SITE
 *
 * Ce fichier configure :
 * - Les polices de caractères (Geist et Geist Mono)
 * - Les métadonnées (titre, description pour les moteurs de recherche)
 * - La langue du site (français)
 * - L'analytics Vercel
 *
 * Vous n'avez généralement pas besoin de modifier ce fichier.
 */

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sharon Alihonou - Développeuse Web Junior",
  description:
    "CV en ligne de Sharon Alihonou, étudiante en BTS SIO option SLAM, à la recherche d'une alternance en développement web",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
