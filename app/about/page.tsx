import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TeamSection from "@/components/team-section"

export const metadata: Metadata = {
  title: "À propos | Photography Club FSM",
  description: "Découvrez l'histoire, la mission et la vision du Photography Club de la Faculté des Sciences de Meknès",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">À propos du club</h1>

      {/* Hero section */}
      <div className="relative w-full h-[40vh] mb-12 rounded-xl overflow-hidden">
        <Image
          src="/images/workshop-presentation.webp"
          alt="Atelier de formation du Photography Club FSM"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-6 text-white">
            <h2 className="text-2xl font-bold mb-2">Photography Club FSM</h2>
            <p className="text-lg">Capturer l'instant, partager la passion, inspirer la créativité</p>
          </div>
        </div>
      </div>

      {/* Main content with tabs */}
      <div className="max-w-4xl mx-auto">
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="about">Histoire</TabsTrigger>
            <TabsTrigger value="mission">Mission</TabsTrigger>
            <TabsTrigger value="vision">Vision</TabsTrigger>
            <TabsTrigger value="values">Valeurs</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="space-y-6">
            <h2 className="text-3xl font-bold mb-4">Notre histoire</h2>
            <div className="prose max-w-none">
              <p>
                Le Photography Club de la Faculté des Sciences de Meknès a été créé par un groupe d'étudiants passionnés
                par la photographie et désireux de partager cette passion avec la communauté universitaire.
              </p>
              <p>
                Depuis sa création, le club n'a cessé de grandir et de se développer, attirant des étudiants de
                différentes filières et années d'études. Ce qui a commencé comme un petit groupe de passionnés s'est
                transformé en une communauté dynamique et créative.
              </p>
              <p>
                Au fil des années, le club a organisé de nombreux événements, expositions et ateliers, contribuant
                activement à la vie culturelle de la faculté. Nos membres ont participé à diverses compétitions
                nationales et internationales, remportant des prix qui témoignent de la qualité de leur travail.
              </p>
              <p>
                Aujourd'hui, le Photography Club FSM est reconnu comme l'un des clubs les plus actifs et créatifs de
                l'université, offrant un espace d'expression artistique et de développement personnel à tous ses
                membres.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="mission" className="space-y-6">
            <h2 className="text-3xl font-bold mb-4">Notre mission</h2>
            <div className="prose max-w-none">
              <p>
                Le Photography Club FSM a pour mission de promouvoir l'art de la photographie et de la vidéographie au
                sein de la communauté universitaire de la Faculté des Sciences de Meknès, tout en offrant un espace
                d'apprentissage, de création et d'échange pour tous les passionnés d'image.
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3">Nos objectifs principaux</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="bg-muted rounded-lg p-6">
                  <h4 className="font-bold mb-2">Formation et développement des compétences</h4>
                  <p>
                    Offrir aux étudiants l'opportunité d'apprendre et de perfectionner leurs compétences en photographie
                    et vidéographie à travers des ateliers, formations et sessions pratiques régulières.
                  </p>
                </div>

                <div className="bg-muted rounded-lg p-6">
                  <h4 className="font-bold mb-2">Documentation et mémoire</h4>
                  <p>
                    Documenter les moments importants de la vie universitaire, créant ainsi une archive visuelle
                    précieuse de l'histoire et des activités de la faculté.
                  </p>
                </div>

                <div className="bg-muted rounded-lg p-6">
                  <h4 className="font-bold mb-2">Expression artistique</h4>
                  <p>
                    Encourager l'expression artistique et créative des étudiants à travers des projets photographiques
                    individuels et collectifs, expositions et concours.
                  </p>
                </div>

                <div className="bg-muted rounded-lg p-6">
                  <h4 className="font-bold mb-2">Rayonnement et représentation</h4>
                  <p>
                    Représenter la Faculté des Sciences de Meknès lors d'événements et compétitions nationales et
                    internationales, contribuant ainsi à son rayonnement culturel et artistique.
                  </p>
                </div>
              </div>

              <p className="mt-6">
                À travers ces objectifs, nous nous efforçons de créer un environnement stimulant où la passion pour la
                photographie peut s'épanouir, où les talents peuvent être découverts et développés, et où la créativité
                est valorisée et encouragée.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="vision" className="space-y-6">
            <h2 className="text-3xl font-bold mb-4">Notre vision</h2>
            <div className="prose max-w-none">
              <p>
                Le Photography Club FSM aspire à devenir un centre d'excellence reconnu dans le domaine de la
                photographie universitaire au Maroc, en formant la prochaine génération de photographes et vidéastes
                talentueux et en contribuant activement à l'enrichissement culturel et artistique de notre communauté.
              </p>

              <div className="my-8 p-6 bg-primary/5 border border-primary/20 rounded-lg">
                <blockquote className="italic text-xl">
                  "Nous imaginons un avenir où chaque étudiant aura les outils et les connaissances nécessaires pour
                  exprimer sa vision unique du monde à travers l'objectif, et où notre club sera un tremplin vers des
                  carrières créatives réussies."
                </blockquote>
              </div>

              <h3 className="text-xl font-bold mt-6 mb-3">Nos aspirations pour l'avenir</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center">1</div>
                  </div>
                  <div>
                    <h4 className="font-bold">Expansion et innovation</h4>
                    <p>
                      Élargir notre champ d'action pour inclure de nouvelles formes d'expression visuelle comme la
                      photographie drone, la réalité virtuelle et la photographie computationnelle.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center">2</div>
                  </div>
                  <div>
                    <h4 className="font-bold">Reconnaissance nationale</h4>
                    <p>
                      Établir le club comme une référence nationale en matière de photographie universitaire, reconnu
                      pour la qualité de ses productions et l'excellence de ses membres.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center">3</div>
                  </div>
                  <div>
                    <h4 className="font-bold">Collaboration et partenariats</h4>
                    <p>
                      Développer des partenariats stratégiques avec des organisations professionnelles, des entreprises
                      et d'autres institutions éducatives pour offrir davantage d'opportunités à nos membres.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center">4</div>
                  </div>
                  <div>
                    <h4 className="font-bold">Impact social</h4>
                    <p>
                      Utiliser la photographie comme outil de sensibilisation et de changement social, en initiant des
                      projets documentaires sur des questions importantes pour notre communauté et notre société.
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-6">
                Cette vision guide toutes nos activités et décisions, nous poussant constamment à nous dépasser et à
                explorer de nouveaux horizons dans notre quête d'excellence photographique.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="values" className="space-y-6">
            <h2 className="text-3xl font-bold mb-4">Nos valeurs</h2>
            <div className="prose max-w-none">
              <p>
                Les valeurs fondamentales du Photography Club FSM définissent notre identité et guident nos actions au
                quotidien. Elles sont le reflet de ce que nous considérons comme important et de la manière dont nous
                souhaitons interagir entre nous et avec le monde qui nous entoure.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Créativité</h3>
                    <p>
                      Nous valorisons l'originalité, l'innovation et l'expression personnelle dans toutes nos
                      entreprises photographiques.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Collaboration</h3>
                    <p>
                      Nous croyons en la puissance du travail d'équipe et du partage des connaissances pour atteindre
                      l'excellence.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M2 12h20"></path>
                        <path d="M12 2v20"></path>
                        <path d="m4.93 4.93 14.14 14.14"></path>
                        <path d="m19.07 4.93-14.14 14.14"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Inclusion</h3>
                    <p>
                      Nous accueillons et valorisons la diversité des perspectives, des expériences et des styles
                      photographiques.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path>
                        <path d="M10 2c1 .5 2 2 2 5"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Éthique</h3>
                    <p>
                      Nous nous engageons à pratiquer et à promouvoir une photographie respectueuse, honnête et
                      responsable.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M12 2v20"></path>
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Excellence</h3>
                    <p>
                      Nous nous efforçons constamment d'améliorer nos compétences et de produire un travail de la plus
                      haute qualité.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Engagement</h3>
                    <p>
                      Nous sommes dévoués à notre art, à notre club et à notre communauté universitaire, avec passion et
                      détermination.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <p>
                Ces valeurs ne sont pas simplement des mots pour nous ; elles sont incarnées dans chaque projet que nous
                entreprenons, chaque image que nous créons et chaque interaction que nous avons. Elles constituent le
                fondement de notre identité en tant que club et guident notre croissance continue.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Team section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Notre équipe</h2>
        <TeamSection />
      </div>
    </div>
  )
}
