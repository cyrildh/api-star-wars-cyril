const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FilmSchema = new Schema({
    fields : {
        title: String,
        episode_id: Number,
        opening_crawl: String,
        director: String,
        producer: String,
        release_date: Date,
        characters: String,
        planets: String,
        starships: [{type: String, ref: 'Starship'}],
        vehicles: [{type: String, ref: 'Vehicle'}],
        species: [{type: String, ref: 'Species'}],
        created: Date,
        edited: Date,
    }
});

const Film = mongoose.model('Film', FilmSchema);
module.exports = Film;