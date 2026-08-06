# Diagramme de cas d'utilisation — Application Vite & Gourmand

Ce diagramme présente les principaux acteurs de l'application ainsi que les fonctionnalités auxquelles ils ont accès.

```mermaid
flowchart LR

subgraph APP["Application Vite & Gourmand"]

UC1([Consulter la page])
UC2([Consulter les menus])
UC3([Créer un compte])
UC4([Se connecter])
UC5([Voir le détail d'un menu])
UC6([Passer une commande])
UC7([Consulter son espace personnel])
UC8([Suivre ses commandes])

UC9([Accéder à l'administration])
UC10([Créer un menu])
UC11([Modifier un menu])
UC12([Supprimer un menu])
UC13([Consulter les commandes])

UC14([Gérer les menus])
UC15([Mettre à jour le statut des commandes])

end

V[Visiteur]
U[Utilisateur]
E[Employé]
A[Administrateur]

V --> UC1
V --> UC2
V --> UC3
V --> UC4

U --> UC2
U --> UC5
U --> UC6
U --> UC7
U --> UC8

E --> UC9
E --> UC10
E --> UC11
E --> UC13
E --> UC15

A --> UC9
A --> UC10
A --> UC11
A --> UC12
A --> UC13
A --> UC14
```

## Description

Le diagramme met en évidence les différents profils d'utilisateurs de l'application ainsi que les principales fonctionnalités mises à leur disposition.

- **Le visiteur** peut consulter le site, parcourir les menus, créer un compte et se connecter.
- **L'utilisateur** peut consulter les menus, visualiser leur détail, passer une commande et suivre ses commandes depuis son espace personnel.
- **L'employé** accède à l'espace d'administration afin de gérer les menus et le suivi des commandes.
- **L'administrateur** dispose de l'ensemble des fonctionnalités d'administration, notamment la création, la modification et la suppression des menus ainsi que la gestion globale des commandes.
