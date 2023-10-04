const db = require('../config/connection');

const { User } = require('../models');

const userSeeds = require('./userSeeds.json');

db.once('open', async () => {
  try {
    // delete existing data when data is seeded
    await User.deleteMany({});

    // seed Users and Pins (with comments)
    await User.create(userSeeds);

    console.log('Database seeding complete.');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
});
