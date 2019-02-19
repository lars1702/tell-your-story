
require('dotenv').config()
const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const User = require("../models/User")

const salt = bcrypt.genSaltSync(10)
const generateNumber = () => {
  let ran = Math.floor(Math.random() * 1000000)
  console.log('DEBUG - ran, ran.toString(10).length', ran, ran.toString(10).length)
  return ran.toString(10)
  return ran.toString(10).length === 7
    ? ran
    : generateNumber()
}

require('../configs/database')

mongoose.connect(process.env.MONGODB_URI)

const users = [
  {
    userNumber: bcrypt.hashSync(generateNumber(), salt),
    password: bcrypt.hashSync("Lars", salt),
  },
  {
    userNumber: bcrypt.hashSync(generateNumber(), salt),
    password: bcrypt.hashSync("bob", salt),
  },
]

User.deleteMany()
  .then(() => User.create(users))
  .then((userCollection) => {
    console.warn(`${userCollection.length} users created with the following id:`)
    console.warn(userCollection.map(user => user._id))
  })
  .then(() => {
    mongoose.disconnect()
  })
  .catch((err) => {
    mongoose.disconnect()
    throw err
  })
