// vehicleController.js
const Vehicle = require('../models/Vehicles');

const vehicleController = {};

vehicleController.getAllVehicles = async (req, res) => {
    try {
        const vehicles = await Vehicle.find();
        res.json(vehicles);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

vehicleController.getVehicleById = async (req, res, next) => {
    let vehicle;
    try {
        vehicle = await Vehicle.findOne({_id: req.params.id});
        if (vehicle == null) {
            return res.status(404).json({ message: 'Véhicule introuvable' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.vehicle = vehicle;
    res.json(res.vehicle);
}

vehicleController.createVehicle = async (req, res) => {
    let vehicle = new Vehicle({
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
        vehicle_class: req.body.vehicle_class,
        pilots: req.body.pilots,
        films: req.body.films,
        created: req.body.created,
        edited: req.body.edited,
        url: req.body.url
    });
    try {
        const newVehicle = await vehicle.save();
        res.status(201).json(newVehicle);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

vehicleController.updateVehicle = async (req, res) => {
    const update = {...req.query};
    try {
        let vehicle = await Vehicle.findByIdAndUpdate(req.params.id, update, { new: true });
        if (vehicle == null) {
            return res.status(404).json({message: 'Véhicule introuvable'});
        }
        res.json(vehicle);
    } catch (err) {
        res.status(err.status || 500).json({ message: err.message });
    }
}

vehicleController.deleteVehicle = async (req, res) => {
    try {
        await Vehicle.deleteOne({ _id: req.params.id });
        res.json({ message: 'Véhicule supprimé' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = vehicleController;
