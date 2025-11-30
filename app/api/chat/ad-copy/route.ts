import { NextRequest, NextResponse } from "next/server"

const OLLAMA_API_URL = process.env.OLLAMA_API_URL || "http://localhost:11434/api/generate"
const OLLAMA_MODEL = process.env.OLLAMA_MODEL || "llama3.2"

export async function POST(req: NextRequest) {
  const { service, style, platform } = await req.json()
  
  const serviceType = service || "photographie"
  const serviceName = service || "Photographie"
  const tone = style || "chaleureux et professionnel"
  const socialPlatform = platform || "Instagram"
  
  try {

    const prompt = `Tu es رؤيا (Roya), une assistante experte en marketing pour la photographie. 

Crée un texte publicitaire de 2-3 phrases pour promouvoir un service de ${serviceType} sur ${socialPlatform}.

Ton: ${tone}
Style: Adapté à ${socialPlatform}
Inclus: Un appel à l'action (CTA) clair et un hashtag pertinent

Le texte doit être engageant, professionnel et inciter à l'action.`

    const response = await fetch(OLLAMA_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: OLLAMA_MODEL,
        prompt: prompt,
        stream: false,
        options: {
          temperature: 0.9,
          top_p: 0.95,
          num_predict: 500,
        },
      }),
      signal: AbortSignal.timeout(15000),
    })

    if (!response.ok) {
      throw new Error(`Ollama API error: ${response.statusText}`)
    }

    const data = await response.json()
    
    return NextResponse.json({ 
      adCopy: data.response || "Impossible de générer le texte publicitaire.",
      source: "ollama"
    })
  } catch (error) {
    console.error("Ad Copy Error:", error)
    
    // Fallback: Generate a basic ad copy
    const serviceTag = serviceName.replace(/\s+/g, '') || 'Photographie'
    const fallbackAd = `📸 ${serviceName} Professionnelle

Capturez vos moments précieux avec notre service de ${serviceType} de qualité. Des souvenirs qui durent toute une vie.

✨ Réservez votre séance dès maintenant!
📧 Contactez-nous pour plus d'informations

#PhotographyClubFSM #${serviceTag} #Meknes`

    return NextResponse.json({ 
      adCopy: fallbackAd,
      source: "fallback"
    })
  }
}

