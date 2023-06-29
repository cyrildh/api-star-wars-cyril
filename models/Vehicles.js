const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VehicleSchema = new Schema({
    fields:{
        vehicle_class: String,
        pilots: [{ type: String, ref: 'People' }],
    },

});
const Vehicle = mongoose.model('vehicle', VehicleSchema);
module.exports = Vehicle;
