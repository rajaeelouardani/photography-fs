"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

// Données de l'équipe
const teamMembers = [
  {
    id: 1,
    name: "Rajae Elouardani",
    key: "rajae",
    image: "/images/president photography.jpg",
    instagram: "https://www.instagram.com/rajaeelouardani/",
  },
  {
    id: 2,
    name: "Reda Sahli",
    key: "reda",
    image: "/images/Sahli reda .jpg",
    instagram: "https://www.instagram.com/sahli_reda_/",
  },
  {
    id: 3,
    name: "Hamza Zouhri",
    key: "hamza",
    image: "/images/hamza-zouhri.jpeg",
    instagram: "https://www.instagram.com/ajax4222/",
  },
  {
    id: 4,
    name: "Aya Challou",
    key: "aya",
    image: "/images/aya-challou.jpeg",
    instagram: "https://www.instagram.com/ch_ayaa/",
  },
  {
    id: 5,
    name: "Akram Rihani",
    key: "akram",
    image: "/images/akram rihani.jpg",
    instagram: "https://www.instagram.com/",
  },
  {
    id: 6,
    name: "Adam Jabal",
    key: "adam",
    image: "/images/Adam Jabal.jpg",
    instagram: "https://www.instagram.com/adem_j1b1l?igsh=MW9qbHE0c3B6M210bQ==",
  },
  {
    id: 7,
    name: "Karim Charrou",
    key: "karim",
    image: "/images/kARIM Charrou.jpg",
    instagram: "https://www.instagram.com/",
  },
  {
    id: 8,
    name: "Ichrak Laassiri",
    key: "ichrak",
    image: "/images/Ichrak.jpg",
    instagram: "https://www.instagram.com/",
  },
  {
    id: 9,
    name: "Adnan Sadiki",
    key: "adnan",
    image: "/images/adnan sadiki.jpg",
    instagram: "https://www.instagram.com/",
  },
  {
    id: 10,
    name: "Ammali Roqia",
    key: "roqia",
    image: "/images/ammali roqia.JPG",
    instagram: "https://www.instagram.com/",
  },
]

export default function TeamSection() {
  const { t } = useLanguage()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {teamMembers.map((member) => {
        const role = t(`about.teamMembers.${member.key}.role`)
        const bio = t(`about.teamMembers.${member.key}.bio`)
        
        return (
          <Card key={member.id} className="overflow-hidden bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <div className="relative h-96 w-full">
              {member.name === "Aya Challou" ? (
                // Style spécifique pour Aya - focus sur le haut de l'image
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                />
              ) : member.name === "Rajae Elouardani" ? (
                // Style spécifique pour Rajae - focus sur le centre pour voir le visage
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover object-center"
                />
              ) : member.name === "Reda Sahli" ? (
                // Style spécifique pour Reda - focus sur le centre comme un portrait
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover object-center"
                />
              ) : (
                // Style pour tous les autres membres - focus sur le centre pour voir le visage
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover object-center"
                />
              )}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{member.name}</h3>
              <p className="text-primary dark:text-red-500 font-medium mb-2">{role}</p>
              <p className="text-muted-foreground dark:text-gray-400 mb-4">{bio}</p>
              <div className="flex gap-4">
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-red-500"
                  aria-label={`Instagram de ${member.name}`}
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
