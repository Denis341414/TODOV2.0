<script setup lang="ts">
import { switchFlag } from "../../model/switchFlag";
import { createTask } from "./model/createTask";
import { postTask } from "./post/postTask";
import { useModalStore } from "./store/modalStore";

const modalStore = useModalStore();
</script>

<template>
  <transition>
    <div class="modal" v-if="modalStore.flagModal === true">
      <input
        type="text"
        class="input modal-title"
        placeholder="Введите название"
        v-model="modalStore.title"
      />
      <input
        type="text"
        class="input modal-text"
        placeholder="Введите текст"
        v-model="modalStore.text"
      />
      <div class="buttons">
        <button class="cancellation" @click="switchFlag">Отмена</button>
        <button
          class="add"
          @click="postTask(createTask(modalStore.title, modalStore.text))"
        >
          Добавить
        </button>
      </div>
    </div>
  </transition>
</template>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.modal {
  width: 35vw;
  height: 45vh;
  padding: 2em;
  background-color: rgb(176, 176, 176);
  position: absolute;
  left: 40vw;
  top: 30vh;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 2em;
  box-shadow: 0 0 10em rgb(67, 66, 66);

  .input {
    background-color: rgb(218, 218, 218);
    width: 20em;
    height: 3em;
    padding: 1em;
    border-radius: 1em;
    border: none;
    outline: none;
    box-shadow: inset 0 0 10px rgb(177, 177, 177);
  }
  .modal-text {
    width: 23em;
    height: 15em;
    text-align: center;
  }
  .buttons {
    display: flex;
    gap: 1em;
    .add,
    .cancellation {
      width: 10em;
      height: 3em;
      border-radius: 1em;
      border: none;
      transition: all 0.3s ease;
    }
    .add:hover,
    .cancellation:hover {
      background-color: rgb(173, 173, 173);
      box-shadow: 0 0 10px white;
    }
  }
}
</style>
