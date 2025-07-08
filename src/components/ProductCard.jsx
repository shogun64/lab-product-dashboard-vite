import React from "react";
import styles from "../styles/ProductCard.module.css";
import { Button, Card, CardContent, Typography } from "@mui/material";

const ProductCard = ({ product, onRemove }) => {
  const cardClass = product.inStock
    ? styles.productCard
    : `${styles.productCard} ${styles.outOfStockClass} outOfStockClass`;

  return (
    <Card>
      <CardContent>
        <div className={cardClass}>
          <Typography variant="h5">{product.name}</Typography>
          <Typography variant="body1">{product.price}</Typography>
          <Typography variant="body2" color={product.inStock ? "green" : "red"}>
            {product.inStock ? "In Stock" : "Out of Stock"}
          </Typography>
          <Button
            variant="outlined"
            color="error"
            onClick={() => onRemove(product.id)}
            sx={{ mt: 1 }}
          >
            Remove
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;