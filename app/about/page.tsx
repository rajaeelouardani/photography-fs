"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TeamSection from "@/components/team-section"
import { useLanguage } from "@/contexts/language-context"

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="container mx-auto py-12 px-4 bg-white dark:bg-gray-900">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">{t("about.title")}</h1>

      {/* Hero section */}
      <div className="relative w-full h-[40vh] mb-12 rounded-xl overflow-hidden shadow-lg">
        <Image
          src="/images/workshop-presentation.webp"
          alt="Atelier de formation du Photography Club FSM"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 dark:from-black/80 to-transparent flex items-end">
          <div className="p-6 text-white">
            <h2 className="text-2xl font-bold mb-2">{t("about.heroTitle")}</h2>
            <p className="text-lg">{t("about.heroTagline")}</p>
          </div>
        </div>
      </div>

      {/* Main content with tabs */}
      <div className="max-w-4xl mx-auto">
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid grid-cols-4 mb-8 bg-muted dark:bg-gray-800">
            <TabsTrigger value="about">{t("about.tabs.history")}</TabsTrigger>
            <TabsTrigger value="mission">{t("about.tabs.mission")}</TabsTrigger>
            <TabsTrigger value="vision">{t("about.tabs.vision")}</TabsTrigger>
            <TabsTrigger value="values">{t("about.tabs.values")}</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="space-y-6">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{t("about.historyTitle")}</h2>
            <div className="prose max-w-none dark:prose-invert">
              <p className="text-gray-700 dark:text-gray-300">
                {t("about.historyText1")}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                {t("about.historyText2")}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                {t("about.historyText3")}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                {t("about.historyText4")}
              </p>
            </div>
          </TabsContent>

          <TabsContent value="mission" className="space-y-6">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{t("about.missionTitle")}</h2>
            <div className="prose max-w-none dark:prose-invert">
              <p className="text-gray-700 dark:text-gray-300">
                {t("about.missionText1")}
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3 text-gray-900 dark:text-white">{t("about.missionMainGoals")}</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="bg-muted dark:bg-gray-800 rounded-lg p-6">
                  <h4 className="font-bold mb-2 text-gray-900 dark:text-white">{t("about.missionGoal1")}</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    {t("about.missionGoal1Desc")}
                  </p>
                </div>

                <div className="bg-muted dark:bg-gray-800 rounded-lg p-6">
                  <h4 className="font-bold mb-2 text-gray-900 dark:text-white">{t("about.missionGoal2")}</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    {t("about.missionGoal2Desc")}
                  </p>
                </div>

                <div className="bg-muted dark:bg-gray-800 rounded-lg p-6">
                  <h4 className="font-bold mb-2 text-gray-900 dark:text-white">{t("about.missionGoal3")}</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    {t("about.missionGoal3Desc")}
                  </p>
                </div>

                <div className="bg-muted dark:bg-gray-800 rounded-lg p-6">
                  <h4 className="font-bold mb-2 text-gray-900 dark:text-white">{t("about.missionGoal4")}</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    {t("about.missionGoal4Desc")}
                  </p>
                </div>
              </div>

              <p className="mt-6 text-gray-700 dark:text-gray-300">
                {t("about.missionText2")}
              </p>
            </div>
          </TabsContent>

          <TabsContent value="vision" className="space-y-6">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{t("about.visionTitle")}</h2>
            <div className="prose max-w-none dark:prose-invert">
              <p className="text-gray-700 dark:text-gray-300">
                {t("about.visionText1")}
              </p>

              <div className="my-8 p-6 bg-primary/5 dark:bg-primary/10 border border-primary/20 dark:border-primary/30 rounded-lg">
                <blockquote className="italic text-xl text-gray-800 dark:text-gray-200">
                  "{t("about.visionQuote")}"
                </blockquote>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="values" className="space-y-6">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{t("about.valuesTitle")}</h2>
            <div className="prose max-w-none dark:prose-invert">
              <p className="text-gray-700 dark:text-gray-300">
                {t("about.valuesText1")}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4">
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
                        className="text-primary dark:text-red-500"
                      >
                        <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{t("about.valueCreativity")}</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {t("about.valueCreativityDesc")}
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4">
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
                        className="text-primary dark:text-red-500"
                      >
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{t("about.valueCollaboration")}</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {t("about.valueCollaborationDesc")}
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4">
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
                        className="text-primary dark:text-red-500"
                      >
                        <path d="M2 12h20"></path>
                        <path d="M12 2v20"></path>
                        <path d="m4.93 4.93 14.14 14.14"></path>
                        <path d="m19.07 4.93-14.14 14.14"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{t("about.valueInclusion")}</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {t("about.valueInclusionDesc")}
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4">
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
                        className="text-primary dark:text-red-500"
                      >
                        <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path>
                        <path d="M10 2c1 .5 2 2 2 5"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{t("about.valueEthics")}</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {t("about.valueEthicsDesc")}
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4">
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
                        className="text-primary dark:text-red-500"
                      >
                        <path d="M12 2v20"></path>
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{t("about.valueExcellence")}</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {t("about.valueExcellenceDesc")}
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4">
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
                        className="text-primary dark:text-red-500"
                      >
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{t("about.valueEngagement")}</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {t("about.valueEngagementDesc")}
                    </p>
                  </CardContent>
                </Card>
              </div>

              <p className="text-gray-700 dark:text-gray-300">
                {t("about.valuesConclusion")}
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Team section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100">{t("about.ourTeam")}</h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-8 text-gray-700 dark:text-gray-300">
          {t("about.teamDescription")}
        </p>
        <TeamSection />
      </div>
    </div>
  )
}
