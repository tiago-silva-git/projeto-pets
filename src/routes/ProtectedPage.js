import React from "react";
import { useEffect } from "react";
import { listPets } from "../services/pets";
import styled from "styled-components";

export default function ProtectedPage() {
  useEffect(() => {
    const request = async () => {
      const response = await listPets();
      console.log(response);
    };

    request();
  });

  return <Title>Cadastre seu Pet</Title>;
}

const Title = styled.h3`
  margin: 5px;
  font-size: 18px;
`;
