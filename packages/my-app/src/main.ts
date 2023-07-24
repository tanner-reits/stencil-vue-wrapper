import { createApp } from "vue";
import { ComponentLibrary } from "vue-library";
import App from "./App.vue";

import "./assets/main.css";

createApp(App).use(ComponentLibrary).mount("#app");
