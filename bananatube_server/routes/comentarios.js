var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var comentario=[
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
  ];
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(comentario));
});

router.post("/", function (req, res, next){
      var comentario=[
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
  ];
    res.send("Añadir un comentario");
});

router.get("/:id/", function (req, res, next){
      var comentario=[
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
  ];
    res.send("Mostrar un comentario" + req.params.id);
});

router.post("/:id/", function (req, res, next){
      var comentario=[
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
  ];
    res.send("Editar un comentario" + req.params.id);
});

router.get("/delete/:id",function(req,res,next){
      var comentario=[
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
  ];
    res.send("Borrar un comentario"+ req.params.id);
});

router.post("/upload",function(req,res,next){
      var comentario=[
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
  ];
    res.send("Subir un comentario");
});

module.exports = router;