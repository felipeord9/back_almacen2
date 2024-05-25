'use strict';
const {MOVEMENT_TABLE, MovementSchema} = require('../models/movementModel')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(MOVEMENT_TABLE,'lote',{
      type: Sequelize.DataTypes.STRING,
      allowNull: true,
    })
    await queryInterface.addColumn(MOVEMENT_TABLE,'fechaVencimiento',{
      type: Sequelize.DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.NOW,
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
