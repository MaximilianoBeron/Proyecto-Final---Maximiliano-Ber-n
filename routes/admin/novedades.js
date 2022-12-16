var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');
var util = require('util')


// para listar las novedades
router.get('/', async function (req, res, next) {
    var novedades = await novedadesModel.getNovedades();

    res.render('admin/novedades', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        novedades
    })
})


// INICIO para Eliminar por id
router.get('/eliminar/:id', async (req, res, next) => {
    const id = req.params.id;

    await novedadesModel.deleteNovedadesbyId(id);
    res.redirect('/admin/novedades')
})
// FIN get de Eliminar


// INICIO para Agregar 
router.get('/agregar', (req, res, next) => {
    res.render('admin/agregar', {  // Agregar .hbs
        layout: 'admin/layout'
    })
})
// FIN get de Agregar


// INICIO para Insertar
router.post('/agregar', async (req, res, next) => {
    try {
        if (req.body.lugar != "" && req.body.fecha != "" && req.body.ubicacion != "") {
            await novedadesModel.insertNovedades(req.body);
            res.redirect('/admin/novedades')

        } else {
            res.render('admin/agregar', {
                layout: 'admin/layout',
                error: true,
                message: 'Todos los campos son requeridos.'
            })
        }
    } catch (error) {
        console.log(error)
        res.render('admin/agregar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se cargó la novedad.'
        })
    }
})
// FIN Insertar


// INICIO para Modificar
router.get('/modificar/:id', async (req, res, next) => {
    var id = req.params.id;
    var novedad = await novedadesModel.getNovedadesbyId(id);
    res.render('admin/modificar', {
        layout: 'admin/layout',
        novedad
    })
})
// FIN Modificar


router.post('/modificar', async (req, res, next) => {
    try {
        console.log(req.body.id);
        var obj = {
            lugar: req.body.lugar,
            fecha: req.body.fecha,
            ubicacion: req.body.ubicacion
        }


        console.log(obj)
        await novedadesModel.modificarNovedadesById(obj, req.body.id);
        res.redirect('/admin/novedades');
    } catch (error) {
        console.log(error)
        res.render('admin/modificar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se modificó la novedad.'
        })
    }
})





router.get('/', function (req, res, next) {
    res.render('admin/novedades', {
        layout: 'admin/layout',
        persona: req.session.nombre
    });
});



module.exports = router;