import { DataTypes } from 'sequelize'
import { sequelize } from '../database/db.js'

export const Actividad = sequelize.define('actividad', {
    idActividad: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Usuario',
            key: 'idUsuario'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    dia: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    ingreso_actividad: {
        type: DataTypes.TIME,
        allowNull: false
    },
    salida_actividad: {
        type: DataTypes.TIME,
        allowNull: false
    },
    inicio_actividad: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    fin_actividad: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false
})