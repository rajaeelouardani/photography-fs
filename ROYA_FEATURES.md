# 🎯 Guide des Fonctionnalités de رؤيا (Roya)

رؤيا (Roya) est votre assistante IA spécialisée en photographie avec des fonctionnalités avancées pour vous aider dans votre travail quotidien.

## 📸 Fonctionnalités Principales

### 1. **Conseils Photographiques Généraux**

Posez n'importe quelle question sur la photographie:

**Exemples:**
- "Comment régler l'ISO pour une photo de nuit?"
- "Quelle ouverture utiliser pour un portrait?"
- "Explique-moi le triangle d'exposition"
- "Conseils pour photographier un paysage"

رؤيا répondra avec des explications détaillées, des exemples pratiques et des conseils professionnels.

---

### 2. **Génération de Listes de Prises de Vue** 🎬

Créez automatiquement un plan de séance photo personnalisé!

**Comment utiliser:**
Dites simplement à رؤيا ce que vous voulez photographier:

**Exemples:**
- "Crée une liste de prises de vue pour un portrait en extérieur au coucher du soleil"
- "Plan de séance pour un mariage en intérieur"
- "Liste de prises de vue pour une séance famille à la plage"
- "Shot list pour un événement corporate"

**Ce que vous obtiendrez:**
- 8 prises de vue détaillées
- Pour chaque prise: titre, composition, réglages (ISO/ouverture/vitesse), éclairage
- Prêt à copier-coller dans votre planning

**Exemple de réponse:**
```
1. Photo d'ensemble
   - Composition: Règle des tiers, inclure l'environnement
   - Réglages: f/8, ISO 200, 1/125s
   - Éclairage: Lumière naturelle, heure dorée

2. Photo rapprochée
   - Composition: Focus sur le sujet principal
   - Réglages: f/2.8, ISO 200, 1/250s
   ...
```

---

### 3. **Génération de Contenu Publicitaire** 📢

Créez du contenu marketing pour promouvoir vos services!

**Comment utiliser:**
Demandez à رؤيا de créer un texte publicitaire:

**Exemples:**
- "Écris un texte publicitaire pour Instagram"
- "Crée une annonce pour un service de portrait"
- "Texte marketing pour un mariage"
- "Post Facebook pour promouvoir mes services photo"

**Ce que vous obtiendrez:**
- Texte publicitaire de 2-3 phrases
- Appel à l'action (CTA) clair
- Hashtags pertinents
- Adapté à la plateforme (Instagram, Facebook, LinkedIn)

**Exemple de réponse:**
```
📸 Portrait Professionnel

Capturez votre beauté naturelle avec notre séance portrait personnalisée. 
Des photos qui révèlent votre personnalité unique.

✨ Réservez votre séance dès maintenant!
📧 Contactez-nous pour plus d'informations

#PhotographyClubFSM #Portrait #Meknes
```

---

## 🚀 Utilisation Avancée

### Détection Automatique

رؤيا détecte automatiquement vos intentions:

- Si vous mentionnez "liste de prises", "shot list", "plan de séance" → Génère une liste de prises de vue
- Si vous mentionnez "texte publicitaire", "ad copy", "marketing" → Génère du contenu publicitaire
- Sinon → Répond à votre question photographique

### Intégration avec Ollama

Quand Ollama est actif:
- ✅ Réponses IA complètes et détaillées
- ✅ Génération créative de contenu
- ✅ Adaptabilité au contexte

Quand Ollama n'est pas actif:
- ✅ Réponses FAQ instantanées
- ✅ Listes de prises de vue prédéfinies
- ✅ Textes publicitaires de base

---

## 💡 Cas d'Usage Pratiques

### Avant une Séance Photo

1. **Planification:**
   ```
   "Crée une liste de prises de vue pour un portrait couple 
   en extérieur, style romantique, au coucher du soleil"
   ```

2. **Préparation technique:**
   ```
   "Quels réglages pour photographier un couple au coucher du soleil?"
   ```

### Après une Séance

1. **Promotion:**
   ```
   "Écris un texte publicitaire pour Instagram pour promouvoir 
   mes services de portrait famille"
   ```

2. **Réseaux sociaux:**
   ```
   "Crée un post Facebook pour annoncer mes nouveaux tarifs 
   de mariage, ton professionnel"
   ```

### Apprentissage Continu

- Posez des questions techniques
- Demandez des explications détaillées
- Obtenez des conseils personnalisés

---

## 🎨 Exemples de Conversations

### Exemple 1: Planification de Séance

**Vous:** "Crée une liste de prises de vue pour un portrait professionnel en studio"

**رؤيا:** 
```
Liste de 8 prises de vue pour portrait studio:

1. Portrait classique 3/4
   - Composition: Règle des tiers, regard vers l'appareil
   - Réglages: f/5.6, ISO 100, 1/125s
   - Éclairage: Key light à 45°, fill light pour ombres douces

2. Portrait serré
   - Composition: Focus sur les yeux, cadrage serré
   - Réglages: f/2.8, ISO 100, 1/125s
   - Éclairage: Butterfly lighting pour éclairage flatteur
...
```

### Exemple 2: Marketing

**Vous:** "Texte publicitaire pour un service de photographie de mariage sur Instagram"

**رؤيا:**
```
💍 Votre Journée Inoubliable Capturée à la Perfection

Laissez-nous immortaliser chaque moment magique de votre mariage. 
Des photos qui racontent votre histoire d'amour avec élégance et émotion.

📅 Réservez dès maintenant pour garantir votre date!
💌 DM pour un devis personnalisé

#Mariage #PhotographeMariage #PhotographyClubFSM #Meknes
```

---

## 🔧 Configuration

### Variables d'environnement (optionnel)

Créez `.env.local`:

```env
OLLAMA_API_URL=http://localhost:11434/api/generate
OLLAMA_MODEL=llama3.2
```

### Modèles recommandés

- **llama3.2** (par défaut) - Rapide et efficace
- **mistral** - Meilleur pour le français
- **phi3** - Très rapide, bon pour débuter

---

## 📝 Notes Importantes

1. **Ollama optionnel:** رؤيا fonctionne même sans Ollama grâce au système FAQ
2. **Réponses instantanées:** Le système FAQ répond immédiatement
3. **Réponses IA:** Quand Ollama est actif, les réponses sont plus créatives et détaillées
4. **Toujours disponible:** رؤيا est toujours là pour vous aider!

---

## 🎯 Prochaines Étapes

1. **Testez les fonctionnalités:**
   - Posez une question technique
   - Demandez une liste de prises de vue
   - Créez un texte publicitaire

2. **Intégrez dans votre workflow:**
   - Utilisez les listes de prises de vue pour planifier vos séances
   - Utilisez les textes publicitaires pour vos réseaux sociaux
   - Consultez رؤيا pour des conseils techniques

3. **Partagez vos retours:**
   - Dites-nous ce qui fonctionne bien
   - Suggérez de nouvelles fonctionnalités

---

**رؤيا (Roya) est là pour vous aider à exceller en photographie! 📸✨**

