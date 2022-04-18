'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  async up (queryInterface, Sequelize) {
      const password = bcrypt.hashSync('rahasia', 10) 
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
