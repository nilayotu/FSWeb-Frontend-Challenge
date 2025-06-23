import axios from "axios";

export const getProjects = async () => {
  const response = await axios.get("https://reqres.in/api/workintech", {
    headers: {
      "x-api-key": "reqres-free-v1",
    },
  });
  return response.data;
};