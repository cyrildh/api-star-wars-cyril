const express = require('express');
const router = express.Router();
const filmController = require('../controllers/filmController');
const peopleController = require('../controllers/peopleController');
const planetController = require('../controllers/planetController');
const specieController = require('../controllers/specieController');
const starshipController = require('../controllers/starshipController');
const vehicleController = require('../controllers/vehicleController');


router.get('/films', filmController.getAllFilms);
router.get('/films/:id', filmController.getFilmById);
router.post('/films', filmController.createFilm);
router.put('/films/:id', filmController.updateFilm);
router.delete('/films/:id', filmController.deleteFilm);

router.get('/peoples', peopleController.getAllPeople);
router.get('/peoples/:id', peopleController.getPeopleById);
router.post('/peoples', peopleController.createPeople);
router.put('/peoples/:id', peopleController.updatePeople);
router.delete('/peoples/:id', peopleController.deletePeople);

router.get('/planets', planetController.getAllPlanets);
router.get('/planets/:id', planetController.getPlanetById);
router.post('/planets', planetController.createPlanet);
router.put('/planets/:id', planetController.updatePlanet);
router.delete('/planets/:id', planetController.deletePlanet);

router.get('/species', specieController.getAllSpecies);
router.get('/species/:id', specieController.getSpeciesById);
router.post('/species', specieController.createSpecies);
router.put('/species/:id', specieController.updateSpecies);
router.delete('/species/:id', specieController.deleteSpecies);

router.get('/starships', starshipController.getAllStarships);
router.get('/starships/:id', starshipController.getStarshipById);
router.post('/starships', starshipController.createStarship);
router.put('/starships/:id', starshipController.updateStarship);
router.delete('/starships/:id', starshipController.deleteStarship);

router.get('/vehicles', vehicleController.getAllVehicles);
router.get('/vehicles/:id', vehicleController.getVehicleById);
router.post('/vehicles', vehicleController.createVehicle);
router.put('/vehicles/:id', vehicleController.updateVehicle);
router.delete('/vehicles/:id', vehicleController.deleteVehicle);

module.exports = router;