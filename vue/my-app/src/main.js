import { createApp } from "vue";
import { defineCustomElements } from "../dist/esm/loader";
defineCustomElements();
import "./style.css";
import App from "./App.vue";

createApp(App).mount("#app");
