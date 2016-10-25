var mongoose = require('mongoose');
var oPartido = require('../models/partidos')

exports.online = function(req,res){
  res.status(200).jsonp("OK Partido");
}

exports.findAllPartidos = function(req, res) {
    oPartido.find(function(err, partidos) {
    if(err){
       res.send(500, err.message);
    }
    res.status(200).jsonp(partidos);
    });
};

exports.findPartidoById = function(req, res) {
  console.log("Find Partido By ID. ID: ",req.params.id);
    oPartido.findById(req.params.id, function(err, partido) {
    if(err){
      return res.send(500, err.message);
    }
    //console.log('GET /jugador/' + req.params.id);
      res.status(200).jsonp(partido);
    });
};

exports.nuevoPartido = function(req, res) {
    var partido = new oPartido({
        fecha: req.body.fecha
    });
    partido.save(function(err, jugador) {
        if(err){
          return res.status(500).send( err.message);
        }
        res.status(200).jsonp(partido);
    });
};
