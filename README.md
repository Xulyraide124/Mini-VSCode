# 📝 Mini-VSCode : Éditeur de Texte Basique

Ce projet est une application web simple inspirée de Visual Studio Code, permettant aux utilisateurs d'uploader des fichiers texte, de les éditer directement dans le navigateur avec coloration syntaxique, et de sauvegarder les modifications sur le serveur.

Il a été conçu comme un exercice pédagogique pour explorer la gestion des uploads de fichiers, la lecture/écriture de fichiers sur le serveur avec Node.js `fs`, la communication client-serveur, et l'intégration de bibliothèques JavaScript côté client (comme Ace Editor).

## ✨ Fonctionnalités

* **Upload de Fichiers :** Uploadez facilement des fichiers texte (`.txt`, `.js`, `.html`, `.css`, `.json`, `.md`, `.py`, etc.).
* **Édition en Ligne :** Le contenu du fichier est affiché dans un éditeur interactif.
* **Coloration Syntaxique :** Intégration de [Ace Editor](https://ace.c9.io/) pour une coloration syntaxique automatique basée sur l'extension du fichier.
* **Sauvegarde des Modifications :** Sauvegardez vos modifications, qui écraseront le fichier original sur le serveur.
* **Interface Intuitive :** Design simple et épuré inspiré de l'esthétique de Visual Studio Code (thème sombre).
* **Messages de Confirmation :** Des messages clairs s'affichent après l'upload et la sauvegarde.

## 🚀 Technologies Utilisées

* **Backend :**
    * [Node.js](https://nodejs.org/fr/) : Environnement d'exécution JavaScript côté serveur.
    * [Express.js](https://expressjs.com/fr/) : Framework web pour Node.js.
    * [Multer](https://github.com/expressjs/multer) : Middleware pour la gestion des uploads de fichiers.
    * [fs (File System)](https://nodejs.org/docs/latest/api/fs.html) : Module intégré de Node.js pour interagir avec le système de fichiers.
    * [EJS (Embedded JavaScript)](https://ejs.co/) : Moteur de template pour générer les vues HTML côté serveur.
* **Frontend :**
    * HTML5
    * CSS3 (avec un thème sombre inspiré de VSCode)
    * JavaScript (Client-side)
    * [Ace Editor](https://ace.c9.io/) : Éditeur de code intégré pour la coloration syntaxique.
    * [Google Fonts](https://fonts.google.com/) : Polices `Inter` et `Fira Code`.

## 📦 Installation et Démarrage

Suivez ces étapes pour configurer et lancer le projet sur votre machine locale.

### Prérequis

Assurez-vous d'avoir [Node.js](https://nodejs.org/fr/download/) et `npm` (Node Package Manager) installés sur votre système.

### Étapes

1.  **Clonez le dépôt**

    ```bash
    git clone https://github.com/Xulyraide124/Mini-VSCode.git
    cd mini-vscode
    ```


2.  **l'arborescence des dossiers :**

    le projet a la structure suivante :

    ```
    mini-vscode/
    ├── uploads/ 
    ├── views/
    │   ├── edit.ejs
    │   └── index.ejs
    ├── package.json
    └── server.js
    ```

3.  **Installez les dépendances :**

    Dans le terminal, à la racine du dossier `mini-vscode`, exécutez :

    ```bash
    npm install
    ```

4.  **Démarrez le serveur :**

    ```bash
    npm start
    ```

    Le serveur devrait démarrer et vous verrez un message dans votre terminal :
    `Mini-VSCode démarré sur http://localhost:3000`

## 🖥️ Utilisation

1.  **Accédez à l'application :**
    Ouvrez votre navigateur web et naviguez vers `http://localhost:3000`.

2.  **Uploader un fichier :**
    Sur la page d'accueil, cliquez sur "Choisir un fichier" et sélectionnez un fichier texte (par exemple, un fichier `.txt`, `.js`, `.html`, `.css`, etc.) depuis votre ordinateur. Cliquez ensuite sur "Uploader".

3.  **Éditer le fichier :**
    Vous serez redirigé vers la page d'édition. Le contenu de votre fichier s'affichera dans l'éditeur Ace. Vous pouvez modifier le code ou le texte.

4.  **Sauvegarder les modifications :**
    Après avoir effectué vos modifications, cliquez sur le bouton "Sauvegarder les modifications". Un message de succès s'affichera.

5.  **Retour à l'upload :**
    Vous pouvez cliquer sur "Retour à l'upload" pour uploader un nouveau fichier.

## 🤝 Contribution

Ce projet est un exemple simple. Les contributions sont les bienvenues pour améliorer les fonctionnalités, le style ou la robustesse. N'hésitez pas à ouvrir des "issues" ou à soumettre des "pull requests".

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.