import axios from "axios";

export const login = (data) => axios.post("https://reqres.in/api/login", data);
