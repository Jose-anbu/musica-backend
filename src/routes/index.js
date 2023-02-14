const { Router } = require("express");
const router = Router();
const { db } = require("../firebase");

router.get("/artistas", async (req, res) => {
  const artistas = await db.collection("artistas").get();

  console.log("Artistas: ", artistas.docs);
  artistas.docs.forEach((artista) => {
    console.log(artista.data())
  });

  res.send("Hola");
});

module.exports = router;