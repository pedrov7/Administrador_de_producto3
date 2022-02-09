import axios from 'axios';
import React, { useState } from 'react';

export const Forms = () => {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [error, setError] = useState(true);





    const handleErrorVisible = (e) => {
        setTitle(e.target.value)

        title.length >= 2 ?
            setError(false) :
            setError(true)

    }




    const onSubmitHandler = e => {
        e.preventDefault();


        if (title !== '' && price > 0) {

            axios.post('http://localhost:8000/api/product', {
                title,
                price,
                description
            })
                .then(res => console.log(res))
                .catch(res => console.log(res))

            e.target.reset();

            setTitle('');
            setPrice(0);
            setDescription('');

        } else {
            alert('Campos vacios');
        }


    }

    return (
        <div className="row">

            <form onSubmit={onSubmitHandler} className="col-sm-3">

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Title</span>
                    <input onChange={handleErrorVisible} type="text" className="form-control" placeholder="Title" aria-label="Username" aria-describedby="basic-addon1" />
                </div>

                {error && <div id="emailHelp" className="form-text">Ingrese mas de tres caracteres</div>}

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Price</span>
                    <input step="0.01" onChange={(e) => { setPrice(e.target.value) }} type="number" className="form-control" placeholder="$" aria-label="Username" aria-describedby="basic-addon1" />
                </div>


                <div className="form-floating">
                    <textarea onChange={(e) => { setDescription(e.target.value) }} className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                    <label htmlFor="floatingTextarea">Description</label>
                </div>

                <button type="submit" className="btn btn-secondary mt-3">Create</button>

            </form>


        </div>

    );
};
