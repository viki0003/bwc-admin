import React, { useRef, useState, useContext, useEffect } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../../Components/Header/Header";
import axios from "axios";
import { Toast } from "primereact/toast";
import { LoginContext } from "../../../APIContext/LoginContext";

const AdminLogin = () => {
  const toast = useRef(null);
  const navigate = useNavigate();
  const { isLoggedIn, login } = useContext(LoginContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      toast.current.show({
        severity: "warn",
        summary: "Validation Error",
        detail: "Email and Password are required",
        life: 3000,
      });
      return;
    }

    try {
      const response = await axios.post("http://54.185.32.148/api/customer/login/", {
        email,
        password,
      });

      login(response.data);

      toast.current.show({
        severity: "success",
        summary: "Login Successful",
        detail: "Welcome back, Admin!",
        life: 3000,
      });

      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (error) {
      toast.current.show({
        severity: "error",
        summary: "Login Failed",
        detail:
          error.response?.data?.message || "Invalid credentials or server error",
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
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-item">
              <input
                type="password"
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
            <button type="submit" className="btn gold">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
