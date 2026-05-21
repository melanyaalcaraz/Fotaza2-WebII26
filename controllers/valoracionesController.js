const valoracionesModel = require("../models/valoracionesModel");

const valorarFoto = (req, res) => {
  const id_usuario = req.usuario.id;

  const {id_foto, puntuacion} = req.body;

  valoracionesModel.valorarFoto( id_usuario, id_foto, puntuacion, (err, resultado) => {

       if (err) {

        if (
          err.code === "ER_DUP_ENTRY"
        ) {

        return res.status(400).json({ mensaje:"Ya valoraste esta foto" });
        }

      console.error(err);

      return res.status(500)
      .json({

        mensaje:
          "Error al valorar foto"
      });
    }

    res.json({
      mensaje:
        "Foto valorada"
    });
  }
)};

module.exports = {
  valorarFoto
};