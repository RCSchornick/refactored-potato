const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'mikejtb66',
    email: 'mikeisolds@gmail.com',
    password: 'password123'
  },
  {
    username: 'sandraeb62',
    email: 'ilovepiano@gmail.com',
    password: 'password123'
  },
  {
    username: 'lukeimnotyourfather29',
    email: 'vadersucks@gmail.com',
    password: 'password123'
  },
  {
    username: 'andykin11',
    email: 'padmeismymom@gmail.com',
    password: 'password123'
  },
  {
    username: 'charlie08',
    email: 'charlesincharge@gmail.com',
    password: 'password123'
  },
  {
    username: 'molly01',
    email: 'mollyoutdoors@gmail.com',
    password: 'password123'
  },
  {
    username: 'zoe0002',
    email: 'zoedoesntexist@gmail.com',
    password: 'password123'
  },
  {
    username: 'peter0003',
    email: 'peteriswill@gmail.com',
    password: 'password123'
  },
  {
    username: 'arcie30',
    email: 'idonthaveabirthday@gmail.com',
    password: 'password123'
  },
  {
    username: 'willemma004',
    email: 'momwantsus@gmail.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
