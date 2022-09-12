import { DataTypes } from 'sequelize'
import { sequelize } from '../database/db.js'

export const Feriado = sequelize.define('feriado', {
    idFeriado: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false
})