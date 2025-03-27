import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import allProducts from "./allProducts";

export default function CategoryPage() {
  const { category } = useParams();
  const navigate = useNavigate();

  // Format category to lowercase
  const formattedCategory = category.toLowerCase();

  // Get products based on category
  const products = allProducts[formattedCategory];

  if (!products) {
    return <h2 className="text-center mt-4">Category Not Found</h2>;
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center">{formattedCategory.toUpperCase()}</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4">
            <div
              className="card"
              style={styles.card}
              onClick={() => navigate(`/${formattedCategory}/${product.id}`, { state: product })}
            >
              <img 
                src={product.image} 
                className="card-img-top" 
                alt={product.name} 
                style={styles.image} 
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">₹{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 🔹 Styles for Uniform Layout Across All Pages
const styles = {
  card: {
    cursor: "pointer",
    transition: "transform 0.2s ease-in-out",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    borderRadius: "8px",
    overflow: "hidden",
  },
  image: {
    height: "300px",
    width: "100%",
    objectFit: "cover", // Ensures uniform image scaling
  }
};
