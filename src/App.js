import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Products from './Components/Products/Products';
import { createContext, useState } from 'react';

export const ProductContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  <p> Parent : {count} </p>

  return (
    <ProductContext.Provider value = {[count, setCount]}>
        <Home/> 
        <Header/>
        <Products/>    
    </ProductContext.Provider>
  );
}

export default App;
