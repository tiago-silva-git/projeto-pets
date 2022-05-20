import axios from "axios";

export const login = (data) =>
  axios.post(
    "https://otterwise-fake-api.herokuapp.com/login/authenticate",
    data
  );
