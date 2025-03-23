# Application Comptable

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)

## Installation

1. Clonez le dépôt :
   ```bash
   git clone <repository-url>
   cd landingpage_comptable_test/accounting-app
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

## Lancer l'application

1. Démarrez le serveur de développement :
   ```bash
   ng serve
   ```

2. Ouvrez votre navigateur et accédez à l'adresse suivante :
   ```
   http://localhost:4200
   ```

## Structure du projet

- `src/app/components` : Contient tous les composants autonomes tels que l'en-tête, la section héro, les fonctionnalités, les témoignages, les prix et le pied de page.
- `src/styles.css` : Styles globaux et configuration de Tailwind CSS.

## Personnalisation

- Modifiez le contenu des composants dans le répertoire `src/app/components` selon vos besoins.
- Mettez à jour les styles globaux dans `src/styles.css`.

## Construire pour la production

Pour construire l'application en mode production, exécutez :
```bash
ng build --prod
```

Les fichiers prêts pour la production seront disponibles dans le répertoire `dist/`.