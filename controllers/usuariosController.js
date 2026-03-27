const bcrypt=require('bcrypt');
const usuariosModel= require('../models/usuariosModel');

// const registrarUsuario = async (req, res) => {
//     const {nombre, email, password} = req.body;
    
//     if (!nombre || !email || !password) {
//     return res.status(400).json({ error: 'Faltan datos obligatorios' });
//   }
//    const hashedPassword = await bcrypt.hash(password, 10);

//     const usuario = {
//        nombre,
//        email,
//        password: hashedPassword,
//        imagen_perfil: imagen_perfil || 'default.jpg'
//      };
   
//      usuariosModel.crearUsuario(usuario, (err, resultado) => {
//        if (err) {
//          console.error('❌ ERROR AL REGISTRAR:', err);
//          if (err.code === 'ER_DUP_ENTRY') {
//            return res.status(400).json({ error: 'El email ya está registrado' });
//          }
//          return res.status(500).json({ error: 'Error interno del servidor' });
//        }
      
//          res.status(201).json({
//        mensaje: 'Usuario registrado correctamente!',
//        id: resultado.insertId
//      });
//      });  
// }

const registrarUsuario = async (req, res) => {
  try {
    const { nombre, email, password } = req.body;
    console.log("BODY:", req.body);
    // 🔹 Validación básica
    if (!nombre || !email || !password) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // 🔹 Verificar si ya existe el usuario
    const usuarioExistente = await usuariosModel.obtenerPorEmail(email);

    if (usuarioExistente) {
      return res.status(400).json({ error: 'El email ya está registrado' });
    }

    // 🔹 Encriptar contraseña
    const passwordHash = await bcrypt.hash(password, 10);

    // 🔹 Crear usuario
    const nuevoUsuario = {
      username: nombre,
      email,
      password: passwordHash
    };

    await usuariosModel.crearUsuario(nuevoUsuario);

    // 🔹 Respuesta
    res.status(201).json({ mensaje: 'Usuario registrado correctamente' });

  } catch (error) {
    console.error('❌ Error al registrar usuario:', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};



module.exports = {
    registrarUsuario
};