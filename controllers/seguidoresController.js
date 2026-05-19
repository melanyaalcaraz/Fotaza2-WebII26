const seguidoresModel =
require("../models/seguidoresModel");

function seguir(req, res) {

  const usuario_seguidor = req.usuario.id;
  const { usuario_seguido } = req.body; seguidoresModel.seguirUsuario(usuario_seguidor,usuario_seguido, (error) => {

      if (error) {
         console.error(error);
          return res.status(500).json({error: "Error al seguir usuario"});
      }
      res.json({ mensaje: "Usuario seguido"});
    }
  );
}

function obtenerSeguidos(req, res) {

  const id_usuario = req.usuario.id;
  seguidoresModel.obtenerSeguidos( id_usuario, (error, resultados) => {

      if (error) {
      return res.status(500).json({ error: "Error"});
      }
      res.json(resultados);
    }
  );
}

module.exports = {
  seguir,
  obtenerSeguidos
};