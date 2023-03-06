//connect db
const MongoClient = require('mongodb').MongoClient;
const uri =
  'mongodb+srv://peterwmcclelland:7QUpYezr42dFs8sk@cluster0.xzibbyr.mongodb.net/this-weekend?retryWrites=true&w=majority';
const client = new MongoClient(
  uri,
  { useNewUrlParser: true },
  { useUnifiedTopology: true }
);

//create a function here using a callback
const connectDB = () =>
  client.connect((err) => {
    const collection = client.db('this-weekend').collection('users');
    // perform actions on the collection object
    client.close();
  });

module.exports = connectDB;