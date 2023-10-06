'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flightNumber: {
          type: Sequelize.STRING,
           allowNull:false
      },
      airplaneId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
              model: 'Airplanes',
              key:'id'
          },
          onDelete:'CASCADE'
      },
      departureAirportId: {
          type: Sequelize.STRING,
          allowNull: false,
          references: {
              model: 'Airports',
              key:'code'
          },
          onDelete:'CASCADE'
      },
      arrivalAirportId: {
          type: Sequelize.STRING,
          allowNull: false,
           references: {
              model: 'Airports',
              key:'code'
          },
          onDelete:'CASCADE'
      },
      price: {
          type: Sequelize.INTEGER,
           allowNull:false
      },
      boardingGateway: {
        type: Sequelize.STRING
      },
      totalSeats: {
          type: Sequelize.INTEGER,
           allowNull:false
      },
      arrivalTime: {
          type: Sequelize.DATE,
           allowNull:false
      },
      departueTime: {
          type: Sequelize.DATE,
           allowNull:false
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
    await queryInterface.dropTable('Flights');
  }
};