"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Book, Dumbbell, ChefHat, Camera, ChevronLeft, ChevronRight } from "lucide-react"

export function Interests() {
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: string]: number }>({
    lecture: 0,
    sports: 0,
    cuisine: 0,
    photographie: 0,
  })

  const interests = [
    {
      id: "lecture",
      title: "Lecture",
      icon: Book,
      description: "Physiologie et horreur",
      images: ["/physiologie-book-cover.jpg", "/horror-book-collection.jpg", "/reading-corner-cozy.jpg"],
    },
    {
      id: "sports",
      title: "Sports",
      icon: Dumbbell,
      description: "Musculation et ultimate",
      images: ["/gym-workout-musculation.jpg", "/ultimate-frisbee-game.jpg", "/diverse-fitness-training.png"],
    },
    {
      id: "cuisine",
      title: "Cuisine",
      icon: ChefHat,
      description: "Pâtisserie",
      images: ["/french-pastries-macarons.jpg", "/baking-cake-decoration.jpg", "/homemade-croissants.jpg"],
    },
    {
      id: "photographie",
      title: "Photographie",
      icon: Camera,
      description: "Paysages",
      images: ["/IMG_7635.jpeg", "/IMG_7637.jpeg", "/IMG_7636.jpeg","/IMG_7640.jpeg"],
    },
  ]

  const nextImage = (interestId: string, totalImages: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [interestId]: (prev[interestId] + 1) % totalImages,
    }))
  }

  const prevImage = (interestId: string, totalImages: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [interestId]: (prev[interestId] - 1 + totalImages) % totalImages,
    }))
  }

  return (
    <section id="interests" className="py-20 px-4 lg:px-16 lg:pr-24 bg-muted/30">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="space-y-4">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight border-4 border-foreground px-6 py-3">
              LOISIRS
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Mes passions et activités en dehors du développement
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((interest) => {
            const Icon = interest.icon
            return (
              <Card key={interest.id} className="border-2 hover:border-primary transition-colors">
                <CardHeader className="text-center">
                  <div className="mx-auto p-3 rounded-xl bg-primary/10 w-fit mb-2">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{interest.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-center">{interest.description}</p>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full bg-transparent">
                        Voir photos
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">{interest.title}</DialogTitle>
                      </DialogHeader>
                      <div className="relative">
                        <div className="aspect-video relative overflow-hidden rounded-lg bg-muted">
                          <img
                            src={interest.images[currentImageIndex[interest.id] || 0]}
                            alt={`${interest.title} ${currentImageIndex[interest.id] + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute inset-y-0 left-0 flex items-center">
                          <Button
                            variant="secondary"
                            size="icon"
                            className="ml-2 rounded-full"
                            onClick={() => prevImage(interest.id, interest.images.length)}
                          >
                            <ChevronLeft className="h-6 w-6" />
                          </Button>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center">
                          <Button
                            variant="secondary"
                            size="icon"
                            className="mr-2 rounded-full"
                            onClick={() => nextImage(interest.id, interest.images.length)}
                          >
                            <ChevronRight className="h-6 w-6" />
                          </Button>
                        </div>
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                          {interest.images.map((_, index) => (
                            <button
                              key={index}
                              className={`w-2 h-2 rounded-full transition-colors ${
                                index === currentImageIndex[interest.id] ? "bg-primary" : "bg-white/50"
                              }`}
                              onClick={() => setCurrentImageIndex((prev) => ({ ...prev, [interest.id]: index }))}
                            />
                          ))}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
