import React, { useState, useMemo } from "react";
import { Link, useParams } from "react-router-dom";

const Categories = () => {
  const categories = ["Fruits", "Vegetables", "Dairy"];
  const products = {
    fruits: ["Apple", "Banana", "Orange"],
    vegetables: ["Carrot", "Broccoli", "Spinach"],
    dairy: ["Milk", "Cheese", "Yogurt"],
  };

  const { category } = useParams();
  const selectedProducts = useMemo(() => products[category] || [], [category]);

  return (
    <div className="container">
      <h2>Categories</h2>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>
            <Link to={`/categories/${cat.toLowerCase()}`}>{cat}</Link>
          </li>
        ))}
      </ul>

      {category && (
        <>
          <h3>Products in {category.charAt(0).toUpperCase() + category.slice(1)}</h3>
          <ul>
            {selectedProducts.map((product) => (
              <li key={product}>{product}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Categories;
