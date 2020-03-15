// //  CRUD operations

// // Importing mongodb package
// // Creating a mongodb client
// // const mongodb = require('mongodb');
// // const MongoClient = mongodb.MongoClient;
// // const ObjectID = mongodb.ObjectID;
// const { MongoClient, ObjectID } = require('mongodb');

// // setting up connection URL and dsatabase name
// const connectionURL = 'mongodb://127.0.0.1:27017';
// const databaseName = 'task-manager';

// // const id = new ObjectID();
// // console.log(id.id.length);
// // console.log(id.toHexString().length);
// // console.log(id.getTimestamp());

// // connecting to database
// MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
//   if (error) {
//     return console.log(error); // print error if any and return
//   }

//   const db = client.db(databaseName); // either find the database or create a new one with the name provided

//   // // WRITE ONE
//   // db.collection('users').insertOne({
//   //   name: 'Zoe',
//   //   age: 23
//   // }, (error, result) => {
//   //   if (error) {
//   //     return console.log('unable to insert user');
//   //   }

//   //   console.log(result.ops);
//   // });

//   // // WRITE MANY
//   // db.collection('users').insertMany([
//   // {
//   //   name: 'cyril',
//   //   age: 24
//   // },
//   // {
//   //   name: 'alex',
//   //   age: 23
//   // }], (error, result) => {
//   //   if (error) {
//   //     return console.log("couldn't insert documents");
//   //   }

//   //   console.log(result.ops);
//   // });

//   // // WRITE MANY
//   // db.collection('tasks').insertMany([
//   // {
//   //   description: 'this is my first task',
//   //   completed: true
//   // },
//   // {
//   //   description: 'this is my second task',
//   //   completed: true
//   // },
//   // {
//   //   description: 'this is my third task',
//   //   completed: false
//   // }], (error, result) => {
//   //   if (error) {
//   //     return console.log("couldn't write tasks to database")
//   //   }

//   //   console.log(result.ops);
//   // });

//   // // READ ONE
//   // db.collection('users').findOne({ _id: new ObjectID('5d9716e132a82e42daf17463') }, (error, user) => {
//   //   if (error) {
//   //     return console.log("Unable to fetch");
//   //   }

//   //   console.log(user);
//   // });

//   // // READ MANY
//   // db.collection('users').find({ age: 24 }).toArray((error, users) => {
//   //   if (error) {
//   //     return console.log(error);
//   //   }

//   //   console.log(users);
//   // });

//   // // READ ONE
//   // db.collection('tasks').findOne({ _id: new ObjectID('5dee7ceb715e71337dd4fe8a')}, (error, task) => {
//   //   if (error) {
//   //     return console.log(error);
//   //   }

//   //   console.log(task);
//   // });

//   // // READ MANY
//   // db.collection('tasks').find({ completed: true }).toArray((error, tasks) => {
//   //   if (error) {
//   //     return console.log(error);
//   //   }

//   //   console.log(tasks);
//   // });

//   // // UPDATE ONE
//   // db.collection('users').updateOne({
//   //   _id: new ObjectID('5defb731c3551d5465c2646e')
//   // }, {
//   //   $inc: {
//   //     age: -1
//   //   }
//   // }).then((result) => {
//   //   console.log(result);
//   // }).catch((error) => {
//   //   console.log(error);
//   // });

//   // // UPDATE MANY
//   // db.collection('tasks').updateMany({
//   //   completed: false
//   // }, {
//   //   $set: {
//   //     completed: true
//   //   }
//   // }).then((result) => {
//   //   console.log(result);
//   // }).catch((error) => {
//   //   console.log(error);
//   // })

//   //  DELETE MANY
//   db.collection('users').deleteMany({
//     age: 23
//   }).then((result) => {
//     console.log(result);
//   }).catch((error) => {
//     console.log(error);
//   })

//   // DELETE ONE
//   db.collection('tasks').deleteOne({
//     _id: new ObjectID('5dee7ceb715e71337dd4fe8a')
//   }).then((result) => {
//     console.log(result);
//   }).catch((error) => {
//     console.log(error);
//   })
// });
