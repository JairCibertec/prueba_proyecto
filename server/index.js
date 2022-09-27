import express from "express";
import { sequelize } from '../database/db.js';
import usuario from '../routes/usuario.js';
import actividad from '../routes/actividad.js';
import horarioAsistencia from '../routes/horarioAsistencia.js';
import '../database/associations.js';

//Crear el servidor de Express
const app = express();

//Lectura y parseo del body
app.use(express.json());

//Rutas
//TODO: auth // crear, login, token
/* app.use('/api/auth/', auth) */

//TODO: asistencias: Eventos
app.use('/api/usuario/', usuario);
app.use('/api/actividad/', actividad);
app.use('/api/horario/', horarioAsistencia);

async function main() {
    try {
        await sequelize.sync();
        console.log('La conección a la BD ha sido exitosa.');

        //Escuchar peticiones
        app.listen(4500);
        console.log(`Server escuchando en puerto 4500`);

    } catch (error) {
        console.error('No se pudo conectar a la BD:', error);
    }
}

main();