import React from 'react';
import { useContext } from 'react/cjs/react.development';
import { ProductContext } from '../../App';

const Home = () => {
    const product = useContext(ProductContext);
    return (
        <div>
           <h2> This is Home : {product}</h2>  
        </div>
    );
};

export default Home;