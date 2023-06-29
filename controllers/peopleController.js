// peopleController.js
const People = require('../models/People');

const peopleController = {};

peopleController.getAllPeople = async (req, res) => {
    try {
        const peoples = await People.find();
        res.json(peoples);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

peopleController.getPeopleById = async (req, res, next) => {
    let people;
    try {
        people = await People.findOne({_id: req.params.id});
        if (people == null) {
            return res.status(404).json({ message: 'Personne introuvable' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.people = people;
    res.json(res.people);
}

peopleController.createPeople = async (req, res) => {
    let people
    people = new People({
        edited: req.body.edited,
        name: req.body.name,
        created: req.body.created,
        gender : req.body.gender,
        skin_color : req.body.skin_color,
        hair_color : req.body.hair_color,
        height :req.body.height,
        eye_color : req.body.eye_color,
        mass : req.body.mass,
        homeworld : req.body.homeworld,
        birth_year : req.body.birth_year
    });
    try {
        const newPeople = await people.save();
        res.status(201).json(newPeople);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

peopleController.updatePeople = async (req, res) => {
    const update = {...req.query};
    try {
        let people = await People.findByIdAndUpdate(req.params.id, update, { new: true });
        if (people == null) {
            return res.status(404).json({message: 'Personne introuvable'});
        }
        res.json(people);
    } catch (err) {
        res.status(err.status || 500).json({ message: err.message });
    }
}

peopleController.deletePeople = async (req, res) => {
    try {
        await People.deleteOne({ _id: req.params.id });
        res.json({ message: 'Personne supprimée' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = peopleController;