"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Play } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useLanguage } from "@/contexts/language-context"

// Vidéos organisées par catégorie
const videoItems = [
  // Catégorie Événements
  {
    id: 1,
    title: "Compétition Innovation Camp",
    category: "events",
    videoId: "6hwWWU-Q-ls",
    description: "Récapitulatif de la compétition Innovation Camp organisée à l'Université Moulay Ismail.",
  },
  {
    id: 2,
    title: "Lancement du centre TBH",
    category: "events",
    videoId: "HmsQeTKVMko",
    description: "Cérémonie de lancement du Tech Business Hub (TBH) à l'Université Moulay Ismail.",
  },
  {
    id: 3,
    title: "UMI Out of the Box",
    category: "events",
    videoId: "I03KZyK81kI",
    description: "Participation à l'événement UMI Out of the Box organisé par l'Université Moulay Ismail.",
  },

  // Catégorie Workshop
  {
    id: 4,
    title: "Présentation du Photography Club FSM",
    category: "workshop",
    videoId: "7554SFaoO8M",
    description:
      "Vidéo de présentation des activités et des membres du Photography Club de la Faculté des Sciences de Meknès.",
  },

  // Catégorie Projets
  {
    id: 5,
    title: "Laboratoire de recherche scientifique de FSM",
    category: "projects",
    videoId: "QOfQlD78U6M",
    description: "Présentation du laboratoire de recherche scientifique de la Faculté des Sciences de Meknès.",
  },
  {
    id: 6,
    title: "Culture et Art de Meknès",
    category: "projects",
    videoId: "-RxAVBTV9bY",
    description: "Découverte de la culture et de l'art dans la ville historique de Meknès.",
  },
]

export default function VideoGallery({ categories }) {
  const { t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedVideo, setSelectedVideo] = useState(null)

  const filteredItems =
    activeCategory === "all" ? videoItems : videoItems.filter((item) => item.category === activeCategory)

  // Fonction pour générer la miniature YouTube
  const getYouTubeThumbnail = (videoId) => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  }

  return (
    <div>
      {/* Category filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            onClick={() => setActiveCategory(category.id)}
            className="mb-2"
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/* Video grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <Card key={item.id} className="overflow-hidden flex flex-col h-full bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <div className="relative aspect-video cursor-pointer group" onClick={() => setSelectedVideo(item)}>
              <img
                src={getYouTubeThumbnail(item.videoId) || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="rounded-full bg-primary/90 dark:bg-red-600/90 p-4">
                  <Play className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-gray-900 dark:text-gray-100">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="pb-2 pt-0 flex-grow">
              <p className="text-muted-foreground dark:text-gray-400">{item.description}</p>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="outline" className="w-full border-gray-300 dark:border-gray-700" onClick={() => setSelectedVideo(item)}>
                {t("videos.watchVideo")}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Empty state */}
      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-gray-700 dark:text-gray-300">{t("videos.noVideosFound")}</p>
        </div>
      )}

      {/* Video dialog */}
      <Dialog open={!!selectedVideo} onOpenChange={(open) => !open && setSelectedVideo(null)}>
        <DialogContent className="max-w-4xl p-0 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
          {selectedVideo && (
            <div>
              <div className="aspect-video w-full">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${selectedVideo.videoId}`}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">{selectedVideo.title}</h2>
                <p className="text-muted-foreground dark:text-gray-400">{selectedVideo.description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
