var express = require('express');
var router = express.Router();



router.get('/', function(req, res, next) {
  var listadoJSON=[
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
  res.send(JSON.stringify(listadoJSON));
});

router.post("/",function(req,res){
    res.send(comentario.fecha);
});

router.get("/:id",function(req,res){
    var comentario={
        texto:"Lorem imput",
        usuario:"pepe",
        fecha:new Date(),
        video:"pepaPig"
    };
    res.setHeader('Content-Type', 'application/json');
    res.send(comentario);
});

router.post("/:id",function(req,res){
    
});

router.get("/delete/:id",function(req,res){
    res.send(comentario.comentario);
});

router.post("/upload",function(req,res){
    res.send(comentario.video);
});

module.exports = router;