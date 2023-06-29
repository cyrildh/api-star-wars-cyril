const mongoose = require('mongoose');

const StarshipSchema = new mongoose.Schema({
    fields:{
        hyperdrive_rating: String,
        MGLT: String,
        starship_class: String,
        pilots: [{ type: String, ref: 'Character' }],
    },
});
const Starship = mongoose.model('starship', StarshipSchema);
module.exports = Starship;
