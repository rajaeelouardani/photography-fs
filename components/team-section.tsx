import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram } from "lucide-react"

// Données de l'équipe
const teamMembers = [
  {
    id: 1,
    name: "Rajae Elouardani",
    role: "Présidente & Formatrice",
    image: "/images/rajae-elouardani-new.jpeg",
    bio: "Présidente du Photography Club FSM, passionnée de photographie et de vidéographie. Elle anime également des formations pour les nouveaux membres.",
    instagram: "https://www.instagram.com/rajaeelouardani/",
  },
  {
    id: 2,
    name: "Reda Sahli",
    role: "Vice-président & Designer",
    image: "/images/reda-sahli.jpeg",
    bio: "Étudiant passionné de vidéographie, spécialiste en montage vidéo et designer graphique pour le club.",
    instagram: "https://www.instagram.com/sahli_reda_/",
  },
  {
    id: 3,
    name: "Youssef Tissirallah",
    role: "Photographe",
    image: "/images/youssef-tissirallah.jpeg",
    bio: "Photographe talentueux et président du club IVR FSM. Expert en équipement photo et vidéo, il forme les nouveaux membres.",
    instagram: "https://www.instagram.com/youssef.yta/",
  },
  {
    id: 4,
    name: "Mohamed Achlaji",
    role: "Photographe & Formateur",
    image: "/images/mohamed-achlaji.jpeg",
    bio: "Photographe professionnel et formateur passionné, il partage son expertise et son expérience avec les membres du club.",
    instagram: "https://www.instagram.com/achlaji.mohamed/",
  },
  {
    id: 5,
    name: "Hamza Zouhri",
    role: "Formateur",
    image: "/images/hamza-zouhri.jpeg",
    bio: "Formateur spécialisé en techniques photographiques, il accompagne les membres du club dans leur développement artistique.",
    instagram: "https://www.instagram.com/ajax4222/",
  },
  {
    id: 6,
    name: "Aya Challou",
    role: "Photographe",
    image: "/images/aya-challou.jpeg",
    bio: "Photographe passionnée par les voyages et la prise de souvenirs. Elle capture des moments uniques et partage sa vision artistique avec le club.",
    instagram: "https://www.instagram.com/ch_ayaa/",
  },
]

export default function TeamSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {teamMembers.map((member) => (
        <Card key={member.id} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="relative h-64 w-full">
              {member.name === "Aya Challou" ? (
                // Style spécifique pour Aya - focus sur le haut de l'image
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                />
              ) : (
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              )}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-primary font-medium mb-2">{member.role}</p>
              <p className="text-muted-foreground mb-4">{member.bio}</p>
              <div className="flex gap-4">
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                  aria-label={`Instagram de ${member.name}`}
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
