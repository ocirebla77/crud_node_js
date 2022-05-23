// import express from 'express';
// import bodyparser from 'body-parser';
// import { Sequelize } from 'sequelize';


const express = require("express");
// const bodyparser = require('body-parser');

const routes = require("./routes");

const app = express();

const cors = require("cors");

const corsOptions = {
    origin: 'http://127.0.0.1:5500',
    exposedHeaders: ['x-access-token']
}
app.use(cors(corsOptions));



// app.use(bodyparser.json());

const port = 3000;

routes(app);

// app.get(
//     '/teste',(req,res)=>res.status(200).send({
//         mensagem: 'boas vindas a API'
//     })

// );
// app.use((req, res, next) => {
//   //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
//   res.header("Access-Control-Allow-Origin", "*");
//   //Quais são os métodos que a conexão pode realizar na API
//   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
//   app.use(cors());
//   next();
// });



app.listen(port, () => console.log(`servidor esta rodando na porta ${port}`));

module.exports = app;

// import express from 'express';
// import bodyparser from 'body-parser';
// import { Sequelize } from 'sequelize';

// const express = require('express');
// var Sequelize = require('sequelize');

// var connection = new Sequelize('postgres','postgres','postgresql');

// var conexao = connection.authenticate().then(
//     function(){
//         console.log("conexao estabelecida com sucesso");
//     }
// ).catch(
//     function(err){
//         console.log("nao conectou");
//     }
// ).done();
