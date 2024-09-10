import express from "express";
import {
  getUsuarios,
  addUsuario,
  updateUsuario,
  deleteUsuario
} from "../controllers/usuario.js";

const router = express.Router();

router.get("/", getUsuarios);
router.post("/", addUsuario);
router.put("/:codigo", updateUsuario);
router.delete("/:codigo", deleteUsuario);

export default router;
