"use client"

import { Suspense, useState, useRef, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment, Html, PerspectiveCamera } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Composant pour un seul élément de l'appareil photo
function CameraPart({
  name,
  position,
  color,
  scale = [1, 1, 1],
  rotation = [0, 0, 0],
  onClick,
  isHighlighted,
  isExploded,
  explodeDirection,
}) {
  const meshRef = useRef()
  const originalPosition = useRef(position)

  // Effet pour l'animation d'explosion
  useEffect(() => {
    if (!meshRef.current) return

    if (isExploded && explodeDirection) {
      const targetPosition = [
        position[0] + explodeDirection[0],
        position[1] + explodeDirection[1],
        position[2] + explodeDirection[2],
      ]

      // Animation simple pour l'explosion
      const animate = () => {
        if (!meshRef.current) return
        meshRef.current.position.x += (targetPosition[0] - meshRef.current.position.x) * 0.1
        meshRef.current.position.y += (targetPosition[1] - meshRef.current.position.y) * 0.1
        meshRef.current.position.z += (targetPosition[2] - meshRef.current.position.z) * 0.1
      }

      const interval = setInterval(animate, 16)
      return () => clearInterval(interval)
    } else {
      // Retour à la position d'origine
      const animate = () => {
        if (!meshRef.current) return
        meshRef.current.position.x += (position[0] - meshRef.current.position.x) * 0.1
        meshRef.current.position.y += (position[1] - meshRef.current.position.y) * 0.1
        meshRef.current.position.z += (position[2] - meshRef.current.position.z) * 0.1
      }

      const interval = setInterval(animate, 16)
      return () => clearInterval(interval)
    }
  }, [isExploded, position, explodeDirection])

  return (
    <mesh
      ref={meshRef}
      position={position}
      rotation={rotation}
      scale={scale}
      onClick={(e) => {
        e.stopPropagation()
        onClick(name)
      }}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={color}
        emissive={isHighlighted ? color : "#000000"}
        emissiveIntensity={isHighlighted ? 0.5 : 0}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  )
}

// Composant principal de l'appareil photo
function Camera({ setSelectedPart, isExploded }) {
  const groupRef = useRef()
  const [hoveredPart, setHoveredPart] = useState(null)

  // Définition des parties de l'appareil photo avec leurs positions et descriptions
  const cameraParts = [
    {
      name: "Boîtier",
      description:
        "Le boîtier est la structure principale de l'appareil photo qui contient tous les composants électroniques et mécaniques. Il est généralement fabriqué en alliage de magnésium ou en polycarbonate renforcé pour assurer durabilité et légèreté.",
      position: [0, 0, 0],
      color: "#2a2a2a",
      scale: [2.5, 1.5, 1],
      explodeDirection: [0, 0, 0], // Le boîtier reste en place
    },
    {
      name: "Objectif",
      description:
        "L'objectif est un ensemble de lentilles qui capture et focalise la lumière sur le capteur. Sa qualité détermine en grande partie la netteté et la clarté de l'image finale. Les objectifs peuvent être interchangeables sur les appareils reflex et hybrides.",
      position: [0, 0, 1.2],
      color: "#1a1a1a",
      scale: [1.2, 1.2, 1.5],
      rotation: [0, 0, 0],
      explodeDirection: [0, 0, 2],
    },
    {
      name: "Capteur",
      description:
        "Le capteur est l'élément qui convertit la lumière en signal électrique. Sa taille et sa résolution influencent directement la qualité de l'image, particulièrement en conditions de faible luminosité. Les capteurs modernes peuvent atteindre des résolutions de plusieurs dizaines de mégapixels.",
      position: [0, 0, -0.2],
      color: "#3a7ca5",
      scale: [1.2, 1, 0.1],
      explodeDirection: [0, 0, -1.5],
    },
    {
      name: "Miroir",
      description:
        "Présent dans les appareils reflex, le miroir réfléchit la lumière entrante vers le viseur optique. Lors de la prise de vue, il se relève pour permettre à la lumière d'atteindre le capteur. Ce mécanisme produit le claquement caractéristique des appareils reflex.",
      position: [0, 0.3, -0.5],
      color: "#c0c0c0",
      scale: [1, 0.8, 0.05],
      rotation: [Math.PI / 4, 0, 0],
      explodeDirection: [0, 1.5, -1],
    },
    {
      name: "Viseur",
      description:
        "Le viseur permet au photographe de cadrer l'image avant la prise de vue. Dans les appareils reflex, il s'agit d'un système optique qui montre exactement ce que verra le capteur. Dans les appareils numériques sans miroir, le viseur est souvent électronique (EVF).",
      position: [0, 0.9, -0.3],
      color: "#1a1a1a",
      scale: [0.8, 0.4, 0.4],
      explodeDirection: [0, 2, 0],
    },
    {
      name: "Batterie",
      description:
        "La batterie fournit l'énergie nécessaire au fonctionnement de l'appareil. Les batteries lithium-ion modernes offrent une autonomie de plusieurs centaines de photos. La durée de vie de la batterie varie selon l'utilisation du flash, de l'écran LCD et d'autres fonctionnalités énergivores.",
      position: [-0.9, -0.5, 0],
      color: "#ffcc00",
      scale: [0.6, 0.8, 0.6],
      explodeDirection: [-2, -1, 0],
    },
    {
      name: "Carte mémoire",
      description:
        "La carte mémoire stocke les images capturées. Les cartes SD, CF ou XQD sont les formats les plus courants, avec des capacités allant de quelques gigaoctets à plusieurs téraoctets. La vitesse d'écriture de la carte est cruciale pour la photographie en rafale ou l'enregistrement vidéo haute résolution.",
      position: [0.9, -0.5, 0],
      color: "#d35400",
      scale: [0.6, 0.8, 0.4],
      explodeDirection: [2, -1, 0],
    },
    {
      name: "Flash",
      description:
        "Le flash intégré fournit un éclairage supplémentaire dans des conditions de faible luminosité. Bien que pratique, il a une portée limitée et peut produire des ombres dures. Pour un éclairage plus professionnel, les photographes utilisent souvent des flashs externes ou des systèmes d'éclairage studio.",
      position: [0, 1.1, 0],
      color: "#f39c12",
      scale: [0.6, 0.2, 0.6],
      explodeDirection: [0, 2, 1],
    },
    {
      name: "Écran LCD",
      description:
        "L'écran LCD permet de visualiser les images capturées, d'accéder aux menus de l'appareil et, sur certains modèles, de cadrer en direct (Live View). Les écrans tactiles et orientables offrent une flexibilité supplémentaire pour les prises de vue à des angles difficiles.",
      position: [0, 0, -0.6],
      color: "#2c3e50",
      scale: [1.8, 1, 0.1],
      explodeDirection: [0, -1.5, -1.5],
    },
    {
      name: "Molette de mode",
      description:
        "La molette de mode permet de sélectionner rapidement les différents modes de prise de vue (Auto, Programme, Priorité ouverture, Priorité vitesse, Manuel, etc.). Elle donne accès aux paramètres prédéfinis ou personnalisés selon les besoins du photographe.",
      position: [1, 0.8, 0],
      color: "#8e44ad",
      scale: [0.4, 0.1, 0.4],
      explodeDirection: [2, 1, 0],
    },
  ]

  // Animation de rotation douce
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001
    }
  })

  return (
    <group ref={groupRef}>
      {cameraParts.map((part, index) => (
        <group key={index}>
          <CameraPart
            name={part.name}
            position={part.position}
            color={part.color}
            scale={part.scale}
            rotation={part.rotation || [0, 0, 0]}
            onClick={(name) => setSelectedPart(cameraParts.find((p) => p.name === name))}
            isHighlighted={hoveredPart === part.name}
            isExploded={isExploded}
            explodeDirection={part.explodeDirection}
          />

          {/* Étiquettes pour chaque partie */}
          <Html
            position={[
              part.position[0] + (isExploded ? part.explodeDirection[0] * 0.7 : 0),
              part.position[1] + (isExploded ? part.explodeDirection[1] * 0.7 : 0) + 0.8,
              part.position[2] + (isExploded ? part.explodeDirection[2] * 0.7 : 0),
            ]}
            distanceFactor={10}
            occlude
          >
            <div
              className="bg-background/80 backdrop-blur-sm px-2 py-1 rounded-md text-xs cursor-pointer hover:bg-primary/20 transition-colors"
              onClick={() => setSelectedPart(cameraParts.find((p) => p.name === part.name))}
              onMouseEnter={() => setHoveredPart(part.name)}
              onMouseLeave={() => setHoveredPart(null)}
            >
              {part.name}
            </div>
          </Html>
        </group>
      ))}
    </group>
  )
}

export default function CameraModel() {
  const [selectedPart, setSelectedPart] = useState(null)
  const [exploded, setExploded] = useState(false)
  const [cameraPosition, setCameraPosition] = useState([0, 0, 5])

  return (
    <div className="relative h-full w-full">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={cameraPosition} fov={50} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} intensity={0.5} castShadow />

        <Suspense
          fallback={
            <Html center>
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              </div>
            </Html>
          }
        >
          <Camera setSelectedPart={setSelectedPart} isExploded={exploded} />
          <Environment preset="studio" />
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            minDistance={3}
            maxDistance={10}
            onChange={(e) => {
              // Mise à jour de la position de la caméra pour les étiquettes
              if (e.target && e.target.object) {
                setCameraPosition([e.target.object.position.x, e.target.object.position.y, e.target.object.position.z])
              }
            }}
          />
        </Suspense>
      </Canvas>

      {/* Controls */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        <Button variant={exploded ? "default" : "outline"} onClick={() => setExploded(!exploded)}>
          {exploded ? "Assembler" : "Démonter"}
        </Button>
      </div>

      {/* Part details */}
      {selectedPart && (
        <Card className="absolute top-4 right-4 w-72 max-h-[80%] overflow-auto">
          <CardContent className="p-4">
            <h3 className="font-bold text-lg mb-2">{selectedPart.name}</h3>
            <p className="text-sm">{selectedPart.description}</p>
            <Button variant="ghost" size="sm" className="mt-2" onClick={() => setSelectedPart(null)}>
              Fermer
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Instructions */}
      <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm p-3 rounded-lg text-sm max-w-xs">
        <h3 className="font-bold mb-1">Comment interagir :</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Cliquez sur une partie pour voir sa description</li>
          <li>Utilisez le bouton "Démonter" pour voir les composants séparés</li>
          <li>Faites glisser pour faire pivoter la caméra</li>
          <li>Utilisez la molette pour zoomer</li>
        </ul>
      </div>
    </div>
  )
}
