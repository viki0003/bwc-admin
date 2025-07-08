import React, { useRef, useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../../Components/Header/Header";
import { Toast } from "primereact/toast";
import { useLogin } from "../../../APIContext/LoginContext";

const AdminLogin = () => {
  const { login, error, loading } = useLogin();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");
  const toast = useRef(null);
  const navigate = useNavigate();

  const validateForm = () => {
    if (!identifier.trim()) {
      setFormError("Please enter email or username.");
      return false;
    }

    if (!password.trim()) {
      setFormError("Please enter your password.");
      return false;
    }

    setFormError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.current.show({
        severity: "warn",
        summary: "Validation Error",
        detail: formError,
        life: 3000,
      });
      return;
    }

    const payload = {
      username_or_email: identifier,
      password,
    };

    const result = await login(payload);

    if (result?.success) {
      toast.current.show({
        severity: "success",
        summary: "Login Successful",
        detail: "Welcome back!",
        life: 3000,
      });
      navigate("/dashboard");
    } else {
      toast.current.show({
        severity: "error",
        summary: "Login Failed",
        detail: error || "Invalid credentials or server error",
        life: 4000,
      });
    }
  };
  return (
    <>
      <Toast ref={toast} />
      <Header />
      <div className="trainers-login">
        <div className="trainers-login-form">
          <h1>Admin Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-item">
              <input
                type="text"
                id="identifier"
                name="identifier"
                placeholder="Email ID or Username"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
              />
            </div>
            <div className="form-item">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="forgot-password-container">
              <Link to="/forgotpassword" className="forgot-password">
                Forgot Password?
              </Link>
            </div>
            <button type="submit" disabled={loading} className="btn gold">
              {loading ? "Signing In..." : "Sign In"}
            </button>
            {error && !formError && <p className="error-message">{error}</p>}
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
