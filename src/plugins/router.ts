import { createRouter, createWebHashHistory } from "vue-router";

import HelloWorld from "@/components/HelloWorld.vue";
import Top from "@/layouts/Top.vue";
import Playground from "@/layouts/Playground.vue";
import LottieViewer from "@/layouts/LottieViewer.vue";

const routes = [
  {
    path: "/",
    component: Top,
    children: [
        { path: "/preview/:theme/:title", component: LottieViewer },
    ]
  },
  { path: "/hello", component: HelloWorld },
  { path: "/playground", component: Playground },
  // 上記以外のページは全部TOPへ遷移
  { 
    path: "/:pathMatch(.*)*", 
    redirect: "/" 
  },
];

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});
