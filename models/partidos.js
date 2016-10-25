var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var partidoSchema = new Schema({
  fecha: { type: String }
});

module.exports = mongoose.model('Partido', partidoSchema);
