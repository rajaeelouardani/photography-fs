import type { Metadata } from "next"
import GalleryGrid from "@/components/gallery-grid"

export const metadata: Metadata = {
  title: "Galerie Photo | Photography Club FSM",
  description: "Découvrez notre collection de photographies classées par thème",
}

const categories = [
  { id: "all", name: "Tous" },
  { id: "portrait", name: "Portraits" },
  { id: "landscape", name: "Paysages" },
  { id: "street", name: "Street" },
  { id: "architecture", name: "Architecture" },
  { id: "macro", name: "Macro" },
  { id: "events", name: "Événements" },
]

export default function GalleryPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Galerie Photo</h1>
      <p className="text-lg text-center max-w-3xl mx-auto mb-12">
        Explorez notre collection de photographies classées par thème. Cliquez sur une image pour l'agrandir.
      </p>

      <GalleryGrid categories={categories} />
    </div>
  )
}
