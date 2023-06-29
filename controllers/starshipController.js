// starshipController.js
const Starship = require('../models/Starships');

const starshipController = {};

starshipController.getAllStarships = async (req, res) => {
    try {
        const starships = await Starship.find();
        res.json(starships);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

starshipController.getStarshipById = async (req, res, next) => {
    let starship;
    try {
        starship = await Starship.findOne({_id: req.params.id});
        if (starship == null) {
            return res.status(404).json({ message: 'Vaisseau spatial introuvable' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.starship = starship;
    res.json(res.starship);
}

starshipController.createStarship = async (req, res) => {
    let starship = new Starship({
        name: req.body.name,
        model: req.body.model,
        manufacturer: req.body.manufacturer,
        cost_in_credits: req.body.cost_in_credits,
        length: req.body.length,
        max_atmosphering_speed: req.body.max_atmosphering_speed,
        crew: req.body.crew,
        passengers: req.body.passengers,
        cargo_capacity: req.body.cargo_capacity,
        consumables: req.body.consumables,
        hyperdrive_rating: req.body.hyperdrive_rating,
        MGLT: req.body.MGLT,
        starship_class: req.body.starship_class,
        pilots: req.body.pilots,
        films: req.body.films,
        created: req.body.created,
        edited: req.body.edited,
        url: req.body.url
    });
    try {
        const newStarship = await starship.save();
        res.status(201).json(newStarship);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

starshipController.updateStarship = async (req, res) => {
    const update = {...req.query};
    try {
        let starship = await Starship.findByIdAndUpdate(req.params.id, update, { new: true });
        if (starship == null) {
            return res.status(404).json({message: 'Vaisseau spatial introuvable'});
        }
        res.json(starship);
    } catch (err) {
        res.status(err.status || 500).json({ message: err.message });
    }
}

starshipController.deleteStarship = async (req, res) => {
    try {
        await Starship.deleteOne({ _id: req.params.id });
        res.json({ message: 'Vaisseau spatial supprimé' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = starshipController;
