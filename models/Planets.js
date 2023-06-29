const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlanetSchema = new Schema({
    fields: {
        edited:Date,
        climate:String,
        surface_water:String,
        name:String,
        diameter:String,
        rotation_period:String,
        created:String,
        terrain:String,
        gravity:String,
        orbital_period:String,
        population:String,
    }

});
const Planet = mongoose.model('planet', PlanetSchema);
module.exports = Planet;
