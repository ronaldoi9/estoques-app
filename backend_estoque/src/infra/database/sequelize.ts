import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize('database', 'dev', 'dev', {
    dialect: 'sqlite',
    storage: './src/infra/database/database.db'
})
