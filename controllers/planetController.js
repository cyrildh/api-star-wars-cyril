// planetController.js
const Planet = require('../models/Planets');

const planetController = {};

planetController.getAllPlanets = async (req, res) => {
    try {
        const planets = await Planet.find();
        res.json(planets);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

planetController.getPlanetById = async (req, res, next) => {
    let planet;
    try {
        planet = await Planet.findOne({_id: req.params.id});
        if (planet == null) {
            return res.status(404).json({ message: 'Planète introuvable' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.planet = planet;
    res.json(res.planet);
}

planetController.createPlanet = async (req, res) => {
    let planet = new Planet({
        name: req.body.name,
        rotation_period: req.body.rotation_period,
        orbital_period: req.body.orbital_period,
        diameter: req.body.diameter,
        climate: req.body.climate,
        gravity: req.body.gravity,
        terrain: req.body.terrain,
        surface_water: req.body.surface_water,
        population: req.body.population,
        created: req.body.created,
        edited: req.body.edited,
    });
    try {
        const newPlanet = await planet.save();
        res.status(201).json(newPlanet);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

planetController.updatePlanet = async (req, res) => {
    const update = {...req.query};
    try {
        let planet = await Planet.findByIdAndUpdate(req.params.id, update, { new: true });
        if (planet == null) {
            return res.status(404).json({message: 'Planète introuvable'});
        }
        res.json(planet);
    } catch (err) {
        res.status(err.status || 500).json({ message: err.message });
    }
}

planetController.deletePlanet = async (req, res) => {
    try {
        await Planet.deleteOne({ _id: req.params.id });
        res.json({ message: 'Planète supprimée' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = planetController;
