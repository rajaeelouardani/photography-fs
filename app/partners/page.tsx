import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Partenaires | Photography Club FSM",
  description: "Découvrez les partenaires officiels du Photography Club FSM",
}

const partners = [
  {
    id: 1,
    name: "Université Moulay Ismail",
    description:
      "L'Université Moulay Ismail de Meknès est une institution d'enseignement supérieur publique fondée en 1989. Elle comprend plusieurs établissements répartis sur Meknès et sa région, et forme des milliers d'étudiants dans diverses disciplines. L'université soutient activement les initiatives étudiantes et les clubs universitaires comme le nôtre.",
    logo: "/images/umi-logo.png",
    website: "https://www.umi.ac.ma/",
    type: "Institution académique",
  },
  {
    id: 2,
    name: "Faculté des Sciences de Meknès",
    description:
      "La Faculté des Sciences de Meknès est notre institution d'accueil, relevant de l'Université Moulay Ismail. Fondée en 1982, elle offre des formations dans diverses disciplines scientifiques et soutient activement les clubs et associations d'étudiants. Elle nous fournit les espaces nécessaires pour nos activités et nous accompagne dans tous nos projets.",
    logo: "/images/fsm-logo.png",
    website: "https://www.fs-umi.ac.ma/",
    type: "Institution académique",
  },
  {
    id: 3,
    name: "Tech Business Hub",
    description:
      "Le Tech Business Hub (TBH) est un espace dédié à l'innovation et à l'entrepreneuriat technologique au sein de l'Université Moulay Ismail. Il soutient les étudiants et les jeunes entrepreneurs dans le développement de projets technologiques, en leur fournissant des ressources, des formations, des événements et un réseau de mentors. Le TBH vise à favoriser l'émergence de nouvelles startups technologiques et à renforcer les compétences des étudiants dans le domaine du business et de la technologie.",
    logo: "/images/tbh-logo.png",
    website: "#",
    type: "Incubateur d'innovation",
  },
  {
    id: 4,
    name: "IVR Club FSM",
    description:
      "Le club IVR (Innovation, Visionnaire, Robotique) de la Faculté des Sciences de Meknès est un espace dédié à l'innovation technologique et à la robotique. Il offre aux étudiants passionnés par ces domaines l'opportunité de développer leurs compétences, de travailler sur des projets concrets et de participer à des compétitions nationales et internationales.",
    logo: "/images/ivr-logo.png",
    website: "https://ivrclubfs.com/",
    type: "Club étudiant",
  },
  {
    id: 5,
    name: "Injaz Al Maghrib",
    description:
      "Injaz Al Maghrib est une organisation à but non lucratif qui prépare les jeunes à réussir dans une économie globale.",
    logo: "/images/injaz-logo.png",
    website: "https://injazmorocco.org/",
    type: "ONG",
  },
  {
    id: 6,
    name: "TWINSHELP",
    description:
      "TWINSHELP est une entreprise dynamique spécialisée dans la création de sites web innovants et le développement de stratégies publicitaires percutantes en ligne.",
    logo: "/images/twinshelp-logo.png",
    website: "https://twinshelp.ma/",
    type: "Entreprise",
  },
  {
    id: 7,
    name: "UMI-MUN",
    description:
      "UMI-MUN (Model of United Nations de l'Université Moulay Ismail) est une simulation académique des Nations Unies où les étudiants jouent le rôle de délégués représentant différents pays pour débattre et résoudre des problèmes mondiaux. Cette initiative permet aux participants de développer leurs compétences en diplomatie, négociation, prise de parole en public et compréhension des enjeux internationaux.",
    logo: "/images/umi-mun-logo.png",
    website: "https://umi-mun.online",
    type: "Club universitaire",
  },
]

export default function PartnersPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Nos partenaires</h1>
      <p className="text-lg text-center max-w-3xl mx-auto mb-12">
        Découvrez les organisations et entreprises qui soutiennent le Photography Club FSM et contribuent à notre
        succès.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {partners.map((partner) => (
          <Card key={partner.id} className="flex flex-col h-full">
            <CardHeader className="pb-4">
              <div className="flex justify-center mb-4">
                <div className="relative h-24 w-24 rounded-full overflow-hidden bg-muted">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={`Logo ${partner.name}`}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>
              <CardTitle className="text-center">{partner.name}</CardTitle>
              <CardDescription className="text-center">{partner.type}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-center">{partner.description}</p>
            </CardContent>
            <CardFooter className="pt-0 flex justify-center">
              <Button asChild variant="outline">
                <Link href={partner.website} target="_blank" rel="noopener noreferrer">
                  Visiter le site <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
