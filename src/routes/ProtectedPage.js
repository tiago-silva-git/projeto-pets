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

  return (
    <>
      <Title>Cadastre seu Pet</Title>
      <Form onSubmit={""}>
        <Fields>
          Nome:
          <input type="text" name="nome" />
        </Fields>
        <Fields>
          Raça:
          <input type="text" name="raca" />
        </Fields>
        <Fields>
          Idade:
          <input type="number" name="idade" />
        </Fields>
        <Fields>
          Especie:
          <input type="number" name="especie" />
        </Fields>
        <Fields>
          Gênero:
          <select name="genero" required>
            <option selected value="none"></option>
            <option value="Female">Fêmea</option>
            <option value="Male">Macho</option>
          </select>
        </Fields>
        <Fields>
          Link da foto do pet:
          <input type="text" name="raca" />
        </Fields>
        <button type="submit">Cadastrar</button>
      </Form>
    </>
  );
}

const Title = styled.h3`
  margin: 5px;
  font-size: 18px;
`;

const Fields = styled.label`
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 800px;
`;
