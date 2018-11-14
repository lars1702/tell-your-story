require('dotenv').config({ path: __dirname + '/../.env' }); //dont forget to set the path when using dotenv
const mongoose = require('mongoose');

const dbName = `localhost/tell-your-story-fallback`
const uri = `mongodb://${process.env.MONGODB_URI || dbName}`;
console.log("SERVER:", process.env.MONGODB_URI, "at port:", process.env.PORT)


mongoose
  .connect(uri, { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });