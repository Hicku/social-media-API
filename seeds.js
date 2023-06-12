
const mongoose = require('mongoose');
const User = require('./models/users');

mongoose.connect('mongodb://localhost:27017/socialMediaDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

// Create an array of user objects for seed data
const seeds = [
  {
    username: 'john_doe',
    email: 'john@example.com',
    thoughts: [], 
    friends: [], 
  },
  {
    username: 'jane_smith',
    email: 'jane@example.com',
    thoughts: [],
    friends: [],
  },
 
];

// Function to seed the users
async function seedUsers() {
  try {
    // Delete existing users (optional)
    await User.deleteMany().maxTimeMS(30000);

    // Insert the seed data
    const createdUsers = await User.insertMany(seeds);

    console.log('Seed data inserted successfully:', createdUsers);
  } catch (error) {
    console.error('Error seeding users:', error);
  } finally {
    // Close the database connection (if required)
    // mongoose.connection.close();
  }
}

// Call the seedUsers function to seed the data
seedUsers();