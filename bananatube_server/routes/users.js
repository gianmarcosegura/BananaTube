var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var usuario={
      
  };
    res.send('Listado de usuarios');
});

router.post('/', function(req, res, next) {
  res.send('Añadir usuario');
});

router.get('/:id', function(req, res, next) {
  res.send('Mostrar usuario '+ req.params.id);
});

router.post('/:id', function(req, res, next) {
  res.send('Modificar usuario '+ req.params.id);
});

router.get('/delete/:id', function(req, res, next) {
  res.send('Borrar usuario '+ req.params.id);
});

module.exports = router;
