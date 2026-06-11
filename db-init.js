const fs = require("fs");
const mysql = require("mysql2");
require("dotenv").config();


const sql = fs.readFileSync("fotaza2.sql", "utf8");


const conexion = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  multipleStatements: true
});

conexion.connect((err) => {
  if (err) {
    console.error(" Error de conexión:", err);
    return;
  }

  console.log(" Conectado a MySQL");

  conexion.query(sql, (err) => {
    if (err) {
      console.error(" Error al ejecutar fotaza.sql:", err);
    } else {
      console.log(" Base de datos inicializada correctamente");
    }

    conexion.end();
  });
});