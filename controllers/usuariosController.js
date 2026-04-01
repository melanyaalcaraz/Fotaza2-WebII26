const bcrypt=require('bcrypt');
const jwt= require('jsonwebtoken');
const usuariosModel= require('../models/usuariosModel');


const registrarUsuario = async (req, res) => {
  try {
    const { nombre, email, password } = req.body;
    console.log("BODY estoy en registro:", req.body);
   
    if (!nombre || !email || !password) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

   
    const usuarioExistente = await usuariosModel.obtenerPorEmail(email);

    if (usuarioExistente) {
      return res.redirect('/registro?error=1');
    }

   
    const passwordHash = await bcrypt.hash(password, 10);

    
    const nuevoUsuario = {
      username: nombre,
      email,
      password: passwordHash
    };

    await usuariosModel.crearUsuario(nuevoUsuario);

    
    res.redirect('/registro?ok=1');

  } catch (error) {
    console.error('❌ Error al registrar usuario:', error);
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
       return res.redirect('/login?error=1');
    }

    
    const esValida = await bcrypt.compare(password, usuario.password);

    if (!esValida) {
      return res.redirect('/login?error=1');
    }

    
    const token = jwt.sign(
      { id: usuario.id, username: usuario.username },
      'CLAVE_SECRETA',
      { expiresIn: '2h' }
    );

  res.redirect('/login?ok=1');

  } catch (error) {
    console.error('❌ Error en login:', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};


module.exports = {
    registrarUsuario,
    loginUsuario
};