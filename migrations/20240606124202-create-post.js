'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },     
      nome: {
        type: Sequelize.STRING
      },
      sistema: {
        type: Sequelize.STRING
      },
      tipo_maquina: {
        type: Sequelize.STRING
      },
      porta: {
        type: Sequelize.STRING
      },
      endereco_ip: {
        type: Sequelize.STRING
      },
      endereco_mac: {
        type: Sequelize.STRING
      },
      fabricante: {
        type: Sequelize.STRING
      },
      usuario: {
        type: Sequelize.STRING
      },
      acesso: {
        type: Sequelize.STRING
      },
      ping: {
        type: Sequelize.STRING
      },
      rede: {
        type: Sequelize.STRING
      },
      processador: {
        type: Sequelize.STRING
      },
      memoria: {
        type: Sequelize.STRING
      },
      disco: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Posts');
  }
};