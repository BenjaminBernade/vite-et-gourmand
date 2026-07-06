# Diagramme d’architecture applicative

Ce diagramme présente l’organisation générale de l’application Vite & Gourmand.

```mermaid
flowchart TD
    U[Utilisateur / Administrateur]

    subgraph Frontend["Front-end Next.js / React"]
        Pages[Pages App Router]
        Components[Composants UI]
        Forms[Formulaires]
    end

    subgraph Backend["Back-end applicatif"]
        API[API routes / Server Actions]
        Services[Services métier]
        Repositories[Repositories]
    end

    subgraph Data["Données"]
        Prisma[Prisma ORM]
        Postgres[(PostgreSQL / Neon)]
        Mongo[(MongoDB / Statistiques)]
    end

    subgraph Deployment["Déploiement"]
        Vercel[Vercel]
        Docker[Docker]
    end

    U --> Pages
    Pages --> Components
    Pages --> Forms
    Forms --> API
    Pages --> API

    API --> Services
    Services --> Repositories
    Repositories --> Prisma
    Prisma --> Postgres

    Services --> Mongo

    Vercel --> Frontend
    Vercel --> Backend
    Docker --> Frontend
    Docker --> Backend
```

## Description

L’application est développée avec Next.js et React.

Même si le projet utilise un seul dépôt Git, les responsabilités sont séparées en plusieurs couches :

- `app/` contient les pages, routes et interfaces utilisateur ;
- `components/` contient les composants réutilisables ;
- `services/` contient la logique métier ;
- `repositories/` contient l’accès aux données ;
- `lib/` contient les connexions techniques, notamment Prisma et MongoDB ;
- `models/` contient les modèles utilisés pour les données NoSQL.

## Justification de l’architecture

Cette architecture permet de limiter le mélange entre l’interface utilisateur et la logique métier.

Le parcours général est le suivant :

```txt
Interface utilisateur
    ↓
API routes / actions serveur
    ↓
Services métier
    ↓
Repositories
    ↓
Prisma ORM
    ↓
PostgreSQL
```

Cette séparation rend le projet plus lisible, plus maintenable et plus proche d’une organisation professionnelle.