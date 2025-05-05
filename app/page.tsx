import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Mail, MapPin, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ImageSlider from "@/components/image-slider"
import PartnerLogos from "@/components/partner-logos"
import MapSection from "@/components/map-section"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[85vh] bg-black">
        <ImageSlider />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-black/40">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-white">Photography </span>
            <span className="text-red-600">Club </span>
            <span className="text-white">FSM</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl">
            Capturer l'instant, partager la passion, inspirer la créativité
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              <Link href="/gallery">Découvrir notre galerie</Link>
            </Button>
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              <Link href="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">À propos du club</h2>
            <p className="text-lg mb-4">
              Le Photography Club de la Faculté des Sciences de Meknès est un espace dédié aux passionnés de
              photographie et de vidéographie. Notre mission est de promouvoir l'art visuel, développer les compétences
              techniques et créatives des étudiants, et documenter les moments importants de la vie universitaire.
            </p>
            <p className="text-lg mb-6">
              Au fil des années, notre club s'est distingué lors de diverses compétitions et a organisé des expositions
              remarquables qui témoignent de notre engagement et de notre passion pour la photographie.
            </p>
            <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
              <Link href="/about">En savoir plus</Link>
            </Button>
          </div>
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/images/event-official-visit.jpeg"
              alt="Visite officielle à la Faculté des Sciences de Meknès"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Actualités récentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src="/images/umi-out-of-box-participation.jpeg"
                  alt="Participation à UMI Out of the Box"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Participation à UMI Out of the Box</h3>
                <p className="text-gray-600 mb-4">10 avril 2025</p>
                <p>Notre participation dans le stand de la Faculté des Sciences à l'événement UMI Out of the Box.</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src="/images/img-20250410-wa0056.jpg"
                  alt="Premier prix de meilleure vidéo créative"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Premier prix de meilleure vidéo créative</h3>
                <p className="text-gray-600 mb-4">10 avril 2025</p>
                <p>
                  Premier prix de meilleure vidéo créative lors d'une compétition organisée par l'Université Moulay
                  Ismail Meknès.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src="/images/img_0560.jpg"
                  alt="Animation d'atelier de photographie"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Animation d'atelier de photographie</h3>
                <p className="text-gray-600 mb-4">22 avril 2025</p>
                <p>Animation d'atelier de photographie au centre CEF de l'ENSAM Meknès.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map & Contact */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Nous trouver</h2>
            <p className="text-lg mb-6">
              Situé au cœur de la Faculté des Sciences de Meknès, notre club vous accueille dans un espace dédié à la
              création visuelle.
            </p>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-5 w-5 text-red-600" />
              <span>Faculté des Sciences, Meknès</span>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <Mail className="h-5 w-5 text-red-600" />
              <a href="mailto:photographyfsm.pro@gmail.com" className="hover:underline">
                photographyfsm.pro@gmail.com
              </a>
            </div>
            <div className="flex gap-4 mt-6">
              <Button asChild size="icon" variant="outline" className="border-red-600 hover:bg-red-600/10">
                <a
                  href="https://instagram.com/photographyfsm.pro"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 text-red-600" />
                </a>
              </Button>
              <Button asChild size="icon" variant="outline" className="border-red-600 hover:bg-red-600/10">
                <a
                  href="https://www.linkedin.com/in/photography-club-fsm-93a716363"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-red-600" />
                </a>
              </Button>
              <Button asChild size="icon" variant="outline" className="border-red-600 hover:bg-red-600/10">
                <a
                  href="https://www.youtube.com/@PhotographyFSM"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5 text-red-600" />
                </a>
              </Button>
            </div>
          </div>
          <Card className="overflow-hidden">
            <CardContent className="p-0 h-[400px]">
              <MapSection />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 px-4 md:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Nos partenaires</h2>
          <PartnerLogos />
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="border-red-600 text-red-600 hover:bg-red-600/10">
              <Link href="/partners">Voir tous nos partenaires</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
