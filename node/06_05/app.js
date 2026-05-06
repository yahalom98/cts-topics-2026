const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const connectionURL = "mongodb://localhost:27017/test";
const databaseName = "test";
MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }
    const db = client.db(databaseName);
    db.collection("kooli").insertMany(
      [
        {
          description: "Clean the house",
          completed: true,
        },
        {
          description: "Renew inspection",
          completed: false,
        },
      ],
      (error, result) => {
        if (error) {
          return console.log("Unable to insert tasks!");
        }
        console.log(result.ops);
      },
    );
  },
);
