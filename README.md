# Vite & Gourmand

Application web de commande de menus événementiels développée dans le cadre de l’ECF du titre professionnel Développeur Web et Web Mobile.

## Présentation

Vite & Gourmand est une application permettant :

- la consultation de menus événementiels,
- la création de compte utilisateur,
- la connexion sécurisée,
- la gestion de commandes,
- le suivi des réservations,
- un espace administrateur.

Le projet a été développé avec une architecture moderne fullstack basée sur Next.js.

---

# Fonctionnalités

## Utilisateur

- Création de compte
- Connexion sécurisée
- Consultation des menus
- Passage de commande
- Visualisation des commandes

## Administrateur

- Accès à l’espace administrateur
- Gestion des menus
- Visualisation des commandes

---

# Stack technique

## Front-end

- Next.js 16
- React
- TypeScript
- Tailwind CSS

## Back-end

- API Routes Next.js
- Prisma ORM
- NextAuth

## Base de données

- PostgreSQL
- Neon Database

## Déploiement

- Vercel

---

# Installation locale

## 1. Cloner le dépôt

```bash
git clone https://github.com/BenjaminBernade/vite-et-gourmand.git
```

## 2. Entrer dans le dossier

```bash
cd vite-et-gourmand
```

## 3. Installer les dépendances

```bash
npm install
```

---

# Variables d’environnement

Créer un fichier `.env` à la racine du projet.

Exemple :

```env
DATABASE_URL="postgresql://..."
NEXTAUTH_SECRET="..."
NEXTAUTH_URL="http://localhost:3000"
```

---

# Base de données

## Générer Prisma

```bash
npx prisma generate
```

## Lancer les migrations

```bash
npx prisma migrate dev
```

---

# Lancer le projet

```bash
npm run dev
```

Application disponible sur :

```txt
http://localhost:3000
```

---

# Comptes de démonstration

## Administrateur

Email :
```txt
admin@vite-et-gourmand.fr
```

Mot de passe :
```txt
Admin123!
```

## Utilisateur

Le jury peut créer un compte directement depuis l’application.

---

# Déploiement

Application déployée sur Vercel :

https://vite-et-gourmand-psi.vercel.app

---

# Gestion de projet

Outil utilisé :

Trello

---

# Auteur

Benjamin BERNADE

ECF – TP Développeur Web et Web Mobile
