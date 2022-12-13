-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 13-12-2022 a las 06:03:05
-- Versión del servidor: 5.5.24-log
-- Versión de PHP: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `aporinautas_beronmaxi`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `lugar` varchar(250) NOT NULL,
  `fecha` varchar(250) NOT NULL,
  `ubicacion` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `lugar`, `fecha`, `ubicacion`) VALUES
(1, 'MITOS ARGENTINOS', '8 de Octubre de 2022 - 22hs', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.3524685451193!2d-58.37526782500322!3d-34.62053215838522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb2cbbc09807%3A0x1da8f28453104050!2sHumberto%201%C2%BA%20489%2C%20C1103%20CABA!5e0!3m2!1ses-419!2sar!4v1670910468830!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'),
(2, 'KIF BAR CLUB', '19 de Noviembre - 22hs', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.6494139025617!2d-58.44279532500503!3d-34.58773645665309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5f333305a0f%3A0x99fbc573993e866a!2sKIF%20Birrer%C3%ADa!5e0!3m2!1ses-419!2sar!4v1670910532331!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'),
(3, 'ALIMEÉ', '2 de Diciembre - 21hs', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.225509726755!2d-58.45970322500596!3d-34.57316005588373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5dbe16c9f99%3A0x31da0f9c445e25cb!2sMultiespacio%20Alimme!5e0!3m2!1ses-419!2sar!4v1670909513918!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'),
(4, 'GAVILÁN BAR', '27 de Diciembre - 20hs', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.8473263659957!2d-58.47471512500391!3d-34.60802195772426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc958bce9287f%3A0x7e97791b02e911bc!2sGavil%C3%A1n%20BAR!5e0!3m2!1ses-419!2sar!4v1670909749017!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
