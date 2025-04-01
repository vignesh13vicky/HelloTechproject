import axios from "axios";

// export const Client = axios.create({baseURL:"http://localhost:7777" ,withCredentials: true,});

export const Client = axios.create({ baseURL: "https://hello-techproject-server.vercel.app/" });