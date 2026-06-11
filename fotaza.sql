-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 27, 2026 at 10:47 PM
-- Server version: 8.4.3
-- PHP Version: 8.3.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fotaza`
--

-- --------------------------------------------------------

--
-- Table structure for table `comentarios`
--

CREATE TABLE `comentarios` (
  `id_comentario` int NOT NULL,
  `id_usuario` int NOT NULL,
  `id_foto` int NOT NULL,
  `contenido` text NOT NULL,
  `fecha_comentario` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `denuncias`
--

CREATE TABLE `denuncias` (
  `id_denuncia` int NOT NULL,
  `id_usuario` int NOT NULL,
  `id_foto` int NOT NULL,
  `motivo` int NOT NULL,
  `fecha_denuncia` datetime NOT NULL,
  `estado` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `etiquetas`
--

CREATE TABLE `etiquetas` (
  `id_etiqueta` int NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `fotos`
--

CREATE TABLE `fotos` (
  `id_foto` int NOT NULL,
  `titulo` text NOT NULL,
  `id_usuario` int NOT NULL,
  `url_imagen` varchar(255) NOT NULL,
  `descripcion` text NOT NULL,
  `fecha_publicacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `foto_etiqueta`
--

CREATE TABLE `foto_etiqueta` (
  `id_foto_etiqueta` int NOT NULL,
  `id_foto` int NOT NULL,
  `id_etiqueta` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `notificaciones`
--

CREATE TABLE `notificaciones` (
  `id_notificacion` int NOT NULL,
  `id_usuario_destino` int NOT NULL,
  `id_usuario_origen` int NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `id_foto` int NOT NULL,
  `leida` tinyint(1) NOT NULL,
  `fecha` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `seguidores`
--

CREATE TABLE `seguidores` (
  `id_seguidor` int NOT NULL,
  `usuario_seguidor` int NOT NULL,
  `usuario_seguido` int NOT NULL,
  `fecha_follow` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `foto_perfil` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `biografia` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `fecha_registro` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `valoraciones`
--

CREATE TABLE `valoraciones` (
  `id_valoracion` int NOT NULL,
  `id_usuario` int DEFAULT NULL,
  `id_foto` int DEFAULT NULL,
  `puntuacion` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

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
  MODIFY `id_comentario` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `denuncias`
--
ALTER TABLE `denuncias`
  MODIFY `id_denuncia` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `etiquetas`
--
ALTER TABLE `etiquetas`
  MODIFY `id_etiqueta` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `fotos`
--
ALTER TABLE `fotos`
  MODIFY `id_foto` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `foto_etiqueta`
--
ALTER TABLE `foto_etiqueta`
  MODIFY `id_foto_etiqueta` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `notificaciones`
--
ALTER TABLE `notificaciones`
  MODIFY `id_notificacion` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `seguidores`
--
ALTER TABLE `seguidores`
  MODIFY `id_seguidor` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `valoraciones`
--
ALTER TABLE `valoraciones`
  MODIFY `id_valoracion` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

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
