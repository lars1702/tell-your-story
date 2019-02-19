const mongoose = require('mongoose')

const { Schema } = mongoose

const userSchema = new Schema({ // instance
  userNumber: Number, // just an anonymous number?
  password: String,
},
{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})

const User = mongoose.model('User', userSchema)
module.exports = User
