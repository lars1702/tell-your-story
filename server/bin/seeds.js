require('dotenv').config()
const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const User = require("../models/User")
const { generateNumber } = require("../utils.js")

const salt = bcrypt.genSaltSync(10)
require('../configs/database')

mongoose
  .connect("mongodb://localhost/tell-your-story", { useNewUrlParser: true })
  .then((server) => {
    console.warn(`Connected to Mongo! Database name: "${server.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err)
  })

const users = [
  {
    userNumber: generateNumber(),
    password: bcrypt.hashSync("Lars", salt),
  },
  {
    userNumber: generateNumber(),
    password: bcrypt.hashSync("bob", salt),
  },
]

// refactor to a promise using async await somehow?

const blergh = new Promise(() => {
  User.deleteMany()
  .then(() => await User.create(users))
  .then((userCollection) => {
    console.warn(` users created: ${userCollection}`)
    // console.warn(`${userCollection.length} users created with the following id:`)
    console.warn(userCollection.map(user => user))
  })
  .then(() => mongoose.disconnect())
  .catch((err) => {
    mongoose.disconnect()
    throw err
  })
})