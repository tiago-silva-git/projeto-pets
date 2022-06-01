import React from "react";
import styled from "styled-components";
import ListingPets from "../components/ListingPets";

export default function PublicPage() {
  return (
    <>
      <Title>PETS</Title>
      <ListingPets />
    </>
  );
}

const Title = styled.h3`
  margin: 5px;
  font-size: 18px;
  color: #a85c00;
`;
