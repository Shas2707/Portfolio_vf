import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 lg:px-16 lg:pr-24">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="space-y-4">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight border-4 border-foreground px-6 py-3">
              CONTACT
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl">N'hésitez pas à me contacter !</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-sm text-muted-foreground">EMAIL</h3>
                  <a
                    href="mailto:sharonalihonou@gmail.com"
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    sharonalihonou@gmail.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-sm text-muted-foreground">TÉLÉPHONE</h3>
                  <a href="tel:+33766522234" className="text-lg font-medium hover:text-primary transition-colors">
                    07.66.52.22.34
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-sm text-muted-foreground">LOCALISATION</h3>
                  <p className="text-lg font-medium">Paris et Île-de-France</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="border-2 bg-primary/5">
              <CardContent className="p-8 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Merci de votre visite !</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Je suis actuellement à la recherche d'une alternance en développement web ou maintenance
                    informatique. Si mon profil vous intéresse, n'hésitez pas à me contacter pour échanger sur les
                    opportunités.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold">Retrouvez-moi sur :</h4>
                  <div className="flex gap-3">
                    <Button size="lg" variant="default" className="flex-1" asChild>
                      <a
                        href="https://www.linkedin.com/in/sharon-alihonou-2478b4318"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="w-5 h-5 mr-2" />
                        LinkedIn
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" className="flex-1 bg-transparent" asChild>
                      <a href="https://github.com/shas2707" target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center pt-12 border-t">
          <p className="text-sm text-muted-foreground">© 2025 Sharon Alihonou. Tous droits réservés.</p>
        </div>
      </div>
    </section>
  )
}
