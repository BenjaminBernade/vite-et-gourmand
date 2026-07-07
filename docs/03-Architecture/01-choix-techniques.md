# Choix techniques

## Framework

L'application est développée avec **Next.js** en utilisant l'App Router.

Ce choix permet :

- le rendu côté serveur (SSR)
- une bonne organisation des routes
- une intégration native des Server Actions et des API Routes
- une excellente expérience développeur.

## Langage

Le projet utilise **TypeScript** afin de bénéficier :

- du typage statique
- d'une meilleure maintenabilité
- d'une réduction des erreurs de développement.

## Base de données

Deux technologies sont utilisées.

### PostgreSQL

Utilisée pour :

- les utilisateurs
- les menus
- les commandes

L'accès aux données est réalisé avec **Prisma ORM**.

### MongoDB

MongoDB est utilisée pour illustrer l'utilisation d'une base NoSQL dans le cadre du projet.

Elle est destinée au stockage de données non relationnelles telles que des statistiques ou des informations complémentaires.

## Déploiement

Le projet est déployé sur **Vercel**.

Docker est ajouté afin de faciliter un déploiement reproductible dans différents environnements.