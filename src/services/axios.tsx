import axios from "axios";

const resource = "";
export const baseServices = axios.create({
  baseURL: resource,
  headers: {
    "Content-Type": "application/json",
  },
});

axios.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem("access_token");
        config.headers.setAuthorization(`Bearer ${token}`);
        return config;
    }
);

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
