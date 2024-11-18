//Task 4: Create the ProductItem Component

function ProductItem({ product }) {
  return (
    <ul>
      <h2> {product.name} </h2>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
    </ul>
  );
}

export default ProductItem;
