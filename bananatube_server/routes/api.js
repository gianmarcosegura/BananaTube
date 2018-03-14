var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://192.168.99.100/test');
var db = mongoose.connection;
var conectado = false;
var User = require("../models/user");
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Conexion abierta");
    conectado = true;

router.get('/addStatic', function (req, res, next) {

    if (conectado) {
        var usuario = new User([{
            name:'Laura M',
            email:'laura@geners.com',
            password:'laura88',
            birthdate:'03/04/1988',
            avatar:'2',
            history:'200',
            playlist:'2',
            upload:'3',
            comments:'40',
        },{
            name:'Elvira D',
            email:'elvira@geners.com',
            password:'elvira88',
            birthdate:'15/09/1988',
            avatar:'5',
            history:'340',
            playlist:'7',
            upload:'0',
            comments:'10',
        },{
            name:'Aritz C',
            email:'aritz@geners.com',
            password:'aritz93',
            birthdate:'20/05/1993',
            avatar:'1',
            history:'1055',
            playlist:'22',
            upload:'17',
            comments:'149',
        },{
            name:'Alvaro P',
            email:'alvaro@geners.com',
            password:'alvaro90',
            birthdate:'31/12/1990',
            avatar:'6',
            history:'110',
            playlist:'0',
            upload:'0',
            comments:'0',
        }]);
        usuario.save(function (err, userdevuelto) {
            if (err) {
                return console.error(err);
            } else {
                console.log("usuario guardado");
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(userdevuelto));
            }
        });
    } else {
        res.render('errorDB', {
            title: 'Mongo No arrancado'
        });
    }

});

router.get('/addStatic', function (req, res, next) {

    if (conectado) {
        var comentarios = new comentarios([
            {
                texto:"Lorem imput",
                usuario:"pepe",
                fecha:new Date(),
                video:"pepaPig"
            },
            {
                texto:"Lorem imput2",
                usuario:"pepe2",
                fecha:new Date(),
                video:"pepaPig2"
            }
            ]);
        comentarios.save(function (err, comentariosdevuelto) {
            if (err) {
                return console.error(err);
            } else {
                console.log("comentario guardado");
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(comentariosdevuelto));
            }
        });
    } else {
        res.render('errorDB', {
            title: 'Mongo No arrancado'
        });
    }

});

router.get('/addStatic', function (req, res, next) {

    if (conectado) {
        var videos = new comentarios([{
            title:"Video 1",
            comments:"o",
            url:"o",
            rating:"o",
            views:"1",
            label:"o",
            date:"o",
            owner:"Usuario 1"
        },{
            title:"Video 2",
            comments:"e",
            url:"e",
            rating:"e",
            views:"40",
            label:"e",
            date:"e",
            owner:"Usuario 2"
        },{
            title:"Video 3",
            comments:"a",
            url:"a",
            rating:"a",
            views:"55",
            label:"a",
            date:"a",
            owner:"Usuario 3"
        }]);
        videos.save(function (err, videosdevuelto) {
            if (err) {
                return console.error(err);
            } else {
                console.log("video guardado");
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(videosdevuelto));
            }
        });
    } else {
        res.render('errorDB', {
            title: 'Mongo No arrancado'
        });
    }

});

module.exports = router;