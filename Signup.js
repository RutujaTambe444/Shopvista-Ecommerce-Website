import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !mobileNumber || !email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, mobileNumber, email, password })
      });

      const data = await response.json();

      if (response.status === 400) {
        setError(data.message);
      } else {
        alert("Registration successful! Please login.");
        navigate('/login');
      }
    } catch (error) {
      console.error("Signup error:", error);
      setError("Something went wrong, please try again.");
    }
  };

  const styles = {
    body: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(to right,rgb(245, 233, 242),rgb(177, 137, 232))',
      margin: 0
    },
    container: {
      backgroundColor: 'white',
      padding: '40px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      maxWidth: '400px',
      width: '100%',
      textAlign: 'center'
    },
    title: {
      fontSize: '24px',
      marginBottom: '20px'
    },
    form: {
      display: 'flex',
      flexDirection: 'column'
    },
    inputContainer: {
      marginBottom: '15px'
    },
    label: {
      marginBottom: '5px',
      fontSize: '14px',
      fontWeight: 'bold'
    },
    input: {
      width: '100%',
      padding: '10px',
      fontSize: '14px',
      border: '1px solid #ccc',
      borderRadius: '4px'
    },
    button: {
      padding: '10px',
      fontSize: '16px',
      backgroundColor: '#ff4081',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      marginTop: '20px'
    },
    footerText: {
      marginTop: '20px',
      fontSize: '14px',
      color: '#555'
    },
    linkButton: {
      background: 'none',
      border: 'none',
      color: '#007bff',
      textDecoration: 'underline',
      cursor: 'pointer',
      padding: 0
    },
    error: {
      color: 'red',
      marginBottom: '10px',
      fontSize: '14px'
    },
    terms: {
      fontSize: '12px',
      color: '#777'
    },
    termsLink: {
      color: '#ff4081',
      textDecoration: 'none'
    }
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h2 style={styles.title}>Sign Up</h2>
        <form onSubmit={handleSignup} style={styles.form}>
          {error && <p style={styles.error}>{error}</p>}
          <div style={styles.inputContainer}>
            <label htmlFor="firstName" style={styles.label}>First Name:</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              style={styles.input}
            />
          </div>
          <div style={styles.inputContainer}>
            <label htmlFor="lastName" style={styles.label}>Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              style={styles.input}
            />
          </div>
          <div style={styles.inputContainer}>
            <label htmlFor="mobileNumber" style={styles.label}>Mobile Number:</label>
            <input
              type="text"
              id="mobileNumber"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              style={styles.input}
            />
          </div>
          <div style={styles.inputContainer}>
            <label htmlFor="email" style={styles.label}>Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            />
          </div>
          <div style={styles.inputContainer}>
            <label htmlFor="password" style={styles.label}>Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />
          </div>
          <p style={styles.terms}>
            By continuing, I agree to the <a href="#" style={styles.termsLink}>Terms of Use</a> & <a href="#" style={styles.termsLink}>Privacy Policy</a>
          </p>
          <button type="submit" style={styles.button}>Signup</button>
        </form>
        <p style={styles.footerText}>
          Already have an account?{' '}
          <button onClick={() => navigate('/login')} style={styles.linkButton}>
            Login here
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;
