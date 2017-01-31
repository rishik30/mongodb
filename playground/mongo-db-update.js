// const MongoClient = require('mongodb').MongoClient;
const MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) return console.log('Unable to connect to mongo db server');
    console.log('Connected to Mongo db server');

    var collection = db.collection('Todos')

    // collection.findOneAndUpdate({completed: true},
    // {
    //     $set: {
    //         completed: false
    //     }
    // },
    // {
    //     returnOriginal: false
    // }
    // )
    // .then((res) => {
    //     console.log(res)
    // })
    // .catch((err) => {})

    db.collection('Users').update(
        {age: 30},
        {$inc: {
            age: 10
        }},
        {multi: true}
    )
    .then((res) => {
        console.log(res)
    })

    db.close();
});
