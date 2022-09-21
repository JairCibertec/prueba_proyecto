import { DataTypes } from 'sequelize'
import { sequelize } from '../database/db.js'

export const Horario_Asistencia = sequelize.define('horario_asistencia', {
    idHorarioAsistencia: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idActividad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Actividad',
            key: 'idActividad'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    idUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    hora_ingreso: {
        type: DataTypes.TIME,
        allowNull: false
    },
    hora_salida: {
        type: DataTypes.TIME,
        allowNull: false
    },
    idEstado: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'estado',
            key: 'idEstado'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }
}, {
    freezeTableName: true,
    timestamps: false
})