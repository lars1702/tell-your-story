
require('dotenv').config()
const mongoose = require("mongoose")
const bcryptjs = require("bcryptjs")
const User = require("../models/User")

const bcryptjsSalt = 10

require('../configs/database')

const users = [
  {
    username: "Lars",
    password: bcryptjs.hashSync("Lars", bcryptjs.genSaltSync(bcryptjsSalt)),
  },
  {
    username: "bob",
    password: bcryptjs.hashSync("bob", bcryptjs.genSaltSync(bcryptjsSalt)),
  },
]

User.deleteMany()
  .then(() => User.create(users))
  .then((usersCreated) => {
    console.warn(`${usersCreated.length} users created with the following id:`)
    console.warn(usersCreated.map(user => user._id))
  })
  .then(() => {
    mongoose.disconnect()
  })
  .catch((err) => {
    mongoose.disconnect()
    throw err
  })
