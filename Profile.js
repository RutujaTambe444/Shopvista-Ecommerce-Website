import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [updatedFirstName, setUpdatedFirstName] = useState("");
  const [updatedLastName, setUpdatedLastName] = useState("");
  const [updatedPhone, setUpdatedPhone] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
      return;
    }

    fetch("http://localhost:5000/api/profile", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Invalid token") {
          localStorage.removeItem("token");
          navigate("/");
        } else {
          setUser(data);
        }
      })
      .catch(() => navigate("/"));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const handleEditProfile = () => {
    if (user) {
      setUpdatedFirstName(user.first_name);
      setUpdatedLastName(user.last_name);
      setUpdatedPhone(user.mobile_number);
      setEditMode(true);
      setError(""); // Clear any previous errors
    }
  };

  const handleSaveProfile = async () => {
    setError(""); // Clear previous errors
    const token = localStorage.getItem("token");

    if (!updatedFirstName || !updatedLastName || !updatedPhone) {
      setError("All fields are required.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/update-profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          first_name: updatedFirstName,
          last_name: updatedLastName,
          mobile_number: updatedPhone,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Profile update failed.");
      }

      alert("Profile updated successfully!");
      setUser({
        ...user,
        first_name: updatedFirstName,
        last_name: updatedLastName,
        mobile_number: updatedPhone,
      });
      setEditMode(false);

    } catch (error) {
      console.error("❌ Profile update error:", error);
      setError(error.message);
    }
  };

  if (!user) return <h2 style={styles.loading}>Loading Profile...</h2>;

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h2 style={styles.title}>User Profile</h2>

        {error && <p style={styles.error}>{error}</p>}

        <div style={styles.infoContainer}>
          <p>
            <strong>First Name:</strong>{" "}
            {editMode ? (
              <input
                type="text"
                value={updatedFirstName}
                onChange={(e) => setUpdatedFirstName(e.target.value)}
                style={styles.input}
              />
            ) : (
              ` ${user.first_name}`
            )}
          </p>
          <p>
            <strong>Last Name:</strong>{" "}
            {editMode ? (
              <input
                type="text"
                value={updatedLastName}
                onChange={(e) => setUpdatedLastName(e.target.value)}
                style={styles.input}
              />
            ) : (
              ` ${user.last_name}`
            )}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Mobile Number:</strong>{" "}
            {editMode ? (
              <input
                type="text"
                value={updatedPhone}
                onChange={(e) => setUpdatedPhone(e.target.value)}
                style={styles.input}
              />
            ) : (
              ` ${user.mobile_number}`
            )}
          </p>
        </div>

        {editMode ? (
          <button style={styles.saveButton} onClick={handleSaveProfile}>
            Save
          </button>
        ) : (
          <button style={styles.editButton} onClick={handleEditProfile}>
            Edit Profile
          </button>
        )}

        <button style={styles.logoutButton} onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

const styles = {
  body: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "linear-gradient(to right, #f5e9f2, #b189e8)",
    padding: "20px",
    boxSizing: "border-box",
  },
  container: {
    backgroundColor: "white",
    padding: "35px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    maxWidth: "500px",
    width: "100%",
  },
  title: {
    fontSize: "28px",
    marginBottom: "25px",
    color: "#333",
  },
  infoContainer: {
    marginBottom: "25px",
    textAlign: "left",
    padding: "0 10px",
  },
  input: {
    width: "80%",
    padding: "10px",
    fontSize: "15px",
    border: "1px solid #ddd",
    borderRadius: "6px",
  },
  editButton: {
    padding: "12px 25px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    width: "100%",
    marginBottom: "15px",
  },
  saveButton: {
    padding: "12px 25px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    width: "100%",
    marginBottom: "15px",
  },
  logoutButton: {
    padding: "12px 25px",
    backgroundColor: "#ff4081",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    width: "100%",
  },
  loading: {
    textAlign: "center",
    fontSize: "20px",
    marginTop: "50px",
    color: "#666",
  },
  error: {
    color: "red",
    backgroundColor: "#ffe6e6",
    padding: "10px",
    borderRadius: "5px",
    marginBottom: "15px",
    fontSize: "14px",
  },
};

export default Profile;
