const { Router } = require("express");
const router = Router();
const { db } = require("../firebase");

/// OBTENER ARTISTAS
router.get("/artistas", async (req, res) => {
  try {
    const artistas = await db.collection("artistas").get();
    const datos = artistas.docs.map((artista) => {
      return {
        id: artista.id,
        ...artista.data(),
      };
    });
    res.send(datos);
  } catch (error) {
    res.status(500);
    res.send("Ocurrió un error inesperado");
  }
});

///CARGAR DATOS
router.post("/artistas", async (req, res) => {
  const body = req.body;
  await db.collection("artistas").add({
    nombre: body.nombre,
    genero: body.genero,
    pais: body.pais,
    biografia: body.biografia,
    imagen: body.imagen,
    canciones: body.canciones,
  });
  res.send("Cargado con exito");
});

module.exports = router;
