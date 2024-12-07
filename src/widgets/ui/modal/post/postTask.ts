import axios from "axios";
import { apiKey } from "../../../../shared/api/keys/apiKeys";
import { ITasks } from "../../../../shared/api/types/classAPIClient";
import { reloadPage } from "../../../../shared/utilites/reloadPage";

export const postTask = async (task: Object) => {
  await axios.post(`${apiKey.BASE_URL}/tasks`, task);
  reloadPage();
};
