// speciesController.js
const Species = require('../models/Species');

const speciesController = {};

speciesController.getAllSpecies = async (req, res) => {
    try {
        const species = await Species.find();
        res.json(species);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

speciesController.getSpeciesById = async (req, res, next) => {
    let species;
    try {
        species = await Species.findOne({_id: req.params.id});
        if (species == null) {
            return res.status(404).json({ message: 'Espèce introuvable' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.species = species;
    res.json(res.species);
}

speciesController.createSpecies = async (req, res) => {
    let species = new Species({
        name: req.body.name,
        classification: req.body.classification,
        designation: req.body.designation,
        average_height: req.body.average_height,
        skin_colors: req.body.skin_colors,
        hair_colors: req.body.hair_colors,
        eye_colors: req.body.eye_colors,
        average_lifespan: req.body.average_lifespan,
        homeworld: req.body.homeworld,
        language: req.body.language,
        people: req.body.people,
        films: req.body.films,
        created: req.body.created,
        edited: req.body.edited,
        url: req.body.url
    });
    try {
        const newSpecies = await species.save();
        res.status(201).json(newSpecies);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

speciesController.updateSpecies = async (req, res) => {
    const update = {...req.query};
    try {
        let species = await Species.findByIdAndUpdate(req.params.id, update, { new: true });
        if (species == null) {
            return res.status(404).json({message: 'Espèce introuvable'});
        }
        res.json(species);
    } catch (err) {
        res.status(err.status || 500).json({ message: err.message });
    }
}

speciesController.deleteSpecies = async (req, res) => {
    try {
        await Species.deleteOne({ _id: req.params.id });
        res.json({ message: 'Espèce supprimée' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = speciesController;
