"use client"

import GalleryGrid from "@/components/gallery-grid"
import { useLanguage } from "@/contexts/language-context"

export default function GalleryPage() {
  const { t } = useLanguage()

  const categories = [
    { id: "all", name: t("videos.all") },
    { id: "portrait", name: "Portraits" },
    { id: "landscape", name: "Paysages" },
    { id: "street", name: "Street" },
    { id: "architecture", name: "Architecture" },
    { id: "macro", name: "Macro" },
    { id: "events", name: t("videos.events") },
  ]

  return (
    <div className="container mx-auto py-12 px-4 bg-white dark:bg-gray-900">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">{t("gallery.title")}</h1>
      <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-gray-700 dark:text-gray-300">
        {t("gallery.subtitle")}
      </p>

      <GalleryGrid categories={categories} />
    </div>
  )
}
