import en from "@/i18n/en";
import ja from "@/i18n/ja";
import { createI18n } from "vue-i18n";

export const i18n = createI18n(
  {
    legacy: false,
    locale: navigator.language?.split('-')[0] || "ja",
    fallbackLocale: "en",
    messages: {
      ja,
      en,
    },
  },
);
