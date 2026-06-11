-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Host: mysql-melany2004.alwaysdata.net
-- Generation Time: Jun 11, 2026 at 02:45 AM
-- Server version: 11.4.12-MariaDB
-- PHP Version: 8.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `melany2004_fotaza`
--
CREATE DATABASE IF NOT EXISTS `melany2004_fotaza` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `melany2004_fotaza`;

-- --------------------------------------------------------

--
-- Table structure for table `comentarios`
--

CREATE TABLE `comentarios` (
  `id_comentario` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_foto` int(11) NOT NULL,
  `contenido` text NOT NULL,
  `fecha_comentario` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `comentarios`
--

INSERT INTO `comentarios` (`id_comentario`, `id_usuario`, `id_foto`, `contenido`, `fecha_comentario`) VALUES
(30, 38, 51, 'Cute!', '2026-05-28 02:13:53'),
(31, 38, 52, 'Me encanta!', '2026-05-28 02:21:44'),
(32, 40, 53, 'aaaaaa', '2026-05-28 02:21:59'),
(33, 39, 53, 'JAJAAJJAAJA', '2026-05-28 02:24:50'),
(34, 45, 57, 'Que lindo!', '2026-06-11 02:07:02');

-- --------------------------------------------------------

--
-- Table structure for table `denuncias`
--

CREATE TABLE `denuncias` (
  `id_denuncia` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_foto` int(11) NOT NULL,
  `motivo` int(11) NOT NULL,
  `fecha_denuncia` datetime NOT NULL,
  `estado` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `etiquetas`
--

CREATE TABLE `etiquetas` (
  `id_etiqueta` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `etiquetas`
--

INSERT INTO `etiquetas` (`id_etiqueta`, `nombre`) VALUES
(36, 'dibujo'),
(37, 'pajaros'),
(38, 'cute'),
(39, 'koi'),
(40, 'lindo'),
(41, ''),
(42, 'michi'),
(43, 'meme'),
(44, 'cuadro'),
(45, 'fotografia'),
(46, 'foto'),
(47, 'paisaje'),
(48, 'ballena'),
(49, 'dubujo');

-- --------------------------------------------------------

--
-- Table structure for table `fotos`
--

CREATE TABLE `fotos` (
  `id_foto` int(11) NOT NULL,
  `titulo` text NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `url_imagen` varchar(255) NOT NULL,
  `descripcion` text NOT NULL,
  `fecha_publicacion` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `fotos`
--

INSERT INTO `fotos` (`id_foto`, `titulo`, `id_usuario`, `url_imagen`, `descripcion`, `fecha_publicacion`) VALUES
(51, 'mis dibujos', 38, '1779927214673-iamgenn.jpg', 'dibuje unos pajaritos <3', '2026-05-28 00:13:34'),
(52, 'pez koi', 39, '1779927505205-Green_Red_Illustration_Koi_Minimalist_Desktop_Wallaper.png', 'dibuje esto!', '2026-05-28 00:18:26'),
(53, 'estudiar', 40, '1779927689885-Captura_de_pantalla_2026-04-01_102034.png', 'no quiero estudiar ', '2026-05-28 00:21:30'),
(54, 'Dibujo!', 41, '1780521536708-iamgenn.jpg', 'Miren mi nuevo dibujo', '2026-06-03 21:18:57'),
(55, 'Mi nuevo dibujo de michi', 43, '1781133206740-michi.jpg', 'Pinte este nuevo cuadro de michi descansando! Les gusta?', '2026-06-10 23:13:27'),
(56, 'michitecno', 43, '1781133260054-michitecno.jpg', 'Miren este nuevo cuadro meme', '2026-06-10 23:14:20'),
(57, 'nutrias', 43, '1781133426948-cute.jpg', 'lindas nutrias', '2026-06-10 23:17:07'),
(58, 'Fotografia Casa', 42, '1781134171755-foto.jpg', 'mi ultima fotografia', '2026-06-10 23:29:32'),
(59, 'fotomichi', 42, '1781134207065-foto1.jpg', 'Una foto michi que siempre falta', '2026-06-10 23:30:07'),
(60, 'Paisaje', 42, '1781134250175-foto2.jpg', 'foto paisaje fitito', '2026-06-10 23:30:50'),
(61, 'ballena', 45, '1781136373731-ballena.jpg', 'miren mi ballena', '2026-06-11 00:06:14');

-- --------------------------------------------------------

--
-- Table structure for table `foto_etiqueta`
--

CREATE TABLE `foto_etiqueta` (
  `id_foto_etiqueta` int(11) NOT NULL,
  `id_foto` int(11) NOT NULL,
  `id_etiqueta` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `foto_etiqueta`
--

INSERT INTO `foto_etiqueta` (`id_foto_etiqueta`, `id_foto`, `id_etiqueta`) VALUES
(38, 51, 36),
(39, 51, 37),
(40, 51, 38),
(41, 52, 39),
(42, 52, 40),
(43, 53, 41),
(44, 54, 36),
(45, 54, 38),
(46, 55, 36),
(47, 55, 38),
(48, 55, 42),
(49, 56, 42),
(50, 56, 43),
(51, 56, 44),
(52, 57, 38),
(53, 57, 36),
(54, 58, 45),
(55, 59, 42),
(56, 59, 46),
(57, 60, 40),
(58, 60, 47),
(59, 61, 48),
(60, 61, 49);

-- --------------------------------------------------------

--
-- Table structure for table `notificaciones`
--

CREATE TABLE `notificaciones` (
  `id_notificacion` int(11) NOT NULL,
  `id_usuario_destino` int(11) NOT NULL,
  `id_usuario_origen` int(11) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `id_foto` int(11) NOT NULL,
  `leida` tinyint(1) NOT NULL,
  `fecha` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `seguidores`
--

CREATE TABLE `seguidores` (
  `id_seguidor` int(11) NOT NULL,
  `usuario_seguidor` int(11) NOT NULL,
  `usuario_seguido` int(11) NOT NULL,
  `fecha_follow` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `seguidores`
--

INSERT INTO `seguidores` (`id_seguidor`, `usuario_seguidor`, `usuario_seguido`, `fecha_follow`) VALUES
(27, 39, 38, '2026-05-28 02:17:07'),
(28, 38, 39, '2026-05-28 02:21:20'),
(29, 40, 38, '2026-05-28 02:22:10'),
(30, 40, 39, '2026-05-28 02:22:18'),
(31, 39, 40, '2026-05-28 02:24:34'),
(32, 41, 39, '2026-06-03 23:19:14'),
(33, 45, 43, '2026-06-11 02:06:39');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `foto_perfil` varchar(255) DEFAULT NULL,
  `biografia` text DEFAULT NULL,
  `fecha_registro` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `username`, `email`, `password`, `foto_perfil`, `biografia`, `fecha_registro`) VALUES
(38, 'Melany Antonella', 'mel@email.com', '$2b$10$RmCXEEwMN9IpFR31K0Cts.d/KEGy7bQ8DZbbh7kvI8jQMJeoWaHc6', NULL, NULL, '2026-05-28 01:59:39'),
(39, 'malia tate', 'malia@test.com', '$2b$10$XezZXj1/a5loWT2CLIN1t.o1iSN6PS54Qk40lpR5A1/BKgTsse9Py', NULL, NULL, '2026-05-28 02:16:40'),
(40, 'thom', 'poshito@gmailcom', '$2b$10$Z.F1NK2e4HN9WxPfy7Jj8OgqW53F30NmoIrq8pZGY5vM2jsGk5rJW', NULL, NULL, '2026-05-28 02:20:02'),
(41, 'kira ', 'kira@test.com', '$2b$10$foLcZi.L./SL3mMOukvx2undkVUgb33XZWf1UbbbbrRPbkPwAt2Ea', NULL, NULL, '2026-06-03 23:17:22'),
(42, 'isaac', 'isaac@email.com', '$2b$10$UDeMr11zDzK.7mKSTHFGK.2oLEQeKB9GJ8KECg0PQYchSEwcZLjOu', NULL, NULL, '2026-06-10 23:35:52'),
(43, 'ana', 'ana@email.com', '$2b$10$3tMlFovCprZoJ52/nLoUvuaYkNpMegNmmfyaWwoQzcCFPj/ODzIA2', NULL, NULL, '2026-06-11 01:11:29'),
(45, 'julian', 'julian@email.com', '$2b$10$q/ZrHKvqm5s1PhSnSKxMb.MYnfzOjv3iJk1N23Zv3hzl6OSB1BL2.', NULL, NULL, '2026-06-11 02:05:02');

-- --------------------------------------------------------

--
-- Table structure for table `valoraciones`
--

CREATE TABLE `valoraciones` (
  `id_valoracion` int(11) NOT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `id_foto` int(11) DEFAULT NULL,
  `puntuacion` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `valoraciones`
--

INSERT INTO `valoraciones` (`id_valoracion`, `id_usuario`, `id_foto`, `puntuacion`) VALUES
(41, 39, 51, 5),
(42, 38, 52, 5),
(43, 45, 57, 5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id_comentario`),
  ADD KEY `fk_comentarios_usuario` (`id_usuario`),
  ADD KEY `fk_comentarios_foto` (`id_foto`);

--
-- Indexes for table `denuncias`
--
ALTER TABLE `denuncias`
  ADD PRIMARY KEY (`id_denuncia`),
  ADD KEY `fk_denuncia_usuario` (`id_usuario`),
  ADD KEY `fk_denuncia_foto` (`id_foto`);

--
-- Indexes for table `etiquetas`
--
ALTER TABLE `etiquetas`
  ADD PRIMARY KEY (`id_etiqueta`);

--
-- Indexes for table `fotos`
--
ALTER TABLE `fotos`
  ADD PRIMARY KEY (`id_foto`),
  ADD KEY `fk_fotos_usuario` (`id_usuario`);

--
-- Indexes for table `foto_etiqueta`
--
ALTER TABLE `foto_etiqueta`
  ADD PRIMARY KEY (`id_foto_etiqueta`),
  ADD KEY `fk_fotoet_etiqueta` (`id_etiqueta`),
  ADD KEY `fk_fotoet_foto` (`id_foto`);

--
-- Indexes for table `notificaciones`
--
ALTER TABLE `notificaciones`
  ADD PRIMARY KEY (`id_notificacion`),
  ADD KEY `fk_notif_destino` (`id_usuario_destino`),
  ADD KEY `fk_notif_origen` (`id_usuario_origen`),
  ADD KEY `fk_notif_foto` (`id_foto`);

--
-- Indexes for table `seguidores`
--
ALTER TABLE `seguidores`
  ADD PRIMARY KEY (`id_seguidor`),
  ADD UNIQUE KEY `usuario_seguidor` (`usuario_seguidor`,`usuario_seguido`),
  ADD KEY `fk_seguido_usuario` (`usuario_seguido`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- Indexes for table `valoraciones`
--
ALTER TABLE `valoraciones`
  ADD PRIMARY KEY (`id_valoracion`),
  ADD UNIQUE KEY `id_usuario` (`id_usuario`,`id_foto`),
  ADD KEY `id_foto` (`id_foto`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id_comentario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `denuncias`
--
ALTER TABLE `denuncias`
  MODIFY `id_denuncia` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `etiquetas`
--
ALTER TABLE `etiquetas`
  MODIFY `id_etiqueta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `fotos`
--
ALTER TABLE `fotos`
  MODIFY `id_foto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT for table `foto_etiqueta`
--
ALTER TABLE `foto_etiqueta`
  MODIFY `id_foto_etiqueta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT for table `notificaciones`
--
ALTER TABLE `notificaciones`
  MODIFY `id_notificacion` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `seguidores`
--
ALTER TABLE `seguidores`
  MODIFY `id_seguidor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `valoraciones`
--
ALTER TABLE `valoraciones`
  MODIFY `id_valoracion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `fk_comentarios_foto` FOREIGN KEY (`id_foto`) REFERENCES `fotos` (`id_foto`),
  ADD CONSTRAINT `fk_comentarios_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`);

--
-- Constraints for table `denuncias`
--
ALTER TABLE `denuncias`
  ADD CONSTRAINT `fk_denuncia_foto` FOREIGN KEY (`id_foto`) REFERENCES `fotos` (`id_foto`),
  ADD CONSTRAINT `fk_denuncia_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`);

--
-- Constraints for table `fotos`
--
ALTER TABLE `fotos`
  ADD CONSTRAINT `fk_fotos_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`);

--
-- Constraints for table `foto_etiqueta`
--
ALTER TABLE `foto_etiqueta`
  ADD CONSTRAINT `fk_fotoet_etiqueta` FOREIGN KEY (`id_etiqueta`) REFERENCES `etiquetas` (`id_etiqueta`),
  ADD CONSTRAINT `fk_fotoet_foto` FOREIGN KEY (`id_foto`) REFERENCES `fotos` (`id_foto`);

--
-- Constraints for table `notificaciones`
--
ALTER TABLE `notificaciones`
  ADD CONSTRAINT `fk_notif_destino` FOREIGN KEY (`id_usuario_destino`) REFERENCES `usuarios` (`id_usuario`),
  ADD CONSTRAINT `fk_notif_foto` FOREIGN KEY (`id_foto`) REFERENCES `fotos` (`id_foto`),
  ADD CONSTRAINT `fk_notif_origen` FOREIGN KEY (`id_usuario_origen`) REFERENCES `usuarios` (`id_usuario`);

--
-- Constraints for table `seguidores`
--
ALTER TABLE `seguidores`
  ADD CONSTRAINT `fk_seguido_usuario` FOREIGN KEY (`usuario_seguido`) REFERENCES `usuarios` (`id_usuario`),
  ADD CONSTRAINT `fk_seguidor_usuario` FOREIGN KEY (`usuario_seguidor`) REFERENCES `usuarios` (`id_usuario`);

--
-- Constraints for table `valoraciones`
--
ALTER TABLE `valoraciones`
  ADD CONSTRAINT `valoraciones_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`),
  ADD CONSTRAINT `valoraciones_ibfk_2` FOREIGN KEY (`id_foto`) REFERENCES `fotos` (`id_foto`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
