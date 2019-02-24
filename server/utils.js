const User = require("./models/User")

module.exports = {
  generateNumber: async (counter = 0) => {
    if (counter > 40) return console.error("the function 'generateNumber' was executed above the limit.")
    const rand = Math.floor(1000000 + Math.random() * 9000000)
    const theUser = await User.findOne({ rand })
    console.log('DEBUG - theUser', theUser)
    if (Boolean(theUser)) module.exports.generateNumber(counter++)
    console.log('DEBUG - theUser, rand', theUser, rand.toString(10))
    return rand.toString(10)
  },
}
