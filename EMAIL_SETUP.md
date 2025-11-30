# Configuration de l'envoi d'email avec Nodemailer (Gmail SMTP)

Le formulaire de contact utilise **Nodemailer** avec **Gmail SMTP** pour envoyer les emails directement au club.

## Configuration Gmail

### Étape 1 : Créer un mot de passe d'application Gmail

1. Connectez-vous à votre compte Google : https://myaccount.google.com
2. Allez dans **Sécurité**
3. Activez la **Validation en 2 étapes** (si ce n'est pas déjà fait)
4. Allez dans **Mots de passe des applications** (ou cherchez "App passwords")
5. Sélectionnez **Autre (nom personnalisé)** et entrez "Photography Club FSM"
6. Cliquez sur **Générer**
7. **Copiez le mot de passe généré** (16 caractères) - vous ne pourrez plus le voir après !

### Étape 2 : Configurer les variables d'environnement

Créez ou modifiez le fichier `.env.local` à la racine du projet :

```env
SMTP_EMAIL=photographyfsm.pro@gmail.com
SMTP_PASSWORD=votre_mot_de_passe_d_application_ici
```

Remplacez `votre_mot_de_passe_d_application_ici` par le mot de passe d'application généré à l'étape 1.

### Étape 3 : Redémarrer le serveur

```bash
# Arrêtez le serveur actuel (Ctrl+C)
# Puis redémarrez-le
npm run dev
```

## Test

Une fois configuré, testez le formulaire de contact. Les emails seront envoyés à `photographyfsm.pro@gmail.com`.

## Note importante

- Le mot de passe d'application est différent de votre mot de passe Gmail normal
- Ne partagez jamais votre mot de passe d'application
- Si vous perdez le mot de passe, vous devrez en générer un nouveau

## Alternative : Autres services SMTP

Si vous préférez utiliser un autre service SMTP (Outlook, Yahoo, etc.), modifiez la configuration dans `lib/email.ts` :

```typescript
return nodemailer.createTransport({
  host: "smtp.votre-service.com",
  port: 587,
  secure: false, // true pour le port 465
  auth: {
    user: "votre-email@exemple.com",
    pass: "votre-mot-de-passe",
  },
})
```
