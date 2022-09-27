import { Router } from "express";
import { crearActividad, editarActividad, eliminarActividad, obtenerActividades } from "../controllers/actividad.js";

const router = Router();

router.get('/', obtenerActividades);
router.post('/crear', crearActividad);
router.put('/editar/:id', editarActividad);
router.delete('/eliminar/:id', eliminarActividad);

export default router;