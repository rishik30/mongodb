// const MongoClient = require('mongodb').MongoClient;
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) return console.log('Unable to connect to mongo db server');
    console.log('Connected to Mongo db server');

    var collection = db.collection('Todos')

    //deleteMany
    // collection.deleteMany({text: 'Something'}).then((res) => {
    //     console.log(res)
    // })

    //deleteOne
    // collection.deleteOne({text: 'Eat Lunch'}).then((res) => {
    //     console.log(res)
    // })

    //findOneAndDelete
    collection.findOneAndDelete({completed: true}).then((res) => {
        console.log(res)
    })

    db.close();
});
