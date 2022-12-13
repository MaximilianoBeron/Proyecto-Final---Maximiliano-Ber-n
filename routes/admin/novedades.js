var express = require('express');
var router = express.Router();
var novedadesModel= require ('../../models/novedadesModel');
var util =require('util')


// para listar las novedades
router.get ('/', async function(req, res, next){
    var novedades =await novedadesModel.getNovedades();

    res.render ('admin/novedades',{
        layout: 'admin/layout',
        usuario: req.session.nombre,
        novedades
    })
})


// para eliminar por id
router.get ('/eliminar/:id', async(req,res,next)=> {
    const id =req.params.id;

    await novedadesModel.deleteNovedadesbyId(id);
    res.redirect('/admin/novedades')
})






router.get('/', function (req, res, next) {
    res.render('admin/novedades', {
        layout: 'admin/layout',
        persona: req.session.nombre
    });
});
  


module.exports = router;