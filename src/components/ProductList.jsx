import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, onRemove }) => {
  // TODO: Check if the product list is empty and display a message if needed
  if (!products.length) {
    return <p>No products available.</p>;
  }

  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default ProductList;