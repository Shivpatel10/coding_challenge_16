//Task 4: Create the ProductItem Component

  function ProductItem({ product }) {
    return (
      <ul>
        <h3>{product.name}</h3>
        <p>Price: ${product.price}</p>
        <p>{product.description}</p>
      </ul>
    );
  }
  
  export default ProductItem;
  