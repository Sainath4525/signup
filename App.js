import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="title">Sign in</h2>
        <p className="subtitle">Please login to continue to your account.</p>

        <label className="input-label">Email</label>
        <input
          type="email"
          className="input-field"
          placeholder="jonas_kahnwald@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="input-label">Password</label>
        <div className="password-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            className="input-field"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="toggle-visibility"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>

        <div className="checkbox-group">
          <input type="checkbox" id="keepLoggedIn" />
          <label htmlFor="keepLoggedIn">Keep me logged in</label>
        </div>

        <button className="sign-in-button">Sign in</button>
      </div>
    </div>
  );
}
