// const MongoClient = require('mongodb').MongoClient;
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) return console.log('Unable to connect to mongo db server');
    console.log('Connected to Mongo db server');

    // db.collection('Todos').insertOne({
    //     text: 'Something',
    //     completed: false
    // }, (err, result) => {
    //     if(err) return console.log('Unable to insert todo', err)
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'John D',
    //     age: 30,
    //     location: 'Paris'
    // }, (err, result) => {
    //     if(err) return console.log('Unable to insert the user', err)
    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // })

    db.collection('Todos').insertMany([
        {
            text: 'Something',
            completed: false
        },
        {
            text: 'Go to market @ 8:00PM',
            completed: false
        } ,
        {
            text: 'Eat Lunch',
            completed: true
        },
        {
            text: 'Eat Lunch',
            completed: true
        },
        {
            text: 'Eat Lunch',
            completed: true
        }
    ], (err, result) => {
        if(err) return console.log('Unable to insert todo', err)
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.close();
});
