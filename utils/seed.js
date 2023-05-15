const connection = require('../config/connection');
const { User, Post } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');

console.time('seeds firing...');

connection.once('open', async () => {
  // delete all data from the database
  await User.deleteMany({});
  await Post.deleteMany({});

  // empty array for posts
  const posts = [];

  // create users with user data
  await User.insertMany(userData);

  // create posts with post data
  await Post.insertMany(postData);

  // create reactions with reaction data
});

console.log('Seeding complete!');