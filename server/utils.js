const User = require("./models/User")

module.exports = {
  generateNumber: async (counter = 0) => {
    if (counter > 40) return console.error("the function 'generateNumber' was executed above the limit.")
    const rand = Math.floor(1000000 + Math.random() * 9000000)
    return User
      .findOne({ rand })
      .then((user) => {
        console.log('DEBUG - user, rand', user, rand.toString(10))
        if (user === rand) return module.exports.generateNumber(counter++) // much like a for-loop
        return rand.toString(10)
      })
  },
}
