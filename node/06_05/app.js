const { MongoClient, ObjectId } = require("mongodb");

// MongoDB local connection
const uri = "mongodb://127.0.0.1:27017";

const client = new MongoClient(uri);

async function main() {
  try {
    // 1. Connect to MongoDB
    await client.connect();
    console.log("Connected to MongoDB");

    // 2. Choose database and collection
    const db = client.db("school_db");
    const students = db.collection("students");

    // 3. Create one student
    await students.insertOne({
      name: "Dana",
      age: 24,
      course: "Fullstack",
    });

    console.log("Student added");

    // 4. Create many students
    await students.insertMany([
      { name: "Omer", age: 28, course: "Fullstack" },
      { name: "Maya", age: 22, course: "Data" },
      { name: "Yossi", age: 31, course: "DevOps" },
    ]);

    console.log("Many students added");

    // 5. Read all students
    const allStudents = await students.find().toArray();
    console.log("All students:");
    console.log(allStudents);

    // 6. Find one student
    const oneStudent = await students.findOne({ name: "Dana" });
    console.log("One student:");
    console.log(oneStudent);

    // 7. Find students by course
    const fullstackStudents = await students
      .find({ course: "Fullstack" })
      .toArray();

    console.log("Fullstack students:");
    console.log(fullstackStudents);

    // 8. Update one student
    await students.updateOne(
      { name: "Dana" },
      { $set: { age: 25 } }
    );

    console.log("Dana updated");

    // 9. Delete one student
    await students.deleteOne({ name: "Yossi" });

    console.log("Yossi deleted");

    // 10. Count students
    const count = await students.countDocuments();
    console.log("Number of students:", count);

  } catch (error) {
    console.log("Error:", error);
  } finally {
    await client.close();
    console.log("Connection closed");
  }
}

main();