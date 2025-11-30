# 🚀 Démarrage Rapide - Ollama pour رؤيا (Roya)

## Installation en 3 étapes

### 1️⃣ Installer Ollama

**Option A - Automatique (Recommandé):**
```powershell
# Ouvrez PowerShell en tant qu'administrateur
winget install Ollama.Ollama
```

**Option B - Manuel:**
1. Allez sur https://ollama.ai/download
2. Téléchargez et installez Ollama pour Windows
3. Suivez l'installateur

**Option C - Script automatique:**
```powershell
# Exécutez le script d'installation
.\install-ollama.ps1
```

### 2️⃣ Télécharger le modèle

Ouvrez un terminal et tapez:
```bash
ollama pull llama3.2
```

⏱️ Cela peut prendre 5-10 minutes selon votre connexion.

### 3️⃣ Démarrer Ollama

**Option A - Script automatique:**
```bash
# Double-cliquez sur start-ollama.bat
# OU dans le terminal:
start-ollama.bat
```

**Option B - Manuel:**
```bash
ollama serve
```

⚠️ **Important:** Gardez cette fenêtre ouverte!

## ✅ Vérifier que tout fonctionne

```bash
# Testez la connexion
test-ollama.bat
```

## 🎯 Utiliser رؤيا (Roya)

1. **Terminal 1:** `ollama serve` (gardez ouvert)
2. **Terminal 2:** `npm run dev` (votre application)
3. **Navigateur:** Ouvrez votre site et cliquez sur le bouton chat رؤيا

## ❓ Besoin d'aide?

Consultez `OLLAMA_INSTALLATION.md` pour le guide complet.

## 🐛 Problèmes courants

**"ollama: command not found"**
→ Redémarrez votre terminal après l'installation

**"Connection refused"**
→ Vérifiez que `ollama serve` est en cours d'exécution

**Réponses lentes**
→ Utilisez un modèle plus petit: `ollama pull phi3`

---

**Note:** Sans Ollama, رؤيا fonctionne toujours avec le système FAQ, mais les réponses seront limitées.

