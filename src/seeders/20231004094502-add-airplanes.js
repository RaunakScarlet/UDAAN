'use strict';

const {Op} = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
        await queryInterface.bulkInsert('Airplanes', [{
            modelNumber: 'airbus450',
            capacity: 400,
            createdAt: new Date(),
            updatedat: new Date()
        }, {
             modelNumber: 'airbus990',
            capacity: 100,
            createdAt: new Date(),
            updatedat: new Date()
        }])
        
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
      
      await queryInterface.bulkDelete(
          'Airplanes',
          {
              [Op.or]: [
                 
                  { modelNumber: 'airbus450' },
                   { modelNumber: 'airbus990'}
              ]
          });
    
  }
};
