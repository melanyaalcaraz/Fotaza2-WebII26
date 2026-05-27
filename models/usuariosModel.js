const conexion = require('../base_datos/conexion')

const crearUsuario = (data) => {
  return new Promise((resolve, reject) => {
    const sql = 'INSERT INTO usuarios SET ?';

    conexion.query(sql, data, (err, resultado) => {
      
      if (err) return reject(err);
      resolve(resultado);
    });
  });
};

const obtenerPorEmail = (email) => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM usuarios WHERE email = ?';

    conexion.query(sql, [email], (err, resultados) => {
      if (err) return reject(err);
      if (resultados.length === 0) return resolve(null);

      resolve(resultados[0]);
    });
  });
};

// function buscarUsuarios(texto, callback) {

//   const sql = `
//     SELECT id_usuario, username, foto_perfil
//     FROM usuarios
//     WHERE username LIKE ?
//     LIMIT 10
//   `;

//   conexion.query( sql, [`%${texto}%`], callback);
// }

function buscarUsuarios(
  id_usuario,
  texto,
  callback
) {

  const sql = `

    SELECT

      usuarios.id_usuario,

      usuarios.username,

      usuarios.foto_perfil,

      CASE

        WHEN seguidores.usuario_seguidor
        IS NOT NULL

        THEN 1

        ELSE 0

      END AS siguiendo

    FROM usuarios

    LEFT JOIN seguidores

    ON usuarios.id_usuario =
    seguidores.usuario_seguido

    AND seguidores.usuario_seguidor = ?

    WHERE usuarios.username
    LIKE ?

    LIMIT 10
  `;

  conexion.query(

    sql,

    [
      id_usuario,
      `%${texto}%`
    ],

    callback
  );
}

module.exports = {
  crearUsuario,
  obtenerPorEmail,
  buscarUsuarios
};