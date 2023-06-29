# Projet Star Wars API

Ce projet est une application **Node.js / Express / MongoDB** qui suit les principes du modèle de Richardson et les 5 règles du **REST**. L'API utilise les données de **SWAPI (Star Wars API)** et propose des routes pour les redistribuer. L'authentification est gérée grâce à **JWT**.

## Technologies utilisées

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **JWT** pour l'authentification
- **Swagger** pour la documentation de l'API

## Structure du projet

Le projet est structuré en quatre dossiers principaux :

1. `controllers` : Ce dossier contient la logique d'affaires de l'application, et est responsable de la coordination des modèles, des vues et des données.
2. `models` : Ce dossier contient les schémas et les modèles Mongoose qui représentent les structures de données dans MongoDB.
3. `routes` : Ce dossier contient les fichiers de route Express.js, qui définissent les endpoints de l'API.
4. `Swagger` : Ce dossier contient la configuration et les fichiers de définition de l'API pour Swagger, qui sont utilisés pour générer la documentation de l'API.

## Installation

Pour installer et lancer ce projet, suivez les étapes ci-dessous :

```sh
# Clonez ce répertoire sur votre machine locale.
git clone <lien du repo>

# Naviguez jusqu'au dossier du projet
cd <nom du projet>

# Installez les dépendances du projet
npm install

# Configurez votre base de données MongoDB en spécifiant l'URL de votre instance MongoDB dans un fichier .env.
echo "MONGODB_URI=<Votre_URI_de_MongoDB>" > .env

# Lancez le serveur
npm start

# Importez les données de SWAPI dans votre base de données MongoDB en exécutant le script d'importation approprié.
# (Le script d'importation doit être fourni ou précisé ici)

# Clonez ce répertoire sur votre machine locale.
git clone <lien du repo>

# Naviguez jusqu'au dossier du projet
cd <nom du projet>

# Installez les dépendances du projet
npm install

# Configurez votre base de données MongoDB en spécifiant l'URL de votre instance MongoDB dans un fichier .env.
echo "MONGODB_URI=<Votre_URI_de_MongoDB>" > .env

# Lancez le serveur
npm start

# Importez les données de SWAPI dans votre base de données MongoDB en exécutant le script d'importation approprié.
# (Le script d'importation doit être fourni ou précisé ici)

## Utilisation

L'API propose plusieurs endpoints que vous pouvez utiliser pour interagir avec les données. Voici quelques exemples :

- `GET /api/users` : récupère une liste de tous les utilisateurs.
- `POST /api/users` : crée un nouvel utilisateur.
- `GET /api/users/:id` : récupère un utilisateur spécifique par son ID.
- `PUT /api/users/:id` : met à jour un utilisateur spécifique par son ID.
- `DELETE /api/users/:id` : supprime un utilisateur spécifique par son ID.

Veuillez vous référer à la documentation Swagger pour une liste complète des endpoints disponibles.

## Documentation

La documentation de l'API est générée avec Swagger et est disponible à l'URL suivante : `<votre-domaine>/api-docs`.

## Authentification

L'authentification est gérée avec JWT. Pour obtenir un token, vous devez d'abord vous inscrire avec un nouvel utilisateur en utilisant l'endpoint `POST /api/users` puis vous connecter en utilisant l'endpoint `POST /api/auth`. Une fois que vous avez obtenu un token, vous devez l'inclure dans l'en-tête `Authorization` de vos requêtes pour accéder aux endpoints protégés.

## Support

Si vous rencontrez des problèmes avec l'API, veuillez ouvrir un problème dans le système de suivi des problèmes de ce projet.
