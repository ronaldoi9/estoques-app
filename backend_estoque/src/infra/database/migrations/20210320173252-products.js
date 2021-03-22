'use strict'

const { INTEGER, STRING, DOUBLE, DATE } = require('sequelize')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('products', {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: STRING,
        allowNull: false
      },
      quantity: {
        type: INTEGER,
        allowNull: false
      },
      price: {
        type: DOUBLE,
        allowNull: false
      },
      createdAt: {
        type: DATE,
        allowNull: false
      },
      updatedAt: {
        type: DATE,
        allowNull: false
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products')
  }
}