const conexion= require('../base_datos/conexion')


function guardarFoto(id_usuario,url_imagen,descripcion,titulo,tags,callback) {

  const sql = `
  INSERT INTO fotos (id_usuario,url_imagen,descripcion,titulo)VALUES (?, ?, ?, ?)`;

  conexion.query(sql,[ id_usuario,url_imagen,descripcion,titulo],(error, resultado) => {

      if (error) {
        return callback(error);
      }

      const id_foto =resultado.insertId;
      const listaTags =tags.split(/[ ,]+/);

      listaTags.forEach(tag => {

        const sqlEtiqueta = ` SELECT * FROM etiquetas WHERE nombre = ?`;

        conexion.query(sqlEtiqueta, [tag],(error, etiquetas) => {

            if (error) {
              return callback(error);
            }

            if (
              etiquetas.length > 0
            ) {
              const id_etiqueta = etiquetas[0].id_etiqueta;

              guardarRelacion(id_foto,id_etiqueta);

            } else {

              const sqlNuevaEtiqueta = `INSERT INTO etiquetas(nombre)VALUES (?)`;

              conexion.query(sqlNuevaEtiqueta,[tag],(error,nuevaEtiqueta) => {

                  if (error) {
                    return callback(error);
                  }

                  const id_etiqueta =nuevaEtiqueta.insertId;

                  guardarRelacion(id_foto,id_etiqueta);
                }
              );
            }
          }
        );
      });

      callback(null, resultado);
    }
  );

  function guardarRelacion(id_foto,id_etiqueta) {

    const sqlRelacion = `INSERT INTO foto_etiqueta(id_foto,id_etiqueta)VALUES (?, ?)`;

    conexion.query(sqlRelacion,[ id_foto, id_etiqueta]);
  }
}

function obtenerPorUsuario(id_usuario, callback) {
  const sql = `
        SELECT fotos.*, usuarios.username
        FROM fotos
        JOIN usuarios
        ON fotos.id_usuario = usuarios.id_usuario
        WHERE fotos.id_usuario = ?
        ORDER BY fecha_publicacion DESC
     `;
  conexion.query(sql, [id_usuario], callback);
}

const obtenerMisFotos = (id_usuario,callback) => {

  const sql = `
    SELECT
      fotos.*,
      usuarios.username,

      ROUND(
        AVG(valoraciones.puntuacion),
        1
      ) AS promedio,

      COUNT(
        valoraciones.id_valoracion
      ) AS votos,

       GROUP_CONCAT(
        etiquetas.nombre
        SEPARATOR ' '
      ) AS tags
      
    FROM fotos

    JOIN usuarios
    ON fotos.id_usuario =
    usuarios.id_usuario

    LEFT JOIN valoraciones
    ON fotos.id_foto =
    valoraciones.id_foto
    LEFT JOIN foto_etiqueta

    ON fotos.id_foto =
    foto_etiqueta.id_foto

    LEFT JOIN etiquetas

    ON foto_etiqueta.id_etiqueta =
    etiquetas.id_etiqueta

    WHERE fotos.id_usuario = ?

    GROUP BY fotos.id_foto

    ORDER BY fecha_publicacion DESC
  `;

  conexion.query(sql, [id_usuario], callback);
};

const obtenerFeedSeguidos = (id_usuario, callback) => {

  const sql = `
    SELECT

      fotos.*,
      usuarios.username,

      ROUND(
        AVG(valoraciones.puntuacion),
        1
      ) AS promedio,

      COUNT(
        valoraciones.id_valoracion
      ) AS votos,

       GROUP_CONCAT(
        etiquetas.nombre
        SEPARATOR ' '
      ) AS tags

    FROM fotos

    JOIN seguidores
    ON fotos.id_usuario =
    seguidores.usuario_seguido

    JOIN usuarios
    ON fotos.id_usuario =
    usuarios.id_usuario

    LEFT JOIN valoraciones
    ON fotos.id_foto =
    valoraciones.id_foto
    LEFT JOIN foto_etiqueta

    ON fotos.id_foto =
    foto_etiqueta.id_foto

    LEFT JOIN etiquetas

    ON foto_etiqueta.id_etiqueta =
    etiquetas.id_etiqueta

    WHERE seguidores.usuario_seguidor = ?

    GROUP BY fotos.id_foto

    ORDER BY

      promedio DESC,

      votos DESC,

      fecha_publicacion DESC
  `;

  conexion.query( sql, [id_usuario], callback);
};


function buscarFotos( texto,callback) {
  
  let sql = "";
  let valores = [];
  
  if (texto.startsWith("#")) {
    texto =texto.replace("#", "");

    sql = `

      SELECT

        fotos.id_foto,
        fotos.id_usuario,
        fotos.url_imagen,
        fotos.descripcion,
        fotos.titulo,
        fotos.fecha_publicacion,
        usuarios.username,

        ROUND(
          AVG(valoraciones.puntuacion),
          1
        ) AS promedio,

        COUNT(
          DISTINCT valoraciones.id_valoracion
        ) AS votos,

        GROUP_CONCAT(
          DISTINCT etiquetas.nombre
          SEPARATOR ' '

        ) AS tags

      FROM fotos

      JOIN usuarios
      ON fotos.id_usuario =
      usuarios.id_usuario

      LEFT JOIN valoraciones
      ON fotos.id_foto =
      valoraciones.id_foto

      JOIN foto_etiqueta
      ON fotos.id_foto =
      foto_etiqueta.id_foto

      JOIN etiquetas
      ON foto_etiqueta.id_etiqueta =
      etiquetas.id_etiqueta

      WHERE etiquetas.nombre LIKE ?

      GROUP BY fotos.id_foto

      ORDER BY fecha_publicacion DESC
    `;

    valores = [`%${texto}%`];

  } else {

    sql = `

      SELECT

        fotos.id_foto,
        fotos.id_usuario,
        fotos.url_imagen,
        fotos.descripcion,
        fotos.titulo,
        fotos.fecha_publicacion,
        usuarios.username,

        ROUND(
          AVG(valoraciones.puntuacion),
          1
        ) AS promedio,

        COUNT(
          DISTINCT valoraciones.id_valoracion
        ) AS votos,

        GROUP_CONCAT(
          DISTINCT etiquetas.nombre
          SEPARATOR ' '

        ) AS tags

      FROM fotos

      JOIN usuarios
      ON fotos.id_usuario =
      usuarios.id_usuario

      LEFT JOIN valoraciones
      ON fotos.id_foto =
      valoraciones.id_foto

      LEFT JOIN foto_etiqueta
      ON fotos.id_foto =
      foto_etiqueta.id_foto

      LEFT JOIN etiquetas
      ON foto_etiqueta.id_etiqueta =
      etiquetas.id_etiqueta

      WHERE fotos.titulo LIKE ?

      GROUP BY fotos.id_foto

      ORDER BY fecha_publicacion DESC
    `;

    valores = [`%${texto}%`];
  }

  conexion.query(sql,valores,callback);
}

module.exports = {
    guardarFoto,
    obtenerPorUsuario,
    obtenerMisFotos,
    obtenerFeedSeguidos,
    buscarFotos
};