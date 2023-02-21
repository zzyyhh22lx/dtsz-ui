import { createApp } from "vue";
import App from "./App.vue";
import "dtsz-ui/src/assets/scss/global.scss";
import { loadingDirective } from "dtsz-ui/src/loading/index.js";

const app = createApp(App);
app.directive("loading", loadingDirective).mount("#app");
