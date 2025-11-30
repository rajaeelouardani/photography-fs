"use client"

import CameraModel from "@/components/camera-model"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

export default function CameraPage() {
  const { t } = useLanguage()

  return (
    <div className="container mx-auto py-8 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-900 dark:text-white">{t("camera3d.title")}</h1>
        <p className="text-lg mb-8 text-center text-gray-700 dark:text-gray-300">
          {t("camera3d.subtitle")}
        </p>
      </div>

      <div className="h-[80vh] w-full bg-gradient-to-b from-background to-muted/30 dark:from-gray-900 dark:to-gray-800 rounded-xl shadow-lg overflow-hidden">
        <CameraModel />
      </div>

      <div className="max-w-4xl mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{t("camera3d.guideTitle")}</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          {t("camera3d.guideDescription")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="bg-muted dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold mb-2 text-gray-900 dark:text-white">{t("camera3d.externalComponents")}</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                <strong>{t("camera3d.body")}</strong> : {t("camera3d.bodyDesc")}
              </li>
              <li>
                <strong>{t("camera3d.lens")}</strong> : {t("camera3d.lensDesc")}
              </li>
              <li>
                <strong>{t("camera3d.viewfinder")}</strong> : {t("camera3d.viewfinderDesc")}
              </li>
              <li>
                <strong>{t("camera3d.flash")}</strong> : {t("camera3d.flashDesc")}
              </li>
              <li>
                <strong>{t("camera3d.lcdScreen")}</strong> : {t("camera3d.lcdScreenDesc")}
              </li>
            </ul>
          </div>
          <div className="bg-muted dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold mb-2 text-gray-900 dark:text-white">{t("camera3d.internalComponents")}</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                <strong>{t("camera3d.sensor")}</strong> : {t("camera3d.sensorDesc")}
              </li>
              <li>
                <strong>{t("camera3d.mirror")}</strong> : {t("camera3d.mirrorDesc")}
              </li>
              <li>
                <strong>{t("camera3d.battery")}</strong> : {t("camera3d.batteryDesc")}
              </li>
              <li>
                <strong>{t("camera3d.memoryCard")}</strong> : {t("camera3d.memoryCardDesc")}
              </li>
              <li>
                <strong>{t("camera3d.modeDial")}</strong> : {t("camera3d.modeDialDesc")}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Nouvelle section comparative entre hybride et reflex */}
      <div className="max-w-4xl mx-auto mt-16 mb-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{t("camera3d.differencesTitle")}</h2>

        <div className="relative w-full aspect-[2/1] mb-8">
          <Image
            src="/images/schema-visee-reflex-hybride.jpg"
            alt="Schéma comparatif entre appareil hybride et reflex"
            fill
            className="object-contain rounded-lg"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-center mb-4 text-primary dark:text-red-500">{t("camera3d.hybridTitle")}</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-primary/10 dark:bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary dark:bg-red-500"></div>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>{t("camera3d.hybridNoMirror")}</strong> : {t("camera3d.hybridNoMirrorDesc")}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-primary/10 dark:bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary dark:bg-red-500"></div>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>{t("camera3d.hybridEVF")}</strong> : {t("camera3d.hybridEVFDesc")}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-primary/10 dark:bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary dark:bg-red-500"></div>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>{t("camera3d.hybridSize")}</strong> : {t("camera3d.hybridSizeDesc")}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-primary/10 dark:bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary dark:bg-red-500"></div>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>{t("camera3d.hybridFocal")}</strong> : {t("camera3d.hybridFocalDesc")}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-primary/10 dark:bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary dark:bg-red-500"></div>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>{t("camera3d.hybridSilent")}</strong> : {t("camera3d.hybridSilentDesc")}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-primary/10 dark:bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary dark:bg-red-500"></div>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>{t("camera3d.hybridPreview")}</strong> : {t("camera3d.hybridPreviewDesc")}
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-center mb-4 text-primary dark:text-red-500">{t("camera3d.reflexTitle")}</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-primary/10 dark:bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary dark:bg-red-500"></div>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>{t("camera3d.reflexMirror")}</strong> : {t("camera3d.reflexMirrorDesc")}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-primary/10 dark:bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary dark:bg-red-500"></div>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>{t("camera3d.reflexOVF")}</strong> : {t("camera3d.reflexOVFDesc")}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-primary/10 dark:bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary dark:bg-red-500"></div>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>{t("camera3d.reflexSize")}</strong> : {t("camera3d.reflexSizeDesc")}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-primary/10 dark:bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary dark:bg-red-500"></div>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>{t("camera3d.reflexFocal")}</strong> : {t("camera3d.reflexFocalDesc")}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-primary/10 dark:bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary dark:bg-red-500"></div>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>{t("camera3d.reflexNoise")}</strong> : {t("camera3d.reflexNoiseDesc")}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-primary/10 dark:bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary dark:bg-red-500"></div>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>{t("camera3d.reflexVision")}</strong> : {t("camera3d.reflexVisionDesc")}
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 bg-muted dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{t("camera3d.chooseTitle")}</h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            {t("camera3d.chooseDescription")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-medium mb-2 text-gray-900 dark:text-gray-100">{t("camera3d.hybridIdeal")}</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
                <li>{t("camera3d.hybridIdeal1")}</li>
                <li>{t("camera3d.hybridIdeal2")}</li>
                <li>{t("camera3d.hybridIdeal3")}</li>
                <li>{t("camera3d.hybridIdeal4")}</li>
              </ul>
            </div>
            <div>
              <p className="font-medium mb-2 text-gray-900 dark:text-gray-100">{t("camera3d.reflexPreferable")}</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
                <li>{t("camera3d.reflexPreferable1")}</li>
                <li>{t("camera3d.reflexPreferable2")}</li>
                <li>{t("camera3d.reflexPreferable3")}</li>
                <li>{t("camera3d.reflexPreferable4")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
