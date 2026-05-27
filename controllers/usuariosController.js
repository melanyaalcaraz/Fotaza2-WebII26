const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const usuariosModel = require('../models/usuariosModel');


const registrarUsuario = async (req, res) => {
  try {
    const { nombre, email, password } = req.body;
    console.log("BODY estoy en registro:", req.body);
    

    if (!nombre || !email || !password) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }


    const usuarioExistente = await usuariosModel.obtenerPorEmail(email);

    if (usuarioExistente) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }


    const passwordHash = await bcrypt.hash(password, 10);


    const nuevoUsuario = {
      username: nombre,
      email,
      password: passwordHash
    };

    await usuariosModel.crearUsuario(nuevoUsuario);
    

    res.json({ mensaje: 'Usuario registrado correctamente' });

  } catch (error) {
    console.error(' Error al registrar usuario:', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};


const loginUsuario = async (req, res) => {
  try {
    const { email, password } = req.body;


    if (!email || !password) {
      return res.status(400).json({ error: 'Email y contraseña obligatorios' });
    }


    const usuario = await usuariosModel.obtenerPorEmail(email);

    if (!usuario) {
     return res.status(401).json({ error: 'Credenciales inválidas' });
    }


    const esValida = await bcrypt.compare(password, usuario.password);

    if (!esValida) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }


    const token = jwt.sign(
      { id: usuario.id_usuario, username: usuario.username },
      'CLAVE_SECRETA',
      { expiresIn: '2h' }
    );

    res.json({
      mensaje: 'Login exitoso',
      token,
      usuario: {
        id: usuario.id_usuario,
        username: usuario.username,
        email: usuario.email
      }
    });

  } catch (error) {
    console.error('❌ Error en login:', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

function buscarUsuarios(req, res) {

  const texto =req.query.q;

  const id_usuario =req.id_usuario;

  usuariosModel.buscarUsuarios(id_usuario, texto,(err, resultados) => {

      if (err) {

        console.error(err);

        return res.status(500).json({
          error:
            "Error al buscar usuarios"
        });
      }

      res.json(resultados);
    }
  );
}


module.exports = {
  registrarUsuario,
  loginUsuario,
  buscarUsuarios
};