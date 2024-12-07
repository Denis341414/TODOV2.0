import axios from "axios";
import { ITasks } from "../../../../shared/api/types/classAPIClient";
import { apiKey } from "../../../../shared/api/keys/apiKeys";
import { reloadPage } from "../../../../shared/utilites/reloadPage";
import { Ref } from "vue";

export const deleteTask = async (task: ITasks) => {
  await axios.delete(`${apiKey.BASE_URL}/tasks/${task.id}`);
  reloadPage();
};
