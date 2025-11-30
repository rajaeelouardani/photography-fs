"use client"

import ContactForm from "@/components/contact-form"
import MapSection from "@/components/map-section"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram, Linkedin, Mail, Phone, Youtube } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function ContactPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">{t("contact.title")}</h1>
      <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-gray-700 dark:text-gray-300">
        {t("contact.subtitle")}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="w-full">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 text-gray-900 dark:text-white">{t("contact.sendMessage")}</h2>
          <ContactForm />
        </div>

        <div className="w-full">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{t("contact.contactInfo")}</h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">{t("contact.email")}</h3>
                <a href="mailto:photographyfsm.pro@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-red-500">
                  photographyfsm.pro@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">{t("contact.phone")}</h3>
                <a href="tel:0652226366" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-red-500">
                  0652226366
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Instagram className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">Instagram</h3>
                <a
                  href="https://instagram.com/photographyfsm.pro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-red-500"
                >
                  @photographyfsm.pro
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Linkedin className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/photography-club-fsm-93a716363"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-red-500"
                >
                  Photography Club FSM
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Youtube className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">YouTube</h3>
                <a
                  href="https://www.youtube.com/@PhotographyFSM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-red-500"
                >
                  @PhotographyFSM
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-medium mb-4 text-gray-900 dark:text-white">{t("contact.ourLocation")}</h3>
            <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
              <CardContent className="p-0 h-[250px] sm:h-[300px]">
                <MapSection />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
