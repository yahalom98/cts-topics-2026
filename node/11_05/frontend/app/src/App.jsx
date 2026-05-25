import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [students, setStudents] = useState([]);

  async function getStudents() {
    const response = await axios.get("http://localhost:3000/api/students");
    setStudents(response.data);
  }

  useEffect(() => {
    getStudents();
  }, []);

  async function addData(event) {
    event.preventDefault();

    await axios.post("http://localhost:3000/api/students", {
      title,
      content,
      category,
    });

    setTitle("");
    setContent("");
    setCategory("");

    getStudents();
  }

  useEffect(()=>{
    getStudents();
  },[])

  return (
    <div>
      <div className="container">
        <h1>Students</h1>
        <div className="student-container">
          {students.map(function(student){
            return(
              <div className="student-card">
                <h2>{student.title}</h2>
                <p>{student.content}</p>
                <p>{student.category}</p>
              </div>
            )
          })}
        </div>

        <form onSubmit={addData}>
          <input
            type="text"
            placeholder="Insert Student Name / Title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />

          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />

          <textarea
            placeholder="Content"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />

          <button type="submit">Add student</button>
        </form>

        <hr />
      </div>
    </div>
  );
}
