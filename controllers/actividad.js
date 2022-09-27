import { response } from "express"
import { Actividad } from "../models/Actividad.js";
import { Area } from "../models/Area.js";
import { Usuario } from "../models/Usuario.js"


export const obtenerActividades = async (req, res = response) => {

    let actividades_All = await Actividad.findAll({
        include:
        {
            model: Usuario,
            as: 'usuario'
        },
        attributes: { exclude: ['idUsuario'] }
    });
    res.status(200).json({
        actividades_All
    })
}

export const crearActividad = async (req, res = response) => {

    /* const { name, email, password } = req.body; */
    const actividad = await Actividad.create(req.body);

    console.log(req.body);

    res.status(200).json({
        ok: true,
        actividad
    })
}

export const editarActividad = async (req, res = response) => {

    /* const { name, email, password } = req.body; */
    const actividad = await Actividad.update(req.body, {
        where: { idActividad: req.params.id }
    });

    console.log(req.body);

    res.status(200).json({
        ok: true,
        actividad
    })
}


export const eliminarActividad = async (req, res = response) => {

    /* const { name, email, password } = req.body; */
    const actividad = await Actividad.destroy({
        where: { idActividad: req.params.id }
    });

    console.log(req.body);

    res.status(200).json({
        ok: true,
        actividad
    })
}