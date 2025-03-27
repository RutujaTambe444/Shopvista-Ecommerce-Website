import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import allProducts from "./allProducts"; // Import all products

export default function Navbar() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Convert all products into a single array for searching
  const allProductList = Object.keys(allProducts).flatMap((category) =>
    allProducts[category].map((product) => ({
      ...product,
      category,
    }))
  );

  // Handle search input
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query) {
      const filtered = allProductList.filter((product) =>
        product.name.toLowerCase().includes(query)
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  };

  // Navigate to product details page when clicking on a search result
  const handleSearchClick = (product) => {
    setSearchQuery("");
    setFilteredProducts([]);
    navigate(`/${product.category.toLowerCase()}/${product.id}`, { state: product });
  };

  // Search button function
  const handleSearchButtonClick = () => {
    if (filteredProducts.length > 0) {
      handleSearchClick(filteredProducts[0]); // Navigate to the first matched product
    } else {
      alert("No matching product found.");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg" style={{ background: "#f5f5f5", marginTop: "5px" }}>
      <div className="container-fluid">
        <img src="/Images/shop.jpg" style={{ height: "50px", borderRadius: "50%", padding: "5px" }} alt="Logo" />
        <NavLink className="navbar-brand" to="/" style={{ color: "#bc8286", fontWeight: "bold" }}>
          ShopVista
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <NavLink className="nav-link active" to="/" style={{ color: "#bc8286" }}>Home</NavLink>

            {/* Dropdown for Categories */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" style={{ color: "#bc8286" }}>Categories</a>
              <ul className="dropdown-menu">
                {Object.keys(allProducts).map((category) => (
                  <li key={category}>
                    <NavLink className="dropdown-item" to={`/${category.toLowerCase()}`}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>

            <NavLink className="nav-link" to="/newarrival" style={{ color: "#bc8286" }}>New Arrival</NavLink>
            <NavLink className="nav-link" to="/bestseller" style={{ color: "#bc8286" }}>Best Seller</NavLink>
            <NavLink className="nav-link" to="/orders" style={{ color: "#bc8286" }}>Orders</NavLink>
          </ul>

          {/* Search Bar */}
          <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
            <input
              className="form-control me-2"
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyPress={(e) => e.key === "Enter" && handleSearchButtonClick()}
            />
            <button className="btn" onClick={handleSearchButtonClick} style={{background:"#D6B3B5",color:"white"}}>
              Search
            </button>

            {/* Dropdown Search Results */}
            {filteredProducts.length > 0 && (
              <ul style={styles.dropdown}>
                {filteredProducts.map((product) => (
                  <li key={product.id} onClick={() => handleSearchClick(product)} style={styles.dropdownItem}>
                    {product.name} - {product.category}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Wishlist & Cart Icons */}
          <ul className="navbar-nav" style={{padding:'15px'}}>
            <NavLink to="/login">
              <li className="nav-item">
                <img src="/Images/logo.png" alt="User" style={{ borderRadius: "50%", height: "20px" }} />
              </li>
            </NavLink>
            <NavLink to="/wishlist">
              <li className="nav-item">
                <img src="/Images/wishlist.jpg" alt="Wishlist" style={{ borderRadius: "50%", height: "30px" }} />
              </li>
            </NavLink>
            <NavLink to="/cart">
              <li className="nav-item">
                <img src="/Images/addto.jpg" alt="Cart" style={{ borderRadius: "50%", height: "30px" }} />
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// Styles
const styles = `
  .nav-icon {
    border-radius: 50%;
    height: 30px;
    margin-left: 10px;
    cursor: pointer;
  }

  .search-bar-container {
    flex-grow: 1;
    max-width: 400px;
  }

  .search-dropdown {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    list-style: none;
    padding: 5px 0;
  }

  .search-dropdown li {
    padding: 10px;
    cursor: pointer;
    border-bottom: 1px solid #ddd;
    transition: background 0.2s;
  }

  .search-dropdown li:hover {
    background: #f5f5f5;
  }

  /* Responsive Design */
  @media (max-width: 991px) {
    .search-bar-container {
      max-width: 100%;
      width: 100%;
    }
    .search-dropdown {
      width: 100%;
    }
    .icons-container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: 100%;
      margin-top: 10px;
    }
    .nav-icon {
      height: 30px;
      margin: 5px;
    }
  }
`;

// Inject CSS into the page
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

