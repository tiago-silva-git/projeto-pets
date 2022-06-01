import client from "../providers/client";

export const listPets = () => client.get("pets/0nihe1c");

export const postPets = (data) => client.post("pets/0nihe1c", data);
