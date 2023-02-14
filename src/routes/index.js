const { Router } = require("express");
const router = Router();
const { db } = require("../firebase");

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

module.exports = router;
