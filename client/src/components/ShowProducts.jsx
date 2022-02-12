import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link } from "react-router-dom";

export const ShowProducts = ({products}) => {

    // const [allProducts, setAllProducts] = useState([]);
    // const [viewList, setViewList] = useState(false);


    // useEffect(() => {
    //     axios.get('http://localhost:8000/api/allproducts')
    //         .then(res => {
    //             setAllProducts(res.data);
    //             setViewList(true);
    //         });
    // }, [])

   

    return (


    
        <div className="row list-group">
            {<div className="col-md">

            <hr className="mt-5"></hr>

             <ol className="list-group list-group-numbered">
                 
                 <h2 className="text-center p-2">List of products</h2>

            {products.map((product, index) => {
                return (
                    <li key= {index} className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <Link to={product._id} >{product.title}</Link>
                        {/* <div className="fw-bold">{product.title}</div> */}
                         <p>Id: {product._id}</p> 
                      
                    </div>
                    <span className="badge bg-primary rounded-pill">Price $: {product.price}</span>
                  </li>
                )
            })}

            </ol>
            </div>}
        </div>





    )
}
