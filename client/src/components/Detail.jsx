import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

export const Detail = () => {

    const { id } = useParams(); //con esto traigo el valor de id sin usar el props

    // console.log(`http://localhost:8000/api/product/${id}`);

    const [product, setProduct] = useState({})

    const [error, setError] = useState(false);

    const renderProduct = () => {
        if (error) {

            return (
                <div className="card" style={{ width: "25rem" }}>
                    {/* <img src="..." className="card-img-top" alt="..."></img> */}
                    <div className="card-body">
                        <h5 className="card-title">Product: {product.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Id: {product._id}</h6>
                        <p className="card-text">Price: {product.price}</p>
                        <p className="card-text">Description: {product.description} / Creation date: {product.createdAt}</p>
                        <Link to="/" className='btn btn-success' >Return</Link>
                    </div>
                </div>

            )
        }
        else {
            return (
                <div className='row mt-5'>
                    <h5 className="text-center m-4">Product not found in DB</h5>
                    <Link to="/" className='btn btn-success' >Return</Link>
                </div>
            )
        }
    }


    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                setProduct(res.data)
                console.log("entro al then")
                setError(true)
                // console.log(product)          
            })
            .catch(err => {
                setError(false);
            });
        // .then(res => setProduct({...res.data}))
    }, [])

    console.log(product);

    return (


        // <div className="card" style={{width: "25rem"}}>
        //     {/* <img src="..." className="card-img-top" alt="..."></img> */}
        //     <div className="card-body">
        //         <h5 className="card-title">Product: {product.title}</h5>
        //         <h6 className="card-subtitle mb-2 text-muted">Id: {product._id}</h6>
        //         <p className="card-text">Price: {product.price}</p>
        //         <p className="card-text">Description: {product.description} / Creation date: {product.createdAt}</p>
        //         <Link to="/" className='btn btn-success' >Return</Link> 

        //     </div>
        // </div>

        <>
            {renderProduct()}
        </>




    )
}
