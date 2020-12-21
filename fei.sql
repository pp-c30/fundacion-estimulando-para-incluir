-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-12-2020 a las 22:59:36
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `fei`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `idCategoria` int(11) NOT NULL,
  `nombreCategoria` varchar(45) NOT NULL,
  `imagenCategoria` varchar(256) NOT NULL,
  `idComercio` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`idCategoria`, `nombreCategoria`, `imagenCategoria`, `idComercio`) VALUES
(1, 'Bebidas', '4575', 1),
(2, 'Pastas', '8652', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagenes_producto`
--

CREATE TABLE `imagenes_producto` (
  `idImagen` int(11) NOT NULL,
  `idProducto` int(11) NOT NULL,
  `url` varchar(256) COLLATE utf8mb4_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `imagenes_producto`
--

INSERT INTO `imagenes_producto` (`idImagen`, `idProducto`, `url`) VALUES
(1, 1, '2338'),
(2, 2, '6510'),
(3, 3, '8584');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id` int(11) NOT NULL,
  `nombreProducto` varchar(45) NOT NULL,
  `precio` int(11) NOT NULL,
  `idCategoria` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id`, `nombreProducto`, `precio`, `idCategoria`) VALUES
(1, 'Coca-Cola', 90, 1),
(2, 'Soda', 70, 1),
(3, 'Fideos', 200, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_comercio`
--

CREATE TABLE `usuario_comercio` (
  `idUsuario` int(11) NOT NULL,
  `mail` varchar(256) NOT NULL,
  `contrasenia` varchar(256) NOT NULL,
  `nombreUsuario` varchar(45) NOT NULL,
  `localidad` varchar(45) NOT NULL,
  `provincia` varchar(45) NOT NULL,
  `direccion` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario_comercio`
--

INSERT INTO `usuario_comercio` (`idUsuario`, `mail`, `contrasenia`, `nombreUsuario`, `localidad`, `provincia`, `direccion`) VALUES
(1, 'ejemplo@prueba.com', 'pass', 'mercadito', 'Rio Negro', 'Cipolletti', 'Direccion Falsa 123'),
(2, 'ejemplo2@prueba.com', 'contra', 'comercio', 'Rio Negro', 'Cipolletti', 'Falsa 1234'),
(3, 'blaa', 'contra', 'user', 'Cipo', 'RN', 'falsa 123'),
(4, 'mateito@gmail.com', '$2a$10$ILwh7gVNioyMvcWGJngepePgOhlKlBYekIeFLt15cw4l.MHPiYe6i', 'ZilliShop', 'Formosa', 'i', 'Naciones Unidas 123'),
(5, 'fernanda@correo.com', '$2a$10$sq41MHvn0TyapXQ5b.jq6eUYW/y225EpWKYyLURyV5m0qAewJj9RO', 'HerreraShop', 'Ciudad cread', 'j', 'Falsa 456');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`idCategoria`),
  ADD KEY `fk_comercio_categoria` (`idComercio`);

--
-- Indices de la tabla `imagenes_producto`
--
ALTER TABLE `imagenes_producto`
  ADD PRIMARY KEY (`idImagen`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_producto_categoria` (`idCategoria`);

--
-- Indices de la tabla `usuario_comercio`
--
ALTER TABLE `usuario_comercio`
  ADD PRIMARY KEY (`idUsuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `idCategoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `imagenes_producto`
--
ALTER TABLE `imagenes_producto`
  MODIFY `idImagen` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `usuario_comercio`
--
ALTER TABLE `usuario_comercio`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD CONSTRAINT `fk_comercio_categoria` FOREIGN KEY (`idComercio`) REFERENCES `usuario_comercio` (`idUsuario`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `producto`
--
ALTER TABLE `producto`
  ADD CONSTRAINT `fk_producto_categoria` FOREIGN KEY (`idCategoria`) REFERENCES `categoria` (`idCategoria`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
