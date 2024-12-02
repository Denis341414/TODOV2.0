import { createApp } from "vue";
import { router } from "./app/router";
import "./app/style.css";
import App from "./app/App.vue";
import { createPinia } from "pinia";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.mount("#app");
