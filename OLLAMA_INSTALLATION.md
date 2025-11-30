# Guide d'installation d'Ollama pour Photography Club FSM

Ce guide vous aidera à installer et configurer Ollama pour utiliser l'assistant IA رؤيا (Roya).

## 📥 Installation d'Ollama

### Option 1: Installation automatique (Recommandée)

1. **Téléchargez Ollama:**
   - Allez sur https://ollama.ai/download
   - Cliquez sur "Download for Windows"
   - Exécutez le fichier d'installation téléchargé

2. **Installez:**
   - Suivez les instructions de l'installateur
   - Ollama sera installé et démarré automatiquement

### Option 2: Installation via PowerShell (Windows)

```powershell
# Télécharger et installer Ollama
winget install Ollama.Ollama
```

## 🚀 Démarrage d'Ollama

### Vérifier que Ollama est installé

Ouvrez PowerShell ou CMD et tapez:
```bash
ollama --version
```

### Démarrer le serveur Ollama

```bash
ollama serve
```

**Important:** Gardez cette fenêtre ouverte! Le serveur doit rester actif.

## 📦 Télécharger un modèle

Une fois Ollama démarré, ouvrez **une nouvelle fenêtre** de terminal et téléchargez un modèle:

### Modèle recommandé: Llama 3.2 (3B - Léger et rapide)

```bash
ollama pull llama3.2
```

### Autres modèles disponibles:

**Pour débuter (petits et rapides):**
```bash
ollama pull phi3          # 3.8B - Très rapide
ollama pull mistral       # 7B - Bon équilibre
```

**Pour de meilleures performances (plus gros):**
```bash
ollama pull llama3.1:8b   # 8B - Plus performant
ollama pull mistral:7b    # 7B - Excellent pour le français
```

## ✅ Vérifier l'installation

Testez que tout fonctionne:

```bash
# Vérifier que le serveur répond
curl http://localhost:11434/api/tags

# Tester une requête simple
ollama run llama3.2 "Bonjour, comment ça va?"
```

## 🔧 Configuration pour Photography Club FSM

### Variables d'environnement (optionnel)

Créez ou modifiez `.env.local` dans votre projet:

```env
OLLAMA_API_URL=http://localhost:11434/api/generate
OLLAMA_MODEL=llama3.2
```

### Démarrer Ollama automatiquement au démarrage (Optionnel)

1. Appuyez sur `Win + R`
2. Tapez `shell:startup` et appuyez sur Entrée
3. Créez un fichier `start-ollama.bat` avec ce contenu:

```batch
@echo off
cd /d C:\Users\%USERNAME%\AppData\Local\Programs\Ollama
ollama serve
```

## 🎯 Utilisation avec رؤيا (Roya)

Une fois Ollama installé et démarré:

1. **Démarrez Ollama:**
   ```bash
   ollama serve
   ```

2. **Dans un autre terminal, téléchargez le modèle:**
   ```bash
   ollama pull llama3.2
   ```

3. **Démarrez votre application Next.js:**
   ```bash
   npm run dev
   ```

4. **Ouvrez votre site web** et cliquez sur le bouton de chat رؤيا (Roya)

## 🐛 Dépannage

### Problème: "ollama: command not found"
- Vérifiez que Ollama est installé
- Redémarrez votre terminal
- Ajoutez Ollama au PATH si nécessaire

### Problème: "Connection refused" ou "Cannot connect"
- Vérifiez que `ollama serve` est en cours d'exécution
- Vérifiez que le port 11434 n'est pas bloqué par un firewall
- Essayez de redémarrer Ollama

### Problème: Le modèle ne se télécharge pas
- Vérifiez votre connexion internet
- Le téléchargement peut prendre du temps (plusieurs GB)
- Assurez-vous d'avoir assez d'espace disque

### Problème: Réponses lentes
- Utilisez un modèle plus petit (llama3.2 au lieu de llama3.1:8b)
- Vérifiez que votre ordinateur a assez de RAM (minimum 8GB recommandé)
- Fermez d'autres applications lourdes

## 📊 Modèles recommandés par configuration

| Configuration | Modèle recommandé | Taille | RAM nécessaire |
|--------------|-------------------|--------|----------------|
| Ordinateur basique | `llama3.2` | ~2GB | 4GB+ |
| Ordinateur moyen | `mistral` | ~4GB | 8GB+ |
| Ordinateur puissant | `llama3.1:8b` | ~5GB | 16GB+ |

## 💡 Astuces

- **Première utilisation:** Le modèle sera téléchargé automatiquement lors de la première utilisation
- **Performance:** Les modèles plus petits sont plus rapides mais moins performants
- **Français:** Les modèles Mistral sont souvent meilleurs pour le français
- **Mise à jour:** Mettez à jour Ollama régulièrement: `winget upgrade Ollama.Ollama`

## 🔗 Ressources

- Site officiel: https://ollama.ai
- Documentation: https://github.com/ollama/ollama
- Modèles disponibles: https://ollama.ai/library

---

**Note:** Si vous n'installez pas Ollama, رؤيا (Roya) fonctionnera toujours avec le système FAQ intégré, mais les réponses seront limitées aux questions prédéfinies.

