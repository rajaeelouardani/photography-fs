"use server"

import { z } from "zod"
import { revalidatePath } from "next/cache"

// Schéma de validation pour le formulaire de contact
const ContactSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères" }),
  email: z.string().email({ message: "Veuillez entrer une adresse email valide" }),
  subject: z.string().min(3, { message: "Le sujet doit contenir au moins 3 caractères" }),
  message: z.string().min(10, { message: "Le message doit contenir au moins 10 caractères" }),
})

export async function submitContactForm(formData: FormData) {
  try {
    // Valider les données du formulaire
    const validatedFields = ContactSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    })

    // Si la validation échoue, retourner les erreurs
    if (!validatedFields.success) {
      return {
        success: false,
        message: "Veuillez corriger les erreurs dans le formulaire.",
        errors: validatedFields.error.flatten().fieldErrors,
      }
    }

    const { name, email, subject, message } = validatedFields.data

    // Dans un environnement de production, vous pourriez:
    // 1. Enregistrer le message dans une base de données
    // 2. Envoyer un email via un service comme Nodemailer, SendGrid, etc.

    // Pour l'instant, nous simulons un succès
    console.log("Message reçu:", { name, email, subject, message })

    // Rafraîchir la page pour mettre à jour les données
    revalidatePath("/contact")

    return {
      success: true,
      message: "Votre message a été envoyé avec succès. Nous vous contacterons bientôt.",
    }
  } catch (error) {
    console.error("Erreur lors de l'envoi du message:", error)
    return {
      success: false,
      message: "Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer.",
    }
  }
}
