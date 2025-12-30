import { createWebHistory, createRouter } from "vue-router";

import HelloWorld from "@/components/HelloWorld.vue";
import Top from "@/layouts/Top.vue";

const routes = [
  { path: "/", component: Top },
  { path: "/hello", component: HelloWorld },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
