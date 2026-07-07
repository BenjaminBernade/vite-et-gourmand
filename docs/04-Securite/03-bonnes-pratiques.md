# Bonnes pratiques de sécurité

## Variables d'environnement

Les informations sensibles ne sont pas écrites directement dans le code.

Elles sont stockées dans des variables d'environnement, notamment :

- l'URL de connexion à la base de données ;
- le secret d'authentification ;
- les informations liées aux services externes.

## Accès aux données

L'accès à PostgreSQL est réalisé avec Prisma ORM.

L'utilisation d'un ORM limite l'écriture de requêtes SQL manuelles et réduit les risques d'injection SQL.

## Séparation des responsabilités

La logique métier est progressivement isolée dans des services et repositories.

Cette séparation permet de rendre le code plus lisible, plus testable et plus maintenable.

## Dépendances

Les dépendances du projet sont gérées avec npm.

Il est recommandé d'effectuer régulièrement :

```bash
npm audit
