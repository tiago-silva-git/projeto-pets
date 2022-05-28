import React from "react";
import { useEffect, useState } from "react";
import { listPets } from "../services/pets";
import styled from "styled-components";

export default function ProtectedPage() {
  const [state, setState] = useState("...");

  useEffect(() => {
    const request = async () => {
      const response = await listPets();
      const array = response.data.pets;

      setState(
        array.map((elem) => (
          <p>{`Especie: ${elem.species} | Nome: ${elem.name} | Idade: ${elem.age} | Raça: ${elem.breed} | Gênero: ${elem.gender}`}</p>
        ))
      );
    };

    request();
  }, []);

  const registerSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("nome");
    const breed = formData.get("raca");
    const age = formData.get("idade");
    const species = formData.get("especie");
    const gender = formData.get("genero");
    const photoPet = formData.get("foto");

    const dataRegister = {
      name,
      breed,
      age,
      species,
      gender,
      photoPet,
    };

    console.log(dataRegister);
  };

  return (
    <>
      <Title>CADASTRE SEU PET</Title>
      <Form onSubmit={registerSubmit}>
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
              <option selected defaultValue="none"></option>
              <option value="Dog">Cachorro</option>
              <option value="cat">Gato</option>
            </Select>
          </Labels>
          <Labels>
            Gênero:
            <Select name="genero" required>
              <option selected defaultValue="none"></option>
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
            name="foto"
          />
        </Labels>
        <Button type="submit">Cadastrar</Button>
      </Form>
      <div>{state}</div>
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
  padding: 5px 30px;
  font-size: 17px;
`;
