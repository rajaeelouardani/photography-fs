"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const images = [
  {
    src: "/images/award-ceremony.jpg",
    alt: "Cérémonie de remise de prix au Photography Club FSM",
  },
  {
    src: "/images/event-official-visit.jpeg",
    alt: "Visite officielle à la Faculté des Sciences de Meknès",
  },
  {
    src: "/images/umi-out-of-box-participation.jpeg",
    alt: "Participation à l'événement UMI Out of the Box",
  },
  {
    src: "/images/exhibition-2.jpg",
    alt: "Présentation des travaux du Photography Club FSM",
  },
]

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentIndex ? "opacity-100" : "opacity-0",
          )}
        >
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            priority={index === 0}
            className="object-cover"
          />
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              index === currentIndex ? "bg-red-600 w-4" : "bg-white/50",
            )}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
