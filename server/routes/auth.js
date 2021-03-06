const express = require("express")
const bcryptjs = require("bcryptjs")
const passport = require('passport')
const User = require("../models/User")

const router = express.Router()

const bcryptjsSalt = 10

router.post("/signup", (req, res, next) => {
  const { username, password } = req.body
  if (!username || !password) {
    res.status(401).json({ message: "Indicate username and password" })
    return
  }
  User.findOne({ username })
    .then((user) => {
      if (user !== null) {
        res.status(401).json({ message: "The username already exists" })
        return
      }
      const salt = bcryptjs.genSaltSync(bcryptjsSalt)
      const hashPass = bcryptjs.hashSync(password, salt)
      const newUser = new User({ username, password: hashPass })
      newUser.save()
    })
    .then((user) => {
      res.json(user)
    })
    .catch((err) => {
      next(err)
    })
})

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
    if (err) {
      res.status(500).json({ message: 'Something went wrong' })
      return
    }

    if (!theUser) {
      res.status(401).json(failureDetails)
      return
    }

    req.login(theUser, () => {
      if (err) {
        res.status(500).json({ message: 'Something went wrong' })
        return
      }

      // We are now logged in (notice req.user)
      res.json(req.user)
    })
  })(req, res, next)
})

router.get("/logout", (req, res) => {
  req.logout()
  res.json({ message: 'You are logged out!' })
})

module.exports = router
