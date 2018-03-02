var express = require('express');
var router = express.Router();



router.get('/', function(req, res, next) {
  res.send('lista de comentarios', { title: 'Un comentario' });
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