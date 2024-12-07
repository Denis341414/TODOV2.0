<script setup lang="ts">
import { deleteTask } from "./model/deleteTask";
import { useTasksStore } from "./store/tasksStore";

const tasksStore = useTasksStore();
</script>

<template>
  <div class="task-department">
    <div class="task" v-for="(task, index) in tasksStore.tasks" :key="index">
      <div class="task-title">{{ task.title }}</div>
      <div class="task-short-description">
        {{ task.text }}
      </div>
      <div class="task-buttons">
        <button class="btn btn-delete" @click="deleteTask(task)">
          Удалить
        </button>
        <button class="btn btn-watch">Посмотреть</button>
        <button class="btn btn-complete">Завершить</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.task-department {
  padding: 5em;
  display: grid;
  max-height: 100vh;
  overflow-y: scroll;
  justify-content: space-between;

  grid-template-columns: repeat(2, auto);
  flex: 1;
  .task {
    background-color: rgb(210, 210, 210);
    box-shadow: 0 0 10px gray;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1em;
    padding: 1em;
    border-radius: 1em;
    min-width: 28vw;
    max-width: 25vw;
    min-height: 20vh;
    max-height: 25vh;
    .task-buttons {
      display: flex;
      gap: 3em;
      .btn {
        padding: 0.7em 1.5em;
        border-radius: 1em;
        border: none;
        transition: all 0.3s ease;
      }
      .btn:hover {
        color: white;
        background-color: rgb(48, 48, 48);
      }
    }
  }
}
</style>
