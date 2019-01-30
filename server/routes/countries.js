const express = require('express')
const Country = require('../models/Country')

const countries = express.Router()

// Route to get all countries
countries.get('/', (req, res, next) => {
  Country.find()
    .then((countryList) => {
      res.json(countryList)
    })
    .catch(err => next(err))
})

// Route to add a country
countries.post('/', (req, res, next) => {
  const { name, capitals, area, description } = req.body
  Country.create({ name, capitals, area, description })
    .then((country) => {
      res.json({
        success: true,
        country,
      })
    })
    .catch(err => next(err))
})

module.exports = countries
