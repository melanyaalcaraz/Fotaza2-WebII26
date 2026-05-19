const conexion =
require("../base_datos/conexion");

function crearComentario( usuario_id,id_foto,contenido,callback) {

  const sql = `
    INSERT INTO comentarios (id_usuario,id_foto, contenido, fecha_comentario)
    VALUES (?, ?, ?, NOW())
  `;

  conexion.query(sql, [usuario_id, id_foto,contenido ], callback);
}

function obtenerComentarios(id_foto,callback) {
   
  const sql = `

    SELECT
      comentarios.*,
      usuarios.username

    FROM comentarios

    JOIN usuarios
    ON comentarios.id_usuario =
    usuarios.id_usuario

    WHERE comentarios.id_foto = ?

    ORDER BY fecha_comentario ASC
  `;

  conexion.query(sql,[id_foto],callback);
}

module.exports = {
  crearComentario,
  obtenerComentarios
};