@echo off
echo ========================================
echo   Test de connexion Ollama
echo ========================================
echo.

REM Vérifier si Ollama est installé
where ollama >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo [ERREUR] Ollama n'est pas installe!
    echo.
    echo Installez Ollama depuis: https://ollama.ai/download
    echo.
    pause
    exit /b 1
)

echo [OK] Ollama est installe
echo.

REM Vérifier la version
echo Version d'Ollama:
ollama --version
echo.

REM Vérifier les modèles installés
echo Modeles installes:
ollama list
echo.

REM Tester la connexion au serveur
echo Test de connexion au serveur...
curl -s http://localhost:11434/api/tags >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo [OK] Le serveur Ollama repond!
    echo.
) else (
    echo [ATTENTION] Le serveur Ollama ne repond pas.
    echo.
    echo Assurez-vous que 'ollama serve' est en cours d'execution.
    echo.
    echo Voulez-vous demarrer le serveur maintenant? (O/N)
    set /p start_server=
    if /i "%start_server%"=="O" (
        start "Ollama Server" cmd /k "ollama serve"
        echo.
        echo Serveur demarre dans une nouvelle fenetre.
        echo Attendez quelques secondes puis relancez ce test.
        echo.
    )
)

echo ========================================
echo   Test termine
echo ========================================
echo.
pause

