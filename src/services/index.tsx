import axios from "axios";

const httpBaseURL = process.env.REACT_APP_HTTP_BASE_URL;

export const httpService = axios.create({
  baseURL: httpBaseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

httpService.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("access_token");
    config.headers.setAuthorization(`Bearer ${token}`);
    return config;
  }
);

httpService.interceptors.response.use(
  function (response) {
    console.log(response);

    return response;
  },
  function (error) {
    console.log(error);

    return Promise.reject(error);
  }
);
