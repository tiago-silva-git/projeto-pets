import React from "react";
import { useEffect, useState } from "react";
import { listPets } from "../services/pets";
import styled from "styled-components";

export default function ListingPets() {
  const [state, setState] = useState("");

  useEffect(() => {
    const request = async () => {
      const response = await listPets();
      const array = response.data.pets;

      setState(
        array.map((elem, i) => (
          <InfoPet key={response.data.pets[i].id}>
            <ImgPet src={elem.url} alt={`foto do ${elem.species}`} />
            <PetData>{`Especie: ${elem.species}`}</PetData>
            <PetData>{`Nome: ${elem.name}`}</PetData>
            <PetData>{`Idade: ${elem.age}`}</PetData>
            <PetData>{`Raça: ${elem.breed}`}</PetData>
            <PetData>{`Gênero: ${elem.gender}`}</PetData>
          </InfoPet>
        ))
      );
    };

    request();
  }, []);

  return <div>{state}</div>;
}

const InfoPet = styled.ul`
  max-width: 400px;
  margin: 30px auto;
  padding: 5px;
  background-color: #f58d11;
  border-radius: 5px;
  box-shadow: 2px 1px 1px black;
`;

const PetData = styled.li`
  display: flex;
  background-color: #11adf5;
  color: white;
  justify-content: center;
  border-radius: 3px;
  padding: 3px;
  margin: 5px;
`;

const ImgPet = styled.img`
  width: 385px;
  max-height: 300px;
  border-radius: 5px;
`;
