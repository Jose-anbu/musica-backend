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

/// OBTENER CANCIONES
router.get("/canciones", async (req, res) => {
  try {
    const canciones = await db.collection("canciones").get();
    const datos = canciones.docs.map((cancion) => {
      return {
        id: cancion.id,
        ...cancion.data(),
      };
    });
    res.send(datos);
  } catch (error) {
    res.status(500);
    res.send("Ocurrió un error inesperado");
  }
});

/// CARGAR DATOS
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

/// CARGAR CANCIONES
router.post("/canciones", async (req, res) => {
  const body = req.body;
  await db.collection("canciones").add({
    nombre: body.nombre,
    duracion: body.duracion,
    nombreDisco: body.nombreDisco,
    imagenDisco: body.imagenDisco
  });
  res.send("Cargado con exito");
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

/// MODIFICAR ARTISTA
router.put("/artistas/:id", async (req, res) => {
  const id = req.params.id;
  await db.collection("artistas").doc(id).update(req.body);
  res.send("Datos modificados");
});

/// MODIFICAR CANCION
router.put("/canciones/:id", async (req, res) => {
  const id = req.params.id;
  await db.collection("canciones").doc(id).update(req.body);
  res.send("Datos modificados");
});

/// ELIMINAR ARTISTA
router.delete("/artistas/:id", async (req, res) => {
  const id = req.params.id;
  await db.collection("artistas").doc(id).delete();
  res.send("Eliminado");
});

/// ELIMINAR CANCION
router.delete("/canciones/:id", async (req, res) => {
  const id = req.params.id;
  await db.collection("canciones").doc(id).delete();
  res.send("Eliminado");
});

module.exports = router;
