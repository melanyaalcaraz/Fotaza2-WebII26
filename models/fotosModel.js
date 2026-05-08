const conexion= require('../base_datos/conexion')


function guardarFoto( id_usuario, url_imagen, descripcion, callback) {
    const sql = 'INSERT INTO fotos ( id_usuario, url_imagen, descripcion) VALUES (?,?,?)';
    conexion.query(sql, [ id_usuario, url_imagen, descripcion], callback);
}


module.exports = {
    guardarFoto
};