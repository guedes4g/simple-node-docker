// NODE MODULES
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
// OWN
const config = require('../config.json');



//DB Connection
mongoose.connect("mongodb://localhost/gas-na-porta");
let db = mongoose.connection;
//Reporta erro de  conexão com o banco de dados
db.on('error', console.error.bind(console, 'connection error:'));
//Abre conexão com o banco de dados
db.once('open', function() {
  console.log("we're connected!")
});

// inicializa express (app)
const app = express();
 
//Para interpretar json (req.body)
app.use(bodyParser.json());

// set CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Authorization, Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');  
  next();
});

// Pega porta em que vai rodar o app 
const PORT = process.env.PORT || config.port;

// começa a escutar porta do config
app.listen(PORT, () => { 
    console.log("running on port " + PORT);
});



/**
 * Modulo principal da Api
 * Abre conexao com o mongo e porta para receber requests
 */
module.exports = app;
