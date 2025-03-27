import React, { useState } from 'react';

const ChatBot = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", sender: "bot" }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          text: "Thanks for your message. Our team will get back to you soon!", 
          sender: "bot" 
        }]);
      }, 1000);
      setInput('');
    }
  };

  if (!isOpen) return null;

  return (
    <div style={styles.chatWindow}>
      <div style={styles.header}>
        <h3>Live Chat Support</h3>
        <button onClick={onClose} style={styles.closeButton}>×</button>
      </div>
      <div style={styles.messageArea}>
        {messages.map((msg, index) => (
          <div key={index} style={msg.sender === "bot" ? styles.botMessage : styles.userMessage}>
            {msg.text}
          </div>
        ))}
      </div>
      <div style={styles.inputArea}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type your message..."
          style={styles.input}
        />
        <button onClick={handleSend} style={styles.sendButton}>Send</button>
      </div>
    </div>
  );
};

const styles = {
  chatWindow: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    width: '300px',
    height: '400px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 1000
  },
  header: {
    backgroundColor: '#ff5733',
    color: '#fff',
    padding: '10px',
    borderRadius: '10px 10px 0 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  closeButton: {
    background: 'none',
    border: 'none',
    color: '#fff',
    fontSize: '24px',
    cursor: 'pointer'
  },
  messageArea: {
    flex: 1,
    padding: '10px',
    overflowY: 'auto'
  },
  botMessage: {
    backgroundColor: '#f0f0f0',
    padding: '8px 12px',
    borderRadius: '15px',
    marginBottom: '8px',
    maxWidth: '80%'
  },
  userMessage: {
    backgroundColor: '#ff5733',
    color: '#fff',
    padding: '8px 12px',
    borderRadius: '15px',
    marginBottom: '8px',
    marginLeft: 'auto',
    maxWidth: '80%'
  },
  inputArea: {
    padding: '10px',
    borderTop: '1px solid #eee',
    display: 'flex',
    gap: '8px'
  },
  input: {
    flex: 1,
    padding: '8px',
    borderRadius: '20px',
    border: '1px solid #ddd',
    outline: 'none'
  },
  sendButton: {
    backgroundColor: '#ff5733',
    color: '#fff',
    border: 'none',
    padding: '8px 15px',
    borderRadius: '20px',
    cursor: 'pointer'
  }
};

export default ChatBot;