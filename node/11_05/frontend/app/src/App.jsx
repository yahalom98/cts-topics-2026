import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';


export default function App() {
  let [students, setStudents] = useState([]);
  let [title, setTitle] = useState('');
  let [content, setContent] = useState('');

  async function getStudents() {
    let response = await axios.get('https://localhost:3000/api/students');
    setStudents(response);
  }

  async function addData(event) {
    event.preventDefault();
    await axios.post('https://localhost:3000/api/students', {
      title,
      content
    })
    getStudents();
  }

  useEffect(() => {
    getStudents();
  }, [])


  return (
    <div>
      <div className="container">
        <form onSubmit={addData}>
          <input type="text" placeholder='Insert Student Name/tite'
            onChange={(event) => setTitle(event.target.value)} />

          <textarea onChange={(event) => setContent(event.target.value)} />
          <button type='submit'>Add student</button>
        </form>
      </div>
    </div>
  )
}
