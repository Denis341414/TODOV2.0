import axios from "axios";
import { typeTask } from "../types/typeTask";

export const postTask = async (task: typeTask<string>) => {
  try {
    await axios.post("http://localhost:3000/tasks", task);
  } catch (error) {
    return error;
  }
};
