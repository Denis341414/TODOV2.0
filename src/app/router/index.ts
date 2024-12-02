import { createWebHashHistory, createRouter } from "vue-router";
import Main from "../../pages/main.vue";

export const router = createRouter({
  routes: [{ path: "/", component: Main }],
  history: createWebHashHistory(),
});
