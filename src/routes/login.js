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
      <Title>ENTRAR</Title>
      <Form onSubmit={handleSubmit}>
        <Labels>
          E-mail
          <Fields type="email" name="email" />
        </Labels>
        <Labels>
          Senha
          <Fields type="password" name="password" />
        </Labels>
        <Button type="submit">Login</Button>
      </Form>
    </div>
  );
}

const Title = styled.h3`
  margin: 5px;
  font-size: 18px;
  color: #a85c00;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background-color: #11adf5;
  padding: 10px;
  border-radius: 5px;
  width: 450px;
  justify-content: center;
  color: white;
`;

const Labels = styled.label`
  display: block;
  margin: 10px;
`;

const Button = styled.button`
  color: #a85c00;
  background-color: white;
  border-radius: 4px;
  border-color: #a85c00;
  padding: 5px 30px;
  font-size: 17px;
`;

const Fields = styled.input`
  width: 343px;
  height: 25px;
  margin-left: 5px;
`;
