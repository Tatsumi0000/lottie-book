import { createApp } from "vue";
import vuetify from "./vuetify.ts";
// Components
import App from "@/App.vue";
import { router } from "./router.ts";

const app = createApp(App);
app.use(vuetify);
app.use(router);
app.mount("#app");
