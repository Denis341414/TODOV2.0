import { defineStore } from "pinia";
import { Ref, ref } from "vue";

export const useModalStore = defineStore("ModalStore", () => {
  const flagModal: Ref<boolean, boolean> = ref(false);
  const title: Ref<string, string> = ref("");
  const text: Ref<string, string> = ref("");
  const task: Ref<object, object> = ref({});

  return { flagModal, title, text, task };
});
