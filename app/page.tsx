"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Mail, MapPin, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ImageSlider from "@/components/image-slider"
import PartnerLogos from "@/components/partner-logos"
import MapSection from "@/components/map-section"
import { useLanguage } from "@/contexts/language-context"

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[85vh] bg-black dark:bg-gray-900">
        <ImageSlider />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-black/40 dark:bg-gray-900/40">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-white">Photography </span>
            <span className="text-red-600 dark:text-red-500">Club </span>
            <span className="text-white">FSM</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl">
            {t("home.hero.tagline")}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-red-600 dark:bg-red-700 hover:bg-red-700 dark:hover:bg-red-600 text-white">
              <Link href="/gallery">{t("home.hero.discoverGallery")}</Link>
            </Button>
            <Button asChild size="lg" className="bg-red-600 dark:bg-red-700 hover:bg-red-700 dark:hover:bg-red-600 text-white">
              <Link href="/contact">{t("home.hero.contactUs")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto bg-white dark:bg-gray-900">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">{t("home.about.title")}</h2>
            <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
              {t("home.about.description1")}
            </p>
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              {t("home.about.description2")}
            </p>
            <Button asChild className="bg-red-600 dark:bg-red-700 hover:bg-red-700 dark:hover:bg-red-600 text-white">
              <Link href="/about">{t("home.about.learnMore")}</Link>
            </Button>
          </div>
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/event-official-visit.jpeg"
              alt="Visite officielle à la Faculté des Sciences de Meknès"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">{t("home.news.title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="overflow-hidden bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
              <div className="relative h-64 w-full">
                <Image
                  src="/images/umi-out-of-box-participation.jpeg"
                  alt={t("home.news.participationUMI")}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{t("home.news.participationUMI")}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{t("home.news.participationUMIDate")}</p>
                <p className="text-gray-700 dark:text-gray-300">{t("home.news.participationUMIDesc")}</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
              <div className="relative h-64 w-full">
                <Image
                  src="/images/img-20250410-wa0056.jpg"
                  alt={t("home.news.firstPrize")}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{t("home.news.firstPrize")}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{t("home.news.firstPrizeDate")}</p>
                <p className="text-gray-700 dark:text-gray-300">{t("home.news.firstPrizeDesc")}</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
              <div className="relative h-64 w-full">
                <Image
                  src="/images/img_0560.jpg"
                  alt={t("home.news.workshopAnimation")}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{t("home.news.workshopAnimation")}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{t("home.news.workshopDate")}</p>
                <p className="text-gray-700 dark:text-gray-300">{t("home.news.workshopDesc")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map & Contact */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto bg-white dark:bg-gray-900">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">{t("home.location.title")}</h2>
            <p className="text-lg mb-6 text-gray-700 dark:text-white">
              {t("home.location.description")}
            </p>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-5 w-5 text-red-600 dark:text-red-500" />
              <span className="text-gray-700 dark:text-white">{t("home.location.address")}</span>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <Mail className="h-5 w-5 text-red-600 dark:text-red-500" />
              <a href="mailto:photographyfsm.pro@gmail.com" className="hover:underline text-gray-700 dark:text-white">
                photographyfsm.pro@gmail.com
              </a>
            </div>
            <div className="flex gap-4 mt-6">
              <Button asChild size="icon" variant="outline" className="border-red-600 dark:border-red-500 hover:bg-red-600/10 dark:hover:bg-red-500/10">
                <a
                  href="https://instagram.com/photographyfsm.pro"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 text-red-600 dark:text-red-500" />
                </a>
              </Button>
              <Button asChild size="icon" variant="outline" className="border-red-600 dark:border-red-500 hover:bg-red-600/10 dark:hover:bg-red-500/10">
                <a
                  href="https://www.linkedin.com/in/photography-club-fsm-93a716363"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-red-600 dark:text-red-500" />
                </a>
              </Button>
              <Button asChild size="icon" variant="outline" className="border-red-600 dark:border-red-500 hover:bg-red-600/10 dark:hover:bg-red-500/10">
                <a
                  href="https://www.youtube.com/@PhotographyFSM"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5 text-red-600 dark:text-red-500" />
                </a>
              </Button>
            </div>
          </div>
          <Card className="overflow-hidden bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <CardContent className="p-0 h-[400px]">
              <MapSection />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 px-4 md:px-8 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">{t("home.partners.title")}</h2>
          <PartnerLogos />
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="border-red-600 dark:border-red-500 text-red-600 dark:text-red-400 hover:bg-red-600/10 dark:hover:bg-red-500/10">
              <Link href="/partners">{t("home.partners.seeAll")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
