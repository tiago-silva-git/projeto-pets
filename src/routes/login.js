import React from "react";
import { useAuth } from "../context/auth-context";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Login() {
  const auth = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/private-page";

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
      <Title>Login</Title>
      <form onSubmit={handleSubmit}>
        <Fields>
          E-mail:
          <input type="email" name="email" />
        </Fields>
        <Fields>
          Senha:
          <input type="password" name="password" />
        </Fields>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

const Title = styled.h3`
  margin: 5px;
  font-size: 18px;
`;

const Fields = styled.label`
  display: block;
  margin: 10px;
`;
