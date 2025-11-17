import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { DownloadCV } from "@/components/download-cv"

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 py-24 lg:px-20 animate-on-scroll"
    >
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-10">
          <div className="space-y-6">
            <p className="text-base font-semibold text-primary tracking-widest uppercase">Bonjour, je suis</p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-balance leading-none">
              Sharon
              <br />
              <span className="text-primary">Alihonou</span>
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-light tracking-tight">
              Développeuse Web Junior
            </p>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl text-pretty">
            Actuellement en 2ᵉ année de BTS SIO option SLAM, je recherche une alternance en développement web au rythme
            de 2 jours de cours / 3 jours en entreprise.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="rounded-full px-8 text-base font-semibold group">
              <a href="#contact" className="flex items-center gap-2">
                Me contacter
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 text-base font-semibold bg-transparent">
              <a href="#projects">Voir mes projets</a>
            </Button>
            <DownloadCV />
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 via-accent/20 to-transparent rounded-[2rem] blur-2xl" />
            <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden border-4 border-card shadow-2xl">
              <img src="/sharon-photo.jpg" alt="Sharon Alihonou" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
