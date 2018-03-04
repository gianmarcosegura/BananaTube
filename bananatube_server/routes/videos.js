var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next){
    var objetoJSON={propiedad:'valor'};
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(objetoJSON));
});

router.get('/', function (req, res, next){
    res.send('Listado de videos');
    var videos=[{
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
    }];
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(videos));
});

router.post('/', function (req, res, next){
    var addVideo
    res.send('Añadir un video ');
});

router.get('/:id/', function (req, res, next){
    var libros={};
    res.send('Mostrar un video '+ req.params.id);
});

router.post('/:id/', function (req, res, next){
    res.send('Editar un video ' + req.params.id);
});

router.get('/delete/:id/', function (req, res, next){
    res.send('Borrar un video ' + req.params.id);
});

router.post('/upload/', function (req, res, next){
    res.send('Subir un video ');
});

module.exports = router;
//mostrar los creo yo
//añadir y editar son parecidos 
//el listrado devuelve un listado de objetos json 
//borrar devolver un objeto
//subir a express