# Architecture des bases de données

## Choix des technologies

Le projet utilise deux systèmes de stockage.

### PostgreSQL

PostgreSQL est utilisé comme base de données relationnelle principale.

Elle contient notamment :

- les utilisateurs ;
- les menus ;
- les commandes.

L'accès à la base est réalisé via **Prisma ORM**.

---

### MongoDB

MongoDB est utilisée afin d'illustrer l'utilisation d'une base NoSQL dans le projet.

Elle est destinée au stockage de données complémentaires telles que :

- les statistiques ;
- les indicateurs d'activité ;
- les informations non relationnelles.

---

## Pourquoi deux bases ?

Le projet démontre l'utilisation de deux approches complémentaires :

### Base relationnelle

Adaptée lorsque les données possèdent des relations fortes.

Exemples :

- utilisateur → commande ;
- commande → menu.

---

### Base NoSQL

Adaptée aux données évolutives ou peu structurées.

Elle facilite notamment le stockage de statistiques ou de données analytiques.

---

## ORM utilisé

Le projet utilise **Prisma ORM** pour communiquer avec PostgreSQL.

Prisma permet :

- un typage fort avec TypeScript ;
- des requêtes sécurisées ;
- une meilleure maintenabilité du code.
