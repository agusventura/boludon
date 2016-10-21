var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var jugadorSchema = new Schema({
  nombre: { type: String }
});

module.exports = mongoose.model('Jugador', jugadorSchema);
