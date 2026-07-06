# Diagramme de cas d’utilisation — Vite & Gourmand

```mermaid
flowchart LR
    Visiteur[Visiteur]
    Utilisateur[Utilisateur connecté]
    Admin[Administrateur]

    Visiteur --> UC1[Consulter la page d'accueil]
    Visiteur --> UC2[Consulter les menus]
    Visiteur --> UC3[Créer un compte]
    Visiteur --> UC4[Se connecter]

    Utilisateur --> UC2
    Utilisateur --> UC5[Voir le détail d'un menu]
    Utilisateur --> UC6[Passer une commande]
    Utilisateur --> UC7[Consulter son espace personnel]
    Utilisateur --> UC8[Suivre ses commandes]

    Admin --> UC9[Accéder à l'administration]
    Admin --> UC10[Créer un menu]
    Admin --> UC11[Modifier les menus]
    Admin --> UC12[Supprimer un menu]
    Admin --> UC13[Consulter les commandes]

    UC6 --> UC14[Calculer le prix total]
    UC6 --> UC15[Vérifier le stock]