
const dotenv = require('dotenv')
console.log("2 --->  ", __dirname)
dotenv.config({ path: __dirname.concat('\\..\\.env') }) // dont forget to set the path when using dotenv
const mongoose = require('mongoose')

// console.log('DEBUG - mongoose', mongoose)
// console.log(__dirname)
const dbName = `localhost/tell-your-story-fallback`
const uri = `mongodb://${process.env.MONGODB_URI || dbName}`
console.warn("SERVER:", process.env.MONGODB_URI, "at port:", process.env.PORT)


mongoose
  .connect(uri, { useNewUrlParser: true })
  .then((x) => {
    console.warn(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err)
  })
