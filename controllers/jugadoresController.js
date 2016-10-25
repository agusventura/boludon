var mongoose = require('mongoose');
//var Jugador  = mongoose.model('JugadorModel');
var Jugador = require('../models/jugadores')
exports.online = function(req,res){
  res.status(200).jsonp("OKKKK");
}
exports.findAllJugadores = function(req, res) {
    Jugador.find(function(err, jugadores) {
    if(err){
       res.send(500, err.message);
    }
    res.status(200).jsonp(jugadores);
    });
};

exports.findJugadorById = function(req, res) {
  console.log("ID: ",req.params.id);
    Jugador.findById(req.params.id, function(err, jugador) {
    if(err){
      return res.send(500, err.message);
    }
    console.log('GET /jugador/' + req.params.id);
        res.status(200).jsonp(jugador);
    });
};

exports.crearJugador = function(req, res) {
    console.log('POST');
    console.log(req.body);

    var jugador = new Jugador({
        nombre:    req.body.nombre
    });

    jugador.save(function(err, jugador) {
        if(err){
          return res.status(500).send( err.message);
        }
        res.status(200).jsonp(jugador);
    });
};

exports.editarJugador = function(req, res) {
    Jugador.findById(req.params.id, function(err, jugador) {
        jugador.nombre   = req.body.nombre;
        jugador.save(function(err) {
            if(err){
              return res.status(500).send(err.message);
            }
            res.status(200).jsonp(jugador);
        });
    });
};

exports.eliminarJugador = function(req, res) {
    Jugador.findById(req.params.id, function(err, jugador) {
        jugador.remove(function(err) {
            if(err){
              return res.status(500).send(err.message);
            }
            res.status(200).send();
        })
    });
};
