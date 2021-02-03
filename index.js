const { MongoClient } = require("mongodb");
const dotenv = require('dotenv');
dotenv.config();
// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PWD}@gettingstarted.qo8mz.mongodb.net?retryWrites=true&writeConcern=majority`;
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    const database = client.db('sample_mflix');
    const collection = database.collection('movies');
    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await collection.findOne(query);
    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
