import { defineConfig } from "vite";
import ViteFonts from "unplugin-fonts/vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath } from "node:url";
import vuetify from "vite-plugin-vuetify";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/lottie-books/" : "/",
  plugins: [
    vue(),
    vuetify({ autoImport: true }),
    ViteFonts({
      fontsource: {
        families: [
          {
            name: "Roboto",
            weights: [100, 300, 400, 500, 700, 900],
            styles: ["normal", "italic"],
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      // @ を src ディレクトリに割り当てる
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
}));
