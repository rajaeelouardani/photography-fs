import type { Metadata } from "next"
import VideoGallery from "@/components/video-gallery"

export const metadata: Metadata = {
  title: "Vidéos | Photography Club FSM",
  description: "Découvrez les vidéos réalisées par le Photography Club FSM",
}

const categories = [
  { id: "all", name: "Tous" },
  { id: "events", name: "Événements" },
  { id: "workshop", name: "Workshop" },
  { id: "projects", name: "Projets" },
]

export default function VideosPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Nos vidéos</h1>
      <p className="text-lg text-center max-w-3xl mx-auto mb-12">
        Découvrez les vidéos réalisées par les membres du Photography Club FSM.
      </p>

      <VideoGallery categories={categories} />
    </div>
  )
}
