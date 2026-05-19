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
