import React, { useContext } from 'react';
import { ProductContext } from '../../App';

const ProductPrice = () => {
    const [product,setProduct] = useContext(ProductContext);
    return (
        <div>
            <p> My Product name is : {product} </p>
            <button onClick={() => setProduct(product + 1)} > Increase </button>
        </div>
    );
};

export default ProductPrice;