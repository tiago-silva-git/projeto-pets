import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import styled from "styled-components";

export default function AuthStatus() {
  const auth = useAuth();
  const navigate = useNavigate();

  if (!auth.user) {
    return <Title>Você não está logado</Title>;
  }
  return (
    <>
      <Button onClick={() => auth.logout(() => navigate("/"))}>Sair</Button>
      <Title>Bem vindo {auth.user.name}!</Title>
    </>
  );
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  font-family: sans-serif;
  color: #5582fa;
`;

const Button = styled.button`
  display: flex;
  margin-left: auto;
  color: #5582fa;
  font-size: 17px;
  background-color: white;
  border-radius: 4px;
  border-color: #5582fa;
  padding: 5px 30px;
`;
