"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const competitions = [
  {
    id: 1,
    title: "Concours des Clubs de l'Université Moulay Ismail",
    date: "10 avril 2025",
    place: "1er Prix",
    category: "Vidéographie",
    description: "Meilleure vidéo créative des clubs, on a eu le premier prix parmi +90 clubs de l'UMI.",
    image: "/images/competition-award.jpeg",
    participants: ["Rajae Elouardani", "Reda Sahli", "Youssef Tissirallah"],
  },
]

export default function CompetitionsPage() {
  const { t } = useLanguage()

  return (
    <div className="container mx-auto py-12 px-4 bg-white dark:bg-gray-900">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">{t("competitions.title")}</h1>
      <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-gray-700 dark:text-gray-300">
        {t("competitions.subtitle")}
      </p>

      <div className="space-y-12 max-w-5xl mx-auto">
        {competitions.map((competition) => (
          <Card key={competition.id} className="overflow-hidden bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative h-64 md:h-auto">
                <Image
                  src={competition.image || "/placeholder.svg"}
                  alt={competition.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="h-5 w-5 text-yellow-500 dark:text-yellow-400" />
                  <Badge variant="outline" className="text-yellow-500 dark:text-yellow-400 border-yellow-500 dark:border-yellow-400">
                    {competition.place}
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-100 dark:bg-gray-800">{competition.date}</Badge>
                </div>
                <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{competition.title}</h2>
                <p className="text-muted-foreground dark:text-gray-400 mb-4">{t("competitions.category")}: {competition.category}</p>
                <p className="mb-4 text-gray-700 dark:text-gray-300">{competition.description}</p>
                <div>
                  <h3 className="font-medium mb-2 text-gray-900 dark:text-white">{t("competitions.participants")}:</h3>
                  <div className="flex flex-wrap gap-2">
                    {competition.participants.map((participant, index) => (
                      <Badge key={index} variant="secondary" className="bg-gray-100 dark:bg-gray-800">
                        {participant}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
