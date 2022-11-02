import React, { useEffect, useState } from 'react';
import { useProducts } from '../../../contexts/ProductContextProvider';
import ProductCard from '../ProductCard/ProductCard';

const ProductsList = () => {
    const { products, getProducts } = useProducts();

    useEffect(() => {
        getProducts();
    }, []);

  return (
    <div>
        <h3>Products List</h3>

        {products ? (
            products.map(item => (
                <ProductCard key={item.id} item={item} />
            ))
        ) : (
            <h3>Loading...</h3>
        )}
    </div>
  )
}

export default ProductsList