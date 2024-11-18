import { useState } from 'react'
//import React from 'react';
import ProductList from './components/ProductListComponent.jsx'
import AddProductForm from './components/AddProductFromComponent.jsx';
import './App.css'


function App() {
  // Step 1: State for managing the list of products
  const [products, setProducts] = useState([
    { id: 1, name: 'IPhone', price: 1000, description: 'A compact handheld device used to communicate and complete daily tasks.' },
    { id: 2, name: 'MacBook', price: 1200, description: 'A portable machine for more complex tasks.' },
    { id: 3, name: 'AirPod Pros', price: 200, description: 'Wireless earbuds with noise-canceling capabilities.' },
    { id: 4, name: 'AirPod Max', price: 450, description: 'Over-the-head headphones with high-quality sound.' },
    { id: 5, name: 'Apple Watch', price: 250, description: 'A wristwatch for tracking health and fitness.' },
  ]);

  // Step 2: Function to add a new product
  const addProduct = (newProduct) => {
    setProducts([...products, { id: products.length + 1, ...newProduct }]);
  };

  return (
    <div>
      <h1>Product Dashboard</h1>
      {/* AddProductForm to add new products */}
      <AddProductForm addProduct={addProduct} />
      {/* ProductList to display all products */}
      <ProductList products={products} />
    </div>
  );
}

export default App
