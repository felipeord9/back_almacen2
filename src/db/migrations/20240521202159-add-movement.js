'use strict';
const {MOVEMENT_TABLE, MovementSchema} = require('../models/movementModel')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(MOVEMENT_TABLE,'client',{
      type: Sequelize.DataTypes.STRING,
      allowNull: true,
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
