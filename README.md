# 🍽️ Vite & Gourmand

Application web Full Stack développée avec **Next.js**, **TypeScript**, **Prisma**, **PostgreSQL** et **MongoDB** dans le cadre de l'**Évaluation en Cours de Formation (ECF)** du titre **Graduate Développeur Web et Web Mobile**.

L'application permet aux utilisateurs de consulter des menus de restauration événementielle, de créer un compte, de passer des commandes et d'en suivre le statut. Un espace d'administration permet de gérer les menus proposés.

## 📑 Sommaire

- [Présentation](#-présentation)
- [Fonctionnalités](#-fonctionnalités)
- [Stack technique](#️-stack-technique)
- [Architecture](#️-architecture)
- [Installation Docker](#-installation-avec-docker)
- [Documentation](#-documentation)
- [Captures d'écran](#-captures-décran)

---

# 🚀 Démonstration

## Site déployé

👉 **https://vite-et-gourmand-psi.vercel.app**

---

# ✨ Fonctionnalités

## Visiteur

- Consultation de la page d'accueil
- Consultation des menus
- Détail d'un menu
- Création d'un compte
- Connexion

## Utilisateur

- Tableau de bord
- Consultation des commandes
- Passage de commande
- Suivi des commandes

## Administrateur

- Création de menus
- Gestion des menus
- Gestion des stocks

---

# 🛠️ Stack technique

## Front-end

- Next.js 16
- React
- TypeScript
- Tailwind CSS

## Back-end

- API Routes Next.js
- Server Actions
- Prisma ORM

## Bases de données

- PostgreSQL
- MongoDB

## Authentification

- NextAuth

## Déploiement

- Vercel
- Docker

---

# 🏗️ Architecture

Le projet est organisé selon une séparation des responsabilités.

```
Interface utilisateur
        │
        ▼
API Routes / Server Actions
        │
        ▼
Services
        │
        ▼
Repositories
        │
        ▼
Prisma ORM
        │
        ▼
PostgreSQL
```

Les statistiques sont stockées dans MongoDB.

---

# 📂 Structure du projet

```
app/
components/
data/
docs/
hooks/
lib/
models/
prisma/
public/
repositories/
services/
sql/
types/
```

---

# 🐳 Installation avec Docker

```bash
git clone <url-du-projet>

cd vite-et-gourmand

docker compose up --build
```

Application disponible sur :

```
http://localhost:3000
```

---

# 💻 Installation classique

Installation des dépendances :

```bash
npm install
```

Variables d'environnement :

```
DATABASE_URL=

NEXTAUTH_URL=

NEXTAUTH_SECRET=

MONGODB_URI=
```

Migration Prisma :

```bash
npx prisma migrate dev
```

Lancement :

```bash
npm run dev
```

---

# 📚 Documentation

Toute la documentation est disponible dans le dossier :

```
docs/
```

Elle comprend :

- 📐 Maquettes Figma
- 📊 Diagrammes UML
- 🏗️ Architecture
- 🔒 Sécurité
- 🚀 Déploiement

---

# 🗄️ Scripts SQL

Le dossier :

```
sql/
```

contient :

- script de création de la base
- script d'initialisation

---

# 📸 Captures d'écran

## Accueil

![Accueil](docs/01-Maquettes/Accueil.png)

---

## Menus

![Menus](docs/01-Maquettes/Menus.png)

---

## Détail d'un menu

![Détail menu](docs/01-Maquettes/Détails%20menu.png)

---

## Tableau de bord

![Dashboard](docs/01-Maquettes/Tableau%20de%20bord.png)

---

## Administration

![Administration](docs/01-Maquettes/Administration.png)

---

# 👨‍💻 Auteur

**Benjamin Bernade**

Projet réalisé dans le cadre de l'Évaluation en Cours de Formation (ECF) du titre Graduate Développeur Web et Web Mobile.