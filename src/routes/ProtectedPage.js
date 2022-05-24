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
      <Title>CADASTRE SEU PET</Title>
      <Form onSubmit={""}>
        <Labels>
          Nome:
          <Fields
            className="name"
            placeholder="Qual o nome do seu pet?"
            type="text"
            name="nome"
          />
        </Labels>
        <Labels>
          Raça:
          <Fields
            className="breed"
            placeholder="Qual a raça do seu pet?"
            type="text"
            name="raca"
          />
        </Labels>
        <Group>
          <Labels>
            Idade:
            <Fields className="age" type="number" name="idade" />
          </Labels>
          <Labels>
            Especie:
            <Select name="especie" required>
              <option selected value="none"></option>
              <option value="Female">Cachorro</option>
              <option value="Male">Gato</option>
            </Select>
          </Labels>
          <Labels>
            Gênero:
            <Select name="genero" required>
              <option selected value="none"></option>
              <option value="Female">Fêmea</option>
              <option value="Male">Macho</option>
            </Select>
          </Labels>
        </Group>
        <Labels>
          Foto:
          <Fields
            className="photoPet"
            placeholder="Link da foto do seu pet"
            type="text"
            name="raca"
          />
        </Labels>
        <Button type="submit">Cadastrar</Button>
      </Form>
    </>
  );
}

const Title = styled.h3`
  margin: 5px;
  font-size: 18px;
  color: #1ddbcf;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 800px;
`;
const Labels = styled.label`
  display: flex;
  gap: 5px;
  margin: 10px;
`;

const Group = styled.div`
  display: inline-flex;
`;

const Fields = styled.input`
  border-radius: 3px;
  &.name {
    width: 343px;
  }
  &.breed {
    width: 348px;
  }
  &.age {
    width: 35px;
  }
  &.photoPet {
    width: 353px;
  }
`;

const Select = styled.select`
  border: 2px solid;
  border-radius: 3px;
`;

const Button = styled.button`
  color: #5582fa;
  background-color: white;
  border-radius: 4px;
  border-color: #5582fa;
`;
