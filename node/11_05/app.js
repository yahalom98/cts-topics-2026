// // CRUD - Create Read Update Delete
// // Create

// // InsertOne
// SchoolDb.students.insertOne({
//   name: "Omer",
//   age: "50",
//   course: "Cooking",
// });

// // InsertMany
// SchoolDb.students.insertMany([
//   {
//     name: "Omer",
//     age: "50",
//     course: "Cooking",
//   },
//   {
//     name: "Omer",
//     age: "50",
//     course: "Cooking",
//   },
// ]);

// // Read
// SchoolDb.students.find();
// SchoolDb.students.find({course:'Cooking'});
// SchoolDb.students.findOne({course:'Cooking'});

// // Update
// SchoolDb.students.updateOne(
//     {_id:'jkaflsdhjkfsdal;fhsadiu'},
//     {$set:{age:40}}
// );

let { MongoClient } = require("mongodb");
// URI
let uri = "mongodb://localhost:27017/";
// Variable for MongoClient
let client = new MongoClient(uri);

async function createConnection() {
  try {
    await client.connect();
    console.log("Kooli Booli");

    let db = client.db("Fruits");
    let fruits = db.collection("summer-fruits");
    let data = await fruits.insertOne({
      type: "Summer Fruit",
      name: "MangoDB",
    });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}


createConnection();