const express = require('express')
const { isLoggedIn } = require('../middlewares')

const router = express.Router()

router.get('/secret', isLoggedIn, (req, res) => {
  res.json({
    secret: 42,
    user: req.user,
  })
})

module.exports = router
