import axios from "axios";
import { LoginDataTypes } from "../assets/types";

function axiosInstance() {
  let instance;
  function init() {
    return axios.create({
      baseURL: "http://172.30.1.8:3333/api",
      timeout: 1000,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": "*"
      },
      withCredentials: true
    });
  }
  if (!instance) {
    instance = init();
  }
  return instance;
}

export async function login(loginData: LoginDataTypes) {
  const axiosFetch = await axiosInstance();
  try {
    const response = await axiosFetch.post("/users", loginData);
    if (response.status < 300) return response.status;
  } catch (e) {
    console.error(e);
  }
}
