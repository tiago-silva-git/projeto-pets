import { postPets } from "../services/pets";
import ListingPets from "../components/ListingPets";
import styled from "styled-components";

export default function ProtectedPage() {
  const registerSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("nome");
    const breed = formData.get("raca");
    const age = formData.get("idade");
    const species = formData.get("especie");
    const gender = formData.get("genero");
    const url = formData.get("foto");

    const dataRegister = {
      name,
      breed,
      age,
      species,
      gender,
      url,
    };

    const request = async () => await postPets(dataRegister);
    request();
  };

  return (
    <>
      <Title>CADASTRE SEU PET</Title>
      <Form onSubmit={registerSubmit}>
        <Labels>
          Nome
          <Fields
            className="name"
            placeholder="Qual o nome do seu pet?"
            type="text"
            name="nome"
          />
        </Labels>
        <Labels>
          Raça
          <Fields
            className="breed"
            placeholder="Qual a raça do seu pet?"
            type="text"
            name="raca"
          />
        </Labels>
        <Group>
          <Labels>
            Idade
            <Fields className="age" type="number" name="idade" />
          </Labels>
          <Labels>
            Especie
            <Select name="especie" required>
              <option defaultValue="none"></option>
              <option value="Cachorro">Cachorro</option>
              <option value="Gato">Gato</option>
            </Select>
          </Labels>
          <Labels>
            Gênero
            <Select name="genero" required>
              <option defaultValue="none"></option>
              <option value="Femêa">Fêmea</option>
              <option value="Macho">Macho</option>
            </Select>
          </Labels>
        </Group>
        <Labels>
          Foto
          <Fields
            className="photoPet"
            placeholder="Link da foto do seu pet"
            type="text"
            name="foto"
          />
        </Labels>
        <Button type="submit">Cadastrar</Button>
      </Form>

      <ListingPets />
    </>
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
  max-width: 800px;
  background-color: #11adf5;
  padding: 10px;
  border-radius: 5px;
  color: white;
`;
const Labels = styled.label`
  margin: 10px;
  font-size: 16px;
`;

const Group = styled.div`
  display: inline-flex;
`;

const Fields = styled.input`
  border-radius: 3px;
  margin-left: 5px;
  &.name {
    width: 343px;
    height: 25px;
  }
  &.breed {
    width: 348px;
    height: 25px;
  }
  &.age {
    width: 35px;
    height: 25px;
  }
  &.photoPet {
    width: 353px;
    height: 25px;
  }
`;

const Select = styled.select`
  border: 2px solid;
  border-radius: 3px;
  height: 30px;
  margin-left: 5px;
`;

const Button = styled.button`
  color: #a85c00;
  background-color: white;
  border-radius: 4px;
  border-color: #a85c00;
  padding: 5px 30px;
  font-size: 17px;
`;
