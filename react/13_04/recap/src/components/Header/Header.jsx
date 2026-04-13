import React from 'react'

export default function Header() {

    let x = 100;

    function omer(){
        let x = 200;
    }


  return (
    <div>
        <div className="container">
            <div className="left">
                <h1></h1>
                <p>{x}</p>
                <button></button>
            </div>
            <div className="right">
                <img src="" alt="" />
            </div>
        </div>
    </div>
  )
}
