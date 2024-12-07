import axios from "axios";
import { ITasks } from "../types/classAPIClient";
import { apiKey } from "../keys/apiKeys";

export const getTasks = async (): Promise<ITasks[]> => {
  try {
    const response = await axios.get(`${apiKey.BASE_URL}/tasks`);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
