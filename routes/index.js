var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var novedadesModel = require('../models/novedadesModel');
var cloudinary = require('cloudinary').v2;

/* GET home page. */
router.get('/', async function (req, res, next) {

  var novedades = await novedadesModel.getNovedades();
  novedades = novedades.splice(0, 10); // selección de los primeros 5 elementos del array

  novedades = novedades.map(novedad => {
    if (novedad.img_id) {

      const imagen = cloudinary.url(novedad.img_id, {
        width: 460,
        crop: 'fill'
      });

      return {
        ...novedad,
        imagen
      }

    } else {
      return {
        ...novedad,
        imagen: '/images/aporinautas.png'
      }
    }
  });

  res.render('index', {
    novedades
  });
});





router.post('/', async (req, res, next) => {

  console.log(req.body) //para saber si está trayendo datos

  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var email = req.body.email;
  var tel = req.body.tel;
  var comentario = req.body.comentario;



  var obj = {
    to: 'maxih3@hotmail.com',
    subject: 'Contacto desde la Web APORINAUTAS',
    html: nombre + " " + apellido + " se contactó a través de la Web y quiere más info a este correo: " + email + ". <br> Además hizo el siguiente comentario: " + comentario + ". <br> Su tel es " + tel
  } // "Cierre var obj"

  var transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  }) //"Cierre transporter"

  var info = await transporter.sendMail(obj);
  res.render('index', {
    message: 'Mensaje enviado correctamente',
  });


}) // "Cierre Petición del POST"


module.exports = router;
