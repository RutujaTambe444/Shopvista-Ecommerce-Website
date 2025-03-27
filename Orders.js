import React, { useEffect, useState } from "react";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
  
    if (!token) {
      setError("No token found! Please log in.");
      setLoading(false);
      return;
    }
  
    fetch("http://localhost:5000/api/orders", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("🛒 API Response:", data); // Debugging output
  
        if (!Array.isArray(data)) {
          throw new Error("Invalid API response: Expected an array");
        }
  
        setOrders(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("❌ Error fetching orders:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);
  

  const placeOrder = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("No token provided!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          product_name: "Example Product",
          price: 100,
          payment_method: "Credit Card",
        }),
      });

      const data = await response.json();
      console.log("Order placed successfully:", data);
    } catch (error) {
      console.error("Order failed:", error);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📦 Your Orders</h2>
      {loading ? (
        <p style={styles.loading}>Loading orders...</p>
      ) : error ? (
        <p style={styles.error}>{error}</p>
      ) : orders.length === 0 ? (
        <p style={styles.noOrders}>You have no orders yet. Start shopping! 🛍</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Order ID</th>
              <th style={styles.th}>Product Name</th>
              <th style={styles.th}>Price</th>
              <th style={styles.th}>Payment Method</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Order Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td style={styles.td}>{order.id}</td>
                <td style={styles.td}>{order.product_name}</td>
                <td style={styles.td}>₹{order.price}</td>
                <td style={styles.td}>{order.payment_method}</td>
                <td style={styles.td}>
                  <span style={styles.statusConfirmed}>{order.status}</span>
                </td>
                <td style={styles.td}>
                  {new Date(order.order_date).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button onClick={placeOrder} style={styles.button}>
        Place Order
      </button>
    </div>
  );
}

// Styles
const styles = {
  container: {
    maxWidth: "900px",
    margin: "auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  title: {
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
  },
  loading: {
    textAlign: "center",
    fontSize: "18px",
    color: "#555",
  },
  error: {
    textAlign: "center",
    fontSize: "18px",
    color: "red",
  },
  noOrders: {
    textAlign: "center",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#777",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "#fff",
    borderRadius: "10px",
    overflow: "hidden",
  },
  th: {
    backgroundColor: "#bc8286",
    color: "white",
    padding: "10px",
    textAlign: "left",
  },
  td: {
    padding: "10px",
    borderBottom: "1px solid #ddd",
    color: "#333",
  },
  statusConfirmed: {
    color: "green",
    fontWeight: "bold",
  },
  button: {
    display: "block",
    margin: "20px auto",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
};
