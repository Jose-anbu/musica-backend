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

/// OBTENER UN ARTISTA
router.get("/artistas/:id", async (req, res) => {
  const id = req.params.id;
  const datos = await db.collection("artistas").doc(id).get();
  res.send(datos.data());
});

/// OBTENER UNA CANCION
router.get("/canciones/:id", async (req, res) => {
  const id = req.params.id;
  const datos = await db.collection("canciones").doc(id).get();
  res.send(datos.data());
});

module.exports = router;
