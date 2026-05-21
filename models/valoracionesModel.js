const db = require("../base_datos/conexion");

const valorarFoto = (id_usuario,id_foto,puntuacion,callback) => {

  const sql = ` INSERT INTO valoraciones(id_usuario, id_foto, puntuacion) VALUES (?, ?, ?) `;

  db.query(sql,[id_usuario, id_foto, puntuacion],callback );
};

module.exports = {
  valorarFoto
};