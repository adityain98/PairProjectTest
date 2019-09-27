'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [{
        // id: 1,
        category: 'Horror',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 2,
        category: 'Thriller',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 3,
        category: 'Fiction',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 4,
        category: 'Mystery',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 5,
        category: 'Young Adult',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 6,
        category: 'Adult',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 7,
        category: 'Fantasy',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
