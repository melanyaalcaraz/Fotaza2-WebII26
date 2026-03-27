const conexion = require('../base_datos/conexion')

// const crearUsuario= (usuarios, callback) => {
//     const sql= 'INSERT INTO usuarios SET ?'
//     conexion.query(sql,usuarios,callback);
// };

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



module.exports = {
    crearUsuario,
    obtenerPorEmail
};