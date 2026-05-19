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

const rutasFotos = require("./routes/fotos");
app.use("/api/fotos", rutasFotos);




// ruta principal (vista)
app.get('/', (req, res) => {res.render('index');});

app.get("/registro", (req, res) => {
  res.render("registro", { query: req.query });
});

app.get("/login", (req, res) => {
  res.render("login", { query: req.query });
}); 

const rutasSeguidores = require("./routes/seguidores");

app.use( "/api/seguidores", rutasSeguidores);



app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

const rutasComentarios = require("./routes/comentario");

app.use( "/api/comentarios",rutasComentarios);
// iniciar servidor
app.listen(puerto, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${puerto}`);
});