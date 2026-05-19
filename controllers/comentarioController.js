const comentariosModel = require("../models/comentarioModel");

function crearComentario(req, res) {

  const usuario_id = req.usuario.id;

  const { id_foto, contenido} = req.body;

  comentariosModel.crearComentario(usuario_id,id_foto,contenido,

    (error) => {

      if (error) {

        console.error(error);

        return res.status(500).json({
          error: "Error al comentar"
        });
      }

      res.json({
        mensaje:"Comentario creado"
      });
    }
  );
}

function obtenerComentarios(req,res) {

  const id_foto =req.params.id;
 
  comentariosModel.obtenerComentarios(id_foto, (error, resultados) => {
      if (error) {

        return res.status(500).json({
          error: "Error al obtener comentarios" });
      }

      res.json(resultados);
    }
  );
}

module.exports = {
  crearComentario,
  obtenerComentarios
};