const conexion= require('../base_datos/conexion')


function guardarFoto( id_usuario, url_imagen, descripcion, callback) {
    const sql = 'INSERT INTO fotos ( id_usuario, url_imagen, descripcion) VALUES (?,?,?)';
    conexion.query(sql, [ id_usuario, url_imagen, descripcion], callback);
}


function obtenerPorUsuario(id_usuario, callback) {
  const sql = `
        SELECT fotos.*, usuarios.username
        FROM fotos
        JOIN usuarios
        ON fotos.id_usuario = usuarios.id_usuario
        WHERE fotos.id_usuario = ?
        ORDER BY fecha_publicacion DESC
     `;
  conexion.query(sql, [id_usuario], callback);
}

module.exports = {
    guardarFoto,
    obtenerPorUsuario
};