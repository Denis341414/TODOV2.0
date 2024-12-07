import { defineStore } from "pinia";
import { ref } from "vue";
import { APIClient } from "../../../../shared/api/APIClient";
import { ITasks } from "../../../../shared/api/types/classAPIClient";
import { getTasks } from "../../../../shared/api/get/getTasks";

export const useTasksStore = defineStore("tasksStore", () => {
  const tasks = ref<ITasks[]>(APIClient.getTasks);
  const taskEmpty = ref("Нет задач");

  return { tasks, taskEmpty };
});
