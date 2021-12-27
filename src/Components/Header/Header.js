import React, { useState } from 'react';
import { useContext } from 'react/cjs/react.development';
import { ProductContext } from '../../App';
import Products from '../Products/Products';

const Header = () => {
    const [product, setProduct] = useContext(ProductContext);

    function add (){
        setProduct(product + 1);
    }

    return (
        <div>
            <h2> This is Header : {product} </h2>
            <button onClick={add}> Increase </button>
        </div>
    );
};

export default Header;