var mongoose = require('mongoose');
var oPartido = require('../models/partidos')
var oPartidoDetalle = require('../models/partidosDetalles')

exports.online = function(req,res){
  res.status(200).jsonp("OK Partido Detalle");
}

exports.findPartidosDetallesByIdPartido = function(req,res){
  oPartidoDetalle.find({idPartido: req.params.idPartido},function(err,partidosDetalles){
    if(err){
      return res.send(500,err.message);
    }
    res.status(200).jsonp(partidosDetalles);
  });
};

exports.findPartidoDetalleById = function(req, res) {
  console.log("Find Partido Detalle By ID. ID: ",req.params.id);
    oPartidoDetalle.findById(req.params.id, function(err, partidoDetalle) {
    if(err){
      return res.send(500, err.message);
    }
    //console.log('GET /jugador/' + req.params.id);
      res.status(200).jsonp(partidoDetalle);
    });
};

exports.nuevoPartidoDetalle = function(req, res) {
    var partidoDetalle = new oPartidoDetalle({
      idPartido: req.body.idPartido,
      idJugador: req.body.idJugador,
      cant_ascensos: 0,
      cant_descensos: 0
    });
    partidoDetalle.save(function(err, partidoDetalle) {
        if(err){
          return res.status(500).send( err.message);
        }
        res.status(200).jsonp(partidoDetalle);
    });
};
