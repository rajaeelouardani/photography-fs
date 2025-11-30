# Script d'installation d'Ollama pour Photography Club FSM
# Exécutez ce script en tant qu'administrateur: Right-click > Run with PowerShell

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Installation d'Ollama pour رؤيا (Roya)" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Vérifier si Ollama est déjà installé
$ollamaInstalled = Get-Command ollama -ErrorAction SilentlyContinue

if ($ollamaInstalled) {
    Write-Host "[INFO] Ollama est déjà installé!" -ForegroundColor Green
    Write-Host "Version: " -NoNewline
    ollama --version
    Write-Host ""
} else {
    Write-Host "[INFO] Installation d'Ollama..." -ForegroundColor Yellow
    Write-Host ""
    
    # Vérifier si winget est disponible
    $wingetAvailable = Get-Command winget -ErrorAction SilentlyContinue
    
    if ($wingetAvailable) {
        Write-Host "Installation via winget..." -ForegroundColor Yellow
        winget install Ollama.Ollama --accept-source-agreements --accept-package-agreements
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host "[OK] Ollama installé avec succès!" -ForegroundColor Green
            Write-Host ""
            Write-Host "Redémarrez votre terminal et relancez ce script pour télécharger le modèle." -ForegroundColor Yellow
            Write-Host ""
            pause
            exit
        } else {
            Write-Host "[ERREUR] Échec de l'installation via winget" -ForegroundColor Red
            Write-Host ""
            Write-Host "Veuillez installer Ollama manuellement depuis: https://ollama.ai/download" -ForegroundColor Yellow
            Write-Host ""
            pause
            exit 1
        }
    } else {
        Write-Host "[ERREUR] winget n'est pas disponible" -ForegroundColor Red
        Write-Host ""
        Write-Host "Veuillez installer Ollama manuellement depuis: https://ollama.ai/download" -ForegroundColor Yellow
        Write-Host ""
        pause
        exit 1
    }
}

# Vérifier si le modèle est installé
Write-Host "[INFO] Vérification du modèle llama3.2..." -ForegroundColor Yellow
$modelList = ollama list 2>&1

if ($modelList -match "llama3.2") {
    Write-Host "[OK] Le modèle llama3.2 est déjà installé!" -ForegroundColor Green
    Write-Host ""
} else {
    Write-Host "[INFO] Le modèle llama3.2 n'est pas installé." -ForegroundColor Yellow
    Write-Host "[INFO] Téléchargement en cours..." -ForegroundColor Yellow
    Write-Host "(Cela peut prendre plusieurs minutes selon votre connexion)" -ForegroundColor Gray
    Write-Host ""
    
    ollama pull llama3.2
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "[OK] Modèle téléchargé avec succès!" -ForegroundColor Green
        Write-Host ""
    } else {
        Write-Host ""
        Write-Host "[ERREUR] Échec du téléchargement du modèle" -ForegroundColor Red
        Write-Host ""
        pause
        exit 1
    }
}

# Tester la connexion
Write-Host "[INFO] Test de connexion..." -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "http://localhost:11434/api/tags" -Method GET -TimeoutSec 5 -ErrorAction Stop
    Write-Host "[OK] Le serveur Ollama répond!" -ForegroundColor Green
    Write-Host ""
} catch {
    Write-Host "[ATTENTION] Le serveur Ollama ne répond pas." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Pour démarrer le serveur, exécutez: ollama serve" -ForegroundColor Cyan
    Write-Host "Ou utilisez le fichier: start-ollama.bat" -ForegroundColor Cyan
    Write-Host ""
}

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Installation terminée!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Prochaines étapes:" -ForegroundColor Yellow
Write-Host "1. Démarrez Ollama: ollama serve" -ForegroundColor White
Write-Host "   (Ou utilisez: start-ollama.bat)" -ForegroundColor Gray
Write-Host "2. Dans un autre terminal, démarrez votre app: npm run dev" -ForegroundColor White
Write-Host "3. Ouvrez votre site et testez رؤيا (Roya)!" -ForegroundColor White
Write-Host ""
pause

