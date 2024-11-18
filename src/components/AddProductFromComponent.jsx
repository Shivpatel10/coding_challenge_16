// Task 6: Create the AddProductForm Component
import { useState } from 'react';


function AddProductForm({ addProduct }) {
  // State variables for form inputs
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  // Handles input changes and updates the corresponding state
  const handleChange = (event) => {
    const { name, value } = event.target; // Destructure the name and value from the input
    if (name === 'id') setId(value);
    if (name === 'name') setName(value);
    if (name === 'price') setPrice(value);
    if (name === 'description') setDescription(value);
  };

  // Handles form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && price && description) {
        addProduct({ id, name, price, description });
        setId('');
        setName('');
        setPrice('');
        setDescription('');
    } /* makes the default new product form all blank  */
};

  return (
    <div>
      <h2>Add New Product</h2>

      <form onSubmit={handleSubmit}>

        <div>
          {/* Input section for the product ID */}
          <label>Id:</label>
          <input
            type="number"
            name="id"
            value={id}
            onChange={handleChange}
          />
        </div>

        <div>
          {/* Input section for the product name */}
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          {/* Input section for the product price */}
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={price}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          {/* Input section for the product description */}
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit button for the form */}
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductForm;
