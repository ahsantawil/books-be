'use strict';
const bycrypt = require('bcryptjs');

module.exports = {
  async up (queryInterface, Sequelize) {
      const password = bycrypt.hashSync('rahasia', 10) 
      await queryInterface.bulkInsert(
        'Users', 
        [
            {
              name: 'John Doe',
              email: 'admin@gmail.com',
              password: password,
              role:'admin',
              createdAt: new Date(),
              updatedAt: new Date()
           },
            {
              name: 'Ahsan',
              email: 'ahsan@gmail.com',
              password: password,
              role:'admin',
              createdAt: new Date(),
              updatedAt: new Date()
           },
        ], 
        {}
      );
  },

  async down (queryInterface, Sequelize) {
  
      await queryInterface.bulkDelete('Users', null, {});
    
  }
};
