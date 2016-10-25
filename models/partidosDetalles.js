var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var partidoDetalleSchema = new Schema({
  idPartido: {type: String},
  idJugador: {type: String},
  cant_ascensos: { type: Number },
  cant_descensos: { type: Number }
});

module.exports = mongoose.model('PartidoDetalle', partidoDetalleSchema);
