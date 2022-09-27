import { Router } from "express";
import { obtenerHorarioAsistencia } from "../controllers/horarioAsistencia.js";

const router = Router();

router.get('/', obtenerHorarioAsistencia);

export default router;