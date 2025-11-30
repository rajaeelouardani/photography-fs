# 🚀 Démarrage Rapide - Ollama pour رؤيا (Roya)

## ✅ Étape 1: Vérifier l'installation

Ollama est déjà installé! Vérifiez avec:

```powershell
& "$env:LOCALAPPDATA\Programs\Ollama\ollama.exe" --version
```

## ✅ Étape 2: Démarrer le serveur Ollama

**Option A - Interface graphique:**
- Ouvrez l'application Ollama (dans le menu Démarrer)
- Le serveur démarre automatiquement

**Option B - Ligne de commande:**
```powershell
& "$env:LOCALAPPDATA\Programs\Ollama\ollama.exe" serve
```

**Option C - Script automatique:**
```powershell
.\start-ollama.bat
```

⚠️ **Important:** Gardez cette fenêtre ouverte!

## ✅ Étape 3: Vérifier que le modèle est installé

```powershell
& "$env:LOCALAPPDATA\Programs\Ollama\ollama.exe" list
```

Si `llama3.2` n'apparaît pas, téléchargez-le:

```powershell
& "$env:LOCALAPPDATA\Programs\Ollama\ollama.exe" pull llama3.2
```

## ✅ Étape 4: Tester la connexion

```powershell
curl http://localhost:11434/api/tags
```

Vous devriez voir une réponse JSON avec vos modèles.

## ✅ Étape 5: Démarrer votre application

Dans un **nouveau terminal**:

```powershell
npm run dev
```

## ✅ Étape 6: Tester رؤيا (Roya)

1. Ouvrez http://localhost:3000
2. Cliquez sur le bouton chat رؤيا (en bas à droite)
3. Testez avec: "Bonjour, comment ça va?"
4. Vous devriez voir l'indicateur "✓ Ollama connecté"

## 🎯 Fonctionnalités à Tester

### Test 1: Question technique
```
"Explique-moi le triangle d'exposition"
```

### Test 2: Liste de prises de vue
```
"Crée une liste de prises de vue pour un portrait en extérieur"
```

### Test 3: Texte publicitaire
```
"Écris un texte publicitaire pour Instagram"
```

## 🐛 Dépannage

### Le serveur ne démarre pas
- Vérifiez que le port 11434 n'est pas utilisé
- Redémarrez votre ordinateur
- Réinstallez Ollama si nécessaire

### Le modèle n'est pas trouvé
- Vérifiez votre connexion internet
- Relancez: `ollama pull llama3.2`
- Attendez la fin du téléchargement (2GB)

### رؤيا ne répond pas
- Vérifiez que `ollama serve` est en cours d'exécution
- Vérifiez la console du navigateur (F12) pour les erreurs
- رؤيا fonctionne toujours avec le système FAQ même sans Ollama

## 📚 Documentation Complète

Consultez `OLLAMA_INSTALLATION.md` pour le guide complet.

---

**رؤيا (Roya) est prête à vous aider! 📸✨**

