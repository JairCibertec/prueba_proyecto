import { response } from "express"
import { Area } from "../models/Area.js";
import { Usuario } from "../models/Usuario.js"
import { Estado } from "../models/Estado.js"
import { Feriado } from "../models/Feriado.js";

export const obtenerUsuarios = async (req, res = response) => {

    let usuarios_All = await Usuario.findAll({
        include:
        {
            model: Area,
            as: 'area'
        },
        attributes: { exclude: ['idArea'] }
    });
    res.status(200).json({
        usuarios_All
    })
}

export const crearUsuario = async (req, res = response) => {

    /* const { name, email, password } = req.body; */
    const user = await Usuario.create(req.body);

    console.log(req.body);

    res.status(200).json({
        ok: true,
        user
    })
}

export const editarUsuario = async (req, res = response) => {

    /* const { name, email, password } = req.body; */
    const user = await Usuario.update(req.body, {
        where: { idUsuario: req.params.id }
    });

    console.log(req.body);

    res.status(200).json({
        ok: true,
        user
    })
}


export const eliminarUsuario = async (req, res = response) => {

    /* const { name, email, password } = req.body; */
    const user = await Usuario.update({ actividad_usuario: 1 }, {
        where: { idUsuario: req.params.id }
    });

    console.log(req.body);

    res.status(200).json({
        ok: true,
        user
    })
}