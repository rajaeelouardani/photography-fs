"use client"

import { Suspense, useState, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment, Html } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import * as THREE from "three"
import { useLanguage } from "@/contexts/language-context"

// Composant pour un seul élément de l'appareil photo avec animation fluide
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
  geometryType,
  geometryArgs,
  materialProps = {},
}) {
  const meshRef = useRef()
  const targetPosition = useRef(new THREE.Vector3(...position))
  const currentPosition = useRef(new THREE.Vector3(...position))

  // Animation fluide avec useFrame
  useFrame(() => {
    if (!meshRef.current) return

    if (isExploded && explodeDirection) {
      targetPosition.current.set(
        position[0] + explodeDirection[0],
        position[1] + explodeDirection[1],
        position[2] + explodeDirection[2]
      )
    } else {
      targetPosition.current.set(position[0], position[1], position[2])
    }

    // Interpolation douce
    currentPosition.current.lerp(targetPosition.current, 0.08)
    meshRef.current.position.copy(currentPosition.current)
  })

  const handleClick = (e) => {
    e.stopPropagation()
    onClick(name)
  }

  // Rendu de la géométrie selon le type
  const renderGeometry = () => {
    switch (geometryType) {
      case "box":
        return <boxGeometry args={geometryArgs || [1, 1, 1]} />
      case "cylinder":
        return <cylinderGeometry args={geometryArgs || [0.5, 0.5, 1, 32]} />
      case "torus":
        return <torusGeometry args={geometryArgs || [0.5, 0.2, 16, 32]} />
      default:
        return <boxGeometry args={geometryArgs || [1, 1, 1]} />
    }
  }

  return (
    <mesh
      ref={meshRef}
      position={position}
      rotation={rotation}
      scale={scale}
      onClick={handleClick}
      onPointerOver={() => {
        document.body.style.cursor = "pointer"
      }}
      onPointerOut={() => {
        document.body.style.cursor = "default"
      }}
      castShadow
      receiveShadow
    >
      {renderGeometry()}
      <meshStandardMaterial
        color={color}
        emissive={isHighlighted ? color : "#000000"}
        emissiveIntensity={isHighlighted ? 0.4 : 0}
        metalness={materialProps.metalness ?? 0.85}
        roughness={materialProps.roughness ?? 0.15}
        envMapIntensity={1}
        {...materialProps}
      />
    </mesh>
  )
}

// Composant Canon DSLR ultra-réaliste (EOS 6D / 5D style)
function CanonCamera({ setSelectedPart, isExploded }) {
  const groupRef = useRef()
  const [hoveredPart, setHoveredPart] = useState(null)
  const { t } = useLanguage()

  // Mapping des composants vers les clés de traduction
  const componentKeys = [
    "body",
    "lens",
    "lSeriesRing",
    "efMount",
    "alignmentPoint",
    "mirror",
    "sensor",
    "viewfinder",
    "eyecup",
    "hotshoe",
    "topLCD",
    "modeDial",
    "shutterButton",
    "articulatingLCD",
    "lcdHinge",
    "menuButton",
    "infoButton",
    "afOnButton",
    "videoButton",
    "joystick",
    "grip",
    "portsPanel",
    "hdmiPort",
    "avPort",
    "micPort",
    "remotePort",
    "battery",
    "memorySlot",
    "builtInFlash",
    "zoomRing",
    "focusRing",
    "afMfSwitch",
  ]

  // Définition complète d'un Canon DSLR ultra-réaliste
  const cameraParts = [
    // BOÎTIER PRINCIPAL
    {
      key: "body",
      name: t("camera3d.components.body.name"),
      description: t("camera3d.components.body.description"),
      position: [0, 0, 0],
      color: "#0a0a0a",
      scale: [2.4, 1.7, 1.1],
      geometryType: "box",
      geometryArgs: [1, 1, 1],
      explodeDirection: [0, 0, 0],
      materialProps: { metalness: 0.9, roughness: 0.3 },
    },

    // OBJECTIF
    {
      key: "lens",
      name: t("camera3d.components.lens.name"),
      description: t("camera3d.components.lens.description"),
      position: [0, 0, 1.5],
      color: "#050505",
      scale: [1, 1, 1],
      rotation: [Math.PI / 2, 0, 0],
      geometryType: "cylinder",
      geometryArgs: [0.7, 0.72, 2.3, 32],
      explodeDirection: [0, 0, 3.5],
      materialProps: { metalness: 0.95, roughness: 0.1 },
    },
    {
      key: "lSeriesRing",
      name: t("camera3d.components.lSeriesRing.name"),
      description: t("camera3d.components.lSeriesRing.description"),
      position: [0, 0, 2.1],
      color: "#dc2626",
      scale: [1, 1, 1],
      rotation: [Math.PI / 2, 0, 0],
      geometryType: "cylinder",
      geometryArgs: [0.73, 0.73, 0.1, 32],
      explodeDirection: [0, 0, 3.8],
      materialProps: { metalness: 0.2, roughness: 0.5 },
    },

    // MONTURE EF
    {
      key: "efMount",
      name: t("camera3d.components.efMount.name"),
      description: t("camera3d.components.efMount.description"),
      position: [0, 0, 0.8],
      color: "#c0c0c0",
      scale: [1, 1, 1],
      rotation: [0, 0, 0],
      geometryType: "cylinder",
      geometryArgs: [0.78, 0.78, 0.15, 32],
      explodeDirection: [0, 0, 2.5],
      materialProps: { metalness: 0.95, roughness: 0.1 },
    },
    {
      key: "alignmentPoint",
      name: t("camera3d.components.alignmentPoint.name"),
      description: t("camera3d.components.alignmentPoint.description"),
      position: [0.78, 0, 0.8],
      color: "#dc2626",
      scale: [1, 1, 1],
      geometryType: "cylinder",
      geometryArgs: [0.05, 0.05, 0.02, 16],
      explodeDirection: [0, 0, 2.6],
      materialProps: { metalness: 0.1, roughness: 0.6 },
    },

    // COMPOSANTS INTERNES
    {
      key: "mirror",
      name: t("camera3d.components.mirror.name"),
      description: t("camera3d.components.mirror.description"),
      position: [0, 0.3, -0.4],
      color: "#e8e8e8",
      scale: [1.3, 0.9, 0.02],
      rotation: [Math.PI / 4.2, 0, 0],
      geometryType: "box",
      geometryArgs: [1, 1, 1],
      explodeDirection: [0, 2.8, -2.2],
      materialProps: { metalness: 0.2, roughness: 0.05 },
    },
    {
      key: "sensor",
      name: t("camera3d.components.sensor.name"),
      description: t("camera3d.components.sensor.description"),
      position: [0, -0.2, -0.35],
      color: "#1a3a5c",
      scale: [1.15, 0.82, 0.05],
      geometryType: "box",
      geometryArgs: [1, 1, 1],
      explodeDirection: [0, 0, -3.0],
      materialProps: { metalness: 0.6, roughness: 0.2 },
    },

    // PARTIE SUPÉRIEURE
    {
      key: "viewfinder",
      name: t("camera3d.components.viewfinder.name"),
      description: t("camera3d.components.viewfinder.description"),
      position: [0, 0.9, -0.15],
      color: "#0a0a0a",
      scale: [0.9, 0.5, 0.55],
      geometryType: "box",
      geometryArgs: [1, 1, 1],
      explodeDirection: [0, 3.5, 0],
      materialProps: { metalness: 0.9, roughness: 0.2 },
    },
    {
      key: "eyecup",
      name: t("camera3d.components.eyecup.name"),
      description: t("camera3d.components.eyecup.description"),
      position: [0, 0.9, 0.25],
      color: "#1a1a1a",
      scale: [0.85, 0.45, 0.15],
      geometryType: "box",
      geometryArgs: [1, 1, 1],
      explodeDirection: [0, 4.0, 1.5],
      materialProps: { metalness: 0.1, roughness: 0.8 },
    },
    {
      key: "hotshoe",
      name: t("camera3d.components.hotshoe.name"),
      description: t("camera3d.components.hotshoe.description"),
      position: [0, 0.78, 0.06],
      color: "#a0a0a0",
      scale: [0.38, 0.16, 0.1],
      geometryType: "box",
      geometryArgs: [1, 1, 1],
      explodeDirection: [0, 4.0, 1.5],
      materialProps: { metalness: 0.85, roughness: 0.25 },
    },
    {
      key: "topLCD",
      name: t("camera3d.components.topLCD.name"),
      description: t("camera3d.components.topLCD.description"),
      position: [0.65, 0.78, 0.05],
      color: "#0a0a0a",
      scale: [1.05, 0.52, 0.05],
      geometryType: "box",
      geometryArgs: [1, 1, 1],
      explodeDirection: [0, 4.0, 1.5],
      materialProps: { metalness: 0.95, roughness: 0.08 },
    },
    {
      key: "modeDial",
      name: t("camera3d.components.modeDial.name"),
      description: t("camera3d.components.modeDial.description"),
      position: [-0.75, 0.62, 0.05],
      color: "#2a2a2a",
      scale: [1, 1, 1],
      rotation: [0, 0, 0],
      geometryType: "cylinder",
      geometryArgs: [0.48, 0.48, 0.14, 32],
      explodeDirection: [-3.0, 3.0, 1.5],
      materialProps: { metalness: 0.85, roughness: 0.25 },
    },
    {
      key: "shutterButton",
      name: t("camera3d.components.shutterButton.name"),
      description: t("camera3d.components.shutterButton.description"),
      position: [-0.6, 0.28, 0.58],
      color: "#2a2a2a",
      scale: [1, 1, 1],
      rotation: [0, Math.PI / 4, 0],
      geometryType: "cylinder",
      geometryArgs: [0.13, 0.13, 0.1, 16],
      explodeDirection: [-1.5, 0.8, 1.5],
      materialProps: { metalness: 0.7, roughness: 0.4 },
    },

    // PARTIE ARRIÈRE - ÉCRAN ET BOUTONS
    {
      key: "articulatingLCD",
      name: t("camera3d.components.articulatingLCD.name"),
      description: t("camera3d.components.articulatingLCD.description"),
      position: [0, -0.32, -0.58],
      color: "#0a0a0a",
      scale: [1.9, 1.15, 0.07],
      geometryType: "box",
      geometryArgs: [1, 1, 1],
      explodeDirection: [0, -3.0, -2.5],
      materialProps: { metalness: 0.95, roughness: 0.05 },
    },
    {
      key: "lcdHinge",
      name: t("camera3d.components.lcdHinge.name"),
      description: t("camera3d.components.lcdHinge.description"),
      position: [0, -0.32, -0.52],
      color: "#333333",
      scale: [0.3, 0.3, 0.15],
      geometryType: "box",
      geometryArgs: [1, 1, 1],
      explodeDirection: [0, -3.0, -2.2],
      materialProps: { metalness: 0.9, roughness: 0.3 },
    },
    {
      key: "menuButton",
      name: t("camera3d.components.menuButton.name"),
      description: t("camera3d.components.menuButton.description"),
      position: [-0.75, 0.35, -0.48],
      color: "#1a1a1a",
      scale: [0.2, 0.15, 0.05],
      geometryType: "box",
      geometryArgs: [1, 1, 1],
      explodeDirection: [-2.5, 1.5, -1.5],
      materialProps: { metalness: 0.8, roughness: 0.3 },
    },
    {
      key: "infoButton",
      name: t("camera3d.components.infoButton.name"),
      description: t("camera3d.components.infoButton.description"),
      position: [-0.75, 0.18, -0.48],
      color: "#1a1a1a",
      scale: [0.2, 0.15, 0.05],
      geometryType: "box",
      geometryArgs: [1, 1, 1],
      explodeDirection: [-2.5, 1.5, -1.5],
      materialProps: { metalness: 0.8, roughness: 0.3 },
    },
    {
      key: "afOnButton",
      name: t("camera3d.components.afOnButton.name"),
      description: t("camera3d.components.afOnButton.description"),
      position: [0.7, 0.35, -0.48],
      color: "#1a1a1a",
      scale: [0.25, 0.2, 0.05],
      geometryType: "box",
      geometryArgs: [1, 1, 1],
      explodeDirection: [2.5, 1.5, -1.5],
      materialProps: { metalness: 0.8, roughness: 0.3 },
    },
    {
      key: "videoButton",
      name: t("camera3d.components.videoButton.name"),
      description: t("camera3d.components.videoButton.description"),
      position: [0.7, 0.18, -0.48],
      color: "#1a1a1a",
      scale: [0.25, 0.2, 0.05],
      geometryType: "box",
      geometryArgs: [1, 1, 1],
      explodeDirection: [2.5, 1.5, -1.5],
      materialProps: { metalness: 0.8, roughness: 0.3 },
    },
    {
      key: "joystick",
      name: t("camera3d.components.joystick.name"),
      description: t("camera3d.components.joystick.description"),
      position: [0.25, -0.05, -0.48],
      color: "#2a2a2a",
      scale: [0.35, 0.35, 0.06],
      geometryType: "cylinder",
      geometryArgs: [0.35, 0.35, 0.06, 32],
      explodeDirection: [1.5, -1.5, -1.5],
      materialProps: { metalness: 0.85, roughness: 0.25 },
    },

    // POIGNÉE ET COMPOSANTS LATÉRAUX
    {
      key: "grip",
      name: t("camera3d.components.grip.name"),
      description: t("camera3d.components.grip.description"),
      position: [-0.5, -0.25, 0.42],
      color: "#0f0f0f",
      scale: [0.55, 1.6, 0.95],
      geometryType: "box",
      geometryArgs: [1, 1, 1],
      explodeDirection: [-2.0, 0, 2.0],
      materialProps: { metalness: 0.8, roughness: 0.4 },
    },

    // PORTS SUR LE CÔTÉ GAUCHE
    {
      key: "portsPanel",
      name: t("camera3d.components.portsPanel.name"),
      description: t("camera3d.components.portsPanel.description"),
      position: [-1.05, 0, 0],
      color: "#0a0a0a",
      scale: [0.1, 0.8, 0.6],
      geometryType: "box",
      geometryArgs: [1, 1, 1],
      explodeDirection: [-3.5, 0, 0],
      materialProps: { metalness: 0.9, roughness: 0.2 },
    },
    {
      key: "hdmiPort",
      name: t("camera3d.components.hdmiPort.name"),
      description: t("camera3d.components.hdmiPort.description"),
      position: [-1.08, -0.15, 0.15],
      color: "#1a1a1a",
      scale: [0.08, 0.25, 0.05],
      geometryType: "box",
      geometryArgs: [1, 1, 1],
      explodeDirection: [-3.8, -0.5, 0.5],
      materialProps: { metalness: 0.9, roughness: 0.15 },
    },
    {
      key: "avPort",
      name: t("camera3d.components.avPort.name"),
      description: t("camera3d.components.avPort.description"),
      position: [-1.08, 0.05, 0.15],
      color: "#1a1a1a",
      scale: [0.08, 0.3, 0.05],
      geometryType: "box",
      geometryArgs: [1, 1, 1],
      explodeDirection: [-3.8, 0.5, 0.5],
      materialProps: { metalness: 0.9, roughness: 0.15 },
    },
    {
      key: "micPort",
      name: t("camera3d.components.micPort.name"),
      description: t("camera3d.components.micPort.description"),
      position: [-1.08, 0.25, -0.1],
      color: "#1a1a1a",
      scale: [0.08, 0.15, 0.08],
      geometryType: "cylinder",
      geometryArgs: [0.15, 0.15, 0.08, 16],
      explodeDirection: [-3.8, 1.5, -0.5],
      materialProps: { metalness: 0.9, roughness: 0.15 },
    },
    {
      key: "remotePort",
      name: t("camera3d.components.remotePort.name"),
      description: t("camera3d.components.remotePort.description"),
      position: [-1.08, 0.4, -0.1],
      color: "#1a1a1a",
      scale: [0.08, 0.2, 0.08],
      geometryType: "cylinder",
      geometryArgs: [0.2, 0.2, 0.08, 16],
      explodeDirection: [-3.8, 2.0, -0.5],
      materialProps: { metalness: 0.9, roughness: 0.15 },
    },

    // COMPOSANTS INTERNES ACCESSIBLES
    {
      key: "battery",
      name: t("camera3d.components.battery.name"),
      description: t("camera3d.components.battery.description"),
      position: [-0.85, -0.65, 0],
      color: "#e6b800",
      scale: [0.65, 0.95, 0.6],
      geometryType: "box",
      geometryArgs: [1, 1, 1],
      explodeDirection: [-3.5, -2.5, 0],
      materialProps: { metalness: 0.5, roughness: 0.45 },
    },
    {
      key: "memorySlot",
      name: t("camera3d.components.memorySlot.name"),
      description: t("camera3d.components.memorySlot.description"),
      position: [0.85, -0.65, 0],
      color: "#bf4500",
      scale: [0.55, 0.65, 0.35],
      geometryType: "box",
      geometryArgs: [1, 1, 1],
      explodeDirection: [3.5, -2.5, 0],
      materialProps: { metalness: 0.7, roughness: 0.35 },
    },
    {
      key: "builtInFlash",
      name: t("camera3d.components.builtInFlash.name"),
      description: t("camera3d.components.builtInFlash.description"),
      position: [0, 0.72, 0],
      color: "#ffffff",
      scale: [0.65, 0.22, 0.65],
      geometryType: "box",
      geometryArgs: [1, 1, 1],
      explodeDirection: [0, 4.0, 2.5],
      materialProps: { metalness: 0.6, roughness: 0.4 },
    },

    // OBJECTIF - BAGUES ET CONTRÔLES
    {
      key: "zoomRing",
      name: t("camera3d.components.zoomRing.name"),
      description: t("camera3d.components.zoomRing.description"),
      position: [0, 0, 2.2],
      color: "#1a1a1a",
      scale: [1, 1, 1],
      rotation: [Math.PI / 2, 0, 0],
      geometryType: "cylinder",
      geometryArgs: [0.71, 0.71, 0.3, 32],
      explodeDirection: [0, 0, 4.0],
      materialProps: { metalness: 0.9, roughness: 0.25 },
    },
    {
      key: "focusRing",
      name: t("camera3d.components.focusRing.name"),
      description: t("camera3d.components.focusRing.description"),
      position: [0, 0, 2.5],
      color: "#0a0a0a",
      scale: [1, 1, 1],
      rotation: [Math.PI / 2, 0, 0],
      geometryType: "cylinder",
      geometryArgs: [0.69, 0.69, 0.25, 32],
      explodeDirection: [0, 0, 4.5],
      materialProps: { metalness: 0.95, roughness: 0.2 },
    },
    {
      key: "afMfSwitch",
      name: t("camera3d.components.afMfSwitch.name"),
      description: t("camera3d.components.afMfSwitch.description"),
      position: [0, 0, 1.9],
      color: "#333333",
      scale: [1, 1, 1],
      rotation: [Math.PI / 2, 0, 0],
      geometryType: "box",
      geometryArgs: [0.55, 0.35, 0.18],
      explodeDirection: [0, 0, 3.8],
      materialProps: { metalness: 0.9, roughness: 0.2 },
    },
  ]

  // Animation de rotation douce uniquement si non explosé
  useFrame(() => {
    if (groupRef.current && !isExploded) {
      groupRef.current.rotation.y += 0.002
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
            isHighlighted={hoveredPart === part.key || hoveredPart === part.name}
            isExploded={isExploded}
            explodeDirection={part.explodeDirection}
            geometryType={part.geometryType}
            geometryArgs={part.geometryArgs}
            materialProps={part.materialProps}
          />

          {/* Étiquettes numérotées pour chaque partie */}
          <Html
            position={[
              part.position[0] + (isExploded ? part.explodeDirection[0] * 0.9 : 0),
              part.position[1] + (isExploded ? part.explodeDirection[1] * 0.9 : 0) + 0.8,
              part.position[2] + (isExploded ? part.explodeDirection[2] * 0.9 : 0),
            ]}
            distanceFactor={8}
            occlude
            zIndexRange={[100, 0]}
          >
            <div
              className="bg-black/90 backdrop-blur-sm px-2 py-1 rounded-full text-white cursor-pointer hover:bg-red-600/90 transition-all border-2 border-white/40 shadow-lg flex items-center justify-center min-w-[28px] h-[28px]"
              onClick={() => setSelectedPart(part)}
              onMouseEnter={() => setHoveredPart(part.key || part.name)}
              onMouseLeave={() => setHoveredPart(null)}
              style={{ fontSize: '12px', fontWeight: 'bold' }}
            >
              {index + 1}
            </div>
          </Html>
        </group>
      ))}

      {/* Logo Canon sur le pentaprisme */}
      <Html
        position={[0, 1.15, -0.15]}
        distanceFactor={4}
        occlude
      >
        <div className="text-white font-bold text-xl tracking-wider" style={{ fontFamily: 'Arial, sans-serif', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
          CANON
        </div>
      </Html>

      {/* Badge EOS sur le côté */}
      <Html
        position={[1.1, 0.5, -0.1]}
        distanceFactor={5}
        occlude
      >
        <div className="text-white font-semibold text-sm tracking-wide" style={{ fontFamily: 'Arial, sans-serif', textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
          EOS
        </div>
      </Html>
    </group>
  )
}

export default function CameraModel() {
  const { t } = useLanguage()
  const [selectedPart, setSelectedPart] = useState(null)
  const [exploded, setExploded] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleToggleExplode = () => {
    setIsAnimating(true)
    setExploded(!exploded)
    setTimeout(() => setIsAnimating(false), 1200)
  }

  return (
    <div className="relative h-full w-full bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      <Canvas shadows camera={{ position: [0, 0, 6.5], fov: 42 }}>
        <ambientLight intensity={0.35} />
        <directionalLight position={[6, 6, 6]} intensity={1.3} castShadow shadow-mapSize-width={2048} shadow-mapSize-height={2048} />
        <directionalLight position={[-6, 4, -6]} intensity={0.7} />
        <pointLight position={[0, 3, 4]} intensity={1.1} />
        <spotLight position={[5, 5, 5]} angle={0.3} penumbra={1} intensity={0.9} castShadow />

        <Suspense
          fallback={
            <Html center>
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="animate-spin rounded-full h-20 w-20 border-b-4 border-t-4 border-red-600 border-t-transparent"></div>
                <p className="text-white text-lg font-semibold">{t("camera3d.loading")}</p>
              </div>
            </Html>
          }
        >
          <CanonCamera setSelectedPart={setSelectedPart} isExploded={exploded} />
          <Environment preset="studio" />
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            minDistance={3}
            maxDistance={15}
            autoRotate={!exploded}
            autoRotateSpeed={0.4}
          />
        </Suspense>
      </Canvas>

      {/* Controls améliorés */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        <Button
          variant={exploded ? "default" : "outline"}
          size="lg"
          onClick={handleToggleExplode}
          disabled={isAnimating}
          className="bg-red-600 hover:bg-red-700 text-white border-red-600 min-w-[180px] text-base font-semibold shadow-lg"
        >
          {isAnimating ? (
            <span className="flex items-center gap-2">
              <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
              {exploded ? t("camera3d.assembling") : t("camera3d.disassembling")}
            </span>
          ) : exploded ? (
            t("camera3d.assemble")
          ) : (
            t("camera3d.disassemble")
          )}
        </Button>
      </div>

      {/* Part details amélioré */}
      {selectedPart && (
        <Card className="absolute top-8 right-8 w-96 max-h-[75vh] overflow-auto shadow-2xl border-2 border-red-600/30 z-10 bg-white/95">
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-bold text-2xl text-red-600 mb-1">{selectedPart.name}</h3>
                <p className="text-xs text-gray-500 font-semibold">{t("camera3d.modelLabel")}</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 hover:bg-red-100"
                onClick={() => setSelectedPart(null)}
              >
                ✕
              </Button>
            </div>
            <div className="w-full h-1 bg-gradient-to-r from-red-600 via-red-500 to-transparent rounded mb-4"></div>
            <p className="text-sm text-gray-700 leading-relaxed">{selectedPart.description}</p>
          </CardContent>
        </Card>
      )}

      {/* Instructions améliorées */}
      <div className="absolute top-8 left-8 bg-black/85 backdrop-blur-md p-5 rounded-lg text-sm max-w-xs border border-white/25 z-10 shadow-xl max-h-[80vh] overflow-y-auto">
        <h3 className="font-bold mb-3 text-white flex items-center gap-2 text-base">
          <span>📷</span>
          <span>{t("camera3d.title3D")}</span>
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-300 mb-4">
          <li>{t("camera3d.instruction1")}</li>
          <li>{t("camera3d.instruction2")}</li>
          <li>{t("camera3d.instruction3")}</li>
          <li>{t("camera3d.instruction4")}</li>
        </ul>
        <div className="mt-4 pt-4 border-t border-white/25">
          <p className="text-xs text-gray-400 mb-2">{t("camera3d.modelInfo")}</p>
          <p className="text-xs text-gray-400 mb-3">{t("camera3d.componentsCount")}</p>
          <div className="max-h-[300px] overflow-y-auto">
            <p className="text-xs text-gray-300 font-semibold mb-2">{t("camera3d.componentsLegend")}</p>
            <p className="text-xs text-gray-500 italic mb-2">{t("camera3d.componentsLegendDesc")}</p>
            <p className="text-xs text-gray-400">{t("camera3d.componentsLegendNote")}</p>
          </div>
        </div>
      </div>

      {/* Indicateur d'état */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-black/85 backdrop-blur-md px-6 py-3 rounded-lg border border-white/25 z-10 shadow-lg">
        <p className="text-sm text-white font-semibold flex items-center gap-2">
          {exploded ? (
            <>
              <span>🔓</span>
              <span>{t("camera3d.modeDisassembled")}</span>
            </>
          ) : (
            <>
              <span>🔒</span>
              <span>{t("camera3d.modeAssembled")}</span>
            </>
          )}
        </p>
      </div>
    </div>
  )
}
