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
   var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
   var html = "BoludonWS! URL: "+fullUrl;
   res.send(html);
});

app.use(router);

// API routes

var jugador = express.Router();

app.get('/online',JugadorController.online);
app.get('/jugadores',JugadorController.findAllJugadores);
app.get('/jugador/:id',JugadorController.findJugadorById);
app.post('/jugador',JugadorController.crearJugador);
app.put('/jugador/:id',JugadorController.editarJugador)
app.delete('/jugador/:id',JugadorController.eliminarJugador)

app.use('/api', jugador);

//mongoose.connect('mongodb://localhost:27017/jugadores', function(err, res) {

//mongoose.connect('mongodb://heroku_d7wlc0r5:6veoj0kp4rafpu7lnlagfsqmc@ds015924.mlab.com:15924/heroku_d7wlc0r5',function(err, res) {
var localMongoDB_URI = "mongodb://localhost:27017/jugadores";
mongoose.connect(process.env.MONGODB_URI || localMongoDB_URI, function(err, res){
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  }else{
    console.log("Conectado a la BD.");
  }
  //var mongoURL = process.env.MONGODB_URI;
  //console.log("MongoURL",mongoURL);
  //si no le pongo el "process.env.PORT", cuando despliego en heroku no funciona. No le gusta el puerto fijo. Hay que usar la variable de entorno
  app.listen(process.env.PORT || 8888, function() {
    console.log("Boludon WS corriendo en http://localhost:8888");

  });
});
