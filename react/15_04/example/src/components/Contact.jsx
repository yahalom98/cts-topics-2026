import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function Contact() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [content, setContent] = useState("");
  async function saveData() {
    const docRef = await addDoc(collection(db, "userContact"), {
      name: "Tokyo",
      email: "",
      content: "",
    });
  }

  return (
    <div>
      <input type="text" placeholder="Name"/>
      <input type="email" placeholder="Email" />
      <input type="text" placeholder="Your request" />
      <button onClick={saveData}>Save</button>
    </div>
  );
}
