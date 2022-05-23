module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "usuarios",
      [
        {
          nome: "Ana ",
          sobrenome: "Souza",
          email: "ana@ana.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Marcos",
          sobrenome: "Cintra",
          email: "marcos@marcos.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Felipe ",
          sobrenome: "Cardoso",
          email: "felipe@felipe.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Sandra",
          sobrenome: "Gomes",
          email: "sandra@sandra.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Paula",
          sobrenome: "Morais",
          email: "paula@paula.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Sergio",
          sobrenome: "Lopes",
          email: "sergio@sergio.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Pessoas", null, {});
  },
};

// 'use strict';

// module.exports = {
//   async up (queryInterface, Sequelize) {

//      // Add seed commands here.

//     //  Example:
//       // await queryInterface.bulkInsert('People', [{
//       //   name: 'John Doe',
//       //   isBetaMember: false
//       // }], {});

//   },

//   async down (queryInterface, Sequelize) {
//     /**
//      * Add commands to revert seed here.
//      *
//      * Example:
//      * await queryInterface.bulkDelete('People', null, {});
//      */
//   }
// };
