import { clearUserData, setUserData } from "../util.js";
import { post } from "./api.js";

const endpoints = {
  login: "/login",
  register: "/users",
  logout: "/logout"
};

export async function register(username, password) {
  const result = await post(endpoints.register, { username, password });

  const userData = {
    username: result.username,
    objectId: result.objectId,
    sessionToken: result.sessionToken
  };

  setUserData(userData);
}
export async function login(username, password) {
  const result = await post(endpoints.login, { username, password });

  const userData = {
    username: result.username,
    objectId: result.objectId,
    sessionToken: result.sessionToken
  };

  setUserData(userData);
}

export async function logout() {
  await post(endpoints.logout);
  clearUserData();
}
