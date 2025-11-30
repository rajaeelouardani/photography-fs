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
import { useLanguage } from "@/contexts/language-context"

export default function ContactForm() {
  const { t } = useLanguage()
  const [isPending, setIsPending] = useState(false)
  const [formStatus, setFormStatus] = useState<null | { success: boolean; message: string }>(null)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]> | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsPending(true)
    setFormStatus(null)
    setFieldErrors(null)

    // Store form reference before async operation
    const form = e.currentTarget

    // Get form data
    const formData = new FormData(form)

    try {
      const result = await submitContactForm(formData)
      
      console.log("Form submission result:", result)

      if (result.errors) {
        setFieldErrors(result.errors)
      }

      setFormStatus({
        success: result.success,
        message: result.message,
      })

      // Reset form if successful (check if form still exists)
      if (result.success && form) {
        form.reset()
      }
    } catch (error) {
      console.error("Error in form submission:", error)
      setFormStatus({
        success: false,
        message: error instanceof Error ? error.message : t("contact.error"),
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
          <Alert variant={formStatus.success ? "default" : "destructive"} className="bg-background dark:bg-gray-900">
            {formStatus.success ? <CheckCircle2 className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
            <AlertDescription>{formStatus.message}</AlertDescription>
          </Alert>
        )}

        <div className="space-y-2">
          <Label htmlFor="name" className="text-gray-900 dark:text-white">{t("contact.name")}</Label>
          <Input id="name" name="name" required placeholder={t("contact.name")} className="bg-background dark:bg-gray-900 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700" />
          {fieldErrors?.name && <p className="text-sm text-destructive mt-1">{fieldErrors.name[0]}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-gray-900 dark:text-white">{t("contact.email")}</Label>
          <Input id="email" name="email" type="email" required placeholder="votre.email@exemple.com" className="bg-background dark:bg-gray-900 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700" />
          {fieldErrors?.email && <p className="text-sm text-destructive mt-1">{fieldErrors.email[0]}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject" className="text-gray-900 dark:text-white">{t("contact.subject")}</Label>
          <Input id="subject" name="subject" required placeholder={t("contact.subject")} className="bg-background dark:bg-gray-900 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700" />
          {fieldErrors?.subject && <p className="text-sm text-destructive mt-1">{fieldErrors.subject[0]}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-gray-900 dark:text-white">{t("contact.message")}</Label>
          <Textarea id="message" name="message" required placeholder={t("contact.message")} rows={5} className="bg-background dark:bg-gray-900 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700" />
          {fieldErrors?.message && <p className="text-sm text-destructive mt-1">{fieldErrors.message[0]}</p>}
        </div>

        <Button type="submit" className="w-full bg-red-600 dark:bg-red-700 hover:bg-red-700 dark:hover:bg-red-600" disabled={isPending}>
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {t("contact.sending")}
            </>
          ) : (
            t("contact.send")
          )}
        </Button>
      </form>

      <div className="mt-8 pt-6 border-t border-gray-300 dark:border-gray-700">
        <p className="text-center mb-4 text-sm sm:text-base text-gray-900 dark:text-white">{t("contact.alsoContact")}</p>
        <Button asChild variant="outline" className="w-full text-sm sm:text-base border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800">
          <a href={mailtoLink} className="flex items-center justify-center">
            <Mail className="mr-2 h-4 w-4 flex-shrink-0" />
            <span className="break-all sm:break-normal">{t("contact.sendEmail")} photographyfsm.pro@gmail.com</span>
          </a>
        </Button>
      </div>
    </div>
  )
}
