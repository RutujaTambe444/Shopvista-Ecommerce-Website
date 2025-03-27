import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css" // ✅ Use external CSS for media queries

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // ✅ Redirect if already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) navigate("/profile");
  }, []);

  // ✅ Handle login request
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!response.ok) {
        setError(data.message || "Invalid login credentials.");
        return;
      }

      // ✅ Store token in localStorage
      localStorage.setItem("token", data.token);

      // ✅ Fetch user details
      const userResponse = await fetch("http://localhost:5000/api/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${data.token}`,
        },
      });

      const userData = await userResponse.json();
      if (userResponse.ok) {
        localStorage.setItem("user", JSON.stringify(userData)); // ✅ Store user info
      } else {
        console.error("❌ Failed to fetch user profile:", userData);
      }

      alert("Login successful!");
      navigate("/profile");

    } catch (error) {
      console.error("Login error:", error);
      setError("Server error. Try again later.");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      {error && <p className="login-error">{error}</p>}
      <form onSubmit={handleLogin} className="login-form">
        <div className="input-container">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError(""); // ✅ Clear error on input change
            }}
            required
          />
        </div>

        <div className="input-container">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(""); // ✅ Clear error on input change
            }}
            required
          />
        </div>

        <button type="submit" className="login-button">Login</button>
      </form>

      <p className="login-footer">
        Don't have an account?{" "}
        <button className="signup-link" onClick={() => navigate("/signup")}>
          Sign Up
        </button>
      </p>
    </div>
  );
};

export default Login;
