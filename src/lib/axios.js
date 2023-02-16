import axios from "axios";
import { getAccessToken } from "./token";

const ACCESS_TOKEN = getAccessToken("accessToken");

export const client = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});

client.interceptors.request.use(function (config) {
  config.headers.common["Authorization"] = ACCESS_TOKEN;
  return config;
});

export const kakaoGetFetcher = (url) =>
  client.get(url).then((res) => res.data.data);
