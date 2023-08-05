import axios from "axios";

const resource = "";
export const baseServices = axios.create({
  baseURL: resource,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer`,
  },
});

axios.interceptors.response.use(
  function (response) {
    console.log(response);

    return response;
  },
  function (error) {
    console.log(error);

    return Promise.reject(error);
  }
);
