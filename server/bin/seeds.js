
require('dotenv').config();
const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const User = require("../models/User");

const bcryptjsSalt = 10;

require('../configs/database')

let users = [
  {
    username: "Lars",
    password: bcryptjs.hashSync("Lars", bcryptjs.genSaltSync(bcryptjsSalt)),
  },
  {
    username: "bob",
    password: bcryptjs.hashSync("bob", bcryptjs.genSaltSync(bcryptjsSalt)),
  }
]

User.deleteMany()
  .then(() => {
    return User.create(users)
  })
  .then(usersCreated => {
    console.log(`${usersCreated.length} users created with the following id:`);
    console.log(usersCreated.map(u => u._id));
  })
  .then(() => {
    mongoose.disconnect()
  })
  .catch(err => {
    mongoose.disconnect()
    throw err
  })