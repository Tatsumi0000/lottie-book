import { createApp } from "vue";
import vuetify from "./vuetify.ts";
// Components
import App from "@/App.vue";
import { router } from "./router.ts";
import { i18n } from "./i18n.ts";

const app = createApp(App);
app.use(i18n);
app.use(vuetify);
app.use(router);
app.mount("#app");
