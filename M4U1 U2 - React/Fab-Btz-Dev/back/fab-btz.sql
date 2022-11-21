-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-11-2022 a las 13:06:09
-- Versión del servidor: 10.4.13-MariaDB
-- Versión de PHP: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `fab-btz`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `description` text DEFAULT NULL,
  `lenguage` varchar(100) NOT NULL,
  `type` varchar(100) NOT NULL,
  `url` varchar(255) NOT NULL,
  `image_id` varchar(255) DEFAULT NULL,
  `create_at` timestamp NULL DEFAULT NULL,
  `update_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `projects`
--

INSERT INTO `projects` (`id`, `name`, `description`, `lenguage`, `type`, `url`, `image_id`, `create_at`, `update_at`) VALUES
(1, 'Contador de Clicks', 'Practica en React JS. Aqui podremos encontrar un contador de Clicks realizados por el usuario. Usando los eventos que el mismo genera, \"EventListener\", y capturamos los clicks, que se van sumando en el visor con un boton en el cual podemos limpiar el total y volver a comenzar. ', 'React JS', 'Prácticas', 'http://blackbox22.sytes.net/contador.html', NULL, NULL, NULL),
(2, 'Proyecto 2', '', 'PHP', 'Admin', 'kfjdkjfkdjfkjs', '', NULL, NULL),
(4, 'Pantalon', '', 'PHP', 'Admin', 'https://www.linkedin.com/in/fabian-benitez-75623489/', '', NULL, NULL),
(5, 'Pantalon', '', 'PHP', 'Admin', 'https://www.linkedin.com/in/fabian-benitez-75623489/', '', NULL, NULL),
(8, 'Ventana Modal', '', 'PHP - AJAX', 'Buscador', 'http://blackbox22.sytes.net/autocompletar/index.php', '', NULL, NULL),
(10, 'trgrgg', '', 'egewgw', 'egwew', 'egew', 'hwohzboarnwvhvnmjd54', NULL, NULL),
(14, 'freefe', '', 'eeefw', 'efeefef', 'efefefef', 'iq6v7nvq25ytu8lolwrv', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT current_timestamp(),
  `password` varchar(200) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Fabián', 'fabian@mail.com', '2022-10-21 18:52:13', 'f720ec3e5486f090fd382b68e230b435', NULL, NULL, NULL),
(2, 'pepe', 'pepe@gmail.com', '2022-10-28 01:05:13', 'f720ec3e5486f090fd382b68e230b435', NULL, NULL, NULL),
(3, 'roxana', 'roxana@gmai.com', '2022-10-29 16:19:25', 'f720ec3e5486f090fd382b68e230b435', NULL, NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
