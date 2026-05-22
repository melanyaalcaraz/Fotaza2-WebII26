const fotosModel = require('../models/fotosModel');


function subirFoto(req, res) {

  try {
    const id_usuario = req.usuario.id;
    const titulo=req.body.titulo;
    const descripcion = req.body.descripcion;
    const url_imagen = req.file.filename;
    const tags=req.body.tags;

    fotosModel.guardarFoto(id_usuario,url_imagen, descripcion,titulo,tags, (error, resultado) => {
        if (error) {
          console.error("Errorazo al guardar imagen ", error);
          return res.status(500).json({
            error: "Error al guardar imagen"
          });
        }
        res.json({ mensaje: "Imagen bien subida"});
      }
    );

  } catch (error) {

    console.error(error);
    res.status(500).json({ error: "Error del servidor" });
  }
}

const obtenerFotosUsuario = (req, res) => {
 
  const id_usuario = req.usuario.id;
  fotosModel.obtenerPorUsuario(id_usuario, (err, fotos) => {
    if (err) {
      console.error(' Error al obtener fotos:', err);
      return res.status(500).json({ error: 'Error al obtener fotos' });
    }

    res.json(fotos);
  });
};

const obtenerMisFotos = (req, res) => {

  const id_usuario = req.usuario.id;

  fotosModel.obtenerMisFotos(id_usuario,(err, resultados) => {

      if (err) {
        console.error(' Error al obtener fotos:',err);
        return res.status(500).json({ error: "Error al obtener fotos"
        });
      }

      res.json(resultados);
    }
  );
};

const obtenerFeedSeguidos = (req,res) => {

  const id_usuario = req.usuario.id;

  fotosModel.obtenerFeedSeguidos( id_usuario,(err, resultados) => {

      if (err) {
        console.error(' Error al obtener fotos:',err);
        return res.status(500).json({ error: "Error al obtener feed"
        });
      }

      res.json(resultados);
    }
  );
};

module.exports = {
  subirFoto,
  obtenerFotosUsuario,
  obtenerMisFotos,
  obtenerFeedSeguidos
};