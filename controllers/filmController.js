const Film = require('../models/Films');

const filmController = {};

filmController.getAllFilms = async (req, res) => {
    try {
        const films = await Film.find();
        res.json(films);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

filmController.getFilmById = async (req, res) => {
    let film;
    try {
        film = await Film.findOne({_id: req.params.id});
        if (film == null) {
            return res.status(404).json({message: 'Film introuvable'});
        }
    } catch (err) {
        return res.status(500).json({message: err.message});
    }
    res.film = film;
    res.json(res.film);
}

filmController.createFilm = async (req, res) => {
    let film
    film = new Film({
        title: req.body.title,
        episode_id: req.body.episode_id,
        opening_crawl: req.body.opening_crawl,
        director: req.body.director,
        producer: req.body.producer,
        release_date: req.body.release_date,
        characters: req.body.characters,
        planets: req.body.planets,
        starships: req.body.starships,
        vehicles: req.body.vehicles,
        species: req.body.species,
        created: req.body.created,
        edited: req.body.edited,
        url: req.body.url
    });
    try {
        const newFilm = await film.save();
        res.status(201).json(newFilm);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

filmController.updateFilm = async (req, res) => {
    const update = {...req.query};
    try {
        let film = await Film.findByIdAndUpdate(req.params.id, update, { new: true });
        if (film == null) {
            return res.status(404).json({message: 'Film introuvable'});
        }
        res.json(film);
    } catch (err) {
        res.status(err.status || 500).json({ message: err.message });
    }
}

filmController.deleteFilm = async (req, res) => {
    try {
        await Film.deleteOne({ _id: req.params.id });
        res.json({ message: 'Film supprimé' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = filmController;