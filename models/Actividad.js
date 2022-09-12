import { DataTypes } from 'sequelize'
import { sequelize } from '../database/db.js'

export const Actividad = sequelize.define('actividad', {
    idActividad: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    dia: {
        type: DataTypes.DATE,
        allowNull: false
    },
    hora_ingreso: {
        type: DataTypes.TIME,
        defaultValue: undefined,
        allowNull: false
    },
    hora_salida: {
        type: DataTypes.TIME,
        defaultValue: undefined,
        allowNull: false
    },
    fec_inicio: {
        type: DataTypes.DATE,
        allowNull: false
    },
    fec_fin: {
        type: DataTypes.DATE,
        allowNull: false
    },
    hora_ing_reg: {
        type: DataTypes.TIME,
        defaultValue: undefined,
        allowNull: false
    },
    hora_sal_reg: {
        type: DataTypes.TIME,
        defaultValue: undefined,
        allowNull: false
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
    idEstado: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Estado',
            key: 'idEstado'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }
}, {
    freezeTableName: true,
    timestamps: false
})