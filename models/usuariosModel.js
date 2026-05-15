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

function buscarUsuarios(texto, callback) {

  const sql = `
    SELECT id_usuario, username, foto_perfil
    FROM usuarios
    WHERE username LIKE ?
    LIMIT 10
  `;

  conexion.query(
    sql,
    [`%${texto}%`],
    callback
  );
}


// function buscarUsuarios(
//   texto,
//   usuarioLogueado,
//   callback
// ) {

//   const sql = `

//     SELECT

//       u.id_usuario,

//       u.username,

//       CASE

//         WHEN s1.usuario_seguidor
//         IS NOT NULL

//         AND s2.usuario_seguidor
//         IS NOT NULL

//         THEN 'amigos'

//         WHEN s1.usuario_seguidor
//         IS NOT NULL

//         THEN 'siguiendo'

//         ELSE 'seguir'

//       END AS estado

//     FROM usuarios u

//     LEFT JOIN seguidores s1

//       ON u.id_usuario =
//       s1.usuario_seguido

//       AND s1.usuario_seguidor = ?

//     LEFT JOIN seguidores s2

//       ON u.id_usuario =
//       s2.usuario_seguidor

//       AND s2.usuario_seguido = ?

//     WHERE u.username LIKE ?

//     LIMIT 10
//   `;

//   conexion.query(

//     sql,

//     [
//       usuarioLogueado,
//       usuarioLogueado,
//       `%${texto}%`
//     ],

//     callback
//   );
// }

module.exports = {
  crearUsuario,
  obtenerPorEmail,
  buscarUsuarios
};