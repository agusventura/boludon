var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose');

var JugadorController = require('./controllers/jugadores');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('/', function(req, res) {
   res.send("BoludonWS!");
});

app.use(router);

// API routes

var jugador = express.Router();

app.get('/jugadores',JugadorController.findAllJugadores);
app.get('/jugador/:id',JugadorController.findJugadorById);
app.post('/jugador',JugadorController.crearJugador);
app.put('/jugador/:id',JugadorController.editarJugador)
app.delete('/jugador/:id',JugadorController.eliminarJugador)

app.use('/api', jugador);

//mongoose.connect('mongodb://localhost:27017/jugadores', function(err, res) {
mongoose.connect('mongodb://boludon:boludon@ds063546.mlab.com:63546/heroku_j8bxqbnh', function(err, res) {
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  }else{
    console.log("Conectado a la BD.");
  }
  app.listen(80, function() {
    console.log("Boludon WS corriendo en http://localhost:80");
  });
});
