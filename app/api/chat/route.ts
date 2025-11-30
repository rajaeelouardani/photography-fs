import { NextRequest, NextResponse } from "next/server"
import { getVocabularySummary } from "@/lib/photography-vocabulary"

const OLLAMA_API_URL = process.env.OLLAMA_API_URL || "http://localhost:11434/api/generate"
const OLLAMA_MODEL = process.env.OLLAMA_MODEL || "llama3.2"

// Comprehensive Photography FAQ - Focused on photography techniques and tips
const PHOTOGRAPHY_FAQ: Array<{keywords: string[], response: string}> = [
  // Photography Basics
  {
    keywords: ["iso", "sensibilité", "sensibilité iso"],
    response: "Ah, l'ISO! C'est l'un des trois piliers du triangle d'exposition. 📸\n\n**Qu'est-ce que l'ISO?**\nL'ISO contrôle la sensibilité de votre capteur à la lumière. Plus l'ISO est élevé, plus le capteur est sensible, mais attention au bruit numérique!\n\n**Guide pratique:**\n• **ISO 100-200:** Parfait pour les journées ensoleillées en extérieur. Qualité maximale, zéro bruit.\n• **ISO 400-800:** Idéal pour l'intérieur avec fenêtres ou en ombre. Bon compromis qualité/bruit.\n• **ISO 1600-3200:** Pour les situations de faible luminosité (intérieur sombre, début de soirée). Un peu de bruit mais acceptable.\n• **ISO 6400+:** Dernier recours pour la nuit ou situations très sombres. Bruit visible mais parfois nécessaire.\n\n**Ma règle d'or:** Toujours commencer avec l'ISO le plus bas possible (100-200), puis l'augmenter seulement si vous ne pouvez pas compenser avec l'ouverture ou la vitesse. Le bruit numérique peut vraiment gâcher une photo!\n\n**Astuce pro:** Sur les appareils modernes, vous pouvez souvent monter jusqu'à ISO 3200 sans trop de problème. Testez votre appareil pour voir jusqu'où vous pouvez aller!"
  },
  {
    keywords: ["ouverture", "diaphragme", "f/", "f-stop", "aperture"],
    response: "**Ouverture (f/):**\n\n• **f/1.4 - f/2.8:** Grande ouverture, beaucoup de lumière, flou d'arrière-plan (portrait)\n• **f/4 - f/5.6:** Ouverture moyenne, bon compromis\n• **f/8 - f/11:** Petite ouverture, beaucoup de netteté (paysage)\n• **f/16 - f/22:** Très petite ouverture, maximum de netteté (mais moins de lumière)\n\n**Règle:** Plus le chiffre est petit (f/1.4), plus l'ouverture est grande et plus il y a de flou d'arrière-plan."
  },
  {
    keywords: ["vitesse", "shutter", "temps", "exposition", "1/"],
    response: "**Vitesse d'obturation (1/X secondes):**\n\n• **1/1000s - 1/500s:** Action rapide (sport, animaux)\n• **1/250s - 1/125s:** Portrait, marche\n• **1/60s:** Minimum pour photo à main levée\n• **1/30s - 1s:** Paysage avec trépied\n• **B (Bulb):** Exposition longue (feu d'artifice, astro)\n\n**Règle:** Vitesse minimale = 1/focale (ex: objectif 50mm = minimum 1/50s)"
  },
  {
    keywords: ["triangle", "exposition", "réglages", "manuel", "mode m"],
    response: "**Triangle d'exposition:**\n\nLes 3 paramètres qui contrôlent l'exposition:\n\n1. **ISO:** Sensibilité du capteur\n2. **Ouverture (f/):** Quantité de lumière\n3. **Vitesse:** Temps d'exposition\n\n**Équilibre:** Si vous augmentez l'un, diminuez un autre:\n• ISO +1 = Ouverture -1 stop OU Vitesse +1 stop\n• Exemple: ISO 200 → 400, alors f/4 → f/5.6"
  },
  
  // Composition
  {
    keywords: ["composition", "règle", "tiers", "cadrage"],
    response: "**Règles de composition:**\n\n📐 **Règle des tiers:**\nDivisez l'image en 9 parties (grille 3x3). Placez le sujet sur les intersections.\n\n📏 **Lignes directrices:**\nUtilisez les lignes (routes, rivières) pour guider l'œil vers le sujet.\n\n⚖️ **Symétrie:**\nCréez des images équilibrées et harmonieuses.\n\n🖼️ **Cadrage:**\nUtilisez des éléments naturels (fenêtres, portes) pour encadrer le sujet.\n\n📐 **Perspective:**\nChangez d'angle (vue de dessus, de dessous) pour des images uniques."
  },
  {
    keywords: ["portrait", "portrait", "personne", "visage"],
    response: "La photographie de portrait, c'est capturer l'âme d'une personne! 👤✨\n\n**Réglages recommandés:**\n• **Ouverture:** f/2.8 à f/5.6 - Cela crée un joli flou d'arrière-plan (bokeh) qui met le sujet en valeur. Plus l'ouverture est grande (f/2.8), plus le flou est prononcé.\n• **ISO:** 100-400 en lumière naturelle - Gardez-le bas pour une qualité optimale.\n• **Vitesse:** Minimum 1/125s - Pour éviter le flou de bougé, surtout si votre modèle bouge un peu.\n\n💡 **L'éclairage, c'est crucial!**\n• **Lumière naturelle près d'une fenêtre** - C'est magique! La lumière est douce et flatteuse.\n• **L'ombre douce** - Parfait pour éviter les ombres dures sur le visage.\n• **L'heure dorée** - Le lever ou coucher du soleil donne une lumière chaude et magnifique.\n• **À éviter absolument:** Le soleil direct de midi - il crée des ombres dures et fait plisser les yeux.\n\n👁️ **La mise au point:**\n**TOUJOURS sur les yeux!** Si les yeux sont nets, le reste peut être un peu flou, ça passera. Si les yeux sont flous, la photo est ratée. C'est la règle numéro 1 du portrait!\n\n📐 **Composition:**\n• **Règle des tiers** - Placez les yeux sur les lignes de tiers.\n• **Espace négatif** - Laissez de l'espace dans la direction du regard.\n• **Regard vers l'espace** - Si la personne regarde à gauche, laissez plus d'espace à gauche.\n• **Niveau des yeux** - Photographiez à la hauteur des yeux du sujet (sauf effet créatif).\n\n**Astuce pro:** Pour un portrait vraiment professionnel, utilisez un objectif 85mm ou 135mm - ils compriment les traits et sont très flatteurs!"
  },
  {
    keywords: ["paysage", "landscape", "nature", "montagne", "mer"],
    response: "**Photographie de paysage:**\n\n📸 **Réglages:**\n• Ouverture: f/8 - f/16 (netteté maximale)\n• ISO: 100-200 (qualité optimale)\n• Vitesse: Selon la lumière (trépied si < 1/60s)\n\n⏰ **Meilleur moment:**\n• Heure dorée (lever/coucher du soleil)\n• Heure bleue (juste avant/après le coucher)\n• Éviter: Midi (lumière dure)\n\n📐 **Composition:**\n• Premier plan, arrière-plan\n• Lignes directrices\n• Point focal intéressant\n\n🎒 **Équipement:**\nTrépied, objectif grand angle (14-24mm)"
  },
  {
    keywords: ["rue", "street", "urbain", "ville", "street photography"],
    response: "La photographie de rue, c'est capturer la vie telle qu'elle est! 🏙️✨\n\n**Qu'est-ce que la photographie de rue?**\nC'est photographier la vie quotidienne dans les espaces publics, capturer des moments authentiques, des expressions naturelles, et raconter des histoires urbaines.\n\n📸 **Réglages recommandés:**\n• **Ouverture:** f/5.6 - f/8 (bonne profondeur de champ, tout reste net)\n• **ISO:** 200-800 (selon la lumière du jour)\n• **Vitesse:** 1/125s - 1/250s (pour figer le mouvement)\n• **Mode:** Priorité ouverture (A/Av) ou manuel\n\n💡 **Techniques essentielles:**\n• **Zone focusing (pré-mise au point):** Réglez la mise au point à une distance fixe (ex: 3m), plus besoin d'autofocus!\n• **Discret:** Utilisez un petit appareil, évitez les gestes brusques\n• **Anticipation:** Observez la scène, prévoyez le moment parfait\n• **Lignes et formes:** Utilisez l'architecture urbaine pour la composition\n\n📐 **Composition:**\n• **Règle des tiers** - Placez les sujets sur les intersections\n• **Lignes directrices** - Routes, trottoirs, bâtiments\n• **Cadrage naturel** - Fenêtres, portes, arches\n• **Contraste** - Lumière/ombre, couleurs complémentaires\n• **Moment décisif** - Attendez le bon instant!\n\n🎯 **Sujets à photographier:**\n• Personnes dans leur environnement naturel\n• Interactions et émotions\n• Architecture et détails urbains\n• Ombres et reflets\n• Signes et typographie\n• Scènes de vie quotidienne\n\n⚡ **Astuces pro:**\n• **Objectif 35mm ou 50mm** - Proche de la vision humaine, discret\n• **Mode silencieux** - Pour ne pas déranger\n• **Photographiez tôt le matin ou en fin d'après-midi** - Meilleure lumière\n• **Soyez respectueux** - Demandez la permission si vous photographiez de près\n• **Pratiquez la discrétion** - Ne vous faites pas remarquer\n\n📚 **Inspiration:**\nRegardez les travaux de Henri Cartier-Bresson, Vivian Maier, ou Garry Winogrand pour comprendre l'art de la photographie de rue!\n\n💪 **Conseil:** Commencez par photographier votre quartier, vous connaissez déjà les meilleurs endroits et moments!"
  },
  
  // Lighting
  {
    keywords: ["lumière", "éclairage", "lighting", "flash", "éclairer"],
    response: "**Gestion de la lumière:**\n\n☀️ **Lumière naturelle:**\n• **Heure dorée:** Lever/coucher du soleil (couleurs chaudes)\n• **Heure bleue:** Juste avant/après coucher (couleurs froides)\n• **Ombre douce:** Meilleure pour portraits\n• **Éviter:** Soleil de midi (ombres dures)\n\n💡 **Flash:**\n• Flash intégré: Dernier recours\n• Flash externe: Meilleure qualité\n• Technique: Rebondir le flash sur mur/plafond\n\n🎨 **Balance des blancs:**\n• Auto: Généralement bon\n• Manuel: Ajuster selon la source de lumière"
  },
  {
    keywords: ["heure dorée", "golden hour", "coucher", "lever", "soleil"],
    response: "**Heure dorée (Golden Hour):**\n\n⏰ **Quand:**\n• Lever du soleil: 1h avant et après\n• Coucher du soleil: 1h avant et après\n\n✨ **Avantages:**\n• Lumière douce et chaude\n• Ombres longues et dramatiques\n• Couleurs chaudes (oranges, rouges)\n• Meilleur pour portraits et paysages\n\n📸 **Réglages:**\n• ISO: 100-400\n• Ouverture: f/4 - f/8\n• Vitesse: Selon le sujet\n\n💡 **Astuce:** Utilisez une application (PhotoPills, Sun Seeker) pour connaître les heures exactes."
  },
  
  // Equipment
  {
    keywords: ["objectif", "lens", "focale", "zoom", "50mm", "24mm", "85mm"],
    response: "**Objectifs et focales:**\n\n📷 **Grand angle (14-24mm):**\n• Paysages, architecture\n• Perspective exagérée\n• Grande profondeur de champ\n\n📷 **Standard (35-50mm):**\n• Proche de la vision humaine\n• Polyvalent (portrait, rue, paysage)\n• 50mm f/1.8: Excellent rapport qualité/prix\n\n📷 **Téléobjectif (85-200mm+):**\n• Portrait (85mm, 135mm)\n• Sport, animaux (200mm+)\n• Compression de perspective\n• Flou d'arrière-plan\n\n💡 **Recommandation débutant:** 50mm f/1.8 (polyvalent et abordable)"
  },
  {
    keywords: ["appareil", "camera", "reflex", "hybride", "dslr", "mirrorless"],
    response: "**Types d'appareils photo:**\n\n📷 **Reflex (DSLR):**\n• Viseur optique\n• Grande autonomie\n• Nombreux objectifs\n• Plus lourd\n\n📷 **Hybride (Mirrorless):**\n• Plus compact\n• Viseur électronique\n• Autofocus rapide\n• Meilleur pour vidéo\n• Batterie moins durable\n\n💡 **Pour débuter:**\n• Hybride: Plus facile à apprendre (prévisualisation)\n• Reflex: Plus robuste, meilleure autonomie\n\n📸 **Recommandation:** Commencez avec ce que vous avez (smartphone) puis passez à un appareil dédié."
  },
  
  // Techniques
  {
    keywords: ["flou", "bokeh", "arrière-plan", "background", "profondeur"],
    response: "**Créer un flou d'arrière-plan (Bokeh):**\n\n📸 **Techniques:**\n\n1. **Grande ouverture:**\n   • f/1.4 - f/2.8 (objectif rapide)\n   • Plus l'ouverture est grande, plus le flou est prononcé\n\n2. **Longue focale:**\n   • 85mm, 135mm, 200mm\n   • Plus la focale est longue, plus le flou est important\n\n3. **Distance:**\n   • Sujet proche de l'appareil\n   • Arrière-plan éloigné\n\n4. **Lumières:**\n   • Lumières en arrière-plan créent de beaux cercles de flou\n\n💡 **Astuce:** Objectif 50mm f/1.8 est excellent pour débuter avec le bokeh."
  },
  {
    keywords: ["mise au point", "focus", "autofocus", "af", "net", "netteté"],
    response: "**Mise au point:**\n\n🎯 **Autofocus (AF):**\n• **AF-S (One Shot):** Sujets immobiles\n• **AF-C (Continue):** Sujets en mouvement\n• **AF-A (Auto):** Détecte automatiquement\n\n👁️ **Pour portraits:**\n• Mise au point sur les yeux\n• Utilisez un seul point AF\n• Si les yeux sont flous, la photo est ratée\n\n📸 **Techniques:**\n• **Back-button focus:** Découple le focus du déclencheur\n• **Focus stacking:** Plusieurs photos à différentes distances pour netteté maximale\n\n💡 **Astuce:** En faible lumière, utilisez le mode Live View et zoom numérique pour focus précis."
  },
  {
    keywords: ["mouvement", "action", "sport", "vitesse rapide", "figer"],
    response: "**Photographier le mouvement:**\n\n⚡ **Figer le mouvement:**\n• Vitesse rapide: 1/500s - 1/2000s\n• Mode rafale (burst)\n• Autofocus continu (AF-C)\n• ISO élevé si nécessaire\n\n🌊 **Flou de mouvement:**\n• Vitesse lente: 1/30s - 1s\n• Panning: Suivre le sujet (1/60s)\n• Trépied pour stabilité\n\n📸 **Techniques:**\n• **Panning:** Suivez le sujet horizontalement\n• **Zoom burst:** Zoom pendant l'exposition\n• **Light painting:** Source de lumière en mouvement\n\n💡 **Astuce:** Pour sport, utilisez le mode priorité vitesse (Tv/S)"
  },
  
  // Post-processing
  {
    keywords: ["retouche", "editing", "post-traitement", "lightroom", "photoshop", "raw"],
    response: "**Post-traitement photo:**\n\n📸 **Format RAW:**\n• Plus d'informations que JPEG\n• Meilleure qualité pour retouche\n• Fichiers plus lourds\n• Nécessite logiciel de traitement\n\n🎨 **Logiciels:**\n• **Lightroom:** Organisation + retouche\n• **Photoshop:** Retouche avancée\n• **GIMP:** Gratuit et puissant\n• **Snapseed:** Mobile (gratuit)\n\n✨ **Ajustements de base:**\n• Exposition, contraste\n• Ombres, hautes lumières\n• Saturation, vibrance\n• Balance des blancs\n• Netteté, réduction bruit\n\n💡 **Règle:** Retouchez avec modération, gardez l'image naturelle."
  },
  
  // Photography Styles
  {
    keywords: ["macro", "proximité", "gros plan", "détail"],
    response: "**Photographie macro:**\n\n🔍 **Équipement:**\n• Objectif macro dédié (90mm, 100mm)\n• Ou bagues d'extension / bonnette\n• Trépied (obligatoire)\n\n📸 **Réglages:**\n• Ouverture: f/8 - f/16 (profondeur de champ)\n• ISO: 100-400\n• Vitesse: 1/125s minimum\n• Focus manuel recommandé\n\n💡 **Techniques:**\n• Trépied obligatoire (vibration)\n• Focus stacking pour netteté maximale\n• Éclairage: Flash annulaire ou lumière naturelle\n• Sujets: Fleurs, insectes, textures"
  },
  {
    keywords: ["noir et blanc", "black and white", "bnw", "monochrome"],
    response: "**Photographie noir et blanc:**\n\n⚫ **Techniques:**\n• Photographiez en couleur, convertissez après\n• Cherchez contrastes et textures\n• Formes et lignes importantes\n• Évitez les sujets uniquement colorés\n\n📸 **Réglages:**\n• Mode monochrome pour prévisualisation\n• RAW pour garder les couleurs\n• Post-traitement: Ajustez les canaux RVB\n\n💡 **Astuce:** Les portraits en noir et blanc sont intemporels et élégants."
  },
  {
    keywords: ["nuit", "astronomie", "étoiles", "voie lactée", "low light"],
    response: "**Photographie de nuit / astro:**\n\n🌙 **Équipement:**\n• Trépied solide (obligatoire)\n• Objectif grand angle lumineux (f/2.8 ou plus)\n• Déclencheur à distance\n\n📸 **Réglages:**\n• Ouverture: f/2.8 - f/4 (maximum de lumière)\n• ISO: 1600-6400 (selon bruit)\n• Vitesse: 15-30s (règle 500: 500/focale)\n• Focus: Manuel à l'infini\n\n⭐ **Techniques:**\n• Évitez la pollution lumineuse\n• Composez avec premier plan\n• Stacking pour réduire bruit\n• Light painting pour éclairer le premier plan"
  },
  
  // Common Questions
  {
    keywords: ["liste de prises", "shot list", "plan de séance", "planning photo"],
    response: "Excellente idée de planifier votre séance! 📋✨\n\nJe peux créer une liste de prises de vue personnalisée pour vous. Dites-moi simplement:\n• Le type de séance (portrait, mariage, événement, etc.)\n• Le lieu (intérieur, extérieur, studio)\n• L'ambiance souhaitée (naturel, dramatique, joyeux, etc.)\n• Le nombre de personnes ou sujets\n\nPar exemple, dites-moi: \"Crée une liste de prises de vue pour un portrait en extérieur au coucher du soleil\" et je vous préparerai un plan détaillé avec 8 prises de vue incluant composition, réglages et éclairage!\n\n💡 **Astuce:** Une bonne planification fait toute la différence entre une séance moyenne et une séance exceptionnelle!"
  },
  {
    keywords: ["texte publicitaire", "ad copy", "publicité", "marketing", "promotion", "annonce"],
    response: "Je peux vous aider à créer du contenu publicitaire pour vos services photo! 📢\n\nDites-moi:\n• Le type de service (portrait, mariage, événement, etc.)\n• La plateforme (Instagram, Facebook, LinkedIn)\n• Le ton souhaité (professionnel, décontracté, élégant, etc.)\n\nPar exemple: \"Crée un texte publicitaire pour un service de portrait sur Instagram\"\n\nJe générerai un texte engageant avec:\n• Un message accrocheur\n• Un appel à l'action clair\n• Des hashtags pertinents\n\n💡 **Astuce:** Un bon texte publicitaire peut transformer un visiteur en client!"
  },
  {
    keywords: ["débutant", "commencer", "apprendre", "premiers pas", "conseil débutant"],
    response: "Super! Je suis ravie de vous aider à débuter en photographie! 🌟\n\n**Par où commencer?**\n\n📚 **Les fondamentaux à maîtriser:**\n1. **Le triangle d'exposition** - C'est la base! ISO, Ouverture, Vitesse. Comprenez comment ces trois paramètres interagissent.\n2. **Le mode A/Av (priorité ouverture)** - Parfait pour débuter. Vous contrôlez l'ouverture, l'appareil gère le reste.\n3. **La composition** - La règle des tiers est votre meilleure amie au début. Placez votre sujet sur les intersections de la grille.\n4. **Pratiquez, pratiquez, pratiquez!** - Sortez avec votre appareil, même 15 minutes par jour fait la différence.\n5. **Analysez vos photos** - Regardez ce qui fonctionne et ce qui ne fonctionne pas. Apprenez de vos erreurs!\n\n📸 **Équipement pour débuter:**\n• **Utilisez ce que vous avez!** - Un smartphone peut être un excellent point de départ.\n• **Objectif 50mm f/1.8** - Si vous avez un reflex/hybride, c'est l'objectif parfait pour apprendre. Pas cher et excellent qualité.\n• **Trépied** - Essentiel pour les paysages et la photo de nuit. Même un petit trépied fait la différence.\n• **Carte mémoire rapide** - Pour le mode rafale et les vidéos.\n\n💡 **Mes conseils personnels:**\n• Photographiez en RAW dès que possible - vous aurez plus de marge en post-traitement.\n• Apprenez la retouche de base - Lightroom est parfait pour débuter.\n• Ne vous découragez pas - la photographie s'apprend avec le temps!\n• Rejoignez des communautés photo - partagez vos photos et recevez des retours.\n\n🎓 **Ressources:**\nConsultez notre cours complet 'Bases de la Photographie' sur /cours - c'est une excellente base structurée!\n\nN'hésitez pas à me poser des questions spécifiques, je suis là pour vous aider! 😊"
  },
  {
    keywords: ["erreur", "problème", "flou", "trop sombre", "trop clair", "surexposé", "sous-exposé"],
    response: "**Problèmes courants:**\n\n❌ **Photo floue:**\n• Vitesse trop lente → Augmentez vitesse (1/60s minimum)\n• Mouvement → Utilisez trépied\n• Focus incorrect → Vérifiez mise au point\n\n❌ **Photo trop sombre (sous-exposée):**\n• Augmentez ISO\n• Ouvrez le diaphragme (f/ plus petit)\n• Ralentissez vitesse\n• Ajoutez lumière (flash)\n\n❌ **Photo trop claire (surexposée):**\n• Diminuez ISO\n• Fermez le diaphragme (f/ plus grand)\n• Augmentez vitesse\n• Réduisez lumière\n\n💡 **Astuce:** Utilisez l'histogramme pour vérifier l'exposition."
  }
]

// Find matching photography FAQ
function findPhotographyFAQ(userMessage: string): string | null {
  const lowerMessage = userMessage.toLowerCase()
  
  for (const faq of PHOTOGRAPHY_FAQ) {
    for (const keyword of faq.keywords) {
      if (lowerMessage.includes(keyword)) {
        return faq.response
      }
    }
  }
  
  return null
}

// Try Ollama with photography-focused prompt
async function tryOllama(prompt: string): Promise<string | null> {
  try {
    console.log(`[Ollama] Connecting to ${OLLAMA_API_URL} with model ${OLLAMA_MODEL}`)
    
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
          temperature: 0.8, // More creative and natural responses
          top_p: 0.95, // More diverse vocabulary
          num_predict: 1000, // Longer, more detailed responses
          repeat_penalty: 1.1, // Avoid repetition
        },
      }),
      signal: AbortSignal.timeout(15000), // Increased to 15 seconds
    })

    if (response.ok) {
      const data = await response.json()
      console.log(`[Ollama] Success! Response length: ${data.response?.length || 0} characters`)
      return data.response || null
    } else {
      const errorText = await response.text()
      console.error(`[Ollama] API error: HTTP ${response.status} ${response.statusText}`)
      console.error(`[Ollama] Error details: ${errorText.substring(0, 300)}`)
      return null
    }
  } catch (error: any) {
    if (error.name === 'AbortError') {
      console.error("[Ollama] Request timeout after 15 seconds")
    } else {
      console.error(`[Ollama] Connection error: ${error.message || error}`)
      console.error(`[Ollama] Error type: ${error.name || 'Unknown'}`)
    }
    return null
  }
}

export async function POST(req: NextRequest) {
  try {
    const { messages, language = "fr" } = await req.json()
    
    if (!messages || messages.length === 0) {
      return NextResponse.json(
        { error: "No messages provided" },
        { status: 400 }
      )
    }
    
    const lastMessage = messages[messages.length - 1]?.content || ""
    const chatLang = language as "fr" | "en" | "ar"
    
    // Check for special commands: shot list generation
    const shotListKeywords = ["liste de prises", "shot list", "plan de séance", "liste de photos", "planning photo", "séance photo"]
    const isShotListRequest = shotListKeywords.some(keyword => 
      lastMessage.toLowerCase().includes(keyword.toLowerCase())
    )
    
    // Check for special commands: ad copy generation
    const adCopyKeywords = ["texte publicitaire", "ad copy", "publicité", "marketing", "promotion", "annonce", "post instagram", "post facebook"]
    const isAdCopyRequest = adCopyKeywords.some(keyword => 
      lastMessage.toLowerCase().includes(keyword.toLowerCase())
    )
    
    // Handle shot list request
    if (isShotListRequest) {
      try {
        const shotListResponse = await fetch(`${req.nextUrl.origin}/api/chat/shot-list`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ brief: lastMessage }),
        })
        const shotListData = await shotListResponse.json()
        return NextResponse.json({
          message: shotListData.shotList || "Impossible de générer la liste de prises de vue.",
          source: shotListData.source || "shot-list"
        })
      } catch (error) {
        console.error("Shot list error:", error)
      }
    }
    
    // Handle ad copy request
    if (isAdCopyRequest) {
      try {
        // Extract service type from message
        const serviceMatch = lastMessage.match(/(?:pour|service|séance|photo)\s+([^,\.]+)/i)
        const service = serviceMatch ? serviceMatch[1].trim() : "photographie"
        
        const adCopyResponse = await fetch(`${req.nextUrl.origin}/api/chat/ad-copy`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ 
            service: service,
            style: "chaleureux et professionnel",
            platform: "Instagram"
          }),
        })
        const adCopyData = await adCopyResponse.json()
        return NextResponse.json({
          message: adCopyData.adCopy || "Impossible de générer le texte publicitaire.",
          source: adCopyData.source || "ad-copy"
        })
      } catch (error) {
        console.error("Ad copy error:", error)
      }
    }
    
    const conversationHistory = messages
      .slice(-5)
      .map((msg: { role: string; content: string }) => {
        if (msg.role === "user") {
          return `User: ${msg.content}`
        }
        return `Assistant: ${msg.content}`
      })
      .join("\n")
    
    // Language-specific system prompts
    const vocabularySummary = getVocabularySummary(chatLang)
    
    const systemPrompts: Record<string, string> = {
      fr: `You are رؤيا (Roya), a friendly and knowledgeable photography assistant for the Photography Club FSM. Your name is رؤيا (Roya), which means "vision" in Arabic - perfect for photography!

Your personality:
- Friendly, helpful, and enthusiastic about photography
- You explain things clearly and in detail, like a patient teacher
- You provide practical examples and real-world scenarios
- You use emojis naturally to make responses engaging
- You're conversational and warm, not robotic

Your expertise includes:
- Photography techniques (ISO, aperture, shutter speed, exposure triangle)
- Composition rules (rule of thirds, leading lines, framing, symmetry)
- Lighting techniques (natural light, golden hour, flash, studio lighting)
- Camera settings and modes (manual, aperture priority, shutter priority)
- Lens selection and focal lengths (wide angle, standard, telephoto)
- Portrait, landscape, macro, night, street, wildlife photography
- Post-processing and editing (Lightroom, Photoshop, RAW processing)
- Equipment recommendations for different skill levels
- Troubleshooting common photography problems
- Creating shot lists for photo sessions
- Writing marketing copy and ad text for photography services

Photography Vocabulary Reference:
${vocabularySummary}

Response style:
- Always respond in French
- Be detailed and comprehensive - explain the "why" behind advice
- Use examples: "Par exemple, pour un portrait..." or "Imaginez que vous..."
- Provide step-by-step guidance when explaining techniques
- Include practical tips and tricks
- Use photography terminology naturally from the vocabulary reference above
- Be encouraging, especially for beginners
- Keep responses conversational and natural, like talking to a friend who's an expert`,

      en: `You are رؤيا (Roya), a friendly and knowledgeable photography assistant for the Photography Club FSM. Your name is رؤيا (Roya), which means "vision" in Arabic - perfect for photography!

Your personality:
- Friendly, helpful, and enthusiastic about photography
- You explain things clearly and in detail, like a patient teacher
- You provide practical examples and real-world scenarios
- You use emojis naturally to make responses engaging
- You're conversational and warm, not robotic

Your expertise includes:
- Photography techniques (ISO, aperture, shutter speed, exposure triangle)
- Composition rules (rule of thirds, leading lines, framing, symmetry)
- Lighting techniques (natural light, golden hour, flash, studio lighting)
- Camera settings and modes (manual, aperture priority, shutter priority)
- Lens selection and focal lengths (wide angle, standard, telephoto)
- Portrait, landscape, macro, night, street, wildlife photography
- Post-processing and editing (Lightroom, Photoshop, RAW processing)
- Equipment recommendations for different skill levels
- Troubleshooting common photography problems
- Creating shot lists for photo sessions
- Writing marketing copy and ad text for photography services

Photography Vocabulary Reference:
${vocabularySummary}

Response style:
- Always respond in English
- Be detailed and comprehensive - explain the "why" behind advice
- Use examples: "For example, for a portrait..." or "Imagine that you..."
- Provide step-by-step guidance when explaining techniques
- Include practical tips and tricks
- Use photography terminology naturally from the vocabulary reference above
- Be encouraging, especially for beginners
- Keep responses conversational and natural, like talking to a friend who's an expert`,

      ar: `أنت رؤيا (Roya)، مساعدة ذكية ودودة ومتخصصة في التصوير الفوتوغرافي لنادي التصوير FSM. اسمك رؤيا، وهو يعني "الرؤية" بالعربية - مثالي للتصوير الفوتوغرافي!

شخصيتك:
- ودودة ومفيدة ومتحمسة للتصوير الفوتوغرافي
- تشرح الأشياء بوضوح وبالتفصيل، مثل معلم صبور
- تقدم أمثلة عملية وسيناريوهات من العالم الحقيقي
- تستخدم الرموز التعبيرية بشكل طبيعي لجعل الردود جذابة
- محادثة ودافئة، وليست آلية

خبرتك تشمل:
- تقنيات التصوير (ISO، الفتحة، سرعة الغالق، مثلث التعريض)
- قواعد التكوين (قاعدة الأثلاث، الخطوط الموجهة، الإطار، التماثل)
- تقنيات الإضاءة (الضوء الطبيعي، الساعة الذهبية، الفلاش، إضاءة الاستوديو)
- إعدادات الكاميرا والأوضاع (يدوي، أولوية الفتحة، أولوية سرعة الغالق)
- اختيار العدسة والبعد البؤري (زاوية واسعة، قياسي، تليفوتو)
- تصوير البورتريه، المناظر الطبيعية، الماكرو، الليل، الشارع، الحياة البرية
- المعالجة والتحرير (Lightroom، Photoshop، معالجة RAW)
- توصيات المعدات لمستويات المهارة المختلفة
- حل مشاكل التصوير الشائعة
- إنشاء قوائم اللقطات لجلسات التصوير
- كتابة نصوص التسويق والإعلان لخدمات التصوير

مرجع مفردات التصوير الفوتوغرافي:
${vocabularySummary}

أسلوب الرد:
- ارد دائماً بالعربية
- كن مفصلاً وشاملاً - اشرح "لماذا" وراء النصيحة
- استخدم أمثلة: "على سبيل المثال، للبورتريه..." أو "تخيل أنك..."
- قدم إرشادات خطوة بخطوة عند شرح التقنيات
- أدرج نصائح وحيل عملية
- استخدم مصطلحات التصوير بشكل طبيعي من مرجع المفردات أعلاه
- كن مشجعاً، خاصة للمبتدئين
- حافظ على الردود محادثة وطبيعية، مثل التحدث مع صديق خبير`
    }

    const systemPrompt = systemPrompts[chatLang] || systemPrompts.fr

    const fullPrompt = `${systemPrompt}

Previous conversation:
${conversationHistory}

User: ${lastMessage}
Assistant:`

    // Layer 1: Try Ollama (localhost) with photography context
    let response = await tryOllama(fullPrompt)
    if (response) {
      return NextResponse.json({ 
        message: response,
        source: "ollama"
      })
    }

    // Layer 2: Try Photography FAQ matching
    const faqAnswer = findPhotographyFAQ(lastMessage)
    if (faqAnswer) {
      return NextResponse.json({ 
        message: faqAnswer,
        source: "faq"
      })
    }

    // Layer 3: Default photography help - More conversational
    return NextResponse.json({ 
      message: `Bonjour! Je suis رؤيا (Roya), votre assistante spécialisée en photographie! 😊\n\nJe serais ravie de vous aider avec tout ce qui concerne la photographie. Voici ce sur quoi je peux vous conseiller:\n\n📸 **Techniques photographiques:**\n• Le triangle d'exposition (ISO, ouverture, vitesse)\n• Comment équilibrer ces trois paramètres\n• Les différents modes de prise de vue\n\n📐 **Composition et cadrage:**\n• La règle des tiers et autres règles de composition\n• Les lignes directrices et la perspective\n• Comment créer des images équilibrées et impactantes\n\n💡 **Éclairage:**\n• La lumière naturelle et comment l'utiliser\n• L'heure dorée et l'heure bleue\n• Les techniques de flash et d'éclairage artificiel\n\n📷 **Équipement et réglages:**\n• Le choix des objectifs et des focales\n• Les réglages d'appareil photo\n• Les recommandations d'équipement selon votre niveau\n\n🎨 **Styles photographiques:**\n• Portrait, paysage, macro, photographie de nuit\n• Photographie de rue, sport, nature\n• Noir et blanc et autres styles créatifs\n\n✨ **Post-traitement:**\n• Le format RAW vs JPEG\n• Les logiciels de retouche (Lightroom, Photoshop)\n• Les techniques de base et avancées\n\nN'hésitez pas à me poser n'importe quelle question! Je suis là pour vous aider à progresser en photographie. 💪\n\n💡 **Astuce:** Si vous débutez, consultez aussi notre cours complet sur /cours pour apprendre les bases de manière structurée!`,
      source: "fallback"
    })
    
  } catch (error) {
    console.error("Chat API Error:", error)
    return NextResponse.json(
      { 
        error: "Failed to generate response",
        message: "Je suis رؤيا (Roya), votre assistante spécialisée en photographie. Je peux vous aider avec les techniques, réglages, composition, éclairage et plus encore. Posez-moi une question sur la photographie!",
        source: "error"
      },
      { status: 500 }
    )
  }
}

