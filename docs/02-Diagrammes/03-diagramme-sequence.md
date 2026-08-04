# Diagramme de séquence — Passage d’une commande

Ce diagramme représente le parcours d’un utilisateur connecté lorsqu’il consulte un menu puis passe une commande.

```mermaid
sequenceDiagram
    actor C as Utilisateur
    participant P as Interface Next.js
    participant API as API /api/orders
    participant S as Service métier
    participant R as Repository
    participant DB as PostgreSQL via Prisma
    C->>P: Consulte un menu
    P->>API: Demande les informations du menu
    API->>S: Transmet la demande
    S->>R: Recherche le menu
    R->>DB: Requête de lecture
    DB-->>R: Données du menu
    R-->>S: Menu trouvé
    S-->>API: Retourne le menu
    API-->>P: Réponse JSON
    P-->>C: Affiche le menu
    C->>P: Saisit la quantité et valide la commande
    P->>API: Envoie les données de commande
    API->>S: Demande de création de commande
    S->>S: Valide les données
    S->>R: Vérifie le stock disponible
    R->>DB: Lecture du stock
    DB-->>R: Stock disponible
    R-->>S: Résultat de la vérification
    alt Stock suffisant
        S->>S: Calcule le prix total
        S->>R: Crée la commande et met à jour le stock
        R->>DB: Écriture en base
        DB-->>R: Confirmation
        R-->>S: Commande créée
        S-->>API: Retourne la confirmation
        API-->>P: Réponse de succès
        P-->>C: Affiche la confirmation de commande
    else Stock insuffisant
        S-->>API: Retourne une erreur métier
        API-->>P: Réponse d'erreur
        P-->>C: Affiche un message d'indisponibilité
    end
```

## Description

Le diagramme présente les échanges entre l’utilisateur, l’interface Next.js, la route API, la couche de service, le repository et la base PostgreSQL accessible avec Prisma.

Le traitement comprend :

- la consultation d’un menu ;
- la validation des données saisies ;
- la vérification du stock ;
- le calcul du montant total ;
- la création de la commande ;
- la mise à jour du stock ;
- le retour d’une confirmation ou d’un message d’erreur.
