const mongoose = require('mongoose')

const userPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'The title is required'],
    minlength: 1,
  },
  post: {
    type: String,
    required: [true, 'The post needs an actual story'],
  },
})

const UserPost = mongoose.model('UserPost', userPostSchema)

module.exports = UserPost
