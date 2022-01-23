'use strict';

module.exports = {
  async up (queryInterface, Sequelize)
  {
    await queryInterface.bulkInsert('Levels',
    [
      {
        level_description: 'basic',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        level_description: 'intermediate',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        level_description: 'advanced',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize)
  {
    await queryInterface.bulkDelete( 'Levels', null, {} );
  }
};
