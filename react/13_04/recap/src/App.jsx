import React from "react";
import Nav from "./components/Nav/Nav";
import { useState } from "react";

export default function App() {
  let [data, setData] = useState([]);

  function saveData() {
    // setData([
    //   {
    //     id: 1,
    //     title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    //     price: 109.95,
    //     description:
    //       "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    //     category: "men's clothing",
    //     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    //     rating: {
    //       rate: 3.9,
    //       count: 120,
    //     },
    //   },
    //   {
    //     id: 2,
    //     title: "Mens Casual Premium Slim Fit T-Shirts ",
    //     price: 22.3,
    //     description:
    //       "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    //     category: "men's clothing",
    //     image:
    //       "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
    //     rating: {
    //       rate: 4.1,
    //       count: 259,
    //     },
    //   },
    // ]);
    // console.log(data);

    fetch('https://fakestoreapi.com/products')
    .then((response)=>{
      return response.json();
    })
    .then((afik)=>{
      console.log(afik);
      setData(afik);
    })
  }

  

  function b() {
    setData("Tal");
    console.log(data);
  }
  function c() {
    setData("Omri");
  }
  function d() {
    setData("Lee");
  }

  console.log(data);

  return (
    <div>
      <Nav />
      {data.map(function(value){
        console.log(value.title);
        return(
          <h1>{value.title}</h1>
        )
      })}
      <button onClick={saveData}>Change name</button>
      <button onClick={b}>Change name</button>
      <button onClick={c}>Change name</button>
      <button onClick={d}>Change name</button>
    </div>
  );
}
