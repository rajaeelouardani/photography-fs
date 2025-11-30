import { NextRequest, NextResponse } from "next/server"

const OLLAMA_API_URL = process.env.OLLAMA_API_URL || "http://localhost:11434/api/generate"
const OLLAMA_MODEL = process.env.OLLAMA_MODEL || "llama3.2"

export async function POST(req: NextRequest) {
  const { brief } = await req.json()
  const briefText = brief || "votre séance"
  
  try {
    if (!brief) {
      return NextResponse.json(
        { error: "Brief is required" },
        { status: 400 }
      )
    }

    const prompt = `Tu es رؤيا (Roya), une assistante experte en photographie. Crée une liste de 8 prises de vue détaillée pour une séance photo.

Brief du client: ${brief}

Pour chaque prise de vue, fournis:
1. Un titre court et descriptif
2. Un conseil de composition spécifique
3. Les réglages recommandés (ISO, ouverture, vitesse)
4. Un conseil d'éclairage

Format ta réponse de manière claire et structurée, numérotée de 1 à 8.`

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
          temperature: 0.8,
          top_p: 0.95,
          num_predict: 1000,
        },
      }),
      signal: AbortSignal.timeout(15000),
    })

    if (!response.ok) {
      throw new Error(`Ollama API error: ${response.statusText}`)
    }

    const data = await response.json()
    
    return NextResponse.json({ 
      shotList: data.response || "Impossible de générer la liste de prises de vue."
    })
  } catch (error) {
    console.error("Shot List Error:", error)
    
    // Fallback: Generate a basic shot list
    const fallbackShotList = `Liste de prises de vue pour: ${briefText}

1. **Photo d'ensemble**
   - Composition: Règle des tiers, inclure l'environnement
   - Réglages: f/8, ISO 200, 1/125s
   - Éclairage: Lumière naturelle, heure dorée si possible

2. **Photo rapprochée**
   - Composition: Focus sur le sujet principal
   - Réglages: f/2.8, ISO 200, 1/250s
   - Éclairage: Lumière douce, éviter les ombres dures

3. **Détail créatif**
   - Composition: Cadrage serré, lignes directrices
   - Réglages: f/4, ISO 400, 1/125s
   - Éclairage: Contre-jour pour effet dramatique

4. **Photo d'action**
   - Composition: Espace pour le mouvement
   - Réglages: f/5.6, ISO 400, 1/500s
   - Éclairage: Lumière suffisante pour vitesse rapide

5. **Portrait environnemental**
   - Composition: Sujet + contexte
   - Réglages: f/4, ISO 200, 1/125s
   - Éclairage: Lumière naturelle, ombre douce

6. **Photo émotionnelle**
   - Composition: Focus sur les expressions
   - Réglages: f/2.8, ISO 200, 1/250s
   - Éclairage: Lumière flatteuse, heure dorée

7. **Photo de groupe**
   - Composition: Tous les sujets nets
   - Réglages: f/8, ISO 200, 1/125s
   - Éclairage: Lumière uniforme

8. **Photo finale signature**
   - Composition: Votre meilleure composition
   - Réglages: Selon la situation
   - Éclairage: Lumière optimale pour l'ambiance`

    return NextResponse.json({ 
      shotList: fallbackShotList,
      source: "fallback"
    })
  }
}

