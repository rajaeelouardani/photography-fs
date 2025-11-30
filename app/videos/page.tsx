"use client"

import VideoGallery from "@/components/video-gallery"
import { useLanguage } from "@/contexts/language-context"

export default function VideosPage() {
  const { t } = useLanguage()

  const categories = [
    { id: "all", name: t("videos.all") },
    { id: "events", name: t("videos.events") },
    { id: "workshop", name: t("videos.workshop") },
    { id: "projects", name: t("videos.projects") },
  ]

  return (
    <div className="container mx-auto py-12 px-4 bg-white dark:bg-gray-900">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">{t("videos.title")}</h1>
      <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-gray-700 dark:text-gray-300">
        {t("videos.subtitle")}
      </p>

      <VideoGallery categories={categories} />
    </div>
  )
}
