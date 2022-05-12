import React from "react";
import { useAuth } from "../context/auth-context";
import { useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  const auth = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    const data = {
      email,
      password,
    };

    auth.login(data, () => navigate(from, { replace: true }));
  };

  return (
    <div>
      Login
      <form onSubmit={handleSubmit}>
        <label>E-mail:</label>
        <input type="email" name="email" />
        <label>Senha:</label>
        <input type="password" name="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
