import React from 'react'


// https://api.escuelajs.co/api/v1/products

import { useState, useEffect } from 'react'

export default function Ecommerce() {
    let [api, setApi] = useState([])

    async function loadData() {
        let data = await fetch('https://api.escuelajs.co/api/v1/products');
        let result = await data.json();

        console.log(result);
        setApi(result);
    }

    useEffect(() => {
        loadData();
    },[])


    return (
        <div>
            {api.map(function (value) {
                return (
                    <div>
                        <div className="product-item">
                            <img src={value.category.image} alt="" />
                            <h3>{value.title}</h3>
                            <p>{value.price}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
