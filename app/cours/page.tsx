import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Camera, BookOpen, Users, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Cours et Ressources | Photography Club FSM",
  description: "Découvrez nos cours et ressources pour apprendre la photographie",
}

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image src="/images/photo-workshop.jpeg" alt="Cours de photographie" fill className="object-cover" priority />
        <div className="relative z-20 container mx-auto h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Cours et Ressources</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Développez vos compétences en photographie avec nos ressources pédagogiques
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Featured Course */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-1 w-10 bg-primary rounded-full"></div>
            <h2 className="text-2xl font-bold">Cours en vedette</h2>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Course Info */}
              <div className="p-8 lg:p-10 bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20">
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </span>
                  <div>
                    <h3 className="text-3xl font-bold">Bases de la Photographie</h3>
                    <p className="text-muted-foreground">Préparé par Rajae Elouardani • 51 pages</p>
                  </div>
                </div>

                <div className="space-y-8 mb-8">
                  <div>
                    <p className="text-lg leading-relaxed">
                      Ce cours est une introduction complète aux fondamentaux de la photographie, destiné aux débutants
                      souhaitant maîtriser les notions essentielles pour capturer des images de qualité, qu'elles soient
                      artistiques, documentaires ou techniques.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="bg-background/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-colors">
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <Camera className="h-8 w-8 text-primary mb-3" />
                        <h4 className="font-semibold mb-2">Techniques</h4>
                        <p className="text-sm text-muted-foreground">
                          Maîtrisez les réglages essentiels de votre appareil
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-background/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-colors">
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <Award className="h-8 w-8 text-primary mb-3" />
                        <h4 className="font-semibold mb-2">Composition</h4>
                        <p className="text-sm text-muted-foreground">
                          Apprenez à créer des images visuellement captivantes
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-background/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-colors">
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <Users className="h-8 w-8 text-primary mb-3" />
                        <h4 className="font-semibold mb-2">Pratique</h4>
                        <p className="text-sm text-muted-foreground">
                          Exercices concrets et conseils de professionnels
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold">Ce que vous apprendrez :</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Réglages manuels (ISO, ouverture)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Composition et cadrage</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Gestion de la lumière</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Techniques de retouche</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Styles photographiques</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Exercices pratiques</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link
                    href="https://www.linkedin.com/posts/photography-club-fsm-93a716363_bases-de-la-photographie-pr%C3%A9par%C3%A9-par-rajae-activity-7325119398166372352-KGY6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Voir le cours complet sur LinkedIn
                  </Link>
                </Button>
              </div>

              {/* LinkedIn Embed */}
              <div className="bg-white dark:bg-gray-800 p-6 flex flex-col">
                <div className="flex-grow flex items-center justify-center">
                  <div className="w-full h-full max-w-md mx-auto rounded-lg overflow-hidden shadow-md border border-gray-200 dark:border-gray-700">
                    <iframe
                      src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7325119397067481088?collapsed=1"
                      height="534"
                      width="100%"
                      frameBorder="0"
                      allowFullScreen
                      title="Publication LinkedIn du Photography Club FSM"
                      className="max-w-full"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Workshop Photos Section */}
        <div className="max-w-6xl mx-auto mt-24">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-1 w-10 bg-primary rounded-full"></div>
            <h2 className="text-2xl font-bold">Nos ateliers en images</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-lg">
              <Image
                src="/images/photo-workshop.jpeg"
                alt="Atelier pratique de photographie"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold">Atelier pratique</h3>
                  <p>Les participants apprennent à manipuler les appareils photo</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Formation pratique et interactive</h3>
              <p className="text-lg mb-6">
                Nos cours ne se limitent pas à la théorie. Nous organisons régulièrement des ateliers pratiques où les
                participants peuvent manipuler des appareils photo, apprendre les techniques de prise de vue et recevoir
                des conseils personnalisés de nos formateurs.
              </p>
              <p className="text-lg mb-6">
                Ces sessions permettent aux débutants de se familiariser avec leur équipement et aux photographes plus
                expérimentés d'affiner leurs compétences dans un environnement collaboratif et stimulant.
              </p>
              <Button asChild variant="outline">
                <Link href="/contact">S'inscrire aux prochains ateliers</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Upcoming Courses */}
        <div className="max-w-6xl mx-auto mt-24">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-1 w-10 bg-primary rounded-full"></div>
            <h2 className="text-2xl font-bold">Prochaines formations</h2>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
                <Image
                  src="/images/photography-club-logo.png"
                  alt="Photography Club FSM Logo"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>

              <h3 className="text-2xl font-bold mb-4">Vous souhaitez plus de ressources ?</h3>
              <p className="text-lg mb-8">
                Notre équipe prépare régulièrement de nouveaux cours et ateliers pour vous aider à développer vos
                compétences en photographie. Suivez-nous sur les réseaux sociaux pour être informé des prochaines
                publications.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="default">
                  <Link href="/contact">Nous contacter pour suggestions</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="https://instagram.com/photographyfsm.pro" target="_blank" rel="noopener noreferrer">
                    Suivre sur Instagram
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
