"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

// Données de la galerie organisées par catégorie
const galleryItems = {
  portrait: [
    { id: 1, image: "/images/portrait-1.jpeg" },
    { id: 2, image: "/images/portrait-2.jpeg" },
    { id: 3, image: "/images/portrait-3.jpeg" },
    { id: 4, image: "/images/portrait-4.jpeg", position: "top" }, // Focaliser sur le haut
    { id: 5, image: "/images/portrait-5.jpeg" },
    { id: 6, image: "/images/portrait-6.jpeg" },
    { id: 7, image: "/images/portrait-7.jpeg" },
    { id: 8, image: "/images/portrait-8.jpeg" },
    { id: 9, image: "/images/portrait-9.jpeg" },
  ],
  landscape: [
    { id: 1, image: "/images/landscape-1.jpeg" },
    { id: 2, image: "/images/landscape-2.jpeg" },
    { id: 3, image: "/images/landscape-3.jpeg" },
    { id: 4, image: "/images/landscape-4.jpeg" },
    { id: 5, image: "/images/landscape-5.jpeg" },
    { id: 6, image: "/images/landscape-6.jpeg" },
    { id: 7, image: "/images/landscape-7.jpeg" },
  ],
  street: [
    { id: 1, image: "/images/street-1.jpeg" },
    { id: 2, image: "/images/street-2.jpeg" },
    { id: 3, image: "/images/street-3.jpeg" },
    { id: 4, image: "/images/street-4.jpeg" },
    { id: 5, image: "/images/street-5.jpeg" },
    { id: 6, image: "/images/street-6.jpeg" },
    { id: 7, image: "/images/street-7.jpeg" },
  ],
  architecture: [
    { id: 1, image: "/images/architecture-1.jpeg" },
    { id: 2, image: "/images/architecture-2.jpeg" },
    { id: 3, image: "/images/architecture-3.jpeg" },
    { id: 4, image: "/images/architecture-4.jpeg" },
    { id: 5, image: "/images/architecture-5.jpeg" },
    { id: 6, image: "/images/architecture-6.jpeg" },
    { id: 7, image: "/images/architecture-7.jpeg" },
    { id: 8, image: "/images/architecture-8.jpeg" },
    { id: 9, image: "/images/architecture-9.jpeg" },
    { id: 10, image: "/images/architecture-10.jpeg" },
  ],
  macro: [
    { id: 1, image: "/images/macro-1.jpeg" },
    { id: 2, image: "/images/macro-2.jpeg" },
  ],
  events: [
    { id: 1, image: "/images/award-ceremony.jpg" },
    { id: 2, image: "/images/event-official-visit.jpeg" },
    { id: 3, image: "/images/umi-out-of-box-participation.jpeg" },
    { id: 4, image: "/images/exhibition-1.jpg" },
    { id: 5, image: "/images/event-group-photo.jpeg" },
  ],
}

export default function GalleryGrid({ categories }) {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState(null)

  // Filtrer les éléments en fonction de la catégorie active
  const getFilteredItems = () => {
    if (activeCategory === "all") {
      // Combiner toutes les catégories
      return Object.values(galleryItems)
        .flat()
        .map((item, index) => ({
          ...item,
          id: `all-${index}`, // Assurer des IDs uniques
        }))
    }

    return galleryItems[activeCategory] || []
  }

  const filteredItems = getFilteredItems()

  return (
    <div>
      {/* Filtres de catégorie */}
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

      {/* Grille de galerie */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="relative aspect-square overflow-hidden rounded-md cursor-pointer group"
            onClick={() => setSelectedImage(item)}
          >
            <Image
              src={item.image || "/placeholder.svg"}
              alt="Photo de galerie"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              style={{ objectPosition: item.position || "center" }}
            />
          </div>
        ))}
      </div>

      {/* État vide */}
      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-gray-700 dark:text-gray-300">Aucune image trouvée dans cette catégorie.</p>
        </div>
      )}

      {/* Dialogue lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          <div className="relative w-full aspect-[4/3] bg-black dark:bg-gray-900 rounded-lg overflow-hidden">
            {selectedImage && (
              <Image
                src={selectedImage.image || "/placeholder.svg"}
                alt="Photo agrandie"
                fill
                className="object-contain"
                style={{ objectPosition: selectedImage.position || "center" }}
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
