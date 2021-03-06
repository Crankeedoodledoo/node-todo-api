const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('58fe0c33b3152e1ed455b008')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch docs', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch docs', err);
  // });

  // db.collection('Users').find({name: 'Mina'}).count().then((count) => {
  //   console.log(`Users count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch docs', err);
  // });

  db.collection('Users').find({
    name: 'Mina'
  }).toArray().then((docs) => {
    //console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch docs', err);
  });

//  db.close();
});
