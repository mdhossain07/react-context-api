import React from 'react';
import { useContext } from 'react/cjs/react.development';
import { ProductContext } from '../../App';
import Productlist from '../ProductList/Productlist';

const Products = () => {
    const product = useContext(ProductContext);
    return (
        <div>
            <h2> This is Products : {product} </h2>
            <Productlist></Productlist>
        </div>
    );
};

export default Products;