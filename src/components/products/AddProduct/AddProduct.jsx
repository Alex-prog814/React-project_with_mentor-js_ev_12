import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        picture: '',
        type: ''
    });

    const handleInp = e => {
        if(e.target.name === 'price'){
            let obj = {
                ...product,
                price: Number(e.target.value)
            };
            setProduct(obj);
        } else {
            let obj = {
                ...product,
                [e.target.name]: e.target.value
            };
            setProduct(obj);
        };
    };

  return (
    <>
        <h2>Add Product</h2>

        <input type="text" placeholder="Title" name="title" onChange={handleInp} /><br />
        <input type="text" placeholder="Description" name="description" onChange={handleInp} /><br />
        <input type="number" placeholder="Price" name="price" onChange={handleInp} /><br />
        <input type="text" placeholder="Picture" name="picture" onChange={handleInp} /><br />
        <input type="text" placeholder="Type" name="type" onChange={handleInp} /><br />

        <button>Save</button>
    </>
  )
}

export default AddProduct