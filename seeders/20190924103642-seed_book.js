'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Books',[{
        // id: 1,
        name: "The Outside",
        stock: 10,
        gambar: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1544647268l/40947778._SY475_.jpg",
        description: "Autistic scientist Yasira Shien has developed a radical new energy drive that could change the future of humanity. But when she activates it, reality warps, destroying the space station and everyone aboard. The AI Gods who rule the galaxy declare her work heretical, and Yasira is abducted by their agents. Instead of simply executing her, they offer mercy – if she’ll help them hunt down a bigger target: her own mysterious, vanished mentor. With her homeworld’s fate in the balance, Yasira must choose who to trust: the gods and their ruthless post-human angels, or the rebel scientist whose unorthodox mathematics could turn her world inside out.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 2,
        name: "Here There Are Monsters",
        stock: 14,
        gambar: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1543858837l/36445966._SY475_.jpg",
        description: "The Blair Witch Project meets Imaginary Girls in this story of codependent sisterhood, the struggle to claim one’s own space, and the power of secrets Sixteen-year-old Skye is done playing the knight in shining armor for her insufferable younger sister, Deirdre. Moving across the country seems like the perfect chance to start over. In their isolated new neighborhood, Skye manages to fit in, but Deirdre withdraws from everyone, becoming fixated on the swampy woods behind their house and building monstrous sculptures out of sticks and bones. Then Deirdre disappears. And when something awful comes scratching at Skye's window in the middle of the night, claiming she's the only one who can save Deirdre, Skye knows she will stop at nothing to bring her sister home.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 3,
        name: "House of Salt and Sorrows",
        stock: 17,
        gambar: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1544071699l/39679076.jpg",
        description: "In a manor by the sea, twelve sisters are cursed. Annaleigh lives a sheltered life at Highmoor, a manor by the sea, with her sisters, their father, and stepmother. Once they were twelve, but loneliness fills the grand halls now that four of the girls' lives have been cut short. Each death was more tragic than the last—the plague, a plummeting fall, a drowning, a slippery plunge—and there are whispers throughout the surrounding villages that the family is cursed by the gods. Disturbed by a series of ghostly visions, Annaleigh becomes increasingly suspicious that the deaths were no accidents.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 4,
        name: "The Dragon Republic",
        stock: 11,
        gambar: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1539963703l/41118857._SY475_.jpg",
        description: "The searing follow-up to 2018’s most celebrated fantasy debut – THE POPPY WAR. In the aftermath of the Third Poppy War, shaman and warrior Rin is on the run: haunted by the atrocity she committed to end the war, addicted to opium, and hiding from the murderous commands of her vengeful god, the fiery Phoenix. Her only reason for living is to get revenge on the traitorous Empress who sold out Nikan to their enemies.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 5,
        name: "A Better Man",
        stock: 18,
        gambar: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1426872513l/23507698.jpg",
        description: "Every couple has a wish list. Maya wants: Nick to come home earlier, To engage with their children, To engage with her. Nick wants . . . A divorce. Having decided that their marriage is over, Nick is determined to leave quickly and with dignity. But when he looks into the financial realities of splitting up, he realizes that more of his hard-earned income than he can handle will go to Maya.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 6,
        name: "The Swallows",
        stock: 13,
        gambar: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1553520339l/43744294.jpg",
        description: "A new teacher at a New England prep school ignites a gender war--with deadly consequences--in a provocative novel from the bestselling author of The Passenger and the Spellman Files series. What do you love? What do you hate? What do you want? It starts with this simple writing prompt from Alex Witt, Stonebridge Academy's new creative writing teacher. When the students' answers raise disturbing questions of their own, Ms. Witt knows there's more going on the school than the faculty wants to see. She soon learns about The Ten--the students at the top of the school's social hierarchy--as well as their connection to something called The Darkroom. Ms. Witt can't remain a passive observer.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 7,
        name: "The Turn of the Key",
        stock: 19,
        gambar: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1548169391l/40489648._SY475_.jpg",
        description: "When she stumbles across the ad, she’s looking for something else completely. But it seems like too good an opportunity to miss—a live-in nannying post, with a staggeringly generous salary. And when Rowan Caine arrives at Heatherbrae House, she is smitten—by the luxurious “smart” home fitted out with all modern conveniences, by the beautiful Scottish Highlands, and by this picture-perfect family. What she doesn’t know is that she’s stepping into a nightmare—one that will end with a child dead and herself in prison awaiting trial for murder. Writing to her lawyer from prison, she struggles to explain the unravelling events that led to her incarceration.",
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
