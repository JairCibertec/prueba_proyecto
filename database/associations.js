import { Actividad } from "../models/Actividad.js";
import { Area } from "../models/Area.js";
import { Estado } from "../models/Estado.js";
import { Usuario } from "../models/Usuario.js";

/* Proyecto Asistencia */

//Un área tiene muchos usuarios
Area.hasMany(Usuario, { as: 'usuario', foreignKey: 'idArea' });
//Un usuario solo pertenece a un área
Usuario.belongsTo(Area, { as: 'area', foreignKey: 'idArea', targetKey: 'idArea' });

//Un usuario tiene muchas actividades
Usuario.hasMany(Actividad, { as: 'actividad', foreignKey: 'idUsuario' });
//Muchas actividades pertenecen a un usuario
Actividad.belongsTo(Usuario, { as: 'usuario', foreignKey: 'idUsuario', targetKey: 'idUsuario' });

//Un estado pertenece a una actividad
Estado.hasOne(Actividad, { as: 'actividad', foreignKey: 'idEstado' });
//Una actividad tiene un estado
Actividad.belongsTo(Estado, { as: 'estado', foreignKey: 'idEstado', targetKey: 'idEstado' });