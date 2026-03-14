import './App.css'
import { useState } from 'react';

export default function ModernDashboard() {
  const [a, setA] = useState("Initial Value");
  const [username, setUsername] = useState("Guest");
  const [num, setNum] = useState(0);

  const changeData = () => {
    setA("Updated Value");
    setUsername("Gopal");
  };

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-card">
        
        <div className="user-section">
          <div className="header-text">
            <h2>User Details</h2>
            <p>Manage your current session data.</p>
          </div>

          <div className="data-panel">
            <div className="data-row">
              <span className="data-label">Value of A</span>
              <span className="data-value">{a}</span>
            </div>
            <div className="data-row">
              <span className="data-label">User</span>
              <span className="data-value">{username}</span>
            </div>
          </div>

          <button onClick={changeData} className="btn-primary">
            Update User Data
          </button>
        </div>

        {/* --- Counter Section --- */}
        <div className="counter-section">
          <div className="counter-display">
            <h3>Current Count</h3>
            <div className="count-number">{num}</div>
          </div>

          <div className="button-group">
            <button onClick={() => setNum(num - 1)} className="btn-secondary">
              -1
            </button>
            <button onClick={() => setNum(num + 1)} className="btn-dark">
              +1
            </button>
            <button onClick={() => setNum(num * 2)} className="btn-accent">
              × 2
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}