const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// --- Configuration de l'application ---

// Définit le moteur de vues comme EJS
app.set('view engine', 'ejs');
// Spécifie le dossier où se trouvent les vues
app.set('views', path.join(__dirname, 'views'));

// Middleware pour servir les fichiers statiques (CSS, JS client, etc.) depuis le dossier 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Middleware pour parser les corps de requêtes URL-encodées (données de formulaire)
app.use(express.urlencoded({ extended: true }));

// --- Configuration de Multer pour l'upload de fichiers ---

// Définit le dossier de destination pour les fichiers uploadés temporairement
const uploadDir = 'uploads/';
// Crée le dossier 'uploads' s'il n'existe pas
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Configure Multer pour stocker les fichiers dans le dossier 'uploads/'
const upload = multer({ dest: uploadDir });

// --- Routes de l'application ---

// Route GET pour la page d'accueil (formulaire d'upload)
app.get('/', (req, res) => {
    // Rend la vue 'index.ejs'
    res.render('index');
});

// Route POST pour gérer l'upload de fichier
// 'upload.single('fileToUpload')' signifie que nous attendons un seul fichier avec le nom de champ 'fileToUpload'
app.post('/upload', upload.single('fileToUpload'), (req, res) => {
    // Vérifie si un fichier a été uploadé
    if (!req.file) {
        return res.status(400).send('Aucun fichier n\'a été uploadé.');
    }

    const filePath = req.file.path; // Chemin temporaire du fichier sur le serveur
    const originalFileName = req.file.originalname; // Nom original du fichier

    try {
        // Lit le contenu du fichier uploadé en UTF-8
        const fileContent = fs.readFileSync(filePath, 'utf8');

        // Rend la vue 'edit.ejs' en passant le nom, le chemin et le contenu du fichier
        res.render('edit', {
            fileName: originalFileName,
            filePath: filePath, // Le chemin temporaire est utilisé pour la sauvegarde
            fileContent: fileContent
        });
    } catch (error) {
        console.error('Erreur lors de la lecture du fichier :', error);
        // En cas d'erreur, supprime le fichier temporaire et envoie un message d'erreur
        fs.unlinkSync(filePath); // Nettoie le fichier temporaire
        res.status(500).send('Erreur lors de la lecture du fichier.');
    }
});

// Route POST pour sauvegarder les modifications du fichier
app.post('/save', (req, res) => {
    const filePath = req.body.filePath; // Récupère le chemin du fichier depuis le champ caché
    const editedContent = req.body.editedContent; // Récupère le contenu édité depuis l'éditeur

    // Vérifie si le chemin et le contenu sont présents
    if (!filePath || editedContent === undefined) { // editedContent peut être une chaîne vide
        return res.status(400).send('Contenu ou chemin du fichier manquant.');
    }

    try {
        // Écrit le contenu modifié dans le fichier au chemin spécifié
        fs.writeFileSync(filePath, editedContent, 'utf8');

        // Récupère le nom du fichier à partir de son chemin pour l'affichage
        const fileName = path.basename(filePath);

        // Rend à nouveau la page d'édition avec le contenu mis à jour et un message de succès
        res.render('edit', {
            fileName: fileName,
            filePath: filePath,
            fileContent: editedContent,
            message: 'Fichier sauvegardé avec succès !' // Message de succès
        });
    } catch (error) {
        console.error('Erreur lors de la sauvegarde du fichier :', error);
        res.status(500).send('Erreur lors de la sauvegarde du fichier.');
    }
});

// --- Démarrage du serveur ---

app.listen(port, () => {
    console.log(`Mini-VSCode démarré sur http://localhost:${port}`);
    console.log(`Assurez-vous que le dossier 'uploads' existe à la racine du projet.`);
});