const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PeopleSchema = new Schema({
     fields :{
          edited: Date,
          name: String,
          created: Date,
          gender : String,
          skin_color : String,
          hair_color : String,
          height :String,
          eye_color : String,
          mass : String,
          homeworld : Number,
          birth_year : String
     }
});
const People = mongoose.model('people', PeopleSchema);
module.exports = People;
