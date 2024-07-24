const mongoose = require('mongoose');

// Définir le schéma
const userSchema = new mongoose.Schema({
    name: String,
    password: String
});

// Créer le modèle
module.exports = mongoose.model('User', userSchema);
