import type { Metadata } from "next"
import ContactForm from "@/components/contact-form"
import MapSection from "@/components/map-section"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram, Linkedin, Mail, Phone, Youtube } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact | Photography Club FSM",
  description: "Contactez le Photography Club de la Faculté des Sciences de Meknès",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Contactez-nous</h1>
      <p className="text-lg text-center max-w-3xl mx-auto mb-12">
        Vous avez des questions ou souhaitez rejoindre notre club ? N'hésitez pas à nous contacter.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div>
          <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
          <ContactForm />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Informations de contact</h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-medium">Email</h3>
                <a href="mailto:photographyfsm.pro@gmail.com" className="text-muted-foreground hover:text-primary">
                  photographyfsm.pro@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-medium">Téléphone</h3>
                <a href="tel:0652226366" className="text-muted-foreground hover:text-primary">
                  0652226366
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Instagram className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-medium">Instagram</h3>
                <a
                  href="https://instagram.com/photographyfsm.pro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  @photographyfsm.pro
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Linkedin className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-medium">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/photography-club-fsm-93a716363"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  Photography Club FSM
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Youtube className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-medium">YouTube</h3>
                <a
                  href="https://www.youtube.com/@PhotographyFSM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  @PhotographyFSM
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-medium mb-4">Notre localisation</h3>
            <Card>
              <CardContent className="p-0 h-[300px]">
                <MapSection />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
