import { client } from "../axios";

export const getDuplicateUser = async (username) => {
  try {
    const data = await client.get(`/v1/account/exists/${username}`);
    return data.data;
  } catch (e) {
    console.error(e);
  }
};

export const postEmailAuthentication = async (email) => {
  try {
    const data = await client.post("v1/email/auth", { email });
    return data.data;
  } catch (e) {
    console.error(e);
  }
};

export const postEmailCode = async (email, code) => {
  try {
    const data = await client.post("v1/email/verify", { email, code });
    return data.data;
  } catch (e) {
    console.error(e);
  }
};

export const postSignIn = async (username, password) => {
  try {
    const data = await client.post("v1/login", { username, password });
    return data;
  } catch (e) {
    return e;
  }
};

export const postSignUp = async (username, password, name, email) => {
  try {
    const response = await client.post("/v1/members", {
      username,
      password,
      name,
      email,
    });
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
