"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Camera, BookOpen, Users, Award } from "lucide-react"
import PDFViewer from "@/components/pdf-viewer"
import { useLanguage } from "@/contexts/language-context"

export default function CoursesPage() {
  const { t, language } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/60 dark:bg-black/70 z-10" />
        <Image src="/images/photo-workshop.jpeg" alt="Cours de photographie" fill className="object-cover" priority />
        <div className="relative z-20 container mx-auto h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t("courses.title")}</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            {t("courses.subtitle")}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Featured Course */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-1 w-10 bg-primary rounded-full"></div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{t("courses.featured")}</h2>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Course Info */}
              <div className="p-8 lg:p-10 bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20">
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg">
                    <BookOpen className="h-6 w-6 text-primary dark:text-red-500" />
                  </span>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{t("courses.courseTitle")}</h3>
                    <p className="text-muted-foreground">{t("courses.courseAuthor")} • 31 {t("courses.coursePages")}</p>
                  </div>
                </div>

                <div className="space-y-8 mb-8">
                  <div>
                    <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                      {t("courses.courseDescription")}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="bg-background/50 dark:bg-gray-800/50 backdrop-blur-sm border-primary/10 dark:border-primary/20 hover:border-primary/30 transition-colors">
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <Camera className="h-8 w-8 text-primary dark:text-red-500 mb-3" />
                        <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">{t("courses.techniques")}</h4>
                        <p className="text-sm text-muted-foreground">
                          {t("courses.techniquesDesc")}
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-background/50 dark:bg-gray-800/50 backdrop-blur-sm border-primary/10 dark:border-primary/20 hover:border-primary/30 transition-colors">
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <Award className="h-8 w-8 text-primary dark:text-red-500 mb-3" />
                        <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">{t("courses.composition")}</h4>
                        <p className="text-sm text-muted-foreground">
                          {t("courses.compositionDesc")}
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-background/50 dark:bg-gray-800/50 backdrop-blur-sm border-primary/10 dark:border-primary/20 hover:border-primary/30 transition-colors">
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <Users className="h-8 w-8 text-primary dark:text-red-500 mb-3" />
                        <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">{t("courses.practice")}</h4>
                        <p className="text-sm text-muted-foreground">
                          {t("courses.practiceDesc")}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{t("courses.whatYouWillLearn")}</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary dark:bg-red-500"></div>
                        <span className="text-gray-700 dark:text-gray-300">{t("courses.manualSettings")}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary dark:bg-red-500"></div>
                        <span className="text-gray-700 dark:text-gray-300">{t("courses.compositionFraming")}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary dark:bg-red-500"></div>
                        <span className="text-gray-700 dark:text-gray-300">{t("courses.lightManagement")}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary dark:bg-red-500"></div>
                        <span className="text-gray-700 dark:text-gray-300">{t("courses.retouchingTechniques")}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary dark:bg-red-500"></div>
                        <span className="text-gray-700 dark:text-gray-300">{t("courses.photographicStyles")}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary dark:bg-red-500"></div>
                        <span className="text-gray-700 dark:text-gray-300">{t("courses.practicalExercises")}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <Button asChild size="lg" className="w-full sm:w-auto bg-red-600 dark:bg-red-700 hover:bg-red-700 dark:hover:bg-red-600">
                  <Link
                    href="https://www.linkedin.com/posts/photography-club-fsm-93a716363_bases-de-la-photographie-pr%C3%A9par%C3%A9-par-rajae-activity-7325119398166372352-KGY6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {t("courses.viewFullCourse")}
                  </Link>
                </Button>
              </div>

              {/* PDF Viewer */}
              <div className="bg-white dark:bg-gray-800 p-0 flex flex-col min-h-[600px]">
                <PDFViewer
                  pdfUrl="/Partie1.pdf"
                  title={t("courses.pdfTitle")}
                  showControls={true}
                  currentLang={language || "fr"}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Workshop Photos Section */}
        <div className="max-w-6xl mx-auto mt-24">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-1 w-10 bg-primary rounded-full"></div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{t("courses.workshopsInImages")}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-lg">
              <Image
                src="/images/photo-workshop.jpeg"
                alt="Atelier pratique de photographie"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold">{t("courses.practicalWorkshop")}</h3>
                  <p>{t("courses.workshopDesc")}</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{t("courses.practicalTraining")}</h3>
              <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                {t("courses.practicalTrainingDesc1")}
              </p>
              <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                {t("courses.practicalTrainingDesc2")}
              </p>
              <Button asChild variant="outline" className="border-gray-300 dark:border-gray-700">
                <Link href="/contact">{t("courses.registerWorkshops")}</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Upcoming Courses */}
        <div className="max-w-6xl mx-auto mt-24">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-1 w-10 bg-primary rounded-full"></div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{t("courses.upcomingCourses")}</h2>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 text-center border border-gray-200 dark:border-gray-700">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 dark:bg-primary/20 rounded-full mb-6">
                <Image
                  src="/images/photography-club-logo.png"
                  alt="Photography Club FSM Logo"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{t("courses.wantMoreResources")}</h3>
              <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
                {t("courses.moreResourcesDesc")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="default" className="bg-red-600 dark:bg-red-700 hover:bg-red-700 dark:hover:bg-red-600">
                  <Link href="/contact">{t("courses.contactForSuggestions")}</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-gray-300 dark:border-gray-700">
                  <Link href="https://instagram.com/photographyfsm.pro" target="_blank" rel="noopener noreferrer">
                    {t("courses.followInstagram")}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
