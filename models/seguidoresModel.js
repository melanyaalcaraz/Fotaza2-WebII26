const conexion = require("../base_datos/conexion");

function seguirUsuario(usuario_seguidor,usuario_seguido, callback) {

    const sql = `
    INSERT INTO seguidores
    (usuario_seguidor, usuario_seguido, fecha_follow)
    VALUES (?, ?, NOW())
  `;

    conexion.query(sql,[usuario_seguidor, usuario_seguido],callback);
}

function obtenerSeguidos(id_usuario,callback) {

    const sql = `
    SELECT usuarios.*
    FROM seguidores

    JOIN usuarios
    ON seguidores.usuario_seguido = usuarios.id_usuario

    WHERE seguidores.usuario_seguidor = ?
  `;

    conexion.query( sql,[id_usuario],callback);
}

module.exports = {
    seguirUsuario,
    obtenerSeguidos
};