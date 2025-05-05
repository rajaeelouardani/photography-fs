import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const newsItems = [
  {
    id: 1,
    title: "Animation d'atelier de photographie",
    description: "Animation d'atelier de photographie au centre CEF de l'ENSAM Meknès.",
    date: "22 avril 2025",
    image: "/images/img_0560.jpg",
  },
  {
    id: 2,
    title: "Premier prix de meilleure vidéo créative",
    description:
      "Premier prix de meilleure vidéo créative lors d'une compétition organisée par l'Université Moulay Ismail Meknès.",
    date: "10 avril 2025",
    image: "/images/img-20250410-wa0056.jpg",
  },
  {
    id: 3,
    title: "Participation à UMI Out of the Box",
    description: "Notre participation dans le stand de la Faculté des Sciences à l'événement UMI Out of the Box.",
    date: "10 avril 2025",
    image: "/images/img_3102.jpg",
  },
]

export default function NewsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {newsItems.map((item) => (
        <Card key={item.id} className="overflow-hidden">
          <div className="relative h-48 w-full">
            <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
          </div>
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.date}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{item.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
