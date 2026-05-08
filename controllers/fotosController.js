const fotosModel = require('../models/fotosModel');


function subirFoto(req, res) {

  try {

    const id_usuario = req.usuario.id;
    const descripcion = req.body.descripcion;
    const url_imagen = req.file.filename;

    fotosModel.guardarFoto(
      id_usuario,
      url_imagen,
      descripcion,

      (error, resultado) => {

        if (error) {
          console.error("Errorazo al guardar imagen ", error);
          return res.status(500).json({
            error: "Error al guardar imagen"
          });
        }

        res.json({
          mensaje: "Imagen bien subida"
        });
      }
    );

  } catch (error) {

    console.error(error);

    res.status(500).json({
      error: "Error del servidor"
    });
  }
}


module.exports = {
  subirFoto
};