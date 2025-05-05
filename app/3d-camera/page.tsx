import CameraModel from "@/components/camera-model"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "Caméra 3D Interactive | Photography Club FSM",
  description: "Explorez les composants d'un appareil photo en 3D",
}

export default function CameraPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Caméra 3D Interactive</h1>
        <p className="text-lg mb-8 text-center">
          Explorez les différents composants d'un appareil photo en 3D. Cliquez sur les parties pour voir leur
          description détaillée.
        </p>
      </div>

      <div className="h-[80vh] w-full bg-gradient-to-b from-background to-muted/30 rounded-xl shadow-lg overflow-hidden">
        <CameraModel />
      </div>

      <div className="max-w-4xl mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4">Guide des composants</h2>
        <p className="mb-4">
          Cette visualisation 3D interactive vous permet d'explorer les principaux composants d'un appareil photo reflex
          numérique. Utilisez le bouton "Démonter" pour voir les composants séparés et mieux comprendre leur agencement.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-bold mb-2">Composants externes</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Boîtier</strong> : La structure principale qui contient tous les composants.
              </li>
              <li>
                <strong>Objectif</strong> : Système optique qui capture et focalise la lumière.
              </li>
              <li>
                <strong>Viseur</strong> : Permet de cadrer l'image avant la prise de vue.
              </li>
              <li>
                <strong>Flash</strong> : Fournit un éclairage supplémentaire en conditions de faible luminosité.
              </li>
              <li>
                <strong>Écran LCD</strong> : Affiche les images et les menus de l'appareil.
              </li>
            </ul>
          </div>
          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-bold mb-2">Composants internes</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Capteur</strong> : Convertit la lumière en signal électrique.
              </li>
              <li>
                <strong>Miroir</strong> : Réfléchit l'image vers le viseur optique.
              </li>
              <li>
                <strong>Batterie</strong> : Fournit l'énergie nécessaire au fonctionnement.
              </li>
              <li>
                <strong>Carte mémoire</strong> : Stocke les images capturées.
              </li>
              <li>
                <strong>Molette de mode</strong> : Permet de sélectionner les différents modes de prise de vue.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Nouvelle section comparative entre hybride et reflex */}
      <div className="max-w-4xl mx-auto mt-16 mb-8">
        <h2 className="text-2xl font-bold mb-6">Différences entre appareils hybrides et reflex</h2>

        <div className="relative w-full aspect-[2/1] mb-8">
          <Image
            src="/images/schema-visee-reflex-hybride.jpg"
            alt="Schéma comparatif entre appareil hybride et reflex"
            fill
            className="object-contain rounded-lg"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-center mb-4 text-primary">Appareils Hybrides</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span>
                    <strong>Absence de miroir</strong> : La lumière passe directement de l'objectif au capteur.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span>
                    <strong>Viseur électronique (EVF)</strong> : Affiche une image numérique provenant directement du
                    capteur.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span>
                    <strong>Taille réduite</strong> : Plus compacts et légers grâce à l'absence de mécanisme de miroir.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span>
                    <strong>Distance focale réduite</strong> : Distance plus courte entre l'objectif et le capteur.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span>
                    <strong>Silencieux</strong> : Pas de bruit mécanique du miroir lors de la prise de vue.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span>
                    <strong>Prévisualisation en temps réel</strong> : Le viseur montre exactement ce que le capteur
                    voit, y compris l'exposition, la balance des blancs et les effets.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-center mb-4 text-primary">Appareils Reflex</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span>
                    <strong>Système de miroir</strong> : La lumière est réfléchie par un miroir vers le pentaprisme puis
                    le viseur.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span>
                    <strong>Viseur optique (OVF)</strong> : Montre une image optique directe à travers l'objectif.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span>
                    <strong>Taille plus importante</strong> : Plus grands et plus lourds en raison du mécanisme de
                    miroir et du pentaprisme.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span>
                    <strong>Distance focale plus longue</strong> : Distance plus grande entre l'objectif et le capteur.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span>
                    <strong>Bruit mécanique</strong> : Le mouvement du miroir produit un bruit caractéristique lors de
                    la prise de vue.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span>
                    <strong>Vision optique pure</strong> : Le viseur montre une image optique sans latence ni
                    consommation d'énergie.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 bg-muted p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Quelle technologie choisir ?</h3>
          <p className="mb-4">
            Le choix entre un appareil hybride et un reflex dépend de vos besoins spécifiques en photographie :
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-medium mb-2">Les hybrides sont idéaux pour :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Les photographes privilégiant la portabilité</li>
                <li>La photographie de rue et de voyage</li>
                <li>La vidéographie (meilleure mise au point automatique)</li>
                <li>Les débutants souhaitant voir l'effet des réglages en temps réel</li>
              </ul>
            </div>
            <div>
              <p className="font-medium mb-2">Les reflex sont préférables pour :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Les photographes habitués aux viseurs optiques</li>
                <li>La photographie sportive et animalière (meilleure autonomie)</li>
                <li>Ceux disposant déjà d'un parc d'objectifs compatibles</li>
                <li>Les situations nécessitant une longue autonomie de batterie</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
