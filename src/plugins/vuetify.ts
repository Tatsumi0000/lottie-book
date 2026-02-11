import { aliases, mdi } from "vuetify/iconsets/mdi-svg";
// @ts-ignore "vuetify/styles.css"にしないとエラーにならないけど拡張子をつけるとビルドエラーになるので除外
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { VFileUpload } from "vuetify/labs/VFileUpload";
import { createVueI18nAdapter } from "vuetify/locale/adapters/vue-i18n";
import { i18n } from "./i18n";
import { useI18n } from "vue-i18n";
export default createVuetify({
  locale: {
    adapter: createVueI18nAdapter({
      i18n,
      useI18n,
    }),
  },
  components: {
    components,
    VFileUpload,
  },
  directives,
  theme: {
    defaultTheme: "dark",
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});
