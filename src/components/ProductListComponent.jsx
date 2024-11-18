// Task 3: Create the ProductList Component
import ProductItem from './ProductItem.jsx';


const products = [
    {id: 1, name: 'IPhone', price: 1000 , description: "A compact handheld device to used to communicate over long distances and complete daily tasks."},
    {id: 2, name: 'MacBook', price: 1200, description: "A portable machine used to complete more complex tasks on a bigger screen."},
    {id: 3, name: 'AirPod Pros', price: 200, description: "A set of wireless earbuds that are portable and have noise cancelling capabilites."},
    {id: 4, name: 'AirPod Max', price: 450, description: "A set of wireless over the head headphones that provide the highest quality of sound."},
    {id: 5, name: 'Apple Watch', price: 250, description: "A wearable wristwatch that can track and log health and fitnessinformation."}
]

function ProductList() { //Created an un orded list from my array above
  return (
  <div>
      <h2> Product List</h2>
      <ul>
          {products.map(product => (
            //Task 5: gave each product a unique key prop using the id
              <li key={product.id} > 
                     <ProductItem product={product} />
              </li>
          ))}
      </ul>
  </div>
 );
}

export default ProductList;
