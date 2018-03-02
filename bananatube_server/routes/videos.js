var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next){
    res.send('Listado de videos');
});
router.post('/', function (req, res, next){
    res.send('Añadir un video ');
});
router.get('/:id/', function (req, res, next){
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