import { Router } from "express";
import { crearUsuario, editarUsuario, eliminarUsuario, obtenerUsuarios } from "../controllers/usuarios.js";

const router = Router();

router.get('/', obtenerUsuarios);
router.post('/crear', crearUsuario);
router.put('/editar/:id', editarUsuario);
router.delete('/eliminar/:id', eliminarUsuario);

export default router;