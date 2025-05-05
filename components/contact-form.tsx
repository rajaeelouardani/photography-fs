"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle2, AlertCircle, Loader2, Mail } from "lucide-react"
import { submitContactForm } from "@/app/actions/contact-form"

export default function ContactForm() {
  const [isPending, setIsPending] = useState(false)
  const [formStatus, setFormStatus] = useState<null | { success: boolean; message: string }>(null)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]> | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsPending(true)
    setFormStatus(null)
    setFieldErrors(null)

    // Get form data
    const formData = new FormData(e.currentTarget)

    try {
      const result = await submitContactForm(formData)

      if (result.errors) {
        setFieldErrors(result.errors)
      }

      setFormStatus({
        success: result.success,
        message: result.message,
      })

      // Reset form if successful
      if (result.success) {
        e.currentTarget.reset()
      }
    } catch (error) {
      setFormStatus({
        success: false,
        message: "Une erreur s'est produite. Veuillez réessayer.",
      })
    } finally {
      setIsPending(false)
    }
  }

  // Préparer le lien mailto
  const mailtoLink = "mailto:photographyfsm.pro@gmail.com?subject=Contact%20via%20le%20site%20web"

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {formStatus && (
          <Alert variant={formStatus.success ? "default" : "destructive"}>
            {formStatus.success ? <CheckCircle2 className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
            <AlertDescription>{formStatus.message}</AlertDescription>
          </Alert>
        )}

        <div className="space-y-2">
          <Label htmlFor="name">Nom complet</Label>
          <Input id="name" name="name" required placeholder="Votre nom" />
          {fieldErrors?.name && <p className="text-sm text-destructive mt-1">{fieldErrors.name[0]}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required placeholder="votre.email@exemple.com" />
          {fieldErrors?.email && <p className="text-sm text-destructive mt-1">{fieldErrors.email[0]}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject">Sujet</Label>
          <Input id="subject" name="subject" required placeholder="Sujet de votre message" />
          {fieldErrors?.subject && <p className="text-sm text-destructive mt-1">{fieldErrors.subject[0]}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" name="message" required placeholder="Votre message..." rows={5} />
          {fieldErrors?.message && <p className="text-sm text-destructive mt-1">{fieldErrors.message[0]}</p>}
        </div>

        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Envoi en cours...
            </>
          ) : (
            "Envoyer le message"
          )}
        </Button>
      </form>

      <div className="mt-8 pt-6 border-t border-border">
        <p className="text-center mb-4">Vous pouvez également nous contacter directement par email :</p>
        <Button asChild variant="outline" className="w-full">
          <a href={mailtoLink}>
            <Mail className="mr-2 h-4 w-4" />
            Envoyer un email à photographyfsm.pro@gmail.com
          </a>
        </Button>
      </div>
    </div>
  )
}
