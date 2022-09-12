import Sequelize from 'sequelize';

export const sequelize = new Sequelize('probando', 'root', 'mysql', {
    host: 'localhost',
    dialect: 'mysql',
    port: '3308'
})