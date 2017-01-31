// const MongoClient = require('mongodb').MongoClient;
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) return console.log('Unable to connect to mongo db server');
    console.log('Connected to Mongo db server');

    db.collection('Todos')
        .find()
        .toArray()
        .then((docs) => {
        console.log('Todos')
        console.log(JSON.stringify(docs, undefined, 2))
        })
        .catch((err) => {

        })

    db.close();
});
