const dotEnv = require('dotenv')
const mongoose = require("mongoose")
dotEnv.config()

mongoose.connect(process.env.MONGODB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then((response) => {
  console.log('Connected to MongoDB Cloud Successfully.');
}).catch((error) => {
  console.error(error);
});

const client = mongoose.connection;

client.on('error', (err) => console.log(err.message));

module.exports = client