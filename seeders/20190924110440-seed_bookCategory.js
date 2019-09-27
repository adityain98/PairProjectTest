'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('BookCategories', [{
        BookId: 1,
        CategoryId:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        BookId: 1,
        CategoryId:2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        BookId: 1,
        CategoryId:3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        BookId: 2,
        CategoryId:4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        BookId: 2,
        CategoryId:5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        BookId: 3,
        CategoryId:7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        BookId: 3,
        CategoryId:5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        BookId: 4,
        CategoryId:7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        BookId: 4,
        CategoryId:3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        BookId: 4,
        CategoryId:6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        BookId: 5,
        CategoryId:4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        BookId: 5,
        CategoryId:3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        BookId: 5,
        CategoryId:2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        BookId: 6,
        CategoryId:3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        BookId: 6,
        CategoryId:4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        BookId: 6,
        CategoryId:2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        BookId: 7,
        CategoryId:3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        BookId: 7,
        CategoryId:4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        BookId: 7,
        CategoryId:2,
        createdAt: new Date(),
        updatedAt: new Date()
      },

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
