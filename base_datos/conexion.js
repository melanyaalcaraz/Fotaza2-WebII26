const mysql = require('mysql2');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fotaza'
});
conexion.connect((err) => {
    if (err) {
      console.error('❌ Error de conexión:', err);
      return;
    }
    console.log('✅ Conectado a la base de datos MySQL');
  });
  
  module.exports = conexion;

// require('dotenv').config();
// const mysql = require('mysql2');

// const conexion = mysql.createConnection({
//   host: process.env.MYSQL_HOST,
//   user: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASSWORD,
//   database: process.env.MYSQL_DATABASE,
//   port: process.env.MYSQL_PORT || 3306
// });

// conexion.connect((err) => {
//   if (err) {
//     console.error('❌ Error de conexión:', err);
//     return;
//   }
//   console.log('✅ Conectado a la base de datos');
// });

// module.exports = conexion;