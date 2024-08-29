import { getUserData } from "../util.js";

const host = "https://parseapi.back4app.com";
const appId = "Pz5JEWp4jTH3fFUJDGZPKknnmTCiDLuqeHwVWC9j";
const restApiKey = "TH5ZwNWuKmdZlXmT5SmIxY1EL2BU6tapJ7eM5BlE";

export async function request(method, url, data) {
  const options = {
    method,
    headers: {
      "X-Parse-Application-Id": appId,
      "X-Parse-REST-API-Key": restApiKey
    }
  };

  const userData = await getUserData();

  if (userData) {
    options.headers["X-Parse-Session-Token"] = userData?.sessionToken;
  }

  if (data) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(host + url, options);
    if (!response.ok) {
      const err = await response.json();
      alert(err.error);
    }

    if (response.status === 204) {
      return response;
    }

    return response.json();
  } catch (error) {
    alert(error);

    return error.error;
  }
}

export const get = (url) => request("get", url);
export const post = (url, data) => request("post", url, data);
export const put = (url, data) => request("put", url, data);
export const del = (url) => request("delete", url);
