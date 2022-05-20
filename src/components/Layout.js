import React from "react";
import { Link, Outlet } from "react-router-dom";
import AuthStatus from "./AuthStatus";
import styled from "styled-components";

export default function Layout() {
  return (
    <Nav>
      <AuthStatus />
      <List>
        <Links>
          <Link to="/">Rota Pública</Link>
        </Links>
        <Links>
          <Link to="/private-page">Rota Privada</Link>
        </Links>
        <Links>
          <Link to="/login">Login</Link>
        </Links>
      </List>
      <Outlet />
    </Nav>
  );
}

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 15px;
  font-family: sans-serif;
`;

const List = styled.ul`
  width: 200px;
  margin: 0 auto;
  padding: 0;
`;

const Links = styled.li`
  display: block;
  margin: 5px;
  background-color: #1ddbcf;
  border-radius: 5px;
`;
