const express = require('express');
const cors = require('cors');
const path = require('path');
require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// configurar Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

const puerto = process.env.PORT || 3000;

// Importar rutas
const rutasUsuarios = require('./routes/usuarios');
app.use('/api/usuarios', rutasUsuarios);

const rutasFotos = require("./routes/fotos");
app.use("/api/fotos", rutasFotos);

const rutasComentarios = require("./routes/comentario");
app.use( "/api/comentarios",rutasComentarios);

const rutasSeguidores = require("./routes/seguidores");
app.use( "/api/seguidores", rutasSeguidores);

const valoracionesRoutes = require("./routes/valoraciones");
app.use( "/api/valoraciones",valoracionesRoutes);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));


// ruta principal (vista)
// app.get('/', (req, res) => {res.render('index');});

app.get('/', (req, res) => {
  res.redirect('/registro');
});

app.get("/registro", (req, res) => {
  res.render("registro", { query: req.query });
});

app.get("/login", (req, res) => {
  res.render("login", { query: req.query });
}); 





// iniciar servidor
app.listen(puerto, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${puerto}`);
});