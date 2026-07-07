# Authentification et gestion des accès

## Authentification

L'application utilise un système d'authentification permettant aux utilisateurs de créer un compte puis de se connecter avec leur adresse e-mail et leur mot de passe.

Les routes sensibles, comme le tableau de bord utilisateur ou l'administration, nécessitent une session active.

## Protection des mots de passe

Les mots de passe ne sont pas stockés en clair.

Ils sont hachés avant leur enregistrement en base de données, afin de limiter les risques en cas d'accès non autorisé aux données.

## Rôles utilisateurs

L'application distingue plusieurs rôles :

- utilisateur ;
- administrateur.

L'administrateur dispose d'un accès spécifique à l'espace d'administration.

Un utilisateur classique ne doit pas pouvoir accéder aux fonctionnalités réservées à l'administrateur.

## Protection des pages

Les pages sensibles vérifient l'existence d'une session avant d'afficher les données.

Si aucun utilisateur n'est connecté, l'application redirige vers la page de connexion.
