// Import necessary modules
import React, { useState } from 'react';
import './AddProductForm.css';

// Add Product Form Component
const AddProductForm = () => {
  const [product, setProduct] = useState({
    productName: '',
    productImage: '',
    productPrice: '',
    productCategory: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You would handle form submission here, e.g., by sending the data to an API or updating state.
    console.log('Product added:', product);
    // Clear the form after submission
    setProduct({
      productName: '',
      productImage: '',
      productPrice: '',
      productCategory: ''
    });
  };

  return (
    <div className="add-product">
      <h1>Add New Product</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Product Name:
          <input
            type="text"
            name="productName"
            value={product.productName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            name="productImage"
            value={product.productImage}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="productPrice"
            value={product.productPrice}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            name="productCategory"
            value={product.productCategory}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductForm;
