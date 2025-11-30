@echo off
echo ========================================
echo   Demarrage d'Ollama pour رؤيا (Roya)
echo ========================================
echo.

REM Vérifier si Ollama est installé
where ollama >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo [ERREUR] Ollama n'est pas installe!
    echo.
    echo Veuillez installer Ollama depuis: https://ollama.ai/download
    echo.
    pause
    exit /b 1
)

echo [OK] Ollama est installe
echo.

REM Vérifier si le modèle existe
echo Verification du modele llama3.2...
ollama list | findstr "llama3.2" >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [INFO] Le modele llama3.2 n'est pas installe.
    echo [INFO] Telechargement en cours... (cela peut prendre plusieurs minutes)
    echo.
    ollama pull llama3.2
    if %ERRORLEVEL% NEQ 0 (
        echo.
        echo [ERREUR] Echec du telechargement du modele
        pause
        exit /b 1
    )
    echo.
    echo [OK] Modele telecharge avec succes!
    echo.
) else (
    echo [OK] Modele deja installe
    echo.
)

REM Démarrer le serveur Ollama
echo ========================================
echo   Demarrage du serveur Ollama...
echo ========================================
echo.
echo Le serveur va demarrer. Gardez cette fenetre ouverte!
echo.
echo Pour arreter le serveur, appuyez sur Ctrl+C
echo.
echo ========================================
echo.

ollama serve

pause

