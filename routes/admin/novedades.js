var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');
var util = require('util');
const { query } = require('express');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);


// para listar las novedades
router.get('/', async function (req, res, next) {

    var novedades

    if (req.query.q === undefined) {
        novedades = await novedadesModel.getNovedades();
    } else {
        novedades = await novedadesModel.buscarNovedades(req.query.q);
    }


    novedades = novedades.map(novedad => {
        if (novedad.img_id) {

            const imagen = cloudinary.image(novedad.img_id, {
                width: 50,
                height: 50,
                crop: 'fill'
            });

            return {
                ...novedad,
                imagen
            }

        } else {
            return {
                ...novedad,
                imagen: ''
            }
        }
    });

    res.render('admin/novedades', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        novedades,
        is_search: req.query.q !== undefined,
        q: req.query.q
    })
})


// INICIO para Eliminar por id
router.get('/eliminar/:id', async (req, res, next) => {
    const id = req.params.id;
    let novedad = await novedadesModel.getNovedadesbyId(id);
    if (novedad.img_id) {
        await (destroy(novedad.img_id));
    }


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

        var img_id = '';
        if (req.files && Object.keys(req.files).length > 0) {
            imagen = req.files.imagen;
            img_id = (await uploader(imagen.tempFilePath)).public_id;
        }




        if (req.body.lugar != "" && req.body.fecha != "" && req.body.ubicacion != "") {
            await novedadesModel.insertNovedades({
                ...req.body,  //spread
                img_id
            });
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
        let img_id = req.body.img_original;
        let borrar_img_vieja = false;

        if (req.body.img_delete === "1") {
            img_id = null;
            borrar_img_vieja = true;
        } else {
            if (req.files && Object.keys(req.files).length > 0) {
                imagen = req.files.imagen;
                img_id = (await uploader(imagen.tempFilePath)).public_id;
                borrar_img_vieja = true;
            }
        }
        if (borrar_img_vieja && req.body.img_original) {
            await (destroy(req.body.img_original));
        }




        var obj = {
            lugar: req.body.lugar,
            fecha: req.body.fecha,
            ubicacion: req.body.ubicacion,
            img_id
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