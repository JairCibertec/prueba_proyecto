import { response } from "express"
import { Actividad } from "../models/Actividad.js";
import { Horario_Asistencia } from "../models/Horario_Asistencia.js";
import { Usuario } from "../models/Usuario.js"


export const obtenerHorarioAsistencia = async (req, res = response) => {

    let horario_asistencia = await Horario_Asistencia.findAll({
        include:
            [{
                model: Actividad,
                as: 'actividad'
            }
            ],
        /* attributes: { exclude: ['idActividad', 'idUsuario'] } */
    });
    res.status(200).json({
        horario_asistencia
    })
}

