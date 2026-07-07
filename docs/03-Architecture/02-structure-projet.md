# Structure du projet

## Organisation générale

Le projet est organisé autour d'une architecture Full Stack avec **Next.js**.

L'objectif est de séparer les responsabilités afin de faciliter la maintenance et l'évolution de l'application.

## Arborescence principale

```text
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
types/
```

## Description des dossiers

### app/

Contient les pages de l'application, les routes API ainsi que les Server Actions.

### components/

Composants React réutilisables utilisés par les différentes pages.

### data/

Jeux de données utilisés durant le développement.

### docs/

Documentation technique du projet.

### hooks/

Hooks React personnalisés.

### lib/

Fonctions utilitaires et connexions techniques (Prisma, MongoDB...).

### models/

Modèles de données utilisés pour MongoDB.

### prisma/

Schéma de la base PostgreSQL ainsi que les migrations.

### public/

Ressources statiques accessibles par l'application.

### repositories/

Couche d'accès aux données.

Les repositories centralisent les requêtes vers la base de données.

### services/

Couche métier.

Les services appliquent les règles fonctionnelles avant d'accéder aux données.

### types/

Déclarations TypeScript communes au projet.

---

## Séparation des responsabilités

Le projet applique une organisation en plusieurs couches :

```text
Interface utilisateur
        ↓
API / Server Actions
        ↓
Services
        ↓
Repositories
        ↓
Prisma ORM
        ↓
Base PostgreSQL
```

Cette architecture améliore :

- la lisibilité du code ;
- la maintenabilité ;
- la réutilisation des fonctionnalités ;
- l'évolutivité du projet.
