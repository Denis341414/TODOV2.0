<script setup lang="ts">
import { switchFlag } from "../../model/switchFlag";
</script>

<template>
  <div class="panel">
    <h1 class="title">TODO(KANBAN)</h1>
    <div class="categories">
      <li class="category all-tasks">ВСЕ ЗАДАЧИ</li>
      <li class="category completed">ВЫПОЛНЕНЫЕ</li>
      <li class="category process-execution">В ПРОЦЕССЕ ВЫПОЛНЕНИЯ</li>
      <li class="category dont-started">ЕЩЕ НЕ НАЧАТЫЕ</li>
      <li class="category create" @click="switchFlag">СОЗДАТЬ</li>
    </div>
  </div>
</template>

<style scoped lang="scss">
.panel {
  background-color: rgb(210, 210, 210);
  box-shadow: 1px 1px 50px gray;
  max-width: 20vw;
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3em;
  padding: 1em;
  .title {
    font-size: 2.5em;
    font-weight: 100;
    font-family: "Nerko One", serif;
    color: rgb(110, 110, 110);
  }
  .categories {
    display: flex;
    flex-direction: column;
    gap: 2em;
    .category {
      font-family: "Open Sans", sans-serif;
      font-size: 1em;
      list-style-type: none;
      cursor: pointer;
      background-color: rgb(184, 184, 184);
      border-radius: 0.3em;
      padding: 10px;
    }
  }
}
</style>
