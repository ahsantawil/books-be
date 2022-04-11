'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert(
      'Books', 
      [
        {
          title: 'David Bach: Faktor Latte',
          author: 'David Bach',
          image: '/uploads/image-1.jpg',
          published: new Date(),
          price: 90,
          stock: 100,
          user: 1,
          category: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: '"Selena" dan "Nebula"',
          author: 'TERE LIYE',
          image: '/uploads/image-2.jpg',
          published: new Date(),
          price: 90,
          stock: 100,
          user: 1,
          category: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Pelukis Bisu (the silent patient)',
          author: 'Alex Michelides',
          image: '/uploads/image-3.jpg',
          published: new Date(),
          price: 90,
          stock: 100,
          user: 1,
          category: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Kecamuk Darah (Troubled Blood)',
          author: 'Robert Galbraith',
          image: '/uploads/image-4.jpg',
          published: new Date(),
          price: 90,
          stock: 100,
          user: 1,
          category: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Kitab Kawin (Edisi Cover Baru)',
          author: 'Laksmi Pamuntjak',
          image: '/uploads/image-5.jpg',
          published: new Date(),
          price: 90,
          stock: 100,
          user: 1,
          category: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Salvator of a saint',
          author: 'Keigo Higashito',
          image: '/uploads/image-6.jpg',
          published: new Date(),
          price: 90,
          stock: 100,
          user: 1,
          category: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'One Piece',
          author: 'Eiciro Oda',
          image: '/uploads/image-7.jpg',
          published: new Date(),
          price: 90,
          stock: 100,
          user: 1,
          category: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], 
      {}
    );
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Books', null, {});
    
  }
};
