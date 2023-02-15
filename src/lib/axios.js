import axios from "axios";

const ACCESS_TOKEN = localStorage.getItem("accessToken");

export const client = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});

client.interceptors.request.use(function (config) {
  config.headers.common["Authorization"] = localStorage.getItem("accessToken");
  return config;
});

export const kakaoGetFetcher = (url) =>
  client.get(url).then((res) => res.data.data);
