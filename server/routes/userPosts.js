const express = require('express')
const UserPost = require('../models/UserPost')

const userPosts = express.Router()

// Route to get all userPosts
userPosts.get('/', (req, res, next) => {
  UserPost.find()
    .then((posts) => {
      res.json(posts)
    })
    .catch(err => next(err))
})

// Route to add a userPost
userPosts.post('/', (req, res, next) => {
  const { name, capitals, area, description } = req.body
  UserPost.create({ name, capitals, area, description })
    .then((post) => {
      res.json({
        success: true,
        post,
      })
    })
    .catch(err => next(err))
})

module.exports = userPosts
