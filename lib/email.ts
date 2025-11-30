// @ts-ignore - nodemailer types
import nodemailer from "nodemailer"

type EmailData = {
  to: string
  from: string
  subject: string
  text: string
  html?: string
}

// Configuration SMTP Gmail
// Vous pouvez utiliser un mot de passe d'application Gmail ou configurer un autre service SMTP
const getSMTPConfig = () => {
  // Direct fallback values
  const DEFAULT_EMAIL = "r.elouardani@edu.umi.ac.ma"
  const DEFAULT_PASSWORD = "vetkuwxnioshlnty"
  
  let email: string | undefined = process.env.SMTP_EMAIL
  let password: string | undefined = process.env.SMTP_PASSWORD
  
  console.log("Checking SMTP config...")
  console.log("SMTP_EMAIL from process.env:", email ? "✓ Set" : "✗ Not set")
  console.log("SMTP_PASSWORD from process.env:", password ? "✓ Set" : "✗ Not set")
  
  // Fallback: Try to read from .env.local file if not in process.env
  if (!email || !password) {
    try {
      const fs = require('fs')
      const path = require('path')
      
      // Try multiple possible paths for .env.local
      // In Next.js, process.cwd() should point to the project root
      const possiblePaths = [
        path.join(process.cwd(), '.env.local'), // Project root
        path.resolve(process.cwd(), '.env.local'), // Absolute path from root
        '.env.local', // Current directory
        path.resolve('.env.local'), // Resolved current directory
      ]
      
      let envPath: string | null = null
      for (const testPath of possiblePaths) {
        console.log("Trying path:", testPath)
        if (fs.existsSync(testPath)) {
          envPath = testPath
          console.log("✓ Found .env.local at:", envPath)
          break
        }
      }
      
      if (envPath && fs.existsSync(envPath)) {
        console.log(".env.local file exists, reading...")
        const envContent = fs.readFileSync(envPath, 'utf8')
        console.log(".env.local content length:", envContent.length)
        console.log(".env.local preview:", envContent.substring(0, 200))
        
        if (!email) {
          const emailMatch = envContent.match(/SMTP_EMAIL\s*=\s*(.+?)(?:\r?\n|$)/m)
          if (emailMatch && emailMatch[1]) {
            email = emailMatch[1].trim().replace(/^["']|["']$/g, '')
            console.log("✓ Loaded SMTP_EMAIL from .env.local:", email)
          } else {
            console.error("✗ Could not find SMTP_EMAIL in .env.local")
          }
        }
        
        if (!password) {
          // Try multiple regex patterns to find the password
          let passwordMatch = envContent.match(/SMTP_PASSWORD\s*=\s*([^\r\n]+)/m)
          if (!passwordMatch) {
            passwordMatch = envContent.match(/SMTP_PASSWORD\s*=\s*(.+)/)
          }
          if (!passwordMatch) {
            // Try line by line
            const lines = envContent.split(/\r?\n/)
            for (const line of lines) {
              if (line.trim().startsWith('SMTP_PASSWORD=')) {
                passwordMatch = line.match(/SMTP_PASSWORD\s*=\s*(.+)/)
                break
              }
            }
          }
          
          if (passwordMatch && passwordMatch[1]) {
            password = passwordMatch[1].trim().replace(/^["']|["']$/g, '')
            if (password) {
              console.log("✓ Loaded SMTP_PASSWORD from .env.local (length:", password.length, ")")
            }
          } else {
            console.error("✗ Could not find SMTP_PASSWORD in .env.local")
            console.error("File content search for SMTP_PASSWORD:", envContent.includes('SMTP_PASSWORD'))
            console.error("File lines:", envContent.split(/\r?\n/).length)
          }
        }
      } else {
        console.error("✗ .env.local file does not exist at:", envPath)
      }
    } catch (error) {
      console.error("Error reading .env.local:", error)
    }
  }
  
  const finalEmail = email || DEFAULT_EMAIL
  const finalPassword = password || DEFAULT_PASSWORD
  
  console.log("Final SMTP config - Email:", finalEmail, "Password length:", finalPassword.length)
  
  return {
    email: finalEmail,
    password: finalPassword,
  }
}

const createTransporter = () => {
  const { email, password } = getSMTPConfig()
  
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: email,
      pass: password,
    },
  })
}

/**
 * Send an email using Nodemailer with SMTP
 */
export async function sendEmail(data: EmailData): Promise<{ success: boolean; error?: string }> {
  try {
    const { password } = getSMTPConfig()
    
    // Vérifier que le mot de passe est configuré
    if (!password) {
      console.error("SMTP_PASSWORD not configured. Please set SMTP_PASSWORD in .env.local")
      console.error("See EMAIL_SETUP.md for instructions on creating a Gmail app password")
      return {
        success: false,
        error: "Email service not configured. Please contact the administrator.",
      }
    }
    
    const transporter = createTransporter()

    const mailOptions = {
      from: `Photography Club FSM <${data.from}>`,
      to: data.to,
      subject: data.subject,
      text: data.text,
      html: data.html || data.text,
      replyTo: "r.elouardani@edu.umi.ac.ma",
    }

    const result = await transporter.sendMail(mailOptions)
    
    console.log("Email sent successfully:", result.messageId)
    console.log("Email response:", JSON.stringify(result, null, 2))
    
    // Verify that the email was actually sent
    if (result.messageId) {
      return { success: true }
    } else {
      console.error("Email sent but no messageId returned:", result)
      return {
        success: false,
        error: "Email sent but confirmation not received",
      }
    }
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

  console.log("sendContactNotification: Preparing to send email to photographyfsm.pro@gmail.com")
  const result = await sendEmail({
    to: "photographyfsm.pro@gmail.com",
    from: "r.elouardani@edu.umi.ac.ma",
    subject: `Nouveau contact: ${subject}`,
    text,
    html,
  })
  console.log("sendContactNotification: Email send result:", JSON.stringify(result, null, 2))
  return result
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
    from: "r.elouardani@edu.umi.ac.ma",
    subject: "Confirmation de réception de votre message",
    text,
    html,
  })
}
