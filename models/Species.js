const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SpeciesSchema = new Schema({
    fields: {
        name: String,
        classification: String,
        designation: String,
        average_height: String,
        skin_colors: String,
        hair_colors: String,
        eye_colors: String,
        average_lifespan: String,
        homeworld: { type: String, ref: 'Planet' },
        language: String,
        people: [{ type:String, ref: 'People' }],
        films: [{ type: String, ref: 'Film' }],
        created: Date,
        edited: Date,
    }
});
const Specie = mongoose.model('Specie', SpeciesSchema);
module.exports = Specie;
