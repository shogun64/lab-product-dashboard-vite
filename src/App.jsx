import React, { useState } from "react";
import ProductList from "./components/ProductList";
import { Button, Stack } from "@mui/material";

// TODO: Define initial product data
const initialProducts = [
  { id: 1, name: "Laptop", price: "$999", inStock: true },
  { id: 2, name: "Phone", price: "$699", inStock: false },
  { id: 3, name: "Tablet", price: "$499", inStock: true },
];

const App = () => {
  // TODO: Implement state to manage filtering
  const [products, setProducts] = useState(initialProducts);
  const [filter, setFilter] = useState("all");

  // TODO: Implement logic to filter products based on availability
  const filteredProducts = products.filter((product) =>
    filter === "all"
      ? true
      : filter === "inStock"
      ? product.inStock
      : !product.inStock
  );

  // Remove product by ID
  const handleRemove = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div>
      <h1>Product Dashboard</h1>
      <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 2 }}>
        <Button
          variant={filter === "all" ? "contained" : "outlined"}
          onClick={() => setFilter("all")}
        >
          All
        </Button>
        <Button
          variant={filter === "inStock" ? "contained" : "outlined"}
          onClick={() => setFilter("inStock")}
        >
          In Stock
        </Button>
        <Button
          variant={filter === "outOfStock" ? "contained" : "outlined"}
          onClick={() => setFilter("outOfStock")}
        >
          Out of Stock
        </Button>
      </Stack>
      <ProductList products={filteredProducts} onRemove={handleRemove} />
    </div>
  );
};

export default App;