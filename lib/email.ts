type EmailData = {
  to: string
  from: string
  subject: string
  text: string
  html?: string
}

/**
 * Send an email using the configured email service
 * This is a placeholder function that would be implemented with a real email service
 */
export async function sendEmail(data: EmailData): Promise<{ success: boolean; error?: string }> {
  try {
    // In a real implementation, you would use an email service like:
    // - Nodemailer with SMTP
    // - SendGrid
    // - Resend
    // - Amazon SES
    // - etc.

    // Example with Resend:
    // const { data, error } = await resend.emails.send({
    //   from: 'Photography Club <noreply@photographyfsm.com>',
    //   to: [data.to],
    //   subject: data.subject,
    //   text: data.text,
    //   html: data.html,
    // });

    // For now, we'll just log the email data and return success
    console.log("Email would be sent with:", data)

    return { success: true }
  } catch (error) {
    console.error("Failed to send email:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    }
  }
}

/**
 * Send a notification email to the admin when a new contact form is submitted
 */
export async function sendContactNotification(formData: {
  name: string
  email: string
  subject: string
  message: string
}): Promise<{ success: boolean; error?: string }> {
  const { name, email, subject, message } = formData

  const text = `
    Nouveau message de contact:
    
    Nom: ${name}
    Email: ${email}
    Sujet: ${subject}
    
    Message:
    ${message}
    
    Envoyé le: ${new Date().toLocaleString("fr-FR")}
  `

  const html = `
    <h2>Nouveau message de contact</h2>
    <p><strong>Nom:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Sujet:</strong> ${subject}</p>
    <h3>Message:</h3>
    <p>${message.replace(/\n/g, "<br>")}</p>
    <p><em>Envoyé le: ${new Date().toLocaleString("fr-FR")}</em></p>
  `

  return sendEmail({
    to: "photographyfsm.pro@gmail.com",
    from: email,
    subject: `Nouveau contact: ${subject}`,
    text,
    html,
  })
}

/**
 * Send an auto-reply email to the user who submitted the contact form
 */
export async function sendContactAutoReply(formData: {
  name: string
  email: string
}): Promise<{ success: boolean; error?: string }> {
  const { name, email } = formData

  const text = `
    Bonjour ${name},
    
    Nous avons bien reçu votre message et nous vous remercions de nous avoir contactés.
    
    Notre équipe examinera votre demande et vous répondra dans les plus brefs délais.
    
    Cordialement,
    L'équipe du Photography Club FSM
  `

  const html = `
    <p>Bonjour ${name},</p>
    <p>Nous avons bien reçu votre message et nous vous remercions de nous avoir contactés.</p>
    <p>Notre équipe examinera votre demande et vous répondra dans les plus brefs délais.</p>
    <p>Cordialement,<br>L'équipe du Photography Club FSM</p>
  `

  return sendEmail({
    to: email,
    from: "photographyfsm.pro@gmail.com",
    subject: "Confirmation de réception de votre message",
    text,
    html,
  })
}
