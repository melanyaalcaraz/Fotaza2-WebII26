const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// configurar Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

const puerto = 3000;

// Importar rutas
const rutasUsuarios = require('./routes/usuarios');
app.use('/api/usuarios', rutasUsuarios);

// ruta principal (vista)
app.get('/', (req, res) => {
  res.render('index');
});

app.get("/registro", (req, res) => {
  res.render("registro");
});

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

// iniciar servidor
app.listen(puerto, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${puerto}`);
});