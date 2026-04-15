import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function Contact() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [content, setContent] = useState("");
  async function saveData() {
    const docRef = await addDoc(collection(db, "userContact"), {
      name: name,
      email: email,
      content: content,
    });
  }

  return (
    <div>
      <input type="text" onChange={(event)=> setName(event.target.value)} placeholder="Name"/>
      <input type="email" onChange={(event)=> setEmail(event.target.value)} placeholder="Email" />
      <input type="text" onChange={(event)=> setContent(event.target.value)} placeholder="Your request" />
      <button onClick={saveData}>Save</button>
    </div>
  );
}
