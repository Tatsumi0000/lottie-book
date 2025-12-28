import { createApp } from "vue";
import "unfonts.css";

// @ts-ignore "vuetify/styles.css"にしないとエラーにならないけど拡張子をつけるとエラーになるので除外
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// Components
import App from "./App.vue";

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "dark"
  }
});

createApp(App).use(vuetify).mount("#app");
